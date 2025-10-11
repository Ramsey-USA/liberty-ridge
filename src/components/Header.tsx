'use client';

import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';

import ThemeToggle from './ThemeToggle';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize menu toggle function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoize close menu function
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Zach', href: '/about' },
    { name: 'Consultation Services', href: '/consultation' },
    { name: 'Rankings', href: '/rankings' },
    { name: 'Media Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-pure-white/95 dark:bg-pure-black/95 backdrop-blur-md shadow-sharp border-b border-border' 
          : 'bg-pure-white dark:bg-pure-black shadow-sharp border-b border-border'
      }`}
    >
      {/* LR Theme accent bar */}
      <div className="bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red h-1"></div>
      
      <nav className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
        <div className="flex items-center h-24 sm:h-26 lg:h-28">
          
          {/* Enhanced LR Reticle Logo - Clean Design */}
          <Link href="/" className="group flex items-center mr-8 lg:mr-12">
            {/* LR Theme Reticle Logo */}
          <div className="relative mr-3 sm:mr-4 w-24 sm:w-28 h-24 sm:h-28">
            {/* Outer reticle ring */}
            <div className="absolute inset-0 bg-pure-black dark:bg-pure-white shadow-sharp border-2 border-pure-black dark:border-pure-white rounded-full group-hover:scale-105 transition-transform duration-200 transform">
              {/* Inner reticle background */}
              <div className="absolute inset-1 flex justify-center items-center bg-pure-white dark:bg-pure-black rounded-full">
                {/* Reticle crosshairs */}
                <div className="absolute inset-0 flex justify-center items-center">
                  {/* Horizontal crosshair line */}
                  <div className="absolute bg-pure-black dark:bg-pure-white w-16 h-1"></div>
                  {/* Vertical crosshair line */}
                  <div className="absolute bg-pure-black dark:bg-pure-white w-1 h-16"></div>
                  {/* Outer targeting ring */}
                  <div className="absolute border border-pure-black/40 dark:border-pure-white/40 rounded-full w-20 h-20"></div>
                  {/* Inner targeting ring */}
                  <div className="absolute border border-pure-black/40 dark:border-pure-white/40 rounded-full w-12 h-12"></div>
                  {/* Center targeting dot */}
                  <div className="absolute bg-pure-black dark:bg-pure-white rounded-full w-3 h-3"></div>
                </div>
                {/* Enlarged LR Letters positioned closer to center */}
                <div className="top-1/3 left-1/3 absolute font-black text-patriot-red text-3xl sm:text-4xl" style={{transform: 'translate(-25%, -25%)'}}>L</div>
                <div className="right-1/3 bottom-1/3 absolute font-black text-patriot-blue text-3xl sm:text-4xl" style={{transform: 'translate(25%, 25%)'}}>R</div>
              </div>
            </div>
          </div>            <div className="flex flex-col">
              <span className="font-black text-text-primary group-hover:text-patriot-red text-lg sm:text-xl tracking-tight transition-colors duration-200">
                LIBERTY RIDGE
              </span>
              <span className="-mt-1 font-medium text-patriot-blue text-xs uppercase tracking-widest">
                Training Grounds LLC
              </span>
            </div>
          </Link>

          {/* Spacer to push items to the right */}
          <div className="flex-1"></div>

          {/* Action Items - Always Visible */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            {/* Theme Toggle - Always Visible */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            
            {/* Personal Consultation CTA Button */}
            <Link
              href="/consultation"
              className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base btn-hero-primary"
            >
              <div className="relative flex items-center space-x-2">
                <span className="font-bold tracking-wide">BOOK CONSULTATION</span>
                <span className="text-pure-white text-lg sm:text-xl">→</span>
              </div>
            </Link>

            {/* LR Theme Menu Button */}
            <button
              onClick={toggleMenu}
              className="group relative bg-surface shadow-sharp hover:shadow-md p-4 border hover:border-patriot-red border-border rounded-sm focus:ring-2 focus:ring-patriot-red/50 text-text-primary hover:scale-102 transition-all duration-300"
              aria-label="Toggle main navigation menu"
            >
              <span className="sr-only">Toggle main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-2.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-5 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'}`}></span>
              </div>
              {/* LR Theme menu indicator */}
              {!isMenuOpen && (
                <div className="-top-1 -right-1 absolute bg-patriot-red rounded-full w-2 h-2 animate-two-tone-pulse"></div>
              )}
            </button>
          </div>
        </div>

        {/* Enhanced LR Theme Navigation Menu */}
        {isMenuOpen && (
          <div className="top-full right-0 left-0 absolute bg-surface-elevated shadow-lg border-patriot-red border-t">
            <div className="space-y-3 mx-auto px-6 sm:px-8 lg:px-12 py-10 max-w-7xl">
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {navigation.map((item, _index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex justify-between items-center bg-surface hover:bg-surface-elevated shadow-sharp hover:shadow-md px-8 py-5 border hover:border-patriot-red border-border rounded-sm font-medium text-text-primary hover:text-patriot-red hover:scale-102 transition-all duration-300 transform"
                    onClick={closeMenu}
                  >
                    <span className="flex items-center space-x-3">
                      {/* Personal Brand indicators for navigation */}
                      {item.name === 'Consultation Services' && (
                        <div className="bg-patriot-red shadow-sharp rounded-xs w-3 h-3"></div>
                      )}
                      {item.name === 'About Zach' && (
                        <div className="bg-patriot-blue shadow-sharp rounded-xs w-3 h-3"></div>
                      )}
                      {item.name === 'Rankings' && (
                        <div className="shadow-sharp rounded-xs w-3 h-3 bg-accent-gold"></div>
                      )}
                      {item.name === 'Media Gallery' && (
                        <div className="bg-community-green shadow-sharp rounded-xs w-3 h-3"></div>
                      )}
                      {!['Consultation Services', 'About Zach', 'Rankings', 'Media Gallery'].includes(item.name) && (
                        <div className="bg-border rounded-xs w-3 h-3"></div>
                      )}
                      <span className="font-medium text-base">{item.name}</span>
                    </span>
                    <span className="text-patriot-blue text-xl transition-transform group-hover:translate-x-1 duration-300 transform">→</span>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced LR Theme menu footer */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex sm:flex-row flex-col justify-between items-center space-y-6 sm:space-y-0">
                  <div className="sm:text-left text-center">
                    <p className="font-medium text-text-secondary text-sm">Ready for personal consultation?</p>
                    <p className="font-bold text-patriot-red text-xs uppercase tracking-wide">Expert • Personal • Professional</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-3 bg-surface px-5 py-3 border border-border rounded-sm">
                      <span className="font-medium text-text-secondary text-sm">Theme:</span>
                      <ThemeToggle />
                    </div>
                    <Link
                      href="/contact"
                      className="font-bold text-patriot-blue hover:text-patriot-red text-sm transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
});

// Add display name for debugging
Header.displayName = 'Header';

export default Header;