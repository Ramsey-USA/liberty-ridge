import { MediaItem } from '@/lib/firestore';

// Sample media data for development and testing
export const sampleMediaData: Omit<MediaItem, 'id' | 'uploadedAt'>[] = [
  {
    title: "Skills Assessment Session",
    description: "One-on-one consultation focusing on fundamental shooting techniques and safety protocols with a first-time shooter.",
    category: "consultation",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["consultation", "beginners", "safety", "assessment"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Regional Competition Preparation",
    description: "Training session preparing for regional competition, focusing on precision shooting and mental preparation techniques.",
    category: "competition",
    type: "video",
    url: "/api/placeholder/video",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["competition", "precision", "training", "mental-preparation"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Equipment Setup and Configuration",
    description: "Detailed walkthrough of proper equipment setup, including scope mounting and rifle configuration for optimal performance.",
    category: "equipment",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["equipment", "setup", "configuration", "rifles"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Advanced Shooting Techniques",
    description: "Comprehensive training video covering advanced shooting positions, breathing techniques, and trigger control.",
    category: "training",
    type: "video",
    url: "/api/placeholder/video",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["advanced", "techniques", "breathing", "trigger-control"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Consultation Facility Tour",
    description: "Virtual tour of the consultation facility, showcasing the professional environment and equipment available.",
    category: "facility",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["facility", "tour", "professional", "environment"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Regional #12 Achievement Ceremony",
    description: "Photos from the competition where Zach achieved his Regional #12 ranking, showcasing the dedication and skill required.",
    category: "competition",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["regional-12", "achievement", "competition", "ranking"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Safety Protocol Demonstration",
    description: "Essential safety protocol demonstration showing proper handling, storage, and range safety procedures.",
    category: "training",
    type: "video",
    url: "/api/placeholder/video",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["safety", "protocols", "handling", "procedures"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Progress Review Session",
    description: "Follow-up consultation session reviewing student progress and addressing specific challenges encountered during training.",
    category: "consultation",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["progress", "review", "follow-up", "improvement"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Competition Day Preparation",
    description: "Behind-the-scenes look at competition day preparation, including mental preparation and equipment checks.",
    category: "competition",
    type: "video",
    url: "/api/placeholder/video",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["competition", "preparation", "mental", "equipment-check"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Precision Rifle Equipment Review",
    description: "Detailed review of precision rifle equipment, discussing the features and benefits for competitive shooting.",
    category: "equipment",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["precision", "rifle", "equipment", "review"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Military Training Influence",
    description: "Discussion of how Army training principles influence consultation methodology and safety protocols.",
    category: "training",
    type: "video",
    url: "/api/placeholder/video",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["military", "army", "training", "methodology"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  },
  {
    title: "Professional Consultation Setup",
    description: "Overview of the professional consultation setup, including comfortable seating and educational materials.",
    category: "facility",
    type: "photo",
    url: "/api/placeholder/800/600",
    thumbnailUrl: "/api/placeholder/400/300",
    tags: ["consultation", "setup", "professional", "comfortable"],
    isVisible: true,
    uploadedBy: "zach@libertyridgetraining.com"
  }
];

// Function to seed the database with sample data (for development)
export const seedSampleMedia = async () => {
  try {
    const { addMediaItem } = await import('@/lib/firestore');
    
    for (const mediaItem of sampleMediaData) {
      await addMediaItem(mediaItem);
    }
    
    console.log('Sample media data seeded successfully');
  } catch (error) {
    console.error('Error seeding sample media data:', error);
  }
};