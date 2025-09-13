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

      {/* Enhanced Open Positions Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/5 via-transparent to-patriot-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-patriot-red to-red-600 px-8 py-3 rounded-full text-sm font-bold mb-8 text-white shadow-lg">
              <span>🎖️</span>
              <span>{pageContent.openPositions.badge}</span>
              <span>🎖️</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-tactical-dark">{pageContent.openPositions.title}</h2>
            <p className="text-xl text-tactical-gray max-w-4xl mx-auto leading-relaxed">
              {pageContent.openPositions.description}
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <div className="w-20 h-1 bg-patriot-red rounded-full"></div>
              <div className="text-3xl">⭐</div>
              <div className="w-20 h-1 bg-patriot-blue rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {openPositions.map((position, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-300">
                <PositionCard position={position} />
              </div>
            ))}
          </div>

          {/* Additional Info Banner */}
          <div className="bg-gradient-to-r from-tactical-dark via-gray-800 to-tactical-dark text-white rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <span>🛡️</span>
                <span>Veteran Owned</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⚔️</span>
                <span>Elite Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏆</span>
                <span>Regional Champions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Join Liberty Ridge */}
      <section className="py-20 bg-gradient-to-br from-tactical-light via-white to-tactical-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(30,64,175,0.3)_0%,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-tactical-dark">
              {pageContent.whyJoin.title}
            </h2>
            <p className="text-xl text-tactical-gray max-w-4xl mx-auto leading-relaxed">
              {pageContent.whyJoin.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Enhanced Benefits Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-tactical-dark">
                  {pageContent.whyJoin.benefitsTitle}
                </h3>
              </div>
              
              <div className="space-y-6">
                {teamBenefits.map((benefit, index) => (
                  <div key={index} className="group relative bg-white border-2 border-gray-200 hover:border-patriot-red rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-patriot-red/5 to-patriot-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-red-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-tactical-dark mb-3 group-hover:text-patriot-red transition-colors duration-300">{benefit.title}</h4>
                        <p className="text-tactical-gray leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Right Column */}
            <div className="space-y-8">
              {/* Enhanced Company Vision */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300">
                <div className="h-80 bg-gradient-to-br from-tactical-dark via-gray-800 to-patriot-blue relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-yellow-500/20"></div>
                  <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-yellow-400/40 rounded-xl"></div>
                  
                  {/* Animated Background Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-8 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce"></div>
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                    <div className="text-8xl mb-6 animate-pulse">🏛️</div>
                    <h3 className="text-3xl font-bold mb-3 text-yellow-400 drop-shadow-lg">{pageContent.companyVision.title}</h3>
                    <p className="text-xl text-yellow-200 font-semibold">{pageContent.companyVision.subtitle}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-80"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-600 border-b-2 border-yellow-200 pb-3">{pageContent.companyVision.sectionTitle}</h3>
                  <div className="space-y-4">
                    {companyVisionItems.map((item, index) => (
                      <div key={index} className="group bg-gradient-to-r from-yellow-50 to-white rounded-xl p-4 hover:from-yellow-100 hover:to-yellow-50 transition-all duration-300 border border-yellow-200 hover:border-yellow-400 hover:shadow-md">
                        <div className="flex items-start space-x-4">
                          <span className="text-yellow-600 text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                          <div className="flex-1">
                            <span className="text-tactical-dark font-bold block text-lg">{item.text}</span>
                            <span className="text-sm text-tactical-gray italic mt-1 block">{item.description}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Team Stats */}
              <div className="relative bg-gradient-to-r from-patriot-red via-red-600 to-patriot-blue text-white rounded-2xl p-8 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold mb-2">{pageContent.teamStats.title}</h4>
                    <div className="w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    {teamStats.map((stat, index) => (
                      <div key={index} className="group">
                        <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                        <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section className="py-20 bg-gradient-to-br from-white via-tactical-light to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(30,64,175,0.1)_50%,transparent_75%)]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-patriot-blue to-patriot-red px-8 py-3 rounded-full text-white font-bold mb-8 shadow-lg">
              <span>🎖️</span>
              <span>Elite Application</span>
              <span>🎖️</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-tactical-dark">
              {pageContent.applicationForm.title}
            </h2>
            <p className="text-xl text-tactical-gray max-w-4xl mx-auto leading-relaxed">
              {pageContent.applicationForm.description}
            </p>
          </div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-patriot-red via-red-600 to-patriot-blue text-white p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  🎖️
                </div>
                <h3 className="text-3xl font-bold mb-3">Application Form</h3>
                <p className="text-xl opacity-95">Join the Liberty Ridge Elite Team</p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                  <div className="text-2xl">⭐</div>
                  <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <form className="space-y-10">
                {/* Enhanced Personal Information */}
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-patriot-blue to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                      👤
                    </div>
                    <h4 className="text-2xl font-bold text-tactical-dark">Personal Information</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-bold text-tactical-gray mb-3 group-focus-within:text-patriot-blue transition-colors duration-200">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-300 hover:border-gray-400"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-bold text-tactical-gray mb-3 group-focus-within:text-patriot-blue transition-colors duration-200">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-300 hover:border-gray-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="group">
                      <label className="block text-sm font-bold text-tactical-gray mb-3 group-focus-within:text-patriot-blue transition-colors duration-200">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-patriot-blue focus:border-patriot-blue transition-all duration-300 hover:border-gray-400"
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

                {/* Enhanced Submit Section */}
                <div className="relative bg-gradient-to-br from-tactical-light via-white to-tactical-light rounded-2xl p-10 border-2 border-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/5 to-patriot-red/5"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-patriot-red to-patriot-blue rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                      🚀
                    </div>
                    <h5 className="text-2xl font-bold text-tactical-dark mb-4">Ready to Join the Elite?</h5>
                    <p className="text-tactical-gray mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                      By submitting this application, you're taking the first step to join an elite team 
                      of veteran professionals dedicated to excellence in tactical training.
                    </p>
                    <button type="submit" className="bg-gradient-to-r from-patriot-red via-red-600 to-patriot-blue text-white font-bold py-5 px-16 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-6">
                      🎖️ Submit Application
                    </button>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 inline-block">
                      <p className="text-sm text-green-800 font-semibold">
                        ⚡ Fast Response: We'll review your application and contact you within 48 hours
                      </p>
                    </div>
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