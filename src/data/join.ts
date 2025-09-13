export interface Position {
  id: string;
  title: string;
  shortTitle: string;
  status: string;
  statusColor: string;
  icon: string;
  gradient: string;
  requirements: string[];
  responsibilities: string[];
  buttonColor: string;
  buttonHoverColor: string;
  borderColor: string;
  description: string;
}

export interface TeamBenefit {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface CompanyVisionItem {
  icon: string;
  text: string;
  description: string;
}

export interface TeamStat {
  value: string;
  label: string;
}

export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'radio';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
}

export interface FormSection {
  id: string;
  title: string;
  icon: string;
  fields: FormField[];
}

// Open positions data
export const openPositions: Position[] = [
  {
    id: 'combat-medic',
    title: 'Combat Medic Instructor',
    shortTitle: 'Combat Medic',
    status: 'PRIORITY HIRE',
    statusColor: 'bg-patriot-red',
    icon: '⚕️',
    gradient: 'from-red-600 to-red-800',
    requirements: [
      'Combat medic experience (68W or similar)',
      'Iraq/Afghanistan deployment preferred',
      'EMT-P certification preferred',
      'TCCC instructor certification'
    ],
    responsibilities: [
      'Lead medical training programs',
      'Teach trauma care techniques',
      'Develop curriculum content',
      'Train civilian first responders'
    ],
    buttonColor: 'bg-patriot-red',
    buttonHoverColor: 'hover:bg-red-700',
    borderColor: 'border-patriot-red/20 hover:border-patriot-red/50',
    description: 'Lead medical training programs and trauma care education'
  },
  {
    id: 'tactical-movement',
    title: 'Tactical Movement Specialist',
    shortTitle: 'Tactical Movement',
    status: 'HIGH DEMAND',
    statusColor: 'bg-patriot-blue',
    icon: '🏃‍♀️',
    gradient: 'from-blue-600 to-blue-800',
    requirements: [
      'Marine Corps infantry experience',
      'Close quarters combat training',
      'Female veteran preferred',
      'Physical fitness instructor cert'
    ],
    responsibilities: [
      'Teach tactical movement techniques',
      'Lead CQC training',
      'Physical conditioning programs',
      'Team tactics instruction'
    ],
    buttonColor: 'bg-patriot-blue',
    buttonHoverColor: 'hover:bg-blue-700',
    borderColor: 'border-patriot-blue/20 hover:border-patriot-blue/50',
    description: 'Teach close quarters combat and tactical movement techniques'
  },
  {
    id: 'marksmanship',
    title: 'Advanced Marksmanship Instructor',
    shortTitle: 'Advanced Marksmanship',
    status: 'ELITE LEVEL',
    statusColor: 'bg-green-600',
    icon: '🎯',
    gradient: 'from-green-600 to-green-800',
    requirements: [
      'Navy SEAL or similar SOF background',
      'Advanced marksmanship experience',
      'Optics systems expertise',
      'Competitive shooting experience'
    ],
    responsibilities: [
      'Advanced precision shooting',
      'Optics training and setup',
      'Ballistics education',
      'Long-range techniques'
    ],
    buttonColor: 'bg-green-600',
    buttonHoverColor: 'hover:bg-green-700',
    borderColor: 'border-green-500/20 hover:border-green-500/50',
    description: 'Advanced precision shooting and optics systems training'
  }
];

// Team benefits data
export const teamBenefits: TeamBenefit[] = [
  {
    icon: '🎖️',
    title: 'Veteran-First Environment',
    description: 'Work alongside fellow veterans who understand your background and share your values. No corporate BS - just mission-focused professionals.',
    gradient: 'from-patriot-red to-red-700'
  },
  {
    icon: '📈',
    title: 'Growth Opportunity',
    description: 'Ground floor opportunity with a rapidly expanding company. Shape the future of tactical education in the Pacific Northwest.',
    gradient: 'from-patriot-blue to-blue-700'
  },
  {
    icon: '🤝',
    title: 'Continue Serving',
    description: 'Use your military skills to serve civilians, law enforcement, and fellow veterans through professional training.',
    gradient: 'from-green-600 to-green-700'
  },
  {
    icon: '💰',
    title: 'Competitive Compensation',
    description: 'Competitive salary plus performance bonuses. Equity opportunities as the company grows and expands operations.',
    gradient: 'from-yellow-600 to-orange-600'
  }
];

// Company vision items
export const companyVisionItems: CompanyVisionItem[] = [
  {
    icon: '🎯',
    text: 'Premier tactical training facility',
    description: 'State-of-the-art equipment and ranges'
  },
  {
    icon: '🎖️',
    text: 'Veteran employment hub',
    description: 'Meaningful careers for military professionals'
  },
  {
    icon: '🛡️',
    text: 'Community safety resource',
    description: 'Training civilians for emergency preparedness'
  },
  {
    icon: '⭐',
    text: 'Military values in civilian world',
    description: 'Honor, integrity, and excellence in everything'
  },
  {
    icon: '🎓',
    text: 'Next generation of prepared citizens',
    description: 'Educated and responsible gun ownership'
  },
  {
    icon: '📈',
    text: 'Professional development platform',
    description: 'Continuous learning and skill advancement'
  }
];

