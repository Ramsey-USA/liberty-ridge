// Testimonial data for Zach's personal consultation services
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
  location?: string;
  serviceReceived?: string;
  verified: boolean;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mike S.',
    role: 'First-time Shooter',
    testimonial: 'Zach\'s patient instruction and military experience made all the difference. As a complete beginner, I was nervous about firearms consultation. The safety protocols were thorough, and I felt confident by the end of my first session.',
    rating: 5,
    image: '�‍💼',
    location: 'Pasco, WA',
    serviceReceived: 'Skills Assessment',
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Jennifer D.',
    role: 'Law Enforcement',
    testimonial: 'Even with law enforcement experience, the advanced consultation elevated my skills to competition level. Zach\'s attention to detail and advanced techniques are exactly what serious shooters need.',
    rating: 5,
    image: '👮‍♀️',
    location: 'Kennewick, WA',
    serviceReceived: 'Advanced Consultation',
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Robert T.',
    role: 'Competitive Shooter',
    testimonial: 'The precision consultation transformed my understanding of ballistics and wind reading. Zach\'s military background shows in every aspect of his instruction. My competition scores improved dramatically.',
    rating: 5,
    image: '🏆',
    location: 'Richland, WA',
    serviceReceived: 'Advanced Consultation',
    verified: true,
    featured: true,
  },
  {
    id: 4,
    name: 'Sarah L.',
    role: 'Military Veteran',
    testimonial: 'Great personalized consultation that respected my experience while teaching new techniques. Zach understands the veteran perspective and provides guidance that\'s both relevant and practical.',
    rating: 5,
    image: '🪖',
    location: 'Walla Walla, WA',
    serviceReceived: 'Skills Assessment',
    verified: true,
  },
  {
    id: 5,
    name: 'David M.',
    role: 'Firearms Enthusiast',
    testimonial: 'The progress review session helped me identify weaknesses in my technique and provided a clear path forward. Zach\'s one-on-one approach makes all the difference.',
    rating: 5,
    image: '🎯',
    location: 'Spokane, WA',
    serviceReceived: 'Progress Review',
    verified: true,
  },
];

// Consultation-specific testimonial stats
export const testimonialStats = {
  averageRating: 5.0,
  totalReviews: testimonials.length,
  verifiedReviews: testimonials.filter(t => t.verified).length,
  servicesRepresented: ['Skills Assessment', 'Advanced Consultation', 'Progress Review'],
  satisfactionRate: 100 // percentage
};

// Helper functions
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getTestimonialsByService = (serviceName: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.serviceReceived?.toLowerCase().includes(serviceName.toLowerCase())
  );
};

export const getVerifiedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.verified);
};

export const getTestimonialsByRole = (role: string): Testimonial[] => {
  return testimonials.filter(testimonial => 
    testimonial.role.toLowerCase().includes(role.toLowerCase())
  );
};