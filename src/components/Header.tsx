'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Rankings', href: '/rankings' },
    { name: 'Join Team', href: '/join' },
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
      
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        <div className="flex items-center h-20 sm:h-22 lg:h-24">
          
          {/* Enhanced LR Reticle Logo - Clean Design */}
          <Link href="/" className="group flex items-center mr-6">
            {/* LR Theme Reticle Logo */}
            <div className="relative mr-3 sm:mr-4 w-12 sm:w-14 h-12 sm:h-14">
              {/* Outer reticle ring */}
              <div className="absolute inset-0 bg-patriot-red shadow-sharp border-2 border-pure-black dark:border-pure-white rounded-full group-hover:scale-105 transition-transform duration-200 transform">
                {/* Inner reticle background */}
                <div className="absolute inset-1 flex justify-center items-center bg-pure-white dark:bg-pure-black rounded-full">
                  {/* Reticle crosshairs */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    {/* Horizontal crosshair line */}
                    <div className="absolute bg-patriot-red w-8 h-0.5"></div>
                    {/* Vertical crosshair line */}
                    <div className="absolute bg-patriot-blue w-0.5 h-8"></div>
                    {/* Outer targeting ring */}
                    <div className="absolute border border-patriot-red/40 rounded-full w-10 h-10"></div>
                    {/* Inner targeting ring */}
                    <div className="absolute border border-patriot-blue/40 rounded-full w-6 h-6"></div>
                    {/* Center targeting dot */}
                    <div className="absolute bg-pure-black dark:bg-pure-white rounded-full w-1.5 h-1.5"></div>
                  </div>
                  {/* LR Letters positioned in reticle */}
                  <div className="top-1 left-1 absolute font-black text-patriot-red text-xs">L</div>
                  <div className="right-1 bottom-1 absolute font-black text-patriot-blue text-xs">R</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
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
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            {/* Theme Toggle - Always Visible */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            
            {/* LR Theme Book Now Button */}
            <Link
              href="/signup"
              className="group relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base btn-hero-primary"
            >
              <div className="relative flex items-center space-x-2">
                <span className="font-bold tracking-wide">BOOK NOW</span>
                <span className="text-pure-white text-lg sm:text-xl">→</span>
              </div>
            </Link>

            {/* LR Theme Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative bg-surface shadow-sharp hover:shadow-md p-3 border hover:border-patriot-red border-border rounded-sm focus:ring-2 focus:ring-patriot-red/50 text-text-primary hover:scale-102 transition-all duration-300"
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
            <div className="space-y-2 mx-auto px-4 py-8 max-w-7xl">
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex justify-between items-center bg-surface hover:bg-surface-elevated shadow-sharp hover:shadow-md px-6 py-4 border hover:border-patriot-red border-border rounded-sm font-medium text-text-primary hover:text-patriot-red hover:scale-102 transition-all duration-300 transform"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center space-x-3">
                      {/* LR Theme indicators for special pages */}
                      {item.name === 'Courses' && (
                        <div className="bg-patriot-red shadow-sharp rounded-xs w-3 h-3"></div>
                      )}
                      {item.name === 'Join Team' && (
                        <div className="bg-patriot-blue shadow-sharp rounded-xs w-3 h-3"></div>
                      )}
                      {item.name === 'Rankings' && (
                        <div className="shadow-sharp rounded-xs w-3 h-3 bg-accent-gold"></div>
                      )}
                      {!['Courses', 'Join Team', 'Rankings'].includes(item.name) && (
                        <div className="bg-border rounded-xs w-3 h-3"></div>
                      )}
                      <span className="font-medium text-base">{item.name}</span>
                    </span>
                    <span className="text-patriot-blue text-xl transition-transform group-hover:translate-x-1 duration-300 transform">→</span>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced LR Theme menu footer */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex sm:flex-row flex-col justify-between items-center space-y-4 sm:space-y-0">
                  <div className="sm:text-left text-center">
                    <p className="font-medium text-text-secondary text-sm">Ready to start training?</p>
                    <p className="font-bold text-patriot-red text-xs uppercase tracking-wide">Elite • Professional • Results</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-surface px-4 py-2 border border-border rounded-sm">
                      <span className="font-medium text-text-secondary text-sm">Theme:</span>
                      <ThemeToggle />
                    </div>
                    <Link
                      href="/contact"
                      className="font-bold text-patriot-blue hover:text-patriot-red text-sm transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
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
};

export default Header;