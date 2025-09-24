import Link from 'next/link';

import ContactCard from '@/components/cards/ContactCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    callToAction,
    contactMethods,
    detailedOfficeHours,
    emergencyContact,
    locationInfo,
    officeHours,
    pageContent,
    quickAction
} from '@/data/contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Modern Hero Section with Advanced Tailwind Patterns */}
      <section className="relative flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[70vh] overflow-hidden">
        {/* Enhanced Background with Parallax Effect */}
        <div className="z-0 absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40"></div>
        </div>
        
        {/* Animated Patriotic Accent Layers */}
        <div className="top-0 left-0 absolute bg-gradient-to-br from-red-600/25 via-red-500/15 to-transparent w-1/3 h-full animate-pulse"></div>
        <div className="top-0 right-0 absolute bg-gradient-to-bl from-blue-600/25 via-blue-500/15 to-transparent w-1/4 h-2/3 animate-pulse animation-delay-1000"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-yellow-400/20 via-yellow-300/10 to-transparent w-1/2 h-1/3 animate-pulse animation-delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="top-10 left-10 absolute bg-yellow-400/60 rounded-full w-2 h-2 animate-bounce animation-delay-500"></div>
        <div className="top-20 right-20 absolute bg-red-500/60 rounded-full w-3 h-3 animate-bounce animation-delay-1500"></div>
        <div className="bottom-20 left-20 absolute bg-blue-500/60 rounded-full w-2 h-2 animate-bounce animation-delay-2500"></div>
        
        {/* Enhanced Hero Content */}
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 to-slate-900/80 shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-lg mb-8 px-6 py-3 border border-yellow-500/30 hover:border-yellow-400/50 rounded-full transition-all duration-500">
            <div className="bg-yellow-400 rounded-full w-2 h-2 animate-pulse"></div>
            <span className="font-bold text-yellow-400 text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="bg-yellow-400 rounded-full w-2 h-2 animate-pulse animation-delay-500"></div>
          </div>
          
          {/* Main Title */}
          <h1 className="mb-4 sm:mb-6 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
            <span className="inline-block drop-shadow-2xl text-white filter">
              CONTACT
            </span>
            <br />
            <span className="inline-block bg-300% bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 text-transparent animate-gradient-x">
              LIBERTY RIDGE
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-6 sm:mb-8 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide">
            <span className="inline-block drop-shadow-lg text-yellow-400">
              Ready to Start Your Training Journey?
            </span>
          </div>
          
          {/* Description */}
          <p className="drop-shadow-md mx-auto mb-10 sm:mb-12 max-w-4xl font-medium text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-1000">
            Get in touch today. We're here to answer questions and help you choose the right course for your <span className="font-semibold text-yellow-400">tactical training journey</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-1500">
            <a 
              href="tel:(555) 123-4567" 
              className="group relative bg-gradient-to-r from-red-600 hover:from-red-500 to-red-700 hover:to-red-600 shadow-2xl hover:shadow-red-500/25 px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden font-bold text-white text-base sm:text-lg hover:scale-105 transition-all duration-300 transform"
            >
              <span className="z-10 relative flex justify-center items-center">
                🎖️ Call Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 transition-transform translate-y-full group-hover:translate-y-0 duration-300"></div>
            </a>
            
            <a 
              href="mailto:info@libertyridegetraininggrounds.com" 
              className="group relative bg-black/20 shadow-lg hover:shadow-yellow-400/25 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 border-2 border-yellow-400 rounded-xl overflow-hidden font-bold text-yellow-400 hover:text-slate-900 text-base sm:text-lg transition-all duration-300"
            >
              <span className="z-10 relative flex justify-center items-center">
                🎖️ Send Email
              </span>
              <div className="absolute inset-0 bg-yellow-400 transition-transform translate-y-full group-hover:translate-y-0 duration-300"></div>
            </a>
          </div>
        </div>
      </section>      {/* Enhanced Contact Information with Modern Styling */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
          <div className="top-0 left-1/4 absolute bg-yellow-500/10 blur-3xl rounded-full w-96 h-96 animate-bounce animation-delay-1000"></div>
          <div className="right-1/4 bottom-0 absolute bg-red-500/10 blur-3xl rounded-full w-80 h-80 animate-bounce animation-delay-2000"></div>
        </div>

        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="mb-12 lg:mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 to-slate-900/80 shadow-2xl backdrop-blur-lg mb-8 px-6 py-3 border border-yellow-500/30 rounded-full">
              <div className="bg-yellow-400 rounded-full w-2 h-2 animate-pulse"></div>
              <span className="font-bold text-yellow-400 text-sm uppercase tracking-wider">
                Multiple Ways to Connect
              </span>
              <div className="bg-yellow-400 rounded-full w-2 h-2 animate-pulse animation-delay-500"></div>
            </div>
            
            <h2 className="mb-6 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              <span className="bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white drop-shadow-lg text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="mx-auto max-w-4xl font-medium text-slate-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Multiple ways to connect with our elite team. We're here to answer your questions 
              and help you start your <span className="font-semibold text-yellow-400">tactical training journey</span>.
            </p>
          </div>

          <div className="gap-8 lg:gap-12 grid grid-cols-1 xl:grid-cols-3">
            {/* Contact Cards Grid */}
            <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 xl:col-span-2">
              {/* Phone Contact Card */}
              <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-red-500/20 p-6 sm:p-8 border border-slate-700/50 hover:border-red-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 shadow-lg mr-4 p-3 rounded-xl">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white group-hover:text-red-400 text-xl sm:text-2xl transition-colors duration-300">
                      Phone Support
                    </h3>
                    <p className="text-slate-300">Direct line to our team</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="tel:(555) 123-4567" 
                    className="group/btn block relative bg-gradient-to-r from-red-600 hover:from-red-500 to-red-700 hover:to-red-600 shadow-lg px-6 py-4 rounded-xl overflow-hidden font-bold text-white hover:scale-105 transition-all duration-300 transform"
                  >
                    <span className="z-10 relative">
                      <p className="font-bold text-lg">(555) 123-4567</p>
                      <p className="opacity-90 text-sm">Mon-Fri: 9AM-6PM PST | Sat: 10AM-4PM PST</p>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 transition-transform translate-y-full group-hover/btn:translate-y-0 duration-300"></div>
                  </a>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 rounded-lg">
                    <p className="mb-2 text-white"><strong>Best for:</strong> Course enrollment, scheduling, immediate questions</p>
                    <p className="text-slate-300"><strong>Response time:</strong> Immediate during business hours</p>
                  </div>
                </div>
              </div>

              {/* Email Contact Card */}
              <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-blue-500/20 p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg mr-4 p-3 rounded-xl">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white group-hover:text-blue-400 text-xl sm:text-2xl transition-colors duration-300">
                      Email Support
                    </h3>
                    <p className="text-slate-300">Detailed inquiries and documentation</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:info@libertyridegetraininggrounds.com" 
                    className="group/btn block relative bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-700 hover:to-blue-600 shadow-lg px-6 py-4 rounded-xl overflow-hidden font-bold text-white hover:scale-105 transition-all duration-300 transform"
                  >
                    <span className="z-10 relative">
                      <p className="font-bold text-lg">Send Email</p>
                      <p className="opacity-90 text-sm">Professional responses within 24 hours</p>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transition-transform translate-y-full group-hover/btn:translate-y-0 duration-300"></div>
                  </a>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 rounded-lg">
                    <p className="mb-2 text-white"><strong>Best for:</strong> Detailed questions, documentation requests, partnerships</p>
                    <p className="text-slate-300"><strong>Response time:</strong> Within 24 hours (usually faster)</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Access Card */}
              <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-green-500/20 p-6 sm:p-8 border border-slate-700/50 hover:border-green-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 shadow-lg mr-4 p-3 rounded-xl">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white group-hover:text-green-400 text-xl sm:text-2xl transition-colors duration-300">
                      Quick Questions
                    </h3>
                    <p className="text-slate-300">Common inquiries and support</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Link 
                    href="/faq" 
                    className="group/btn block relative bg-gradient-to-r from-green-600 hover:from-green-500 to-green-700 hover:to-green-600 shadow-lg px-6 py-4 rounded-xl overflow-hidden font-bold text-white hover:scale-105 transition-all duration-300 transform"
                  >
                    <span className="z-10 relative">
                      <p className="font-bold text-lg">📋 Visit Our FAQ Page</p>
                      <p className="opacity-90 text-sm">Instant answers to common questions</p>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transition-transform translate-y-full group-hover/btn:translate-y-0 duration-300"></div>
                  </Link>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 rounded-lg">
                    <p className="mb-2 text-white"><strong>Best for:</strong> Course info, requirements, policies, general questions</p>
                    <p className="text-slate-300"><strong>Response time:</strong> Immediate - self-service</p>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-purple-500/20 p-6 sm:p-8 border border-slate-700/50 hover:border-purple-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg mr-4 p-3 rounded-xl">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white group-hover:text-purple-400 text-xl sm:text-2xl transition-colors duration-300">
                      Office Hours
                    </h3>
                    <p className="text-slate-300">When we're available</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {officeHours.map((hours, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm p-3 border border-white/10 rounded-lg">
                      <p className="font-semibold text-white">{hours.day}</p>
                      <p className="text-slate-300">{hours.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Quick Action Panel */}
            <div className="xl:col-span-1">
              <div className="top-8 sticky bg-gradient-to-br from-red-600 via-red-700 to-blue-700 shadow-2xl backdrop-blur-sm p-8 border border-white/20 rounded-2xl h-fit overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"></div>
                <div className="top-0 right-0 absolute bg-gradient-to-bl from-yellow-400/30 to-transparent blur-2xl rounded-full w-32 h-32"></div>
                
                <div className="z-10 relative">
                  <div className="mb-6 text-center">
                    <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-4 border border-white/30 rounded-full w-16 h-16 text-2xl">
                      🎯
                    </div>
                    <h3 className="bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white mb-4 font-bold text-transparent text-2xl">
                      {quickAction.title}
                    </h3>
                    <p className="mb-8 text-gray-200 text-lg leading-relaxed">
                      {quickAction.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Link 
                      href={quickAction.primaryButton.href} 
                      className="block bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm px-6 py-4 border border-white/20 rounded-lg font-bold text-red-700 text-lg text-center hover:scale-105 transition-all duration-300 transform"
                    >
                      �️ {quickAction.primaryButton.text}
                    </Link>
                    <Link 
                      href={quickAction.secondaryLink.href} 
                      className="block hover:bg-white/20 backdrop-blur-sm px-6 py-4 border-2 border-white/70 rounded-lg font-bold text-white hover:text-yellow-400 text-lg text-center hover:scale-105 transition-all duration-300 transform"
                    >
                      📚 {quickAction.secondaryLink.text}
                    </Link>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="flex justify-center items-center space-x-2 text-gray-200 text-sm">
                      <span className="text-yellow-400">🎖️</span>
                      <span>100+ Students Trained</span>
                      <span className="text-yellow-400">🎖️</span>
                    </div>
                    <div className="mt-3 text-gray-300 text-xs">
                      🛡️ 100% Safety Record • 🏆 Regional #12 Instructor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Support */}
      <section className="relative bg-gradient-to-br from-gray-900 via-tactical-dark to-gray-900 py-20 overflow-hidden">
        {/* Elite Tactical Background Effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_30%,_rgba(59,130,246,0.1)_30.5%,_rgba(59,130,246,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-0 left-0 absolute bg-gradient-to-br from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-yellow-400/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>

        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white drop-shadow-lg text-transparent">
                {pageContent.contactSection.title}
              </span>
            </h2>
            <p className="mx-auto max-w-3xl font-medium text-gray-300 text-xl leading-relaxed">
              {pageContent.contactSection.description}
            </p>
          </div>

          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Contact Methods */}
            <div className="space-y-8">
              {contactMethods.slice(0, 2).map((method, index) => (
                <ContactCard key={index} method={method} />
              ))}

              <div className="enhanced-course-card">
                <div className="flex items-center mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-green-600 to-green-700 mr-4 rounded-xl w-16 h-16 text-white text-2xl">
                    �
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-yellow-400 text-2xl transition-colors duration-300">FAQ Support</h3>
                    <p className="text-gray-300">Common questions and support</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href="/faq" className="block bg-gradient-to-r from-green-600 hover:from-green-700 to-green-700 hover:to-green-800 p-4 rounded-lg text-white transition-all duration-300">
                    <p className="font-bold">Visit FAQ Page</p>
                    <p className="opacity-90 text-sm">Get instant answers</p>
                  </Link>
                  <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/10 rounded-lg text-gray-300 text-sm">
                    <p className="mb-2 text-white"><strong>Best for:</strong> Quick questions and course info</p>
                    <p className="text-gray-300"><strong>Response time:</strong> Immediate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Location & Additional Info */}
            <div className="space-y-8">
              <div className="group bg-white/10 hover:shadow-2xl backdrop-blur-sm p-8 border border-white/20 hover:border-yellow-400/50 rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <div className="flex items-center mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-yellow-600 to-orange-600 shadow-lg mr-4 rounded-xl w-16 h-16 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                    {locationInfo.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-yellow-400 text-2xl transition-colors duration-300">{locationInfo.title}</h3>
                    <p className="text-gray-300">{locationInfo.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-600 shadow-lg p-4 rounded-lg text-white">
                    <p className="font-bold text-xl">{locationInfo.city}</p>
                    <p className="opacity-90 text-sm">{locationInfo.note}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 border border-white/10 rounded-lg">
                    <h4 className="mb-2 font-semibold text-white">🚗 Easy Access:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {locationInfo.features.map((feature, index) => (
                        <li key={index} className="tactical-bullet">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 hover:shadow-2xl backdrop-blur-sm p-8 border border-white/20 hover:border-yellow-400/50 rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <div className="flex items-center mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg mr-4 rounded-xl w-16 h-16 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                    ⏰
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-yellow-400 text-2xl transition-colors duration-300">Office Hours</h3>
                    <p className="text-gray-300">When we're available</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="gap-4 grid grid-cols-2 text-sm">
                    {detailedOfficeHours.map((hours, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm p-3 border border-white/10 rounded-lg">
                        <p className="font-semibold text-white">{hours.day}</p>
                        <p className="text-gray-300">{hours.hours}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-400/20 backdrop-blur-sm p-3 border border-yellow-400/50 rounded-lg">
                    <p className="text-yellow-200 text-sm"><strong>Sunday:</strong> By appointment only</p>
                    <p className="mt-1 text-gray-300 text-xs">Perfect for group bookings and special arrangements</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 hover:shadow-2xl backdrop-blur-sm p-8 border-2 border-patriot-red/50 hover:border-patriot-red rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <div className="flex items-center mb-6">
                  <div className="flex justify-center items-center bg-gradient-to-br from-patriot-red to-red-700 shadow-lg mr-4 rounded-xl w-16 h-16 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                    {emergencyContact.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-patriot-red group-hover:text-red-400 text-2xl transition-colors duration-300">{emergencyContact.title}</h3>
                    <p className="text-gray-300">{emergencyContact.description}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-patriot-red to-red-600 shadow-lg p-4 rounded-lg text-white">
                  <p className="font-bold text-xl">{emergencyContact.phone}</p>
                  <p className="opacity-90 text-sm">{emergencyContact.note}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm mt-4 p-4 border border-white/10 rounded-lg text-gray-300 text-sm">
                  <p className="text-white"><strong>Use for:</strong> {emergencyContact.usage}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-20 text-center">
            <div className="relative bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue shadow-2xl backdrop-blur-sm p-12 border border-white/20 rounded-3xl overflow-hidden text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-white/10"></div>
              <div className="top-0 left-0 absolute opacity-20 w-full h-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
              </div>
              <div className="top-0 right-0 absolute bg-gradient-to-bl from-yellow-400/30 to-transparent blur-3xl rounded-full w-64 h-64"></div>
              <div className="z-10 relative">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm mb-6 px-6 py-2 border border-white/30 rounded-full font-semibold text-sm">
                  <span className="text-yellow-400">🎖️</span>
                  <span>Join the Elite</span>
                  <span className="text-yellow-400">🎖️</span>
                </div>
                <h3 className="bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white drop-shadow-lg mb-6 font-bold text-transparent text-4xl">
                  {callToAction.title}
                </h3>
                <p className="mx-auto mb-8 max-w-2xl text-gray-200 text-xl leading-relaxed">
                  {callToAction.description}
                </p>
                <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
                  <Link href={callToAction.primaryButton.href} className="bg-white/90 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm px-10 py-5 border border-white/20 rounded-xl font-bold text-patriot-blue text-lg hover:scale-105 transition-all transform">
                    {callToAction.primaryButton.text}
                  </Link>
                  <Link href={callToAction.secondaryButton.href} className="hover:bg-white/20 backdrop-blur-sm px-10 py-5 border-2 border-white/70 rounded-xl font-bold text-white hover:text-yellow-400 text-lg hover:scale-105 transition-all transform">
                    {callToAction.secondaryButton.text}
                  </Link>
                </div>
                <div className="flex justify-center items-center space-x-6 mt-8 text-gray-200 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🛡️</span>
                    <span>100% Safety Record</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🎖️</span>
                    <span>100+ Students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🏆</span>
                    <span>Regional #12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}