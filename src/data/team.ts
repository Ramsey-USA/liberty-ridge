// Team member data and organizational structure
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
  // Additional properties for team page compatibility
  rank?: string;
  branch?: string;
  achievement?: string;
  status?: 'active' | 'recruiting';
  certifications?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Zach Gaudette',
    title: 'Founder & Lead Instructor',
    role: 'Owner/Operator',
    background: 'U.S. Army Veteran',
    specialties: [
      'Tactical Training',
      'Firearm Safety',
      'Long-Range Precision',
      'Crisis Management',
      'Emergency Response'
    ],
    credentials: [
      'U.S. Army Veteran',
      'Regional #12 Long-Range Shooter',
      'First Year Competition Achiever',
      'Tactical Training Specialist'
    ],
    image: '🎖️',
    bio: 'Zach Gaudette is a dedicated U.S. Army veteran who brings years of military experience and tactical expertise to civilian training. His commitment to excellence and safety has made Liberty Ridge Training Grounds a trusted name in tactical education throughout the Pacific Northwest.',
    experience: '5+ years in tactical training and firearm education',
    featured: true,
    active: true,
    // Additional team page fields
    rank: 'Founder & Lead Instructor',
    branch: 'U.S. Army Veteran',
    achievement: '#12 Regional Ranking',
    status: 'active',
    certifications: ['Combat Veteran', 'Precision Rifle Instructor', 'Safety Protocols Specialist']
  },
];

// Future team expansion structure
export const teamRoles = {
  medical: {
    title: 'Medical Specialist',
    description: 'Emergency medical training and trauma response',
    requirements: ['Medical background', 'Emergency response experience'],
    status: 'recruiting'
  },
  evacuation: {
    title: 'Evacuation Planning Specialist', 
    description: 'Emergency evacuation procedures and crisis planning',
    requirements: ['Military or emergency services background', 'Crisis management experience'],
    status: 'recruiting'
  },
  logistics: {
    title: 'Operations & Logistics Coordinator',
    description: 'Training coordination and facility management',
    requirements: ['Organizational skills', 'Military or training background preferred'],
    status: 'future'
  }
};

// Organizational stats
export const organizationStats = {
  studentsTrained: 100,
  yearsExperience: 5,
  safetyRecord: 100, // percentage
  instructorRating: 4.9,
  coursesOffered: 3,
  averageClassSize: 8,
};

// Helper functions
export const getActiveTeamMembers = (): TeamMember[] => {
  return teamMembers.filter(member => member.active);
};

export const getFeaturedTeamMembers = (): TeamMember[] => {
  return teamMembers.filter(member => member.featured);
};

export const getFounder = (): TeamMember | undefined => {
  return teamMembers.find(member => member.role === 'Owner/Operator');
};