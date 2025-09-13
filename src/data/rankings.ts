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
  title: "NATIONAL RANKINGS",
  subtitle: "Competitive Excellence in Long-Range Shooting",
  description: "Zach Gaudette's achievements demonstrate the expertise you'll receive in training.",
  backgroundGradient: "from-patriot-red via-tactical-dark to-patriot-blue"
};

// Page content
export const pageContent = {
  currentRanking: {
    title: "Current National Ranking",
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