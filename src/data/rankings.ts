export interface RankingData {
  position: number;
  title: string;
  competition: string;
  year: number;
  description: string;
  stats: {
    topPercentage: number;
    totalCompetitors: number;
    maxDistance: number;
    averageAccuracy: number;
  };
}

export interface CompetitionTimelineEvent {
  month: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  isUpcoming?: boolean;
}

export interface CompetitionBenefit {
  icon: string;
  title: string;
  description: string;
  application: string;
  gradient: string;
  color: string;
}

export interface CompetitionEquipment {
  icon: string;
  text: string;
}

export interface UpcomingCompetition {
  date: {
    day: number;
    month: string;
    year: number;
    daysAway: number;
  };
  name: string;
  location: {
    venue: string;
    city: string;
    state: string;
  };
  schedule: {
    startTime: string;
    endTime: string;
  };
  details: {
    type: string;
    targets: string;
    competitors: number;
  };
  goals: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  rank: number;
  competition: string;
  avatar: string;
  stats: {
    accuracy: number;
    maxDistance: number;
    competitions: number;
    topPercentage: number;
  };
  achievements: string[];
  specialty: string;
  gradient: string;
}

// Current ranking data
export const currentRanking: RankingData = {
  position: 12,
  title: "Regional Ranking",
  competition: "Pacific Northwest Long-Range Championship",
  year: 2024,
  description: "This ranking reflects years of dedication, precision, and the same attention to detail that Zach brings to every training session at Liberty Ridge Training Grounds.",
  stats: {
    topPercentage: 6,
    totalCompetitors: 200,
    maxDistance: 1200,
    averageAccuracy: 95
  }
};

// Hero section data
export const rankingsHero = {
  title: "ELITE TEAM RANKINGS",
  subtitle: "Meet Our Champion Competitors",
  description: "Our elite team of regional champions demonstrates the expertise and competitive excellence you'll develop at Liberty Ridge Training Grounds.",
  backgroundGradient: "from-gray-50 via-white to-slate-100"
};

// Page content
export const pageContent = {
  currentRanking: {
    title: "Current Regional Ranking",
    lastUpdated: "September 2024"
  }
};

// Competition timeline events
export const competitionTimeline: CompetitionTimelineEvent[] = [
  {
    month: "MAR",
    title: "First Competition",
    description: "Debut performance - Top 25 finish",
    icon: "🎯",
    gradient: "from-green-600 to-green-800"
  },
  {
    month: "JUN",
    title: "Steady Improvement",
    description: "Consistent top-20 placements",
    icon: "📈",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    month: "AUG",
    title: "Breakthrough",
    description: "Achieved #12 regional ranking",
    icon: "🏆",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    month: "SEP",
    title: "Next Challenge",
    description: "Defending position",
    icon: "🚀",
    gradient: "from-patriot-red to-patriot-blue",
    isUpcoming: true
  }
];

// Competition benefits for training
export const competitionBenefits: CompetitionBenefit[] = [
  {
    icon: "🎯",
    title: "Precision Under Pressure",
    description: "Competition experience teaches maintaining accuracy in high-stress situations, skills directly applicable to defensive shooting scenarios.",
    application: "Stress Fire Training",
    gradient: "from-patriot-red to-red-700",
    color: "yellow-300"
  },
  {
    icon: "🧠",
    title: "Mental Discipline",
    description: "Competition shooting requires intense focus and mental control, teaching students to overcome anxiety and maintain concentration.",
    application: "Mindset Training",
    gradient: "from-patriot-blue to-blue-700",
    color: "blue-300"
  },
  {
    icon: "📊",
    title: "Data-Driven Improvement",
    description: "Competition requires detailed analysis of ballistics, wind, and environmental factors, providing advanced technical knowledge for students.",
    application: "Long-Range Precision Courses",
    gradient: "from-green-600 to-green-700",
    color: "green-300"
  },
  {
    icon: "⚡",
    title: "Adaptability Training",
    description: "Competing in various weather conditions and ranges teaches adaptation skills essential for real-world defensive situations.",
    application: "Environmental Training",
    gradient: "from-yellow-600 to-orange-600",
    color: "orange-300"
  }
];

