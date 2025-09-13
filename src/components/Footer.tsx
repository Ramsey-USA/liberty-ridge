import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-tactical-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-patriot-red rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">LR</span>
              </div>
              <span className="text-xl font-bold">Liberty Ridge Training Grounds LLC</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional tactical training led by Army veteran Zach Gaudette. 
              Empowering individuals through comprehensive firearm safety and self-defense education.
            </p>
            <div className="text-gray-300">
              <p className="mb-2">📍 Pasco, WA</p>
              <p className="mb-2">📧 info@libertyridegetraininggrounds.com</p>
              <p>📞 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/rankings" className="text-gray-300 hover:text-white transition-colors">National Rankings</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Firearm Safety</Link></li>
              <li><Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Personal Training</Link></li>
              <li><Link href="/shop" className="text-gray-300 hover:text-white transition-colors">Tactical Gear</Link></li>
              <li><Link href="/join" className="text-gray-300 hover:text-white transition-colors">Join Our Team</Link></li>
              <li><Link href="/live-training" className="text-gray-300 hover:text-white transition-colors">Live Training (Coming Soon)</Link></li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-center">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            <div className="text-gray-300">
              <div className="font-semibold text-patriot-red">Loyalty</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white">Duty</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-patriot-blue">Respect</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-patriot-red">Selfless Service</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white">Honor</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-patriot-blue">Integrity</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-patriot-red">Personal Courage</div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <div className="text-gray-300 text-sm">
            © 2024 Liberty Ridge Training Grounds LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;