// Team statistics
export const teamStats: TeamStat[] = [
  { value: '1', label: 'Active Instructor' },
  { value: '3', label: 'Open Positions' },
  { value: '100%', label: 'Veteran Owned' },
  { value: '#12', label: 'Regional Ranking' }
];

// Application form sections
export const applicationFormSections: FormSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    icon: '👤',
    fields: [
      {
        id: 'firstName',
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        required: true
      },
      {
        id: 'lastName',
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        required: true
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email Address',
        required: true
      },
      {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        required: true
      }
    ]
  },
  {
    id: 'military',
    title: 'Military Background',
    icon: '🎖️',
    fields: [
      {
        id: 'branch',
        name: 'branch',
        type: 'select',
        label: 'Service Branch',
        required: true,
        options: [
          'Select Branch',
          'U.S. Army',
          'U.S. Navy',
          'U.S. Air Force',
          'U.S. Marines',
          'U.S. Coast Guard',
          'U.S. Space Force'
        ]
      },
      {
        id: 'yearsService',
        name: 'yearsService',
        type: 'select',
        label: 'Years of Service',
        required: true,
        options: [
          'Select Years',
          '2-4 years',
          '4-8 years',
          '8-12 years',
          '12-20 years',
          '20+ years'
        ]
      },
      {
        id: 'mos',
        name: 'mos',
        type: 'text',
        label: 'Military Occupational Specialty (MOS/Rate/AFSC)',
        placeholder: 'e.g., 11B, 68W, 0311'
      },
      {
        id: 'rank',
        name: 'rank',
        type: 'text',
        label: 'Highest Rank Achieved',
        placeholder: 'e.g., SGT, CPO, SSGT'
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience & Skills',
    icon: '🛡️',
    fields: [
      {
        id: 'skills',
        name: 'skills',
        type: 'textarea',
        label: 'Specialized Skills & Experience',
        placeholder: 'Please describe your tactical training, medical experience, teaching background, certifications, deployments, special operations experience, or any other relevant qualifications that make you a good fit for our team...',
        required: true,
        rows: 6
      },
      {
        id: 'motivation',
        name: 'motivation',
        type: 'textarea',
        label: 'Why do you want to join Liberty Ridge Training Grounds?',
        placeholder: 'Tell us about your motivation to join our team and continue serving through civilian training...',
        required: true,
        rows: 4
      }
    ]
  },
  {
    id: 'availability',
    title: 'Availability',
    icon: '📅',
    fields: [
      {
        id: 'startDate',
        name: 'startDate',
        type: 'select',
        label: 'Start Date Availability',
        options: [
          'Select Timeframe',
          'Immediately',
          'Within 2 weeks',
          'Within 1 month',
          'Within 2-3 months',
          'Flexible'
        ]
      },
      {
        id: 'schedule',
        name: 'schedule',
        type: 'select',
        label: 'Schedule Preference',
        options: [
          'Select Preference',
          'Full-time',
          'Part-time',
          'Contract/Consulting',
          'Flexible'
        ]
      }
    ]
  }
];

// Hero section content
export const joinHero = {
  title: 'JOIN THE ELITE',
  subtitle: 'Veterans Building Something Greater',
  description: 'Be part of an elite team dedicated to providing world-class tactical training while serving the veteran community and beyond.',
  backgroundGradient: 'from-patriot-red via-tactical-dark to-patriot-blue'
};

// Page content
export const pageContent = {
  openPositions: {
    badge: "3 POSITIONS AVAILABLE",
    title: "Open Positions",
    description: "We're seeking exceptional veterans to join our team and help build the premier tactical training organization in the Pacific Northwest."
  },
  whyJoin: {
    title: "Why Join Liberty Ridge?",
    description: "More than just a job - be part of building something meaningful while continuing to serve your community.",
    benefitsTitle: "Team Benefits & Culture"
  },
  companyVision: {
    title: "Building Excellence",
    subtitle: "Together",
    sectionTitle: "What We're Building"
  },
  teamStats: {
    title: "Current Team Stats"
  },
  applicationForm: {
    title: "Ready to Join the Team?",
    description: "Take the first step towards joining an elite team of veteran instructors. We'll review your application and reach out within 48 hours.",
    sections: {
      personalInfo: {
        title: "Personal Information",
        fields: ["fullName", "email", "phone", "location", "clearanceLevel"]
      },
      militaryBackground: {
        title: "Military Background", 
        fields: ["branch", "mos", "yearsService", "deployments", "specialTraining"]
      },
      positionInfo: {
        title: "Position Information",
        fields: ["interestedPosition", "availability", "salaryExpectation", "additionalInfo"]
      }
    }
  }
};