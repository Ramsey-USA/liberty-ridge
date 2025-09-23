import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-surface-tactical text-text-inverse">
      {/* Enhanced accent bar with optimized variables */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent-gold to-primary"></div>
      
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_30%,_rgba(255,255,255,0.03)_31%,_rgba(255,255,255,0.03)_32%,_transparent_33%)]"></div>
      </div>

      <div className="relative container-enhanced py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Logo + Contact Info */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              {/* Enhanced Logo with optimized variables - 100% larger, matching header */}
              <div className="relative h-24 w-24 mr-4 flex-shrink-0">
                {/* Outer reticle ring - matching header design */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-red-700 rounded-full transform hover:scale-105 transition-transform duration-200 shadow-2xl border-2 border-accent-gold">
                  {/* Inner scope background */}
                  <div className="absolute inset-1 bg-gradient-to-br from-surface-tactical to-black rounded-full flex items-center justify-center">
                    {/* Crosshairs */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Horizontal crosshair */}
                      <div className="absolute w-full h-0.5 bg-accent-gold/60"></div>
                      {/* Vertical crosshair */}
                      <div className="absolute h-full w-0.5 bg-accent-gold/60"></div>
                      {/* Center dot */}
                      <div className="absolute w-1 h-1 bg-accent-gold rounded-full"></div>
                    </div>
                    {/* Letters */}
                    <div className="text-accent-gold font-black text-2xl tracking-tighter filter drop-shadow-lg relative z-10">LR</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col min-w-0">
                <span className="text-2xl font-black text-text-inverse tracking-tight filter drop-shadow-lg">LIBERTY RIDGE</span>
                <span className="text-sm font-semibold text-accent-gold uppercase tracking-widest -mt-1 filter drop-shadow-sm">Training Grounds LLC</span>
              </div>
            </div>
            
            {/* Enhanced contact info with optimized variables */}
            <div className="text-sm text-text-inverse/70 space-y-3">
              <div className="flex items-center group hover:text-text-inverse/90 transition-colors">
                <div className="icon icon-sm text-accent-gold mr-3 flex-shrink-0 icon-location"></div>
                <span>Pasco, WA - 20 min from PSC Airport</span>
              </div>
              <div className="flex items-center min-w-0 group">
                <div className="icon icon-sm text-military-green mr-3 flex-shrink-0 icon-email"></div>
                <a href="mailto:info@libertyridegetraininggrounds.com" 
                   className="hover:text-accent-gold transition-colors truncate">
                  info@libertyridegetraininggrounds.com
                </a>
              </div>
              <div className="flex items-center group">
                <div className="icon icon-sm text-primary mr-3 flex-shrink-0 icon-phone"></div>
                <a href="tel:+15551234567" 
                   className="hover:text-accent-gold transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2 lg:col-span-1">
            {/* Quick Links */}
            <div className="bg-surface-elevated/5 border border-border/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold mb-4 text-text-inverse flex items-center">
                <div className="icon icon-sm text-accent-gold mr-3 icon-star"></div>
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/courses" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Training Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/rankings" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Rankings
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-surface-elevated/5 border border-border/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-sm font-bold mb-4 text-text-inverse flex items-center">
                <div className="icon icon-sm text-primary mr-3 icon-target"></div>
                Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/courses" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Firearm Safety
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Personal Defense
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Tactical Gear
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Join Team
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-text-inverse/70 hover:text-accent-gold transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Custom Training
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="text-center md:text-left lg:text-right space-y-6 md:col-span-2 lg:col-span-1">
            {/* Enhanced Social Media */}
            <div className="bg-surface-elevated/5 border border-border/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-text-inverse mb-4 flex items-center justify-center md:justify-start lg:justify-end">
                <div className="icon icon-sm text-military-green mr-3 icon-web"></div>
                Connect With Us
              </h4>
              <div className="flex justify-center md:justify-start lg:justify-end space-x-4">
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-primary/80 flex items-center justify-center text-text-inverse group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-200 border border-border/20 rounded shadow-tactical">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-secondary/80 flex items-center justify-center text-text-inverse group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-200 border border-border/20 rounded shadow-tactical">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-military-green/80 flex items-center justify-center text-text-inverse group-hover:bg-accent-gold group-hover:scale-110 transition-all duration-200 border border-border/20 rounded shadow-tactical">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
                className="btn-inverse px-8 py-4 shadow-tactical"
              >
                <span className="flex items-center space-x-2">
                  <span className="tracking-wide font-semibold">START TRAINING</span>
                  <span className="text-xl">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Copyright Section */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-text-inverse/60 text-sm">
                © 2024 Liberty Ridge Training Grounds LLC. All rights reserved.
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-xs text-text-inverse/70">
                <div className="icon icon-xs text-accent-gold icon-star"></div>
                <span>Professional Training</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-xs text-text-inverse/70">
              <span>Made with</span>
              <div className="icon icon-sm text-primary icon-flag-usa"></div>
              <span>in Washington State</span>
              <div className="icon icon-xs text-accent-gold icon-bullet"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom accent */}
      <div className="h-1 bg-gradient-to-r from-accent-gold via-primary to-accent-gold"></div>
    </footer>
  );
};

export default Footer;
