import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import PositionCard from '@/components/cards/PositionCard';
import FeatureCard from '@/components/cards/FeatureCard';
import StatsCard from '@/components/cards/StatsCard';
import Link from 'next/link';
import {
  openPositions,
  teamBenefits,
  companyVisionItems,
  teamStats,
  applicationFormSections,
  joinHero,
  pageContent
} from '@/data/join';

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title={joinHero.title}
        subtitle={joinHero.subtitle}
        description={joinHero.description}
        backgroundGradient={joinHero.backgroundGradient}
      />

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-patriot-red/10 px-6 py-2 rounded-full text-sm font-semibold mb-6 text-patriot-red">
              <span>🎖️</span>
              <span>{pageContent.openPositions.badge}</span>
              <span>🎖️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">{pageContent.openPositions.title}</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              {pageContent.openPositions.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {openPositions.map((position, index) => (
              <PositionCard key={index} position={position} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Liberty Ridge */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              {pageContent.whyJoin.title}
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              {pageContent.whyJoin.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-tactical-dark">
                {pageContent.whyJoin.benefitsTitle}
              </h3>
              
              <div className="space-y-6">
                {teamBenefits.map((benefit, index) => (
                  <div key={index} className="feature-benefit-card group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-200">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Company Vision */}
              <div className="enhanced-course-card">
                <div className="h-64 bg-gradient-to-br from-tactical-dark via-gray-800 to-patriot-blue rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-yellow-500/10"></div>
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-yellow-400/30 rounded-lg"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-8xl mb-4 animate-pulse">🏛️</div>
                    <h3 className="text-3xl font-bold mb-2 text-yellow-400 drop-shadow-lg">{pageContent.companyVision.title}</h3>
                    <p className="text-xl text-yellow-200 font-semibold">{pageContent.companyVision.subtitle}</p>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full opacity-60"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-yellow-600 border-b-2 border-yellow-200 pb-2">{pageContent.companyVision.sectionTitle}</h3>
                <div className="space-y-4">
                  {companyVisionItems.map((item, index) => (
                    <div key={index} className="group bg-gradient-to-r from-yellow-50 to-white rounded-lg p-3 hover:from-yellow-100 hover:to-yellow-50 transition-all duration-300 border border-yellow-200 hover:border-yellow-400">
                      <div className="flex items-start space-x-3">
                        <span className="text-yellow-600 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                        <div>
                          <span className="text-tactical-dark font-semibold block">{item.text}</span>
                          <span className="text-sm text-tactical-gray italic">{item.description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Stats */}
              <div className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">{pageContent.teamStats.title}</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {teamStats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              {pageContent.applicationForm.title}
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              {pageContent.applicationForm.description}
            </p>
          </div>

          <div className="enhanced-course-card">
            <div className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white rounded-t-2xl p-8 mb-0">
              <div className="text-center">
                <div className="text-6xl mb-4">🎖️</div>
                <h3 className="text-2xl font-bold mb-2">Application Form</h3>
                <p className="opacity-90">Join the Liberty Ridge Elite Team</p>
              </div>
            </div>
            
            <div className="p-8">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h4 className="text-xl font-bold text-tactical-dark mb-6 flex items-center">
                    <span className="mr-2">👤</span>
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Military Background */}
                <div>
                  <h4 className="text-xl font-bold text-tactical-dark mb-6 flex items-center">
                    <span className="mr-2">🎖️</span>
                    Military Background
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Service Branch *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200">
                        <option>Select Branch</option>
                        <option>U.S. Army</option>
                        <option>U.S. Navy</option>
                        <option>U.S. Air Force</option>
                        <option>U.S. Marines</option>
                        <option>U.S. Coast Guard</option>
                        <option>U.S. Space Force</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Years of Service *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200">
                        <option>Select Years</option>
                        <option>2-4 years</option>
                        <option>4-8 years</option>
                        <option>8-12 years</option>
                        <option>12-20 years</option>
                        <option>20+ years</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Military Occupational Specialty (MOS/Rate/AFSC)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                        placeholder="e.g., 11B, 68W, 0311"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Highest Rank Achieved
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                        placeholder="e.g., SGT, CPO, SSGT"
                      />
                    </div>
                  </div>
                </div>

                {/* Position Interest */}
                <div>
                  <h4 className="text-xl font-bold text-tactical-dark mb-6 flex items-center">
                    <span className="mr-2">🎯</span>
                    Position of Interest
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border border-gray-300 rounded-lg p-4 hover:border-patriot-blue transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="combat-medic" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">Combat Medic Instructor</div>
                          <div className="text-sm text-tactical-gray">Lead medical training programs and trauma care education</div>
                        </div>
                      </label>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 hover:border-patriot-blue transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="tactical-movement" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">Tactical Movement Specialist</div>
                          <div className="text-sm text-tactical-gray">Teach close quarters combat and tactical movement techniques</div>
                        </div>
                      </label>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 hover:border-patriot-blue transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="marksmanship" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">Advanced Marksmanship Instructor</div>
                          <div className="text-sm text-tactical-gray">Advanced precision shooting and optics systems training</div>
                        </div>
                      </label>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 hover:border-patriot-blue transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="general" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">General Application</div>
                          <div className="text-sm text-tactical-gray">Open to any position based on my qualifications</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Experience & Skills */}
                <div>
                  <h4 className="text-xl font-bold text-tactical-dark mb-6 flex items-center">
                    <span className="mr-2">🛡️</span>
                    Experience & Skills
                  </h4>
                  <div>
                    <label className="block text-sm font-medium text-tactical-gray mb-2">
                      Specialized Skills & Experience *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                      placeholder="Please describe your tactical training, medical experience, teaching background, certifications, deployments, special operations experience, or any other relevant qualifications that make you a good fit for our team..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-tactical-gray mb-2">
                      Why do you want to join Liberty Ridge Training Grounds? *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200"
                      placeholder="Tell us about your motivation to join our team and continue serving through civilian training..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="text-xl font-bold text-tactical-dark mb-6 flex items-center">
                    <span className="mr-2">📅</span>
                    Availability
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Start Date Availability
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200">
                        <option>Select Timeframe</option>
                        <option>Immediately</option>
                        <option>Within 2 weeks</option>
                        <option>Within 1 month</option>
                        <option>Within 2-3 months</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tactical-gray mb-2">
                        Schedule Preference
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-200">
                        <option>Select Preference</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract/Consulting</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="bg-tactical-light rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-tactical-gray mb-6">
                      By submitting this application, you're taking the first step to join an elite team 
                      of veteran professionals dedicated to excellence in tactical training.
                    </p>
                    <button type="submit" className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      🎖️ Submit Application
                    </button>
                    <p className="text-sm text-tactical-gray mt-4">
                      We'll review your application and contact you within 48 hours
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}