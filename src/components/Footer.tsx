import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-tactical-dark via-gray-900 to-black text-white overflow-hidden">
      {/* Patriotic accent bar at top */}
      <div className="h-1 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Row 1: Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Logo + Contact Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              {/* Compact logo */}
              <div className="relative h-10 w-10 mr-3 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-patriot-red to-red-700 rounded-lg shadow-lg">
                  <div className="absolute inset-1 bg-gradient-to-br from-patriot-blue to-blue-800 rounded-md">
                    <div className="absolute inset-2 bg-white rounded-sm flex items-center justify-center">
                      <div className="text-patriot-red font-black text-sm tracking-tighter">LR</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
              </div>
              
              <div className="flex flex-col min-w-0">
                <span className="text-lg font-black text-white tracking-tight">LIBERTY RIDGE</span>
                <span className="text-xs font-semibold text-patriot-blue uppercase tracking-widest -mt-1">Training Grounds LLC</span>
              </div>
            </div>
            
            {/* Compact contact info */}
            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex items-center">
                <span className="text-patriot-red mr-2 flex-shrink-0">📍</span>
                <span>Pasco, WA</span>
              </div>
              <div className="flex items-center min-w-0">
                <span className="text-patriot-blue mr-2 flex-shrink-0">📧</span>
                <a href="mailto:info@libertyridegetraininggrounds.com" className="hover:text-patriot-blue transition-colors truncate">
                  info@libertyridegetraininggrounds.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2 flex-shrink-0">📞</span>
                <a href="tel:+15551234567" className="hover:text-green-500 transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Combined Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2 lg:col-span-1">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold mb-3 text-white flex items-center">
                <div className="w-1 h-4 bg-gradient-to-b from-patriot-red to-patriot-blue rounded-full mr-2 flex-shrink-0"></div>
                Quick Links
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li><Link href="/courses" className="text-gray-300 hover:text-patriot-red transition-colors block">Training Courses</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-patriot-red transition-colors block">About Us</Link></li>
                <li><Link href="/team" className="text-gray-300 hover:text-patriot-red transition-colors block">Our Team</Link></li>
                <li><Link href="/rankings" className="text-gray-300 hover:text-patriot-red transition-colors block">National Rankings</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-patriot-red transition-colors block">FAQ</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold mb-3 text-white flex items-center">
                <div className="w-1 h-4 bg-gradient-to-b from-patriot-blue to-patriot-red rounded-full mr-2 flex-shrink-0"></div>
                Services
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li><Link href="/courses" className="text-gray-300 hover:text-patriot-blue transition-colors block">Firearm Safety</Link></li>
                <li><Link href="/courses" className="text-gray-300 hover:text-patriot-blue transition-colors block">Personal Defense</Link></li>
                <li><Link href="/shop" className="text-gray-300 hover:text-patriot-blue transition-colors block">Tactical Gear</Link></li>
                <li><Link href="/join" className="text-gray-300 hover:text-patriot-blue transition-colors block">Join Our Team</Link></li>
                <li><Link href="/signup" className="text-gray-300 hover:text-patriot-blue transition-colors block">Custom Training</Link></li>
              </ul>
            </div>
          </div>

          {/* Social + Compact CTA */}
          <div className="text-center md:text-left lg:text-right space-y-4 md:col-span-2 lg:col-span-1">
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Connect With Us</h4>
              <div className="flex justify-center md:justify-start lg:justify-end space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-patriot-red rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-patriot-red rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-patriot-red rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Compact CTA */}
            <div className="flex justify-center md:justify-start lg:justify-end">
              <Link
                href="/signup"
                className="inline-flex items-center bg-gradient-to-r from-patriot-red to-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>START TRAINING</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-2 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Liberty Ridge Training Grounds LLC. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs flex items-center">
              <span>Made with</span>
              <span className="mx-1">🇺🇸</span>
              <span>in Washington</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom patriotic accent */}
      <div className="h-2 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>
    </footer>
  );
};

export default Footer;