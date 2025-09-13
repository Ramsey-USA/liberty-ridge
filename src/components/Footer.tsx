import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-tactical text-white overflow-hidden">
      {/* Elite tactical accent bar at top */}
      <div className="h-1" style={{ background: 'var(--gradient-text)' }}></div>
      
      {/* Epic Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
      </div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Row 1: Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Elite Logo + Contact Info */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              {/* Simple logo */}
              <div className="relative h-12 w-12 mr-4 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-patriot-red to-red-700 rounded-lg shadow-2xl border-2 border-yellow-400">
                  <div className="absolute inset-2 bg-gradient-to-br from-tactical-dark to-black rounded flex items-center justify-center">
                    <div className="text-yellow-400 font-black text-lg tracking-tighter filter drop-shadow-lg">LR</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col min-w-0">
                <span className="text-xl font-black text-white tracking-tight filter drop-shadow-lg">LIBERTY RIDGE</span>
                <span className="text-xs font-semibold text-yellow-400 uppercase tracking-widest -mt-1 filter drop-shadow-sm">Training Grounds LLC</span>
              </div>
            </div>
            
            {/* Enhanced contact info */}
            <div className="text-sm text-gray-300 space-y-3">
              <div className="flex items-center group">
                <div className="w-6 h-6 bg-patriot-red rounded flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  📍
                </div>
                <span className="group-hover:text-yellow-400 transition-colors">Pasco, WA - 20 min from PSC Airport</span>
              </div>
              <div className="flex items-center min-w-0 group">
                <div className="w-6 h-6 bg-patriot-blue rounded flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  📧
                </div>
                <a href="mailto:info@libertyridegetraininggrounds.com" className="hover:text-yellow-400 transition-colors truncate">
                  info@libertyridegetraininggrounds.com
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <a href="tel:+15551234567" className="hover:text-yellow-400 transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2 lg:col-span-1">
            {/* Elite Quick Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
              <h3 className="text-sm font-bold mb-4 text-white flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-patriot-red to-red-800 rounded flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">
                  ⭐
                </div>
                Elite Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Training Courses
                </Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link></li>
                <li><Link href="/team" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Team
                </Link></li>
                <li><Link href="/rankings" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Elite Rankings
                </Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQ
                </Link></li>
              </ul>
            </div>

            {/* Elite Services */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
              <h3 className="text-sm font-bold mb-4 text-white flex items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">
                  🎯
                </div>
                Elite Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Tactical Firearm Safety
                </Link></li>
                <li><Link href="/courses" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Elite Personal Defense
                </Link></li>
                <li><Link href="/shop" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Tactical Gear
                </Link></li>
                <li><Link href="/join" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Join Elite Team
                </Link></li>
                <li><Link href="/signup" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Custom Training
                </Link></li>
              </ul>
            </div>
          </div>

          {/* Elite Social + CTA */}
          <div className="text-center md:text-left lg:text-right space-y-6 md:col-span-2 lg:col-span-1">
            {/* Elite Social Media */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-400/30 transition-all duration-300">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center justify-center md:justify-start lg:justify-end">
                <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-800 rounded flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">
                  🌐
                </div>
                Connect With Our Team
              </h4>
              <div className="flex justify-center md:justify-start lg:justify-end space-x-4">
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-yellow-400/20 transition-all duration-300 border border-white/20 group-hover:border-yellow-400/50">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-yellow-400/20 transition-all duration-300 border border-white/20 group-hover:border-yellow-400/50">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-yellow-400/20 transition-all duration-300 border border-white/20 group-hover:border-yellow-400/50">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Elite CTA */}
            <div className="flex justify-center md:justify-start lg:justify-end">
              <Link
                href="/signup"
                className="btn-primary group px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:scale-105 tactical-border-gold"
              >
                <span className="flex items-center space-x-3">
                  <span className="text-lg tracking-wide">START TRAINING</span>
                  <span className="text-white text-xl">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Elite Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-sm">
                © 2024 Liberty Ridge Training Grounds LLC. All rights reserved.
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
                <span>Professional Training</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-xs text-gray-400">
              <span>Made with</span>
              <div className="w-5 h-5 bg-gradient-to-br from-red-600 to-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">🇺🇸</span>
              </div>
              <span>in Washington State</span>
              <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Elite bottom tactical accent */}
      <div className="h-2 shadow-lg" style={{ background: 'var(--gradient-text)' }}></div>
    </footer>
  );
};

export default Footer;