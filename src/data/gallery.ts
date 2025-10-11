// Media gallery data structure for CMS integration
export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  description?: string;
  url: string;
  thumbnailUrl?: string;
  category: 'training' | 'competition' | 'equipment' | 'facility' | 'testimonial';
  tags: string[];
  dateAdded: string;
  featured: boolean;
  approved: boolean;
  uploadedBy: string;
  metadata?: {
    size?: number;
    duration?: number; // for videos in seconds
    dimensions?: {
      width: number;
      height: number;
    };
    format?: string;
  };
}

// Sample media items (will be managed through CMS)
export const sampleMediaItems: MediaItem[] = [
  {
    id: 'photo-001',
    type: 'photo',
    title: 'Precision Long-Range Setup',
    description: 'Professional precision rifle configuration for long-range consultation',
    url: '/images/gallery/precision-setup.jpg',
    thumbnailUrl: '/images/gallery/thumbs/precision-setup-thumb.jpg',
    category: 'equipment',
    tags: ['long-range', 'precision', 'rifle', 'consultation'],
    dateAdded: '2024-10-01',
    featured: true,
    approved: true,
    uploadedBy: 'zach',
    metadata: {
      dimensions: { width: 1920, height: 1080 },
      format: 'jpg'
    }
  },
  {
    id: 'video-001',
    type: 'video',
    title: 'Regional Competition Highlights',
    description: 'Highlights from achieving Regional #12 ranking',
    url: '/videos/gallery/competition-highlights.mp4',
    thumbnailUrl: '/videos/gallery/thumbs/competition-thumb.jpg',
    category: 'competition',
    tags: ['competition', 'ranking', 'achievement', 'long-range'],
    dateAdded: '2024-09-15',
    featured: true,
    approved: true,
    uploadedBy: 'zach',
    metadata: {
      duration: 180, // 3 minutes
      dimensions: { width: 1920, height: 1080 },
      format: 'mp4'
    }
  },
  {
    id: 'photo-002',
    type: 'photo',
    title: 'Consultation Facility',
    description: 'Professional consultation environment',
    url: '/images/gallery/facility.jpg',
    thumbnailUrl: '/images/gallery/thumbs/facility-thumb.jpg',
    category: 'facility',
    tags: ['facility', 'consultation', 'professional', 'environment'],
    dateAdded: '2024-10-05',
    featured: false,
    approved: true,
    uploadedBy: 'zach',
    metadata: {
      dimensions: { width: 1920, height: 1080 },
      format: 'jpg'
    }
  }
];

export const mediaCategories = {
  training: {
    name: 'Training Sessions',
    description: 'Personal consultation and training moments',
    color: 'patriot-blue'
  },
  competition: {
    name: 'Competition',
    description: 'Competition achievements and highlights',
    color: 'accent-gold'
  },
  equipment: {
    name: 'Equipment',
    description: 'Professional firearms and gear',
    color: 'patriot-red'
  },
  facility: {
    name: 'Facility',
    description: 'Consultation and training environment',
    color: 'community-green'
  },
  testimonial: {
    name: 'Client Success',
    description: 'Client achievements and feedback',
    color: 'surface-professional'
  }
};

// CMS configuration for future implementation
export const cmsConfig = {
  allowedFileTypes: {
    photo: ['.jpg', '.jpeg', '.png', '.webp'],
    video: ['.mp4', '.mov', '.avi']
  },
  maxFileSize: {
    photo: 10 * 1024 * 1024, // 10MB
    video: 100 * 1024 * 1024 // 100MB
  },
  thumbnailGeneration: {
    photo: {
      sizes: [
        { name: 'thumb', width: 300, height: 200 },
        { name: 'medium', width: 800, height: 600 }
      ]
    },
    video: {
      generateAt: 5, // seconds into video
      size: { width: 300, height: 200 }
    }
  },
  approvalWorkflow: true,
  autoTags: true
};

// Helper functions
export const getFeaturedMedia = (): MediaItem[] => {
  return sampleMediaItems.filter(item => item.featured && item.approved);
};

export const getMediaByCategory = (category: MediaItem['category']): MediaItem[] => {
  return sampleMediaItems.filter(item => item.category === category && item.approved);
};

export const getMediaByType = (type: MediaItem['type']): MediaItem[] => {
  return sampleMediaItems.filter(item => item.type === type && item.approved);
};

export const searchMediaByTags = (tags: string[]): MediaItem[] => {
  return sampleMediaItems.filter(item => 
    item.approved && tags.some(tag => 
      item.tags.includes(tag.toLowerCase())
    )
  );
};

export const getApprovedMedia = (): MediaItem[] => {
  return sampleMediaItems.filter(item => item.approved);
};

export const getPendingMedia = (): MediaItem[] => {
  return sampleMediaItems.filter(item => !item.approved);
};