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
    icon: '⚔️',
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
  tagline: 'Personal Firearms Consultation by Army Veteran Zach Gaudette',
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
    consultations: 'Tuesday - Thursday, Saturday - Sunday',
    availability: '9:00 AM - 8:00 PM',
    booking: 'Online scheduling available',
    emergency: 'By special arrangement',
  },
};

export const missionStatement = 
  'Dedicated to providing personalized firearms consultation and expert guidance rooted in military experience, honor, and commitment to individual excellence.';

export const visionStatement = 
  'To be the premier personal firearms consultant in the Pacific Northwest, empowering individuals through one-on-one expertise and personalized guidance from a Regional #12 ranked instructor.';

// Feature highlights for personal consultation platform
export const keyFeatures = [
  {
    title: 'Army Veteran Expertise',
    description: 'Personal consultation with U.S. Army veteran Zach Gaudette, bringing authentic military experience to civilian firearms guidance.',
    icon: '🎖️',
  },
  {
    title: 'Regional #12 Achievement',
    description: 'Learn from a consultant who achieved Regional #12 ranking in his first year of competitive long-range shooting.',
    icon: '🏆',
  },
  {
    title: '100% Safety Record',
    description: 'Maintaining the highest safety standards with comprehensive protocols in every personal consultation session.',
    icon: '🛡️',
  },
  {
    title: 'Personalized Consultation',
    description: 'One-on-one guidance tailored to your specific goals, experience level, and individual firearms needs.',
    icon: '🎯',
  },
];

// Helper functions
export const getMilitaryValues = (): CoreValue[] => {
  return coreValues.filter(value => value.militaryPrinciple);
};

// Company advantages and differentiators for personal consultation
export const companyAdvantages = [
  { icon: '🎖️', text: 'Army veteran owned and operated' },
  { icon: '🏆', text: 'Regional #12 competitive achievement' },
  { icon: '👤', text: 'One-on-one personal consultation' },
  { icon: '🛡️', text: 'Comprehensive safety protocols' },
  { icon: '�', text: 'Personalized guidance approach' },
  { icon: '📈', text: 'Proven competition-level results' },
  { icon: '🏠', text: 'Local Pacific Northwest expertise' },
  { icon: '⚔️', text: 'Military-grade standards applied' }
];