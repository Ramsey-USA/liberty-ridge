'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
      <div className="h-1 bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center h-20 sm:h-22 lg:h-24">
          
          {/* Enhanced LR Reticle Logo - Clean Design */}
          <Link href="/" className="flex items-center group mr-6">
            {/* LR Theme Reticle Logo */}
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 mr-3 sm:mr-4">
              {/* Outer reticle ring */}
              <div className="absolute inset-0 bg-patriot-red rounded-full transform group-hover:scale-105 transition-transform duration-200 shadow-sharp border-2 border-pure-black dark:border-pure-white">
                {/* Inner reticle background */}
                <div className="absolute inset-1 bg-pure-white dark:bg-pure-black rounded-full flex items-center justify-center">
                  {/* Reticle crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal crosshair line */}
                    <div className="absolute w-8 h-0.5 bg-patriot-red"></div>
                    {/* Vertical crosshair line */}
                    <div className="absolute h-8 w-0.5 bg-patriot-blue"></div>
                    {/* Outer targeting ring */}
                    <div className="absolute w-10 h-10 border border-patriot-red/40 rounded-full"></div>
                    {/* Inner targeting ring */}
                    <div className="absolute w-6 h-6 border border-patriot-blue/40 rounded-full"></div>
                    {/* Center targeting dot */}
                    <div className="absolute w-1.5 h-1.5 bg-pure-black dark:bg-pure-white rounded-full"></div>
                  </div>
                  {/* LR Letters positioned in reticle */}
                  <div className="absolute top-1 left-1 text-xs font-black text-patriot-red">L</div>
                  <div className="absolute bottom-1 right-1 text-xs font-black text-patriot-blue">R</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-text-primary group-hover:text-patriot-red transition-colors duration-200 tracking-tight">
                LIBERTY RIDGE
              </span>
              <span className="text-xs font-medium text-patriot-blue uppercase tracking-widest -mt-1">
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
              className="btn-hero-primary relative group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base"
            >
              <div className="relative flex items-center space-x-2">
                <span className="font-bold tracking-wide">BOOK NOW</span>
                <span className="text-pure-white text-lg sm:text-xl">→</span>
              </div>
            </Link>

            {/* LR Theme Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group bg-surface border border-border text-text-primary p-3 rounded-sm hover:border-patriot-red transition-all duration-300 shadow-sharp hover:shadow-md hover:scale-102 focus:ring-2 focus:ring-patriot-red/50"
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
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-patriot-red rounded-full animate-two-tone-pulse"></div>
              )}
            </button>
          </div>
        </div>

        {/* Enhanced LR Theme Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-surface-elevated border-t border-patriot-red shadow-lg">
            <div className="px-4 py-8 space-y-2 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between bg-surface hover:bg-surface-elevated border border-border hover:border-patriot-red px-6 py-4 rounded-sm text-text-primary hover:text-patriot-red font-medium transition-all duration-300 shadow-sharp hover:shadow-md transform hover:scale-102"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center space-x-3">
                      {/* LR Theme indicators for special pages */}
                      {item.name === 'Courses' && (
                        <div className="w-3 h-3 bg-patriot-red rounded-xs shadow-sharp"></div>
                      )}
                      {item.name === 'Join Team' && (
                        <div className="w-3 h-3 bg-patriot-blue rounded-xs shadow-sharp"></div>
                      )}
                      {item.name === 'Rankings' && (
                        <div className="w-3 h-3 bg-accent-gold rounded-xs shadow-sharp"></div>
                      )}
                      {!['Courses', 'Join Team', 'Rankings'].includes(item.name) && (
                        <div className="w-3 h-3 bg-border rounded-xs"></div>
                      )}
                      <span className="text-base font-medium">{item.name}</span>
                    </span>
                    <span className="text-patriot-blue text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced LR Theme menu footer */}
              <div className="pt-6 mt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <p className="text-text-secondary text-sm font-medium">Ready to start training?</p>
                    <p className="text-patriot-red text-xs font-bold uppercase tracking-wide">Elite • Professional • Results</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-surface border border-border px-4 py-2 rounded-sm">
                      <span className="text-text-secondary text-sm font-medium">Theme:</span>
                      <ThemeToggle />
                    </div>
                    <Link
                      href="/contact"
                      className="text-patriot-blue hover:text-patriot-red text-sm font-bold transition-colors duration-300"
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