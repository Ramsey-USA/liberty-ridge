// Testimonial data for social proof and credibility
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
  location?: string;
  courseCompleted?: string;
  verified: boolean;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'First-time Gun Owner',
    testimonial: 'Zach\'s patient and thorough approach made me feel confident and safe. The classroom training was comprehensive and easy to understand. I went from being nervous about firearms to feeling empowered and knowledgeable.',
    rating: 5,
    image: '👩‍💼',
    location: 'Pasco, WA',
    courseCompleted: 'Firearm Safety Fundamentals',
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    role: 'Law Enforcement',
    testimonial: 'Outstanding instruction with real-world applications. Zach\'s military experience really shows in the quality of training provided. Even as a law enforcement officer, I learned valuable new techniques.',
    rating: 5,
    image: '👮‍♂️',
    location: 'Kennewick, WA',
    courseCompleted: 'Advanced Safety Protocols',
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Self-Defense Student',
    testimonial: 'Professional, respectful, and incredibly knowledgeable. I feel much more prepared to protect myself and my family. Zach creates a comfortable learning environment for everyone.',
    rating: 5,
    image: '👩‍🔬',
    location: 'Richland, WA',
    courseCompleted: 'Personal Firearm Training',
    verified: true,
    featured: true,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Military Veteran',
    testimonial: 'Great refresher course with practical insights. Zach understands the veteran perspective and provides training that\'s both relevant and comprehensive.',
    rating: 5,
    image: '🪖',
    location: 'Walla Walla, WA',
    courseCompleted: 'Firearm Safety Fundamentals',
    verified: true,
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    role: 'Small Business Owner',
    testimonial: 'As a female business owner, I wanted to feel more secure. Zach\'s training gave me the confidence and knowledge I needed. Highly recommend to anyone looking to learn.',
    rating: 5,
    image: '👩‍💼',
    location: 'Pasco, WA',
    courseCompleted: 'Personal Firearm Training',
    verified: true,
  },
];

// Helper functions
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getTestimonialsByCourse = (courseName: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.courseCompleted?.toLowerCase().includes(courseName.toLowerCase())
  );
};

export const getVerifiedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.verified);
};