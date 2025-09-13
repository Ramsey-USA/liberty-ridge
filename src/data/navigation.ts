// Navigation structure for consistent header/menu implementation
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  featured?: boolean;
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses', featured: true },
  { name: 'Shop', href: '/shop' },
  { name: 'About Us', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Rankings', href: '/rankings' },
  { name: 'Join Team', href: '/join', featured: true },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export const mobileNavigation = mainNavigation; // Same for mobile

export const footerNavigation = {
  main: mainNavigation.slice(0, 5), // First 5 items
  secondary: mainNavigation.slice(5), // Remaining items
};