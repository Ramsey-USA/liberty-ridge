'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { sampleMediaData } from '@/data/sampleMedia';
import { MediaItem, getVisibleMedia } from '@/lib/firestore';

interface MediaGalleryProps {
  category?: string;
  showFilters?: boolean;
  className?: string;
}

const categoryLabels = {
  consultation: 'Consultation Sessions',
  competition: 'Competition Highlights',
  training: 'Training Materials',
  equipment: 'Equipment Reviews',
  facility: 'Facility Tours'
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ 
  category, 
  showFilters = true, 
  className = '' 
}) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [usingSampleData, setUsingSampleData] = useState(false);

  useEffect(() => {
    loadMedia();
  }, [selectedCategory]);

  const loadMedia = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from Firebase first
      const filterCategory = selectedCategory === 'all' ? undefined : selectedCategory;
      let media = await getVisibleMedia(filterCategory);
      
      // If no media found, use sample data for development
      if (media.length === 0) {
        setUsingSampleData(true);
        const filteredSampleData = filterCategory 
          ? sampleMediaData.filter(item => item.category === filterCategory)
          : sampleMediaData;
        
        // Convert sample data to MediaItem format
        media = filteredSampleData.map((item, index) => ({
          id: `sample-${index}`,
          ...item,
          uploadedAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)) // Stagger dates
        })) as MediaItem[];
      } else {
        setUsingSampleData(false);
      }
      
      setMediaItems(media);
    } catch (err) {
      setError('Failed to load media');
      console.error('Error loading media:', err);
      
      // Fallback to sample data on error
      setUsingSampleData(true);
      const filterCategory = selectedCategory === 'all' ? undefined : selectedCategory;
      const filteredSampleData = filterCategory 
        ? sampleMediaData.filter(item => item.category === filterCategory)
        : sampleMediaData;
      
      const media = filteredSampleData.map((item, index) => ({
        id: `sample-${index}`,
        ...item,
        uploadedAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000))
      })) as MediaItem[];
      
      setMediaItems(media);
      setError(null); // Clear error since we have fallback data
    } finally {
      setLoading(false);
    }
  };

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  if (loading) {
    return (
      <div className={`${className}`}>
        <div className="flex justify-center items-center py-20">
          <div className="flex items-center space-x-2 text-text-secondary">
            <span className="material-icons-outlined animate-spin" style={{fontSize: '2rem'}}>refresh</span>
            <span className="text-lg">Loading gallery...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* Development Notice */}
      {usingSampleData && (
        <div className="bg-patriot-blue/10 mb-8 p-4 border border-patriot-blue/30 rounded-lg">
          <div className="flex items-center space-x-2 text-patriot-blue">
            <span className="material-icons-outlined" style={{fontSize: '1rem'}}>info</span>
            <span className="font-medium text-sm">
              Demo Gallery: Showing sample content for development purposes. Real media will be managed through the CMS.
            </span>
          </div>
        </div>
      )}

      {/* Category Filters */}
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 border-2 rounded-none font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-patriot-red border-patriot-red text-white'
                  : 'bg-transparent border-border text-text-secondary hover:border-patriot-red hover:text-patriot-red'
              }`}
            >
              All Media
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 border-2 rounded-none font-medium transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-patriot-red border-patriot-red text-white'
                    : 'bg-transparent border-border text-text-secondary hover:border-patriot-red hover:text-patriot-red'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Media Grid */}
      {mediaItems.length === 0 ? (
        <div className="bg-surface p-12 border border-border rounded-lg text-center">
          <span className="mb-4 material-icons-outlined text-text-secondary" style={{fontSize: '4rem'}}>photo_library</span>
          <h3 className="mb-2 font-bold text-text-primary text-xl">No Media Found</h3>
          <p className="text-text-secondary">
            {selectedCategory === 'all' 
              ? 'No media has been uploaded yet.' 
              : `No ${categoryLabels[selectedCategory as keyof typeof categoryLabels].toLowerCase()} available.`
            }
          </p>
        </div>
      ) : (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mediaItems.map((media) => (
            <div 
              key={media.id} 
              className="group bg-surface border hover:border-patriot-red border-border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => openModal(media)}
            >
              <div className="relative aspect-video overflow-hidden">
                {media.type === 'photo' ? (
                  <Image
                    src={media.thumbnailUrl || media.url}
                    alt={media.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex justify-center items-center bg-black/10 w-full h-full">
                    <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '3rem'}}>play_circle</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="top-2 right-2 absolute">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                    media.type === 'photo' 
                      ? 'bg-patriot-blue/80 text-white' 
                      : 'bg-patriot-red/80 text-white'
                  }`}>
                    <span className="mr-1 material-icons-outlined" style={{fontSize: '0.75rem'}}>
                      {media.type === 'photo' ? 'photo' : 'videocam'}
                    </span>
                    {media.type === 'photo' ? 'Photo' : 'Video'}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="mb-2 font-bold text-text-primary text-sm line-clamp-2">{media.title}</h3>
                <p className="mb-3 text-text-secondary text-xs line-clamp-2">{media.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {media.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-surface-elevated px-2 py-1 rounded text-text-secondary text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {media.tags.length > 3 && (
                    <span className="text-text-secondary text-xs">+{media.tags.length - 3}</span>
                  )}
                </div>

                <div className="flex justify-between items-center text-text-secondary text-xs">
                  <span className="capitalize">{categoryLabels[media.category as keyof typeof categoryLabels]}</span>
                  <span>{new Date(media.uploadedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedMedia && (
        <div 
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-background border border-border rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="top-4 right-4 absolute flex justify-center items-center bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>close</span>
              </button>
              
              <div className="p-6">
                <div className="relative mb-6">
                  {selectedMedia.type === 'photo' ? (
                    <Image
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      width={800}
                      height={600}
                      className="rounded-lg w-full h-auto"
                    />
                  ) : (
                    <div className="flex justify-center items-center bg-black/10 rounded-lg w-full h-64">
                      <div className="text-center">
                        <span className="mb-2 material-icons-outlined text-patriot-blue" style={{fontSize: '4rem'}}>play_circle</span>
                        <p className="text-text-secondary">Video content would play here</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <h2 className="mb-3 font-bold text-text-primary text-2xl">{selectedMedia.title}</h2>
                <p className="mb-4 text-text-secondary leading-relaxed">{selectedMedia.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedMedia.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-surface px-3 py-1 border border-border rounded text-text-secondary text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-text-secondary text-sm">
                  <span className="capitalize">{categoryLabels[selectedMedia.category as keyof typeof categoryLabels]}</span>
                  <span>Uploaded {new Date(selectedMedia.uploadedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;