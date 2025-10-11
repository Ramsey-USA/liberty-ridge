// Zach Gaudette - Personal brand and expertise data
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  background: string;
  specialties: string[];
  credentials: string[];
  image: string;
  bio: string;
  experience: string;
  featured?: boolean;
  active?: boolean;
  // Additional properties for personal brand
  rank?: string;
  branch?: string;
  achievement?: string;
  status?: 'active' | 'available';
  certifications?: string[];
  personalInfo?: {
    familyStatus: string;
    location: string;
    philosophy: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Zach Gaudette',
    title: 'Firearms Consultant & Instructor',
    role: 'Owner/Operator',
    background: 'U.S. Army Veteran',
    specialties: [
      'Personal Firearms Consultation',
      'Long-Range Precision Shooting',
      'Competition Coaching',
      'Safety Protocol Development',
      'Equipment Optimization'
    ],
    credentials: [
      'U.S. Army Veteran',
      'Regional #12 Long-Range Shooter',
      'First Year Competition Achievement',
      'Professional Firearms Instructor',
      '100+ Students Trained'
    ],
    image: '🎖️',
    bio: 'Zach Gaudette is a dedicated U.S. Army veteran who transitioned his military expertise into personalized firearms consultation. Achieving Regional #12 ranking in his first competitive year demonstrates his exceptional natural talent and commitment to precision. As a proud father and husband, Zach understands the importance of responsible firearm ownership and personal protection.',
    experience: '5+ years in personalized firearms instruction and consultation',
    featured: true,
    active: true,
    // Personal brand specific fields
    rank: 'Firearms Consultant',
    branch: 'U.S. Army Veteran',
    achievement: 'Regional #12 Long-Range Ranking',
    status: 'available',
    certifications: [
      'Combat Veteran',
      'Precision Rifle Specialist', 
      'Safety Protocols Expert',
      'Competition Coach',
      'Equipment Optimization Consultant'
    ],
    personalInfo: {
      familyStatus: 'Proudly married and father to a wonderful son',
      location: 'Pacific Northwest',
      philosophy: 'Professional discipline and expertise applied to civilian consultation, ensuring the highest standards of safety and personalized instruction.'
    }
  },
];

// Personal consultation stats
export const zachStats = {
  clientsConsulted: 100,
  yearsExperience: 5,
  safetyRecord: 100, // percentage
  regionalRanking: 12,
  consultationTypes: 3,
  averageSessionLength: 90, // minutes
  firstYearCompetitive: 2024,
  militaryBranch: 'U.S. Army'
};

// Consultation availability and scheduling
export const consultationAvailability = {
  daysPerWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
  timeSlots: {
    morning: '9:00 AM - 12:00 PM',
    afternoon: '1:00 PM - 5:00 PM', 
    evening: '6:00 PM - 8:00 PM'
  },
  bookingAdvance: '2 weeks', // how far in advance to book
  cancellationPolicy: '24 hours notice required',
  location: 'Private consultation facility',
  virtualOptions: true
};

// Helper functions
export const getZachProfile = (): TeamMember => {
  return teamMembers[0]!; // Zach is the only team member, guaranteed to exist
};

export const getZachSpecialties = (): string[] => {
  return teamMembers[0]!.specialties;
};

export const getZachCredentials = (): string[] => {
  return teamMembers[0]!.credentials;
};

export const getConsultationStats = () => {
  return zachStats;
};