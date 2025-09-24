// Contact page data constants
export interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  primary: string;
  secondary: string;
  note: string;
  bestFor: string;
  responseTime: string;
  href?: string;
}

export interface OfficeHours {
  day: string;
  hours: string;
}

export interface QuickAction {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryLink: {
    text: string;
    href: string;
  };
}

export const contactHero = {
  title: "CONTACT US",
  subtitle: "Ready to Start Your Training Journey?",
  description: "Get in touch today. We're here to answer questions and help you choose the right course.",
  backgroundGradient: "from-white via-slate-50 to-gray-100"
};

export const contactCards = [
  {
    icon: "⚔️",
    title: "Call Us",
    description: "Ready to talk? Give us a call during business hours.",
    primary: "(555) 123-4567",
    secondary: "Mon-Fri: 9AM-6PM PST"
  },
  {
    icon: "🎖️",
    title: "Email Us",
    description: "Send us a message and we'll respond within 24 hours.",
    primary: "info@libertyridegetraininggrounds.com",
    secondary: ""
  },
  {
    icon: "🏛️",
    title: "Visit Us",
    description: "Located in the heart of Eastern Washington.",
    primary: "Pasco, WA",
    secondary: "Specific address provided upon enrollment"
  },
  {
    icon: "⏰",
    title: "Office Hours",
    description: "",
    primary: "",
    secondary: ""
  }
];

export const contactMethods: ContactMethod[] = [
  {
    icon: "⚔️",
    title: "Phone Support",
    description: "Direct line to our team",
    primary: "(555) 123-4567",
    secondary: "Mon-Fri: 9AM-6PM PST | Sat: 10AM-4PM PST",
    note: "",
    bestFor: "Course enrollment, scheduling, immediate questions",
    responseTime: "Immediate during business hours"
  },
  {
    icon: "🎖️",
    title: "Email Support",
    description: "Detailed inquiries and documentation",
    primary: "info@libertyridegetraininggrounds.com",
    secondary: "Professional responses within 24 hours",
    note: "",
    bestFor: "Detailed questions, documentation requests, partnerships",
    responseTime: "Within 24 hours (usually faster)"
  },
  {
    icon: "�",
    title: "Quick Questions",
    description: "Common inquiries and support",
    primary: "📋 Visit Our FAQ Page",
    secondary: "Instant answers to common questions",
    note: "",
    bestFor: "Course info, requirements, policies, general questions",
    responseTime: "Immediate - self-service",
    href: "/faq"
  }
];

export const officeHours: OfficeHours[] = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "By appointment only" }
];

export const detailedOfficeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" }
];

export const locationInfo = {
  icon: "🏛️",
  title: "Training Location",
  description: "Eastern Washington facility",
  city: "Pasco, Washington",
  note: "Specific address provided upon course enrollment",
  features: [
    "Located in Tri-Cities area",
    "Convenient parking available", 
    "Accessible from I-82 and I-182",
    "Regional airport nearby"
  ]
};

export const emergencyContact = {
  icon: "�️",
  title: "Emergency Contact",
  description: "For enrolled students only",
  phone: "(555) TACTICAL",
  note: "24/7 emergency line for training students",
  usage: "Training emergencies, safety concerns, urgent student matters"
};

export const quickAction: QuickAction = {
  title: "Ready to Get Started?",
  description: "The fastest way to begin your training is to register for one of our courses directly.",
  primaryButton: {
    text: "Register for Course",
    href: "/signup"
  },
  secondaryLink: {
    text: "View All Courses", 
    href: "/courses"
  }
};

export const callToAction = {
  title: "Ready to Begin Your Training?",
  description: "Don't wait - start your tactical education journey today with Liberty Ridge Training Grounds.",
  primaryButton: {
    text: "🎖️ Register for Course",
    href: "/signup"
  },
  secondaryButton: {
    text: "🎯 View All Courses",
    href: "/courses"
  }
};

export const pageContent = {
  contactSection: {
    title: "Multiple Ways to Connect",
    description: "Choose the best way to reach us. We're committed to providing excellent customer service and responding to all inquiries promptly."
  }
};