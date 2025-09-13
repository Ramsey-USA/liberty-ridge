export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  title: string;
  icon: string;
  questions: FAQ[];
}

export interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  detail: string;
  action?: {
    text: string;
    href: string;
  };
}

// FAQ Categories with questions and answers
export const faqCategories: FAQCategory[] = [
  {
    title: "Course Information",
    icon: "🎓",
    questions: [
      {
        q: "Do I need prior firearm experience?",
        a: "No prior experience is required. Our courses are designed for all skill levels, from complete beginners to advanced practitioners. Our instructors will meet you where you are and help you progress safely."
      },
      {
        q: "What is the minimum age requirement?",
        a: "Students must be 18 years or older. For ages 16-17, we require written parental consent and a parent/guardian must attend the first session with the student."
      },
      {
        q: "What should I bring to class?",
        a: "Just bring yourself, a notebook, and a willingness to learn! All training materials, equipment, and course handouts are provided. We recommend comfortable clothing and closed-toe shoes."
      },
      {
        q: "Are certificates provided upon completion?",
        a: "Yes! All students receive an official Liberty Ridge Training Grounds certificate of completion, which includes course details, date, and instructor signature. These are recognized by many employers and organizations."
      },
      {
        q: "Can I retake a course if I need additional practice?",
        a: "Absolutely! We offer a 50% discount for course retakes within 6 months. We want you to feel confident and competent with the material."
      }
    ]
  },
  {
    title: "Training Phases & Safety",
    icon: "🛡️",
    questions: [
      {
        q: "Are live firearms used in Phase One training?",
        a: "No, Phase One is classroom-only training focused on theory, safety, and fundamentals. Live-fire training will be available in Phase Three once we acquire dedicated outdoor training grounds."
      },
      {
        q: "What safety protocols do you follow?",
        a: "Safety is our top priority. All training follows strict military-grade safety protocols. Every session begins with safety briefing, and our instructors are certified in first aid and emergency response."
      },
      {
        q: "When will Phase Two and Three be available?",
        a: "Phase Two (advanced theory and simulation) is planned for early 2026. Phase Three (live-fire training) will launch once we secure appropriate outdoor training facilities, estimated for mid-2026."
      },
      {
        q: "What happens if weather affects outdoor training?",
        a: "Currently, all Phase One training is indoors. Future outdoor phases will have backup indoor facilities and flexible rescheduling policies for severe weather."
      }
    ]
  },
  {
    title: "Registration & Scheduling",
    icon: "📅",
    questions: [
      {
        q: "How do I register for a course?",
        a: "You can register online through our signup page, call us at (555) 123-4567, or email info@libertyridegetraininggrounds.com. Payment is required to secure your spot."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, check, all major credit cards, and PayPal. Payment plans are available for multi-course packages - contact us for details."
      },
      {
        q: "Can I reschedule or cancel my course?",
        a: "Yes! You can reschedule up to 48 hours before your course with no penalty. Cancellations made 7+ days in advance receive a full refund minus a $25 processing fee."
      },
      {
        q: "Do you offer group discounts?",
        a: "Yes! Groups of 3+ receive 10% off, groups of 5+ receive 15% off. Corporate and law enforcement groups qualify for special pricing - contact us for a quote."
      },
      {
        q: "Are courses available on weekends?",
        a: "Absolutely! We offer courses Monday through Saturday, with weekend sessions being very popular. Sunday sessions are available by special arrangement for groups."
      }
    ]
  },
  {
    title: "Policies & Requirements",
    icon: "📋",
    questions: [
      {
        q: "Do you conduct background checks?",
        a: "For liability and safety reasons, we reserve the right to conduct background checks for certain advanced courses. Basic courses do not require background checks."
      },
      {
        q: "What is your refund policy?",
        a: "Full refunds are available for cancellations made 7+ days in advance (minus $25 processing fee). Cancellations within 7 days receive a 50% refund. No-shows forfeit the full course fee."
      },
      {
        q: "Can I bring a guest or observer?",
        a: "For safety and focus reasons, observers are not permitted during training sessions. However, we encourage interested family members to register for their own course!"
      },
      {
        q: "Do you offer military or veteran discounts?",
        a: "Yes! All active military and veterans receive a 15% discount on all courses. Law enforcement and first responders receive a 10% discount. Valid ID required."
      }
    ]
  },
  {
    title: "Facilities & Location",
    icon: "📍",
    questions: [
      {
        q: "Where are your training facilities located?",
        a: "Our primary facility is located in Pasco, Washington, in the heart of the Tri-Cities area. The exact address is provided upon course registration for security reasons."
      },
      {
        q: "Is parking available?",
        a: "Yes, we have ample free parking on-site. The facility is easily accessible from I-82 and I-182, with clear signage and directions provided upon registration."
      },
      {
        q: "Are your facilities accessible for people with disabilities?",
        a: "Yes, our facility is fully ADA compliant with wheelchair accessible entrances, restrooms, and classroom spaces. Please let us know of any specific needs when registering."
      },
      {
        q: "Do you provide refreshments during training?",
        a: "We provide coffee, water, and light snacks during breaks. For full-day courses, we include lunch. Dietary restrictions can be accommodated with advance notice."
      }
    ]
  }
];

// Contact methods for the "Still Have Questions" section
export const contactMethods: ContactMethod[] = [
  {
    icon: "📞",
    title: "Call Us",
    description: "Immediate assistance",
    detail: "(555) 123-4567"
  },
  {
    icon: "📧",
    title: "Email Us",
    description: "Detailed responses",
    detail: "info@libertyridegetraininggrounds.com"
  },
  {
    icon: "💬",
    title: "Visit Contact Page",
    description: "All contact options",
    detail: "Contact Page",
    action: {
      text: "Contact Page",
      href: "/contact"
    }
  }
];

// Hero section content
export const faqHero = {
  title: "FREQUENTLY ASKED QUESTIONS",
  subtitle: "Everything You Need to Know",
  description: "Find comprehensive answers to common questions about our training courses, policies, and procedures.",
  backgroundGradient: "from-slate-50 via-white to-gray-50"
};

// Quick navigation section
export const quickNavigation = {
  title: "Quick Navigation",
  description: "Jump to the section that interests you most"
};

// Still have questions section
export const stillHaveQuestions = {
  title: "Still Have Questions?",
  description: "Can't find what you're looking for? Our team is standing by to help answer any questions and guide you through the registration process.",
  icon: "❓"
};

// Call to action buttons
export const faqCallToAction = [
  {
    text: "📋 Register for Course",
    href: "/signup",
    style: "primary"
  },
  {
    text: "🎯 View All Courses",
    href: "/courses",
    style: "secondary"
  }
];

// Utility function to generate anchor links
export const generateAnchorId = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, '-');
};