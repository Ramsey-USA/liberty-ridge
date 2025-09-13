import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import ContactCard from '@/components/cards/ContactCard';
import Link from 'next/link';
import {
  contactHero,
  contactCards,
  contactMethods,
  officeHours,
  detailedOfficeHours,
  locationInfo,
  emergencyContact,
  quickAction,
  callToAction,
  pageContent
} from '@/data/contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero
        title={contactHero.title}
        subtitle={contactHero.subtitle}
        description={contactHero.description}
      />      {/* Enhanced Contact Information */}
      <section className="py-20 bg-gradient-to-br from-tactical-dark via-gray-900 to-tactical-dark relative overflow-hidden">
        {/* Elite Tactical Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(220,38,38,0.1)_30.5%,_rgba(220,38,38,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to connect with our elite team. We're here to answer your questions 
              and help you start your tactical training journey.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="w-16 h-1 bg-gradient-to-r from-patriot-red to-red-500"></div>
              <div className="text-2xl text-yellow-400">⭐</div>
              <div className="w-16 h-1 bg-gradient-to-r from-patriot-blue to-blue-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Contact Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactCards.slice(0, 3).map((card, index) => (
                <div key={index} className="group relative bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/10 to-patriot-red/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{card.description}</p>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                      <p className="text-lg font-bold text-yellow-400">{card.primary}</p>
                      {card.secondary && (
                        <p className="text-sm text-gray-300 mt-2">{card.secondary}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Enhanced Office Hours Card */}
              <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    🕐
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((hours, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                        <p className="font-semibold text-white">{hours.day}</p>
                        <p className="text-gray-300">{hours.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Quick Action Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gradient-to-br from-patriot-blue via-patriot-red to-patriot-blue text-white p-8 rounded-2xl h-fit shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/30 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border border-white/30">
                      🎯
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                      {quickAction.title}
                    </h3>
                    <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                      {quickAction.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Link 
                      href={quickAction.primaryButton.href} 
                      className="block bg-white/90 backdrop-blur-sm text-patriot-blue hover:bg-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 text-center transform hover:scale-105 shadow-lg border border-white/20"
                    >
                      🎓 {quickAction.primaryButton.text}
                    </Link>
                    <Link 
                      href={quickAction.secondaryLink.href} 
                      className="block border-2 border-white/70 text-white hover:bg-white/20 backdrop-blur-sm hover:text-yellow-400 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 text-center transform hover:scale-105"
                    >
                      📚 {quickAction.secondaryLink.text}
                    </Link>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
                      <span className="text-yellow-400">⭐</span>
                      <span>100+ Students Trained</span>
                      <span className="text-yellow-400">⭐</span>
                    </div>
                    <div className="mt-3 text-xs text-gray-300">
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-tactical-dark to-gray-900 relative overflow-hidden">
        {/* Elite Tactical Background Effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_30%,_rgba(59,130,246,0.1)_30.5%,_rgba(59,130,246,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                {pageContent.contactSection.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              {pageContent.contactSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Methods */}
            <div className="space-y-8">
              {contactMethods.slice(0, 2).map((method, index) => (
                <ContactCard key={index} method={method} />
              ))}

              <div className="enhanced-course-card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                    �
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{contactMethods[2].title}</h3>
                    <p className="text-gray-300">{contactMethods[2].description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href={contactMethods[2].href!} className="block bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300">
                    <p className="font-bold">{contactMethods[2].primary}</p>
                    <p className="text-sm opacity-90">{contactMethods[2].secondary}</p>
                  </Link>
                  <div className="text-sm text-gray-300 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <p className="mb-2 text-white"><strong>Best for:</strong> {contactMethods[2].bestFor}</p>
                    <p className="text-gray-300"><strong>Response time:</strong> {contactMethods[2].responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Location & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {locationInfo.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">{locationInfo.title}</h3>
                    <p className="text-gray-300">{locationInfo.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-4 rounded-lg shadow-lg">
                    <p className="text-xl font-bold">{locationInfo.city}</p>
                    <p className="text-sm opacity-90">{locationInfo.note}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-white mb-2">🚗 Easy Access:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {locationInfo.features.map((feature, index) => (
                        <li key={index} className="tactical-bullet">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">Office Hours</h3>
                    <p className="text-gray-300">When we're available</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {detailedOfficeHours.map((hours, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                        <p className="font-semibold text-white">{hours.day}</p>
                        <p className="text-gray-300">{hours.hours}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/50 p-3 rounded-lg">
                    <p className="text-sm text-yellow-200"><strong>Sunday:</strong> By appointment only</p>
                    <p className="text-xs text-gray-300 mt-1">Perfect for group bookings and special arrangements</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-patriot-red/50 hover:border-patriot-red rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {emergencyContact.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-patriot-red group-hover:text-red-400 transition-colors duration-300">{emergencyContact.title}</h3>
                    <p className="text-gray-300">{emergencyContact.description}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-patriot-red to-red-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">{emergencyContact.phone}</p>
                  <p className="text-sm opacity-90">{emergencyContact.note}</p>
                </div>
                <div className="mt-4 text-sm text-gray-300 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <p className="text-white"><strong>Use for:</strong> {emergencyContact.usage}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-20 text-center">
            <div className="relative bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white p-12 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-white/10"></div>
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/30 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
                  <span className="text-yellow-400">🎖️</span>
                  <span>Join the Elite</span>
                  <span className="text-yellow-400">🎖️</span>
                </div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                  {callToAction.title}
                </h3>
                <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  {callToAction.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href={callToAction.primaryButton.href} className="bg-white/90 backdrop-blur-sm text-patriot-blue hover:bg-white font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20">
                    {callToAction.primaryButton.text}
                  </Link>
                  <Link href={callToAction.secondaryButton.href} className="border-2 border-white/70 text-white hover:bg-white/20 backdrop-blur-sm hover:text-yellow-400 font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105">
                    {callToAction.secondaryButton.text}
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🛡️</span>
                    <span>100% Safety Record</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">⭐</span>
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