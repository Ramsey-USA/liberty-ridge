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
          ? 'bg-tactical-dark/95 backdrop-blur-md shadow-2xl header-border' 
          : 'bg-tactical shadow-2xl'
      }`}
    >
      {/* Elite tactical accent bar */}
      <div className="h-1" style={{ background: 'var(--gradient-text)' }}></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center h-20 sm:h-22 lg:h-24">
          
          {/* Enhanced Logo - Always Visible */}
          <Link href="/" className="flex items-center group mr-6">
            {/* Tactical Reticle Logo */}
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 mr-3 sm:mr-4">
              {/* Outer reticle ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-patriot-red to-red-700 rounded-full transform group-hover:scale-105 transition-transform duration-200 shadow-2xl border-2 border-yellow-400">
                {/* Inner scope background */}
                <div className="absolute inset-1 bg-gradient-to-br from-tactical-dark to-black rounded-full flex items-center justify-center">
                  {/* Crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal crosshair */}
                    <div className="absolute w-full h-0.5 bg-yellow-400/60"></div>
                    {/* Vertical crosshair */}
                    <div className="absolute h-full w-0.5 bg-yellow-400/60"></div>
                    {/* Center dot */}
                    <div className="absolute w-1 h-1 bg-yellow-400 rounded-full"></div>
                  </div>
                  {/* Letters */}
                  <div className="text-yellow-400 font-black text-lg sm:text-xl tracking-tighter filter drop-shadow-lg relative z-10">LR</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-white group-hover:text-yellow-400 transition-colors duration-200 tracking-tight filter drop-shadow-lg">
                LIBERTY RIDGE
              </span>
              <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest -mt-1 filter drop-shadow-sm">
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
            
            {/* Elite Book Now Button - Always Visible */}
            <Link
              href="/signup"
              className="btn-primary relative group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <div className="relative flex items-center space-x-2">
                <span className="font-semibold tracking-wide">BOOK NOW</span>
                <span className="text-white text-lg sm:text-xl">→</span>
              </div>
            </Link>

            {/* Hamburger Menu Button - Far Right */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group bg-white/10 backdrop-blur-sm text-white p-3 rounded-xl border border-white/30 hover:bg-patriot-red/20 transition-all duration-300 shadow-lg hover:border-patriot-red/50 hover:scale-105 focus:ring-2 focus:ring-yellow-400/50"
              aria-label="Toggle main navigation menu"
            >
              <span className="sr-only">Toggle main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-2.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-5 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'}`}></span>
              </div>
              {/* Subtle indicator for menu availability */}
              {!isMenuOpen && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Navigation Menu - Full Width Overlay */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-tactical-dark/98 backdrop-blur-lg border-t border-yellow-400/30 shadow-2xl">
            <div className="px-4 py-8 space-y-2 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between bg-white/10 hover:bg-yellow-400/20 backdrop-blur-sm px-6 py-4 rounded-xl text-white hover:text-yellow-400 font-semibold transition-all duration-300 border border-white/20 hover:border-yellow-400/50 shadow-lg transform hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center space-x-3">
                      {/* Enhanced indicators for special pages */}
                      {item.name === 'Courses' && (
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                      )}
                      {item.name === 'Join Team' && (
                        <div className="w-3 h-3 bg-gradient-to-r from-patriot-red to-red-600 rounded-full shadow-lg"></div>
                      )}
                      {item.name === 'Rankings' && (
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
                      )}
                      {!['Courses', 'Join Team', 'Rankings'].includes(item.name) && (
                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                      )}
                      <span className="text-base font-semibold">{item.name}</span>
                    </span>
                    <span className="text-yellow-400 text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced menu footer */}
              <div className="pt-6 mt-6 border-t border-white/20">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <p className="text-white/70 text-sm font-medium">Ready to start training?</p>
                    <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wide">Elite • Professional • Results</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <span className="text-white/70 text-sm font-medium">Theme:</span>
                      <ThemeToggle />
                    </div>
                    <Link
                      href="/contact"
                      className="text-yellow-400 hover:text-white text-sm font-semibold transition-colors duration-300"
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