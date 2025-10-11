// Consultation services data for Zach's personal platform
export interface ConsultationService {
  id: number;
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  level: 'Essential' | 'Premium' | 'Follow-up';
  description: string;
  includes: string[];
  highlights?: string[];
  icon: string;
  category: 'assessment' | 'advanced' | 'review';
  popular?: boolean;
  maxClients?: number;
  prerequisites?: string[];
  badge?: string;
}

export const consultationServices: ConsultationService[] = [
  {
    id: 1,
    title: 'Skills Assessment',
    subtitle: 'Comprehensive Evaluation & Planning',
    duration: '90 minutes',
    price: '$150',
    level: 'Essential',
    description: 'Comprehensive evaluation of your current skills, goals, and personalized training recommendations. Perfect starting point for serious firearms development.',
    includes: [
      'Personal skill evaluation',
      'Goal setting & planning',
      'Equipment recommendations',
      'Customized training roadmap',
      'Resource identification',
      'Follow-up consultation scheduling'
    ],
    highlights: [
      'Individual Assessment',
      'Personalized Planning',
      'Expert Recommendations'
    ],
    icon: '🎯',
    category: 'assessment',
    popular: true,
    maxClients: 1,
    badge: 'Essential'
  },
  {
    id: 2,
    title: 'Advanced Consultation',
    subtitle: 'Competition-Level Expertise',
    duration: '2 hours intensive',
    price: '$250',
    level: 'Premium',
    description: 'In-depth technical consultation for experienced shooters seeking competitive-level expertise. Leverage Zach\'s Regional #12 ranking experience.',
    includes: [
      'Competition technique analysis',
      'Precision shooting optimization',
      'Advanced ballistics consultation',
      'Equipment tuning guidance',
      'Mental preparation strategies',
      'Competition readiness assessment'
    ],
    highlights: [
      'Competition-Level Expertise',
      'Regional #12 Insights',
      'Advanced Techniques'
    ],
    icon: '🏆',
    category: 'advanced',
    maxClients: 1,
    prerequisites: ['Basic firearms experience recommended'],
    badge: 'Premium'
  },
  {
    id: 3,
    title: 'Progress Review',
    subtitle: 'Follow-up & Refinement',
    duration: '60 minutes',
    price: '$100',
    level: 'Follow-up',
    description: 'Follow-up consultation to review progress, address challenges, and refine your training approach. Continuous improvement support.',
    includes: [
      'Progress evaluation',
      'Problem-solving session',
      'Technique refinement',
      'Next steps planning',
      'Goal adjustment',
      'Ongoing support guidance'
    ],
    highlights: [
      'Progress Tracking',
      'Problem Solving',
      'Continuous Improvement'
    ],
    icon: '📈',
    category: 'review',
    maxClients: 1,
    prerequisites: ['Previous consultation with Zach'],
    badge: 'Follow-up'
  },
];

export const consultationCategories = {
  assessment: {
    name: 'Initial Assessment',
    description: 'Comprehensive evaluation and personalized planning',
    color: 'patriot-blue'
  },
  advanced: {
    name: 'Advanced Consultation', 
    description: 'Competition-level expertise and optimization',
    color: 'accent-gold'
  },
  review: {
    name: 'Progress Review',
    description: 'Follow-up support and continuous improvement',
    color: 'community-green'
  }
};

// Consultation process steps
export const consultationProcess = [
  {
    step: 1,
    title: 'Easy Scheduling',
    description: 'Book your consultation online with flexible scheduling to fit your availability.',
    icon: '📅'
  },
  {
    step: 2,
    title: 'Personal Attention',
    description: 'One-on-one consultation focused entirely on your individual goals and challenges.',
    icon: '👤'
  },
  {
    step: 3,
    title: 'Expert Guidance',
    description: 'Benefit from Army veteran experience and Regional #12 competitive ranking expertise.',
    icon: '🎯'
  }
];

// Zach's credentials and qualifications
export const zachCredentials = {
  militaryBackground: 'U.S. Army Veteran',
  competitiveRanking: 'Regional #12 Long-Range Shooter',
  experience: '5+ years firearms instruction',
  safetyRecord: '100% incident-free',
  specialties: [
    'Long-range precision shooting',
    'Tactical firearms training',
    'Safety protocol development',
    'Competition preparation',
    'Equipment optimization'
  ],
  achievements: [
    'Regional #12 ranking in first competitive year',
    '100+ students successfully trained',
    'Perfect safety record maintained',
    'Army veteran with combat experience',
    'Certified firearms instructor'
  ]
};

// Helper functions
export const getConsultationById = (id: number): ConsultationService | undefined => {
  return consultationServices.find(service => service.id === id);
};

export const getConsultationsByCategory = (category: ConsultationService['category']): ConsultationService[] => {
  return consultationServices.filter(service => service.category === category);
};

export const getPopularConsultations = (): ConsultationService[] => {
  return consultationServices.filter(service => service.popular);
};

export const getEntryLevelConsultation = (): ConsultationService | undefined => {
  return consultationServices.find(service => service.level === 'Essential');
};