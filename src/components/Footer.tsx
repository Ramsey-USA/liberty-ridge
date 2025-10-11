import Link from 'next/link';
import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="relative bg-surface-tactical text-text-inverse">
      {/* Enhanced accent bar with optimized variables */}
      <div className="bg-gradient-to-r from-primary to-primary h-1 via-accent-gold"></div>
      
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_30%,_rgba(255,255,255,0.03)_31%,_rgba(255,255,255,0.03)_32%,_transparent_33%)]"></div>
      </div>

      <div className="relative py-16 container-enhanced">
        {/* Main Content Grid */}
        <div className="items-start gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Enhanced LR Logo + Contact Info */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              {/* Enhanced LR Logo with professional branding */}
              <div className="relative flex-shrink-0 mr-5 w-28 h-28">
                {/* Outer tactical ring with LR branding colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-patriot-red via-patriot-red to-patriot-blue shadow-2xl border-3 border-accent-gold rounded-full ring-2 ring-patriot-red/30 hover:scale-105 transition-transform duration-300 transform">
                  {/* Inner tactical scope background */}
                  <div className="absolute inset-2 flex justify-center items-center bg-gradient-to-br from-surface-tactical via-black to-surface-tactical rounded-full">
                    {/* Professional crosshair system */}
                    <div className="absolute inset-0 flex justify-center items-center">
                      {/* Primary crosshairs */}
                      <div className="absolute shadow-sm w-full h-0.5 bg-accent-gold/80"></div>
                      <div className="absolute shadow-sm w-0.5 h-full bg-accent-gold/80"></div>
                      {/* Secondary range markers */}
                      <div className="top-1/4 absolute w-3/4 h-px bg-accent-gold/40"></div>
                      <div className="bottom-1/4 absolute w-3/4 h-px bg-accent-gold/40"></div>
                      <div className="left-1/4 absolute w-px h-3/4 bg-accent-gold/40"></div>
                      <div className="right-1/4 absolute w-px h-3/4 bg-accent-gold/40"></div>
                      {/* Center precision dot */}
                      <div className="absolute shadow-lg rounded-full ring-1 ring-patriot-red/50 w-1.5 h-1.5 bg-accent-gold"></div>
                    </div>
                    {/* LR Typography with enhanced styling */}
                    <div className="z-10 relative text-shadow-lg drop-shadow-xl font-black text-3xl tracking-tighter text-accent-gold filter">
                      LR
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col min-w-0">
                <span className="drop-shadow-xl font-black text-white text-3xl tracking-tight filter">
                  LIBERTY RIDGE
                </span>
                <span className="drop-shadow-sm -mt-1 font-bold text-sm uppercase tracking-[0.2em] text-accent-gold filter">
                  Training Grounds LLC
                </span>
                <span className="mt-1 font-medium text-white/90 text-xs uppercase tracking-wider">
                  Professional Firearms Training
                </span>
              </div>
            </div>
            
            {/* Enhanced contact info with better readability */}
            <div className="space-y-4 bg-black/40 backdrop-blur-sm p-6 border border-accent-gold/30 rounded-lg text-sm">
              <div className="group flex items-center hover:text-white transition-colors">
                <div className="flex-shrink-0 mr-3 text-accent-gold icon icon-sm icon-target"></div>
                <div>
                  <div className="font-semibold text-white">Training Location</div>
                  <div className="text-gray-200">Pasco, WA - 20 min from PSC Airport</div>
                </div>
              </div>
              <div className="group flex items-center min-w-0">
                <div className="flex-shrink-0 mr-3 text-patriot-red icon icon-sm icon-shield"></div>
                <div className="min-w-0">
                  <div className="font-semibold text-white">Professional Inquiries</div>
                  <a href="mailto:training@libertyridegetraininggrounds.com" 
                     className="text-gray-200 text-sm truncate transition-colors hover:text-accent-gold">
                    training@libertyridegetraininggrounds.com
                  </a>
                </div>
              </div>
              <div className="group flex items-center">
                <div className="flex-shrink-0 mr-3 text-accent-gold icon icon-sm icon-flag-usa"></div>
                <div>
                  <div className="font-semibold text-white">Direct Line</div>
                  <a href="tel:+15551234567" 
                     className="text-gray-200 transition-colors hover:text-accent-gold">
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links with improved readability */}
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:col-span-2 lg:col-span-1">
            {/* Quick Links */}
            <div className="bg-black/40 backdrop-blur-sm p-6 border border-accent-gold/30 rounded-lg">
              <h3 className="flex items-center mb-4 font-bold text-white text-sm">
                <div className="mr-3 text-accent-gold icon icon-sm icon-star"></div>
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/courses" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Training Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/rankings" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Rankings
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-black/40 backdrop-blur-sm p-6 border border-accent-gold/30 rounded-lg">
              <h3 className="flex items-center mb-4 font-bold text-white text-sm">
                <div className="mr-3 text-patriot-red icon icon-sm icon-target"></div>
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/courses" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Firearm Safety
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Personal Defense
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Tactical Gear
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Join Team
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="group flex items-center text-gray-200 transition-colors hover:text-accent-gold">
                    <div className="opacity-50 group-hover:opacity-100 mr-3 rounded-full w-2 h-2 transition-opacity bg-accent-gold"></div>
                    Custom Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1 md:text-left text-center lg:text-right">
            {/* Enhanced Social Media with better readability */}
            <div className="bg-black/40 backdrop-blur-sm p-6 border border-accent-gold/30 rounded-lg">
              <h4 className="flex justify-center md:justify-start lg:justify-end items-center mb-4 font-semibold text-white text-sm">
                <div className="mr-3 text-accent-gold icon icon-sm icon-star"></div>
                Connect With Us
              </h4>
              <div className="flex justify-center md:justify-start lg:justify-end space-x-4">
                <a href="#" className="group">
                  <div className="flex justify-center items-center bg-primary/80 shadow-tactical border border-border/20 rounded w-10 h-10 text-text-inverse group-hover:scale-110 transition-all duration-200 group-hover:bg-accent-gold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="flex justify-center items-center bg-secondary/80 shadow-tactical border border-border/20 rounded w-10 h-10 text-text-inverse group-hover:scale-110 transition-all duration-200 group-hover:bg-accent-gold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="flex justify-center items-center bg-military-green/80 shadow-tactical border border-border/20 rounded w-10 h-10 text-text-inverse group-hover:scale-110 transition-all duration-200 group-hover:bg-accent-gold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="flex justify-center md:justify-start lg:justify-end">
              <Link
                href="/signup"
                className="shadow-tactical px-8 py-4 btn-inverse"
              >
                <span className="flex items-center space-x-2">
                  <span className="font-semibold tracking-wide">START TRAINING</span>
                  <span className="text-xl">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced LR Copyright & Branding Section */}
        <div className="bg-gradient-to-r from-surface-tactical/50 via-transparent to-surface-tactical/50 mt-12 pt-8 border-accent-gold/30 border-t rounded-lg">
          <div className="flex lg:flex-row flex-col justify-between items-center space-y-6 lg:space-y-0 lg:text-left text-center">
            
            {/* Primary LR Branding with better contrast */}
            <div className="flex sm:flex-row flex-col items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="text-accent-gold icon icon-sm icon-shield"></div>
                <div className="font-medium text-white text-sm">
                  © 2024 Liberty Ridge Training Grounds LLC
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-200 text-xs">
                <div className="text-patriot-red icon icon-xs icon-star"></div>
                <span className="font-semibold tracking-wide">Professional Firearms Training</span>
              </div>
            </div>

            {/* LR Values & Location with better readability */}
            <div className="flex sm:flex-row flex-col items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2 text-gray-200 text-xs">
                <span className="font-medium">Veteran Owned & Operated</span>
                <div className="text-patriot-blue icon icon-xs icon-flag-usa"></div>
              </div>
              <div className="flex items-center space-x-2 text-gray-200 text-xs">
                <div className="text-accent-gold icon icon-xs icon-target"></div>
                <span className="font-medium">Proudly Serving Washington State</span>
              </div>
            </div>

            {/* LR Excellence Badge with enhanced styling */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-patriot-red/40 to-patriot-blue/40 shadow-lg px-4 py-2 border-2 border-accent-gold rounded-lg">
                <div className="text-accent-gold icon icon-sm icon-crosshair"></div>
                <span className="font-bold text-white text-sm tracking-wide">
                  LR EXCELLENCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom accent */}
      <div className="bg-gradient-to-r via-primary h-1 from-accent-gold to-accent-gold"></div>
    </footer>
  );
});

// Add display name for debugging
Footer.displayName = 'Footer';

export default Footer;
