'use client';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { db, storage } from '@/lib/firebase';

interface UploadedFile {
  file: File;
  preview: string;
  uploading: boolean;
  uploaded: boolean;
  error?: string | undefined;
  downloadURL?: string | undefined;
}

export default function MediaUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_uploadProgress, _setUploadProgress] = useState<{ [key: string]: number }>({});

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      uploading: false,
      uploaded: false,
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'video/*': ['.mp4', '.mov', '.avi', '.wmv', '.webm']
    },
    maxSize: 100 * 1024 * 1024, // 100MB
  });

  const uploadFile = async (fileIndex: number) => {
    const fileData = files[fileIndex];
    if (!fileData || fileData.uploading || fileData.uploaded) return;

    // Update file status to uploading
    setFiles(prev => prev.map((f, i) => 
      i === fileIndex ? { ...f, uploading: true, error: undefined } : f
    ));

    try {
      const file = fileData.file;
      const fileType = file.type.startsWith('image/') ? 'images' : 'videos';
      const fileName = `${Date.now()}-${file.name}`;
      const storageRef = ref(storage, `media/${fileType}/${fileName}`);

      // Upload file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Save metadata to Firestore
      await addDoc(collection(db, 'media'), {
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        downloadURL,
        storageRef: `media/${fileType}/${fileName}`,
        category: fileType.slice(0, -1), // 'image' or 'video'
        uploadedAt: serverTimestamp(),
        isActive: true,
        description: '',
        tags: [],
      });

      // Update file status to uploaded
      setFiles(prev => prev.map((f, i) => 
        i === fileIndex ? { ...f, uploading: false, uploaded: true, downloadURL } : f
      ));

    } catch (error) {
      console.error('Upload error:', error);
      setFiles(prev => prev.map((f, i) => 
        i === fileIndex ? { 
          ...f, 
          uploading: false, 
          error: error instanceof Error ? error.message : 'Upload failed' 
        } : f
      ));
    }
  };

  const uploadAll = async () => {
    const unuploadedFiles = files
      .map((file, index) => ({ file, index }))
      .filter(({ file }) => !file.uploaded && !file.uploading);

    for (const { index } of unuploadedFiles) {
      await uploadFile(index);
    }
  };

  const removeFile = (index: number) => {
    const file = files[index];
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    files.forEach(file => {
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-300 ${
          isDragActive 
            ? 'border-patriot-blue bg-patriot-blue/5' 
            : 'border-border hover:border-patriot-blue hover:bg-patriot-blue/5'
        }`}
      >
        <input {...getInputProps()} />
        <div className="mx-auto mb-4 icon icon-2xl icon-primary icon-cloud-upload"></div>
        
        {isDragActive ? (
          <p className="font-medium text-patriot-blue">Drop the files here...</p>
        ) : (
          <div>
            <p className="mb-2 font-medium text-text-primary">
              Drag & drop photos and videos here, or click to select
            </p>
            <p className="text-text-secondary text-sm">
              Supports: JPEG, PNG, GIF, WebP, MP4, MOV, AVI, WebM (Max 100MB)
            </p>
          </div>
        )}
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-text-primary text-lg">
              Selected Files ({files.length})
            </h4>
            <div className="flex space-x-2">
              <button
                onClick={uploadAll}
                disabled={files.every(f => f.uploaded || f.uploading)}
                className="bg-patriot-blue hover:bg-patriot-blue/90 disabled:opacity-50 px-4 py-2 rounded-lg font-medium text-white text-sm transition-colors duration-300 disabled:cursor-not-allowed"
              >
                Upload All
              </button>
              <button
                onClick={clearAll}
                className="bg-surface hover:bg-background px-4 py-2 border border-border rounded-lg font-medium text-text-primary text-sm transition-colors duration-300"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {files.map((fileData, index) => (
              <div key={index} className="bg-surface p-4 border border-border rounded-lg">
                {/* Preview */}
                <div className="mb-3">
                  {fileData.file.type.startsWith('image/') ? (
                    <img
                      src={fileData.preview}
                      alt="Preview"
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  ) : (
                    <div className="flex justify-center items-center bg-background rounded-lg w-full h-32">
                      <div className="icon icon-xl icon-secondary icon-play"></div>
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div className="space-y-2">
                  <p className="font-medium text-text-primary text-sm truncate">
                    {fileData.file.name}
                  </p>
                  <p className="text-text-secondary text-xs">
                    {(fileData.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                  {/* Status */}
                  {fileData.uploaded && (
                    <div className="flex items-center text-green-600 text-xs">
                      <div className="mr-1 icon icon-sm icon-check"></div>
                      Uploaded successfully
                    </div>
                  )}

                  {fileData.uploading && (
                    <div className="flex items-center text-patriot-blue text-xs">
                      <div className="mr-1 animate-spin icon icon-sm icon-target"></div>
                      Uploading...
                    </div>
                  )}

                  {fileData.error && (
                    <div className="text-patriot-red text-xs">
                      Error: {fileData.error}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    {!fileData.uploaded && !fileData.uploading && (
                      <button
                        onClick={() => uploadFile(index)}
                        className="flex-1 bg-patriot-blue hover:bg-patriot-blue/90 px-3 py-1 rounded font-medium text-white text-xs transition-colors duration-300"
                      >
                        Upload
                      </button>
                    )}
                    <button
                      onClick={() => removeFile(index)}
                      disabled={fileData.uploading}
                      className="flex-1 bg-patriot-red hover:bg-patriot-red/90 disabled:opacity-50 px-3 py-1 rounded font-medium text-white text-xs transition-colors duration-300 disabled:cursor-not-allowed"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}