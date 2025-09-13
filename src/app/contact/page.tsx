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

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactCards.slice(0, 3).map((card, index) => (
                <div key={index} className="tactical-card text-center">
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-tactical-dark">{card.title}</h3>
                  <p className="text-tactical-gray mb-4">{card.description}</p>
                  <p className="text-2xl font-bold text-patriot-red">{card.primary}</p>
                  {card.secondary && (
                    <p className="text-sm text-tactical-gray mt-2">{card.secondary}</p>
                  )}
                </div>
              ))}
              
              <div className="tactical-card text-center">
                <div className="text-5xl mb-4">🕐</div>
                <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Office Hours</h3>
                <div className="text-tactical-gray space-y-1">
                  {officeHours.map((hours, index) => (
                    <p key={index}>{hours.day}: {hours.hours}</p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Action */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-patriot-blue to-patriot-red text-white p-8 rounded-lg h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-center">{quickAction.title}</h3>
                <p className="text-lg mb-8 text-center">
                  {quickAction.description}
                </p>
                <Link 
                  href={quickAction.primaryButton.href} 
                  className="bg-white text-patriot-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors text-center block"
                >
                  {quickAction.primaryButton.text}
                </Link>
                <div className="text-center mt-4">
                  <Link href={quickAction.secondaryLink.href} className="text-white hover:text-yellow-300 underline">
                    {quickAction.secondaryLink.text}
                  </Link>
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">{callToAction.title}</h3>
              <p className="text-xl mb-6 opacity-95">
                {callToAction.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href={callToAction.primaryButton.href} className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
                  {callToAction.primaryButton.text}
                </Link>
                <Link href={callToAction.secondaryButton.href} className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
                  {callToAction.secondaryButton.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}