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
        backgroundGradient={contactHero.backgroundGradient}
      />

      {/* Enhanced Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Get In Touch
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Multiple ways to connect with our team. We're here to answer your questions 
              and help you start your tactical training journey.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="w-16 h-1 bg-patriot-red"></div>
              <div className="text-2xl">⭐</div>
              <div className="w-16 h-1 bg-patriot-blue"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Contact Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactCards.slice(0, 3).map((card, index) => (
                <div key={index} className="group relative bg-white border-2 border-gray-200 hover:border-patriot-blue rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/5 to-patriot-red/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-tactical-gray mb-6 leading-relaxed">{card.description}</p>
                    <div className="bg-tactical-light p-4 rounded-lg">
                      <p className="text-lg font-bold text-patriot-red">{card.primary}</p>
                      {card.secondary && (
                        <p className="text-sm text-tactical-gray mt-2">{card.secondary}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Enhanced Office Hours Card */}
              <div className="group relative bg-white border-2 border-gray-200 hover:border-patriot-blue rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/5 to-patriot-red/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    🕐
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((hours, index) => (
                      <div key={index} className="bg-tactical-light p-3 rounded-lg">
                        <p className="font-semibold text-tactical-dark">{hours.day}</p>
                        <p className="text-tactical-gray">{hours.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Quick Action Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gradient-to-br from-patriot-blue via-patriot-red to-patriot-blue text-white p-8 rounded-2xl h-fit shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                      🎯
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{quickAction.title}</h3>
                    <p className="text-lg mb-8 opacity-95 leading-relaxed">
                      {quickAction.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Link 
                      href={quickAction.primaryButton.href} 
                      className="block bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 text-center transform hover:scale-105 shadow-lg"
                    >
                      🎓 {quickAction.primaryButton.text}
                    </Link>
                    <Link 
                      href={quickAction.secondaryLink.href} 
                      className="block border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 text-center transform hover:scale-105"
                    >
                      📚 {quickAction.secondaryLink.text}
                    </Link>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
                      <span>⭐</span>
                      <span>100+ Students Trained</span>
                      <span>⭐</span>
                    </div>
                    <div className="mt-3 text-xs opacity-75">
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
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              {pageContent.contactSection.title}
            </h2>
            <p className="text-xl text-tactical-dark max-w-3xl mx-auto leading-relaxed font-medium">
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
                    <h3 className="text-2xl font-bold text-tactical-dark">{contactMethods[2].title}</h3>
                    <p className="text-tactical-gray">{contactMethods[2].description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href={contactMethods[2].href!} className="block bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300">
                    <p className="font-bold">{contactMethods[2].primary}</p>
                    <p className="text-sm opacity-90">{contactMethods[2].secondary}</p>
                  </Link>
                  <div className="text-sm text-tactical-dark">
                    <p className="mb-2"><strong>Best for:</strong> {contactMethods[2].bestFor}</p>
                    <p><strong>Response time:</strong> {contactMethods[2].responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Location & Additional Info */}
            <div className="space-y-8">
              <div className="enhanced-course-card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                    {locationInfo.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-tactical-dark">{locationInfo.title}</h3>
                    <p className="text-tactical-gray">{locationInfo.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-4 rounded-lg">
                    <p className="text-xl font-bold">{locationInfo.city}</p>
                    <p className="text-sm opacity-90">{locationInfo.note}</p>
                  </div>
                  <div className="bg-tactical-light p-4 rounded-lg">
                    <h4 className="font-semibold text-tactical-dark mb-2">🚗 Easy Access:</h4>
                    <ul className="text-sm text-tactical-dark space-y-1">
                      {locationInfo.features.map((feature, index) => (
                        <li key={index} className="tactical-bullet">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="enhanced-course-card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-tactical-dark">Office Hours</h3>
                    <p className="text-tactical-gray">When we're available</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {detailedOfficeHours.map((hours, index) => (
                      <div key={index} className="bg-tactical-light p-3 rounded-lg">
                        <p className="font-semibold text-tactical-dark">{hours.day}</p>
                        <p className="text-tactical-gray">{hours.hours}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-100 border border-yellow-400 p-3 rounded-lg">
                    <p className="text-sm text-tactical-dark"><strong>Sunday:</strong> By appointment only</p>
                    <p className="text-xs text-tactical-gray mt-1">Perfect for group bookings and special arrangements</p>
                  </div>
                </div>
              </div>

              <div className="enhanced-course-card border-2 border-patriot-red/30">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                    {emergencyContact.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-patriot-red">{emergencyContact.title}</h3>
                    <p className="text-tactical-gray">{emergencyContact.description}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-patriot-red to-red-600 text-white p-4 rounded-lg">
                  <p className="text-xl font-bold">{emergencyContact.phone}</p>
                  <p className="text-sm opacity-90">{emergencyContact.note}</p>
                </div>
                <div className="mt-4 text-sm text-tactical-dark">
                  <p><strong>Use for:</strong> {emergencyContact.usage}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-20 text-center">
            <div className="relative bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white p-12 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"></div>
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <span>🎖️</span>
                  <span>Join the Elite</span>
                  <span>🎖️</span>
                </div>
                <h3 className="text-4xl font-bold mb-6">{callToAction.title}</h3>
                <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                  {callToAction.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href={callToAction.primaryButton.href} className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {callToAction.primaryButton.text}
                  </Link>
                  <Link href={callToAction.secondaryButton.href} className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105">
                    {callToAction.secondaryButton.text}
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-90">
                  <div className="flex items-center space-x-2">
                    <span>🛡️</span>
                    <span>100% Safety Record</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⭐</span>
                    <span>100+ Students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🏆</span>
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