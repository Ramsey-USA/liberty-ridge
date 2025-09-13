'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
        <div className="flex justify-between items-center h-20 sm:h-22 lg:h-24">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              {/* Simple Shield Logo */}
              <div className="relative h-14 w-14 mr-4">
                <div className="absolute inset-0 bg-gradient-to-br from-patriot-red to-red-700 rounded-lg transform group-hover:scale-105 transition-transform duration-200 shadow-2xl border-2 border-yellow-400">
                  <div className="absolute inset-2 bg-gradient-to-br from-tactical-dark to-black rounded flex items-center justify-center">
                    <div className="text-yellow-400 font-black text-xl tracking-tighter filter drop-shadow-lg">LR</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors duration-200 tracking-tight filter drop-shadow-lg">
                  LIBERTY RIDGE
                </span>
                <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest -mt-1 filter drop-shadow-sm">
                  Training Grounds LLC
                </span>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-3 rounded-xl text-sm font-semibold text-white hover:text-yellow-400 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-yellow-400/30"
                >
                  {item.name}
                  {/* Elite tactical underline effect */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 shadow-lg"></div>
                  
                  {/* Simple dot indicators for key pages */}
                  {(item.name === 'Courses' || item.name === 'Join Team' || item.name === 'Rankings') && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-90 transition-all duration-300"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Elite Book Now Button */}
            <Link
              href="/signup"
              className="btn-primary relative group px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:scale-105 overflow-hidden tactical-border-gold"
            >
              <div className="relative flex items-center space-x-2">
                <span className="text-lg tracking-wide">BOOK NOW</span>
                <span className="text-white text-xl">→</span>
              </div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group bg-white/10 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-yellow-400/20 transition-all duration-300 shadow-xl border border-white/20 hover:border-yellow-400/50"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-2.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-5 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-tactical-dark/95 backdrop-blur-md border-t border-yellow-400/30 shadow-2xl">
            <div className="px-4 py-6 space-y-3 max-w-7xl mx-auto">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between bg-white/10 hover:bg-yellow-400/20 backdrop-blur-sm px-6 py-4 rounded-2xl text-white hover:text-yellow-400 font-semibold transition-all duration-300 border border-white/20 hover:border-yellow-400/50 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center space-x-3">
                    {/* Simple dot indicators for special pages */}
                    {(item.name === 'Courses' || item.name === 'Join Team' || item.name === 'Rankings') && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    )}
                    <span>{item.name}</span>
                  </span>
                  <span className="text-white text-lg">→</span>
                </Link>
              ))}
              
              {/* Elite mobile action buttons */}
              <div className="pt-6 space-y-4">
                <Link
                  href="/signup"
                  className="btn-primary block px-8 py-5 rounded-2xl shadow-2xl text-center hover:shadow-yellow-400/20 transition-all duration-300 tactical-border-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span className="text-lg">BOOK TRAINING</span>
                    <span className="text-white text-xl">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;