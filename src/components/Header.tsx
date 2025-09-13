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
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
          : 'bg-gradient-to-r from-patriot-blue via-white to-patriot-red shadow-lg'
      }`}
    >
      {/* Patriotic accent bar */}
      <div className="h-1 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-20 sm:h-22 lg:h-24">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              {/* Tactical Shield Logo */}
              <div className="relative h-12 w-12 mr-4">
                <div className="absolute inset-0 bg-gradient-to-br from-patriot-red to-red-700 rounded-lg transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <div className="absolute inset-1 bg-gradient-to-br from-patriot-blue to-blue-800 rounded-md">
                    <div className="absolute inset-2 bg-white rounded-sm flex items-center justify-center">
                      <div className="text-patriot-red font-black text-lg tracking-tighter">LR</div>
                    </div>
                  </div>
                </div>
                {/* Stars decoration */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl font-black text-tactical-dark group-hover:text-patriot-red transition-colors duration-200 tracking-tight">
                  LIBERTY RIDGE
                </span>
                <span className="text-xs font-semibold text-patriot-blue uppercase tracking-widest -mt-1">
                  Training Grounds
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
                  className="relative group px-4 py-2 rounded-lg text-sm font-semibold text-tactical-dark hover:text-patriot-red transition-all duration-200 hover:bg-gray-50"
                >
                  {item.name}
                  {/* Tactical underline effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-patriot-blue to-patriot-red group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  
                  {/* Subtle star accent for key pages */}
                  {(item.name === 'Courses' || item.name === 'Join Team') && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-200"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Book Now Button with enhanced styling */}
            <Link
              href="/signup"
              className="relative group bg-gradient-to-r from-patriot-red to-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <span>BOOK NOW</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group bg-tactical-dark text-white p-3 rounded-lg hover:bg-patriot-red transition-all duration-200 shadow-lg"
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
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between bg-gray-50 hover:bg-gradient-to-r hover:from-patriot-blue/10 hover:to-patriot-red/10 px-4 py-3 rounded-lg text-tactical-dark hover:text-patriot-red font-semibold transition-all duration-200 border border-transparent hover:border-patriot-red/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 text-patriot-red opacity-0 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
              
              {/* Mobile action buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/signup"
                  className="block bg-gradient-to-r from-patriot-red to-red-700 text-white font-bold px-6 py-4 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BOOK TRAINING NOW
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