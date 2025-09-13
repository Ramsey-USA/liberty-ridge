export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: string;
  image: string;
  ratings: {
    durability: number;
    accuracy: number;
    value: number;
    easeOfUse: number;
    features: number;
    overall: number;
  };
  description: string;
  features: string[];
}

export interface RatingCategory {
  key: keyof Product['ratings'];
  label: string;
  icon: string;
  description: string;
}

export interface ShopFeature {
  icon: string;
  title: string;
  description: string;
}

// Rating categories with descriptions
export const ratingCategories: RatingCategory[] = [
  { 
    key: 'durability', 
    label: 'Durability', 
    icon: '🛡️',
    description: 'Build quality and long-term reliability'
  },
  { 
    key: 'accuracy', 
    label: 'Accuracy', 
    icon: '🎯',
    description: 'Precision and performance consistency'
  },
  { 
    key: 'value', 
    label: 'Value', 
    icon: '💰',
    description: 'Quality-to-price ratio assessment'
  },
  { 
    key: 'easeOfUse', 
    label: 'Ease of Use', 
    icon: '⚡',
    description: 'User-friendliness and setup simplicity'
  },
  { 
    key: 'features', 
    label: 'Features', 
    icon: '⚙️',
    description: 'Innovation and feature completeness'
  }
];

// Featured products for Phase Two preview
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Vortex Viper PST Gen II 5-25x50',
    brand: 'Vortex',
    category: 'Rifle Scopes',
    price: '$899',
    image: '🔭',
    ratings: {
      durability: 9.2,
      accuracy: 9.5,
      value: 8.8,
      easeOfUse: 8.9,
      features: 9.1,
      overall: 9.1
    },
    description: 'Premium long-range rifle scope with exceptional clarity and precision tracking.',
    features: ['First Focal Plane', 'EBR-2C MRAD Reticle', 'XD Lens Elements', 'ArmorTek Coating']
  },
  {
    id: 2,
    name: 'Sig Sauer P320 X-Series',
    brand: 'Sig Sauer',
    category: 'Firearms',
    price: '$749',
    image: '🔫',
    ratings: {
      durability: 9.4,
      accuracy: 9.3,
      value: 8.9,
      easeOfUse: 9.2,
      features: 9.0,
      overall: 9.2
    },
    description: 'Modular striker-fired pistol system with exceptional accuracy and reliability.',
    features: ['Modular Design', 'X-Ray3 Day/Night Sights', 'Enhanced Trigger', 'Picatinny Rail']
  },
  {
    id: 3,
    name: 'Vortex Strike Eagle 1-8x24',
    brand: 'Vortex',
    category: 'Rifle Scopes',
    price: '$329',
    image: '🎯',
    ratings: {
      durability: 8.7,
      accuracy: 8.9,
      value: 9.4,
      easeOfUse: 9.1,
      features: 8.6,
      overall: 8.9
    },
    description: 'Versatile low-power variable optic perfect for tactical applications.',
    features: ['1-8x Magnification', 'AR-BDC3 Reticle', 'Single-Piece Tube', 'Fully Multi-Coated']
  }
];

// Phase Two development features
export const shopFeatures: ShopFeature[] = [
  {
    icon: "🏪",
    title: "Curated Selection",
    description: "Every product personally tested and approved by our veteran team, ensuring only the highest quality gear makes it to our store."
  },
  {
    icon: "📊",
    title: "Expert Ratings",
    description: "Comprehensive 1-10 scale ratings across 5 key areas: Durability, Accuracy, Value, Ease of Use, and Features, plus overall scores."
  },
  {
    icon: "🎖️",
    title: "Veteran Approved",
    description: "All products tested under real-world conditions by experienced military personnel who understand what professionals need in the field."
  }
];

// Hero section content
export const shopHero = {
  title: "TACTICAL GEAR SHOP",
  subtitle: "Premium Equipment for Elite Performance",
  description: "High-quality tactical gear from trusted brands like Vortex and Sig Sauer, rated by our expert team across 5 key performance areas.",
  backgroundGradient: "from-tactical-dark via-patriot-red to-patriot-navy"
};

// Expert rating system info
export const expertRatingInfo = {
  title: "Expert Rating System",
  description: "Every product is personally tested and rated by our team across 5 critical performance areas, providing you with honest, military-grade evaluations."
};

// Phase Two information
export const phaseTwoInfo = {
  title: "Phase Two Development",
  description: "We're developing a comprehensive e-commerce platform featuring top-tier tactical gear with our expert rating system and veteran-approved selections."
};

// Call to action content
export const callToAction = {
  title: "Be First to Access Our Shop",
  description: "Sign up for notifications and be the first to know when our tactical gear shop launches with expert-rated equipment from Vortex, Sig Sauer, and more.",
  features: "🏪 Curated Selection ★ 📊 Expert Ratings ★ 🎖️ Veteran Approved"
};

// Utility functions
export const getRatingColor = (rating: number): string => {
  if (rating >= 9) return 'text-green-500';
  if (rating >= 8) return 'text-blue-500';
  if (rating >= 7) return 'text-yellow-500';
  if (rating >= 6) return 'text-orange-500';
  return 'text-red-500';
};

export const getRatingBars = (rating: number): number => {
  return Math.round(rating);
};