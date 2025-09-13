// Core values and company information
export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
  militaryPrinciple: boolean;
}

export const coreValues: CoreValue[] = [
  {
    id: 1,
    title: 'Loyalty',
    description: 'Upholding our commitment to students and community with unwavering dedication and true faith',
    icon: '🎯',
    militaryPrinciple: true,
  },
  {
    id: 2,
    title: 'Duty',
    description: 'Providing comprehensive training with the highest standards and fulfilling our obligation to excellence',
    icon: '⚔️',
    militaryPrinciple: true,
  },
  {
    id: 3,
    title: 'Respect',
    description: 'Fostering professionalism and mutual respect while treating every person with dignity',
    icon: '🛡️',
    militaryPrinciple: true,
  },
  {
    id: 4,
    title: 'Selfless Service',
    description: 'Dedicating ourselves to student safety and readiness, putting their welfare above our own interests',
    icon: '🤝',
    militaryPrinciple: true,
  },
  {
    id: 5,
    title: 'Honor',
    description: 'Conducting operations with integrity and moral compass, living up to our core values daily',
    icon: '⭐',
    militaryPrinciple: true,
  },
  {
    id: 6,
    title: 'Integrity',
    description: 'Maintaining transparency and honesty in all we do, doing what is right legally and morally',
    icon: '💎',
    militaryPrinciple: true,
  },
  {
    id: 7,
    title: 'Personal Courage',
    description: 'Empowering students to act with confidence and skill while facing challenges with determination',
    icon: '🦅',
    militaryPrinciple: true,
  },
];

export const companyInfo = {
  name: 'Liberty Ridge Training Grounds',
  tagline: 'Elite Tactical Training by Army Veteran Zach Gaudette',
  foundedYear: 2020,
  location: {
    city: 'Pasco',
    state: 'WA',
    region: 'Pacific Northwest',
  },
  contact: {
    phone: '(509) 555-0123', // Placeholder
    email: 'info@libertyridegetraininggrounds.com',
    website: 'libertyridegetraininggrounds.com',
  },
  socialMedia: {
    facebook: 'https://facebook.com/libertyridgetraining',
    instagram: 'https://instagram.com/libertyridgetraining',
    linkedin: 'https://linkedin.com/company/liberty-ridge-training',
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'By Appointment',
  },
};

export const missionStatement = 
  'Dedicated to providing exceptional tactical and firearm safety education rooted in honor, integrity, and service to our community.';

export const visionStatement = 
  'To be the premier tactical training destination in the Pacific Northwest, empowering individuals with the skills and confidence needed for personal protection and safety.';

// Feature highlights for marketing
export const keyFeatures = [
  {
    title: 'Veteran-Owned & Operated',
    description: 'Led by U.S. Army veteran Zach Gaudette, bringing authentic military experience and discipline to civilian tactical training.',
    icon: '🎖️',
  },
  {
    title: 'Rising Competition Talent',
    description: 'Learn from an instructor who achieved #12 regional ranking in his first year of long-range shooting competition.',
    icon: '🏆',
  },
  {
    title: '100% Safety Record',
    description: 'Maintaining the highest safety standards with comprehensive protocols, ensuring every student trains in a secure environment.',
    icon: '🛡️',
  },
  {
    title: 'Personalized Training',
    description: 'Customized instruction tailored to individual needs and specific firearm types for maximum effectiveness.',
    icon: '🎯',
  },
];

// Helper functions
export const getMilitaryValues = (): CoreValue[] => {
  return coreValues.filter(value => value.militaryPrinciple);
};

// Company advantages and differentiators
export const companyAdvantages = [
  { icon: '🎖️', text: 'Veteran-owned and operated' },
  { icon: '⚔️', text: 'Military-grade training standards' },
  { icon: '🏆', text: 'Nationally competitive instructor' },
  { icon: '🛡️', text: 'Comprehensive safety protocols' },
  { icon: '👨‍🏫', text: 'Personalized training approach' },
  { icon: '🏠', text: 'Strong community focus' },
  { icon: '📚', text: 'Evidence-based methodologies' },
  { icon: '🤝', text: 'Family protection emphasis' }
];