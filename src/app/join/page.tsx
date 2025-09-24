import BulletHero from '@/components/BulletHero';
import PositionCard from '@/components/cards/PositionCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    companyVisionItems,
    joinHero,
    openPositions,
    pageContent,
    teamBenefits,
    teamStats
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
      />

      {/* Enhanced Open Positions Section */}
      <section className="relative bg-tactical py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border tactical-border-gold rounded-full">
              <span className="text-3xl animate-pulse">🎖️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">{pageContent.openPositions.badge}</span>
              <span className="text-3xl animate-pulse">🎖️</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="text-gradient">{pageContent.openPositions.title}</span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-300 text-xl leading-relaxed">
              {pageContent.openPositions.description}
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mb-16">
            {openPositions.map((position, index) => (
              <div key={index} className="hover:scale-105 transition-all duration-300 transform">
                <PositionCard position={position} />
              </div>
            ))}
          </div>

          {/* Additional Info Banner */}
          <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:border-yellow-400/50 rounded-2xl text-white text-center transition-all duration-300">
            <div className="flex justify-center items-center space-x-6 text-lg">
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
      <section className="relative bg-gradient-to-br from-black via-tactical-dark to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-0 left-0 absolute bg-gradient-to-br from-yellow-500/30 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-patriot-red/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border tactical-border-gold rounded-full">
              <span className="text-3xl animate-pulse">🎖️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">TACTICAL ADVANTAGE</span>
              <span className="text-3xl animate-pulse">🎖️</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="text-gradient">{pageContent.whyJoin.title}</span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-300 text-xl leading-relaxed">
              {pageContent.whyJoin.description}
            </p>
          </div>

          <div className="items-start gap-16 grid grid-cols-1 lg:grid-cols-2 mb-16">
            {/* Enhanced Benefits Section */}
            <div className="space-y-8">
              <div className="lg:text-left text-center">
                <h3 className="mb-8 font-bold text-white text-3xl md:text-4xl">
                  <span className="text-gradient">{pageContent.whyJoin.benefitsTitle}</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                {teamBenefits.map((benefit, index) => (
                  <div key={index} className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 border border-white/20 hover:border-yellow-400/50 rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                    <div className="z-10 relative flex items-start space-x-4">
                      <div className="flex justify-center items-center bg-patriot-red shadow-lg rounded-xl w-16 h-16 font-bold text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-3 font-bold text-white group-hover:text-yellow-400 text-xl transition-colors duration-300">{benefit.title}</h4>
                        <p className="text-gray-300 leading-relaxed">
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
              <div className="relative bg-white/10 shadow-2xl backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 rounded-3xl overflow-hidden transition-all duration-300">
                <div className="relative bg-tactical h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-yellow-500/20"></div>
                  <div className="top-6 right-6 bottom-6 left-6 absolute border-2 border-yellow-400/40 rounded-xl"></div>
                  
                  {/* Animated Background Elements */}
                  <div className="top-4 right-4 absolute bg-yellow-400/20 rounded-full w-12 h-12 animate-pulse"></div>
                  <div className="bottom-6 left-8 absolute bg-yellow-400/30 rounded-full w-8 h-8 animate-bounce"></div>
                  
                  <div className="z-10 relative flex flex-col justify-center items-center p-8 h-full text-white text-center">
                    <div className="mb-6 text-8xl animate-pulse">🏛️</div>
                    <h3 className="text-shadow mb-3 font-bold text-yellow-400 text-3xl">{pageContent.companyVision.title}</h3>
                    <p className="font-semibold text-yellow-200 text-xl">{pageContent.companyVision.subtitle}</p>
                  </div>
                  <div className="h-2" style={{ background: 'var(--gradient-text)' }}></div>
                </div>
                
                <div className="p-8">
                  <h3 className="mb-6 pb-3 border-yellow-200 border-b-2 font-bold text-yellow-600 text-2xl">{pageContent.companyVision.sectionTitle}</h3>
                  <div className="space-y-4">
                    {companyVisionItems.map((item, index) => (
                      <div key={index} className="group bg-gradient-to-r from-yellow-50 hover:from-yellow-100 to-white hover:to-yellow-50 hover:shadow-md p-4 border border-yellow-200 hover:border-yellow-400 rounded-xl transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <span className="text-yellow-600 text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                          <div className="flex-1">
                            <span className="block font-bold text-tactical-dark text-lg">{item.text}</span>
                            <span className="block mt-1 text-tactical-gray text-sm italic">{item.description}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Team Stats */}
              <div className="relative bg-gradient-to-r from-patriot-red via-red-600 to-patriot-blue shadow-xl p-8 rounded-2xl overflow-hidden text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10"></div>
                <div className="z-10 relative">
                  <div className="mb-6 text-center">
                    <h4 className="mb-2 font-bold text-2xl">{pageContent.teamStats.title}</h4>
                    <div className="bg-white/50 mx-auto rounded-full w-16 h-1"></div>
                  </div>
                  <div className="gap-6 grid grid-cols-2 text-center">
                    {teamStats.map((stat, index) => (
                      <div key={index} className="group">
                        <div className="mb-2 font-bold text-4xl group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                        <div className="opacity-90 font-medium text-sm">{stat.label}</div>
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
      <section className="relative bg-gradient-to-br from-white via-tactical-light to-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(30,64,175,0.1)_50%,transparent_75%)]"></div>
        </div>
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-patriot-blue to-patriot-red shadow-lg mb-8 px-8 py-3 rounded-full font-bold text-white">
              <span>🎖️</span>
              <span>Elite Application</span>
              <span>🎖️</span>
            </div>
            <h2 className="mb-6 font-bold text-tactical-dark text-4xl md:text-6xl">
              {pageContent.applicationForm.title}
            </h2>
            <p className="mx-auto max-w-4xl text-tactical-gray text-xl leading-relaxed">
              {pageContent.applicationForm.description}
            </p>
          </div>

          <div className="relative bg-white shadow-2xl border-2 border-gray-200 rounded-3xl overflow-hidden">
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-patriot-red via-red-600 to-patriot-blue p-12 overflow-hidden text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10"></div>
              <div className="top-0 right-0 absolute bg-white/10 rounded-full w-32 h-32 -translate-y-16 translate-x-16"></div>
              <div className="bottom-0 left-0 absolute bg-white/5 rounded-full w-24 h-24 -translate-x-12 translate-y-12"></div>
              <div className="z-10 relative text-center">
                <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm mx-auto mb-6 rounded-full w-20 h-20 text-4xl">
                  🎖️
                </div>
                <h3 className="mb-3 font-bold text-3xl">Application Form</h3>
                <p className="opacity-95 text-xl">Join the Liberty Ridge Elite Team</p>
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <div className="bg-white/50 rounded-full w-12 h-1"></div>
                  <div className="text-2xl">🎖️</div>
                  <div className="bg-white/50 rounded-full w-12 h-1"></div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <form className="space-y-10">
                {/* Enhanced Personal Information */}
                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="flex justify-center items-center bg-gradient-to-br from-patriot-blue to-blue-600 mr-4 rounded-xl w-12 h-12 font-bold text-white text-xl">
                      👤
                    </div>
                    <h4 className="font-bold text-tactical-dark text-2xl">Personal Information</h4>
                  </div>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div className="group">
                      <label className="block mb-3 font-bold text-tactical-gray group-focus-within:text-patriot-blue text-sm transition-colors duration-200">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="px-4 py-4 border-2 border-gray-300 hover:border-gray-400 focus:border-patriot-blue rounded-xl focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block mb-3 font-bold text-tactical-gray group-focus-within:text-patriot-blue text-sm transition-colors duration-200">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="px-4 py-4 border-2 border-gray-300 hover:border-gray-400 focus:border-patriot-blue rounded-xl focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
                    <div className="group">
                      <label className="block mb-3 font-bold text-tactical-gray group-focus-within:text-patriot-blue text-sm transition-colors duration-200">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="px-4 py-4 border-2 border-gray-300 hover:border-gray-400 focus:border-patriot-blue rounded-xl focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Military Background */}
                <div>
                  <h4 className="flex items-center mb-6 font-bold text-tactical-dark text-xl">
                    <span className="mr-2">🎖️</span>
                    Military Background
                  </h4>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Service Branch *
                      </label>
                      <select className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200">
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
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Years of Service *
                      </label>
                      <select className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200">
                        <option>Select Years</option>
                        <option>2-4 years</option>
                        <option>4-8 years</option>
                        <option>8-12 years</option>
                        <option>12-20 years</option>
                        <option>20+ years</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-6">
                    <div>
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Military Occupational Specialty (MOS/Rate/AFSC)
                      </label>
                      <input
                        type="text"
                        className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200"
                        placeholder="e.g., 11B, 68W, 0311"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Highest Rank Achieved
                      </label>
                      <input
                        type="text"
                        className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200"
                        placeholder="e.g., SGT, CPO, SSGT"
                      />
                    </div>
                  </div>
                </div>

                {/* Position Interest */}
                <div>
                  <h4 className="flex items-center mb-6 font-bold text-tactical-dark text-xl">
                    <span className="mr-2">🎯</span>
                    Position of Interest
                  </h4>
                  <div className="gap-4 grid grid-cols-1">
                    <div className="p-4 border border-gray-300 hover:border-patriot-blue rounded-lg transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="combat-medic" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">Combat Medic Instructor</div>
                          <div className="text-tactical-gray text-sm">Lead medical training programs and trauma care education</div>
                        </div>
                      </label>
                    </div>
                    <div className="p-4 border border-gray-300 hover:border-patriot-blue rounded-lg transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="tactical-movement" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">Tactical Movement Specialist</div>
                          <div className="text-tactical-gray text-sm">Teach close quarters combat and tactical movement techniques</div>
                        </div>
                      </label>
                    </div>
                    <div className="p-4 border border-gray-300 hover:border-patriot-blue rounded-lg transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="marksmanship" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">Advanced Marksmanship Instructor</div>
                          <div className="text-tactical-gray text-sm">Advanced precision shooting and optics systems training</div>
                        </div>
                      </label>
                    </div>
                    <div className="p-4 border border-gray-300 hover:border-patriot-blue rounded-lg transition-colors duration-200">
                      <label className="flex items-center cursor-pointer">
                        <input type="radio" name="position" value="general" className="mr-3 text-patriot-blue" />
                        <div>
                          <div className="font-semibold text-tactical-dark">General Application</div>
                          <div className="text-tactical-gray text-sm">Open to any position based on my qualifications</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Experience & Skills */}
                <div>
                  <h4 className="flex items-center mb-6 font-bold text-tactical-dark text-xl">
                    <span className="mr-2">🛡️</span>
                    Experience & Skills
                  </h4>
                  <div>
                    <label className="block mb-2 font-medium text-tactical-gray text-sm">
                      Specialized Skills & Experience *
                    </label>
                    <textarea
                      rows={6}
                      className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200"
                      placeholder="Please describe your tactical training, medical experience, teaching background, certifications, deployments, special operations experience, or any other relevant qualifications that make you a good fit for our team..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block mb-2 font-medium text-tactical-gray text-sm">
                      Why do you want to join Liberty Ridge Training Grounds? *
                    </label>
                    <textarea
                      rows={4}
                      className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200"
                      placeholder="Tell us about your motivation to join our team and continue serving through civilian training..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="flex items-center mb-6 font-bold text-tactical-dark text-xl">
                    <span className="mr-2">📅</span>
                    Availability
                  </h4>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Start Date Availability
                      </label>
                      <select className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200">
                        <option>Select Timeframe</option>
                        <option>Immediately</option>
                        <option>Within 2 weeks</option>
                        <option>Within 1 month</option>
                        <option>Within 2-3 months</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-tactical-gray text-sm">
                        Schedule Preference
                      </label>
                      <select className="px-4 py-3 border border-gray-300 focus:border-patriot-blue rounded-lg focus:ring-2 focus:ring-patriot-blue w-full transition-all duration-200">
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
                <div className="relative bg-gradient-to-br from-tactical-light via-white to-tactical-light p-10 border-2 border-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/5 to-patriot-red/5"></div>
                  <div className="z-10 relative text-center">
                    <div className="flex justify-center items-center bg-gradient-to-br from-patriot-red to-patriot-blue mx-auto mb-6 rounded-full w-16 h-16 text-white text-2xl">
                      🎖️
                    </div>
                    <h5 className="mb-4 font-bold text-tactical-dark text-2xl">Ready to Join the Elite?</h5>
                    <p className="mx-auto mb-8 max-w-2xl text-tactical-gray text-lg leading-relaxed">
                      By submitting this application, you're taking the first step to join an elite team 
                      of veteran professionals dedicated to excellence in tactical training.
                    </p>
                    <button type="submit" className="bg-gradient-to-r from-patriot-red via-red-600 to-patriot-blue shadow-xl hover:shadow-2xl mb-6 px-16 py-5 rounded-2xl font-bold text-white text-xl hover:scale-105 transition-all duration-300 transform">
                      🎖️ Submit Application
                    </button>
                    <div className="inline-block bg-green-50 p-4 border border-green-200 rounded-xl">
                      <p className="font-semibold text-green-800 text-sm">
                        🛡️ Fast Response: We'll review your application and contact you within 48 hours
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