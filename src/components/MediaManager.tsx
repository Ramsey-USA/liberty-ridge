'use client';

import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';

import { db, storage } from '@/lib/firebase';

interface MediaItem {
  id: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  downloadURL: string;
  storageRef: string;
  category: 'image' | 'video';
  uploadedAt: any;
  isActive: boolean;
  description: string;
  tags: string[];
}

export default function MediaManager() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ description: '', tags: '' });

  useEffect(() => {
    const q = query(
      collection(db, 'media'),
      orderBy('uploadedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const mediaItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MediaItem[];
      
      setMedia(mediaItems);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredMedia = media.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const startEdit = (item: MediaItem) => {
    setEditingId(item.id);
    setEditForm({
      description: item.description,
      tags: item.tags.join(', ')
    });
  };

  const saveEdit = async (id: string) => {
    try {
      const tags = editForm.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      await updateDoc(doc(db, 'media', id), {
        description: editForm.description,
        tags
      });

      setEditingId(null);
      setEditForm({ description: '', tags: '' });
    } catch (error) {
      console.error('Error updating media:', error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ description: '', tags: '' });
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await updateDoc(doc(db, 'media', id), {
        isActive: !currentStatus
      });
    } catch (error) {
      console.error('Error toggling media status:', error);
    }
  };

  const deleteMedia = async (item: MediaItem) => {
    if (!confirm(`Are you sure you want to delete "${item.fileName}"? This action cannot be undone.`)) {
      return;
    }

    try {
      // Delete from Storage
      const storageRef = ref(storage, item.storageRef);
      await deleteObject(storageRef);

      // Delete from Firestore
      await deleteDoc(doc(db, 'media', item.id));
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (timestamp: any): string => {
    if (!timestamp) return 'Unknown';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <div className="mb-4 animate-spin icon icon-2xl icon-primary icon-target"></div>
          <p className="text-text-secondary">Loading media...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-text-primary text-sm">Filter:</span>
          <div className="flex space-x-1">
            {['all', 'image', 'video'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as typeof filter)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  filter === filterType
                    ? 'bg-patriot-blue text-white'
                    : 'bg-surface border border-border text-text-primary hover:bg-background'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                {filterType !== 'all' && (
                  <span className="ml-1 text-xs">
                    ({media.filter(item => item.category === filterType).length})
                  </span>
                )}
                {filterType === 'all' && (
                  <span className="ml-1 text-xs">({media.length})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="text-text-secondary text-sm">
          {filteredMedia.length} item{filteredMedia.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mb-4 icon icon-2xl icon-secondary icon-image"></div>
          <p className="text-text-secondary">
            {filter === 'all' ? 'No media uploaded yet.' : `No ${filter}s uploaded yet.`}
          </p>
        </div>
      ) : (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredMedia.map((item) => (
            <div key={item.id} className="bg-surface border border-border rounded-lg overflow-hidden">
              {/* Media Preview */}
              <div className="relative">
                {item.category === 'image' ? (
                  <img
                    src={item.downloadURL}
                    alt={item.fileName}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="flex justify-center items-center bg-background w-full h-48">
                    <div className="icon icon-2xl icon-secondary icon-play"></div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="top-2 right-2 absolute">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {item.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Media Info */}
              <div className="space-y-3 p-4">
                <div>
                  <h4 className="font-medium text-text-primary truncate" title={item.fileName}>
                    {item.fileName}
                  </h4>
                  <div className="flex justify-between items-center mt-1 text-text-secondary text-xs">
                    <span>{formatFileSize(item.fileSize)}</span>
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Description and Tags */}
                {editingId === item.id ? (
                  <div className="space-y-2">
                    <textarea
                      placeholder="Description..."
                      value={editForm.description}
                      onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                      className="px-3 py-2 border border-border rounded-lg w-full text-sm resize-none"
                      rows={2}
                    />
                    <input
                      type="text"
                      placeholder="Tags (comma separated)..."
                      value={editForm.tags}
                      onChange={(e) => setEditForm(prev => ({ ...prev, tags: e.target.value }))}
                      className="px-3 py-2 border border-border rounded-lg w-full text-sm"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => saveEdit(item.id)}
                        className="flex-1 bg-patriot-blue hover:bg-patriot-blue/90 px-3 py-1 rounded font-medium text-white text-xs transition-colors duration-300"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="flex-1 bg-surface hover:bg-background px-3 py-1 border border-border rounded font-medium text-text-primary text-xs transition-colors duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-text-primary text-sm">
                      {item.description || <span className="text-text-secondary italic">No description</span>}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-background px-2 py-1 rounded text-text-secondary text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Upload Date */}
                <p className="text-text-secondary text-xs">
                  Uploaded: {formatDate(item.uploadedAt)}
                </p>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  {editingId !== item.id && (
                    <>
                      <button
                        onClick={() => startEdit(item)}
                        className="flex-1 bg-patriot-blue hover:bg-patriot-blue/90 px-3 py-1 rounded font-medium text-white text-xs transition-colors duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => toggleActive(item.id, item.isActive)}
                        className={`flex-1 px-3 py-1 rounded text-xs font-medium transition-colors duration-300 ${
                          item.isActive
                            ? 'bg-gray-500 hover:bg-gray-600 text-white'
                            : 'bg-green-500 hover:bg-green-600 text-white'
                        }`}
                      >
                        {item.isActive ? 'Hide' : 'Show'}
                      </button>
                      <button
                        onClick={() => deleteMedia(item)}
                        className="flex-1 bg-patriot-red hover:bg-patriot-red/90 px-3 py-1 rounded font-medium text-white text-xs transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}