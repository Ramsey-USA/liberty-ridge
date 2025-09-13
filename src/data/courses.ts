// Course data for consistent display across pages
export interface Course {
  id: number;
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  originalPrice?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  includes: string[];
  highlights?: string[];
  icon: string;
  category: 'safety' | 'tactical' | 'specialized';
  popular?: boolean;
  maxStudents?: number;
  prerequisites?: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'Firearm Safety Fundamentals',
    subtitle: 'Essential Foundation Course',
    duration: '2 days (14 hours)',
    price: '$2,499.99',
    level: 'Beginner',
    description: 'Comprehensive 2-day training covering the essential principles of firearm safety, handling, storage, and basic maintenance. Perfect for first-time gun owners and those seeking to refresh their knowledge.',
    includes: [
      'Safe handling procedures',
      'Firearm storage and security',
      'Basic maintenance and cleaning',
      'Legal responsibilities',
      'Emergency protocols',
      'Certificate of completion'
    ],
    highlights: [
      '14-Hour Comprehensive Training',
      'Safety Protocols & Best Practices',
      'Certificate of Completion'
    ],
    icon: '🛡️',
    category: 'safety',
    popular: true,
    maxStudents: 12,
  },
  {
    id: 2,
    title: 'Personal Firearm Training',
    subtitle: 'Customized Individual Instruction',
    duration: '5 days (35 hours)',
    price: '$5,999.99',
    level: 'Intermediate',
    description: 'Intensive 5-day personalized training focused on your specific firearm and individual skill development needs. Includes one-on-one instruction with customized curriculum tailored to your goals.',
    includes: [
      'Weapon-specific training',
      'Personalized skill assessment',
      'Customized training plan',
      'Advanced safety protocols',
      'Tactical fundamentals',
      'Follow-up consultation'
    ],
    highlights: [
      'Intensive 35-Hour Program',
      'Personalized 1-on-1 Instruction',
      'Your Specific Firearm Focus'
    ],
    icon: '🎯',
    category: 'tactical',
    maxStudents: 1,
    prerequisites: ['Basic firearm safety knowledge recommended'],
  },
  {
    id: 3,
    title: 'Advanced Safety Protocols',
    subtitle: 'Professional-Level Training',
    duration: 'Weekend course (18 hours)',
    price: '$3,999.99',
    level: 'Advanced',
    description: 'Intensive weekend training featuring Friday evening (4 hours) plus full Saturday and Sunday sessions (14 hours). Advanced classroom instruction on tactical safety protocols, emergency response procedures, and crisis management techniques for serious practitioners.',
    includes: [
      'Crisis situation management',
      'Advanced tactical protocols',
      'Emergency response planning',
      'Threat assessment',
      'Decision-making under pressure',
      'Professional certification'
    ],
    highlights: [
      'Weekend Intensive Program',
      'Advanced Tactical Protocols',
      'Military-Grade Instruction'
    ],
    icon: '⚔️',
    category: 'specialized',
    maxStudents: 8,
    prerequisites: ['Completion of Firearm Safety Fundamentals', 'Basic tactical knowledge'],
  },
];

export const courseCategories = {
  safety: {
    name: 'Safety Training',
    description: 'Foundation courses focusing on safe firearm handling and storage',
    color: 'patriot-blue'
  },
  tactical: {
    name: 'Tactical Training', 
    description: 'Intermediate skills development and tactical applications',
    color: 'tactical-dark'
  },
  specialized: {
    name: 'Specialized Training',
    description: 'Advanced protocols and professional-level instruction',
    color: 'patriot-red'
  }
};

// Helper functions
export const getCourseById = (id: number): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: Course['category']): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getPopularCourses = (): Course[] => {
  return courses.filter(course => course.popular);
};