// Competition equipment list
export const competitionEquipment: CompetitionEquipment[] = [
  { icon: "🔫", text: "Precision rifle systems" },
  { icon: "🔭", text: "High-end optics (Vortex, Leupold)" },
  { icon: "📡", text: "Ballistic calculators" },
  { icon: "🌡️", text: "Environmental monitoring" },
  { icon: "🎯", text: "Custom ammunition loads" },
  { icon: "⚖️", text: "Precision measurement tools" }
];

// Student benefits from competitive experience
export const studentBenefits = [
  "Learn from proven competitive experience",
  "Access to advanced technical knowledge",
  "Training with competition-grade standards",
  "Real-world application of military precision"
];

// Upcoming competition details
export const upcomingCompetition: UpcomingCompetition = {
  date: {
    day: 28,
    month: "September",
    year: 2025,
    daysAway: 15
  },
  name: "Pacific Northwest Regional Championship",
  location: {
    venue: "Eastern Washington Range Complex",
    city: "Spokane",
    state: "WA"
  },
  schedule: {
    startTime: "7:00 AM",
    endTime: "6:00 PM"
  },
  details: {
    type: "Long-Range Precision",
    targets: "600-1200+ yard targets",
    competitors: 250
  },
  goals: [
    "Maintain top-15 regional position",
    "Improve on 95% accuracy average",
    "Test new long-range techniques",
    "Represent Liberty Ridge Training"
  ]
};

// Navigation links for the upcoming competition section
export const competitionNavLinks = [
  { href: "/contact", text: "📧 Get Competition Updates", style: "primary" },
  { href: "/courses", text: "🎯 Train with Zach", style: "secondary" },
  { href: "/team", text: "👥 Meet the Team", style: "accent" }
];

// Elite team members
export const teamMembers: TeamMember[] = [
  {
    id: "zach",
    name: "ZACH GAUDETTE",
    title: "LEAD INSTRUCTOR & CHAMPION",
    rank: 12,
    competition: "Pacific Northwest Long-Range Championship",
    avatar: "🎯",
    stats: {
      accuracy: 95,
      maxDistance: 1200,
      competitions: 8,
      topPercentage: 6
    },
    achievements: ["Competition Dominance", "Tactical Mastery", "Precision Legend"],
    specialty: "Long-Range Precision & Tactical Training",
    gradient: "from-yellow-600 via-red-600 to-orange-600"
  },
  {
    id: "sarah",
    name: "SARAH CHEN",
    title: "PRECISION RIFLE SPECIALIST",
    rank: 18,
    competition: "Western States Championship",
    avatar: "🏹",
    stats: {
      accuracy: 92,
      maxDistance: 1000,
      competitions: 6,
      topPercentage: 8
    },
    achievements: ["Rapid Fire Mastery", "Weather Adaptation", "Technical Excellence"],
    specialty: "Dynamic Shooting & Environmental Training",
    gradient: "from-purple-600 via-pink-600 to-red-600"
  },
  {
    id: "marcus",
    name: "MARCUS TORRES",
    title: "TACTICAL OPERATIONS EXPERT",
    rank: 24,
    competition: "Regional Tactical Challenge",
    avatar: "⚔️",
    stats: {
      accuracy: 89,
      maxDistance: 800,
      competitions: 5,
      topPercentage: 12
    },
    achievements: ["Combat Proven", "Leadership Excellence", "Multi-Gun Mastery"],
    specialty: "Close Quarters & Tactical Movement",
    gradient: "from-green-600 via-blue-600 to-teal-600"
  },
  {
    id: "alex",
    name: "ALEX RODRIGUEZ",
    title: "RISING CHAMPION",
    rank: 35,
    competition: "Northwest Precision Series",
    avatar: "🔥",
    stats: {
      accuracy: 87,
      maxDistance: 900,
      competitions: 4,
      topPercentage: 15
    },
    achievements: ["Rapid Improvement", "Youth Excellence", "Future Elite"],
    specialty: "Fundamentals & Competition Prep",
    gradient: "from-orange-600 via-yellow-600 to-red-600"
  }
];