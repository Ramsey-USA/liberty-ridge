// Navigation structure for Zach's personal consultation platform
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  featured?: boolean;
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Zach', href: '/about', featured: true },
  { name: 'Consultation Services', href: '/consultation', featured: true },
  { name: 'Rankings', href: '/rankings' },
  { name: 'Media Gallery', href: '/gallery' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export const mobileNavigation = mainNavigation; // Same for mobile

export const footerNavigation = {
  main: mainNavigation.slice(0, 4), // Core navigation items
  secondary: mainNavigation.slice(4), // Support items
};