import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title="ABOUT LIBERTY RIDGE"
        subtitle="Founded on Military Values & Veteran Expertise"
        description="Dedicated to providing exceptional tactical and firearm safety education rooted in honor, integrity, and service."
        backgroundGradient="from-gray-100 via-slate-50 to-white"
      />

      {/* Enhanced Founder Section */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="group relative overflow-hidden bg-gradient-to-br from-yellow-600/20 via-red-600/20 to-orange-600/20 backdrop-blur-sm h-96 rounded-3xl border-2 border-yellow-400/50 shadow-2xl transition-all duration-700 hover:shadow-yellow-400/20 hover:shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:-translate-y-2 hover:scale-[1.02] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/30 to-transparent star-bg-top-right"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-500/30 to-transparent star-bg-bottom-left"></div>
                
                <div className="relative z-10 text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-600 via-red-600 to-orange-600 tactical-star flex items-center justify-center text-6xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                      <span className="filter drop-shadow-lg">👨‍💼</span>
                      <div className="absolute -inset-2 tactical-star border-2 border-yellow-400/50 animate-ping"></div>
                    </div>
                  </div>
                  <div className="text-white font-bold text-2xl mb-2 group-hover:text-yellow-300 transition-colors duration-300">Zach Gaudette</div>
                  <div className="text-gray-300 text-lg">Founder & Lead Instructor</div>
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-green-400">
                  🎖️ U.S. Army Veteran
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Meet Zach Gaudette
                </h2>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                  🎖️ Founder & Lead Instructor
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Zach Gaudette is a dedicated U.S. Army veteran who brings years of military 
                  experience and tactical expertise to civilian training. His commitment to 
                  excellence and safety has made Liberty Ridge Training Grounds a trusted 
                  name in tactical education throughout the Pacific Northwest.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond his military service, Zach is a devoted family man, proudly married 
                  to Anne Marie and father to their 18-month-old son, Myles. This personal 
                  perspective on family protection drives his passion for teaching others 
                  the skills they need to keep their loved ones safe.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-3xl shadow-lg border border-white/20">
                  <h4 className="text-xl font-semibold mb-4 flex items-center text-yellow-400">
                    🏆 Current Achievement
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold mb-2 text-yellow-400">#12 Regional</div>
                      <p className="text-lg text-white">Long-Range Shooting</p>
                      <p className="text-sm text-gray-300">First Year of Competition</p>
                    </div>
                    <div className="text-right sm:text-left">
                      <div className="text-lg font-semibold mb-2 text-yellow-400">🎯 Expertise Areas</div>
                      <div className="text-sm space-y-1 text-gray-300">
                        <div className="flex items-center"><span className="text-green-400 mr-2">★</span>Tactical Training</div>
                        <div className="flex items-center"><span className="text-green-400 mr-2">★</span>Firearm Safety</div>
                        <div className="flex items-center"><span className="text-green-400 mr-2">★</span>Long-Range Precision</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-orange-500 hover:to-red-500 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-110 shadow-2xl border-2 border-yellow-300 text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="mr-3 text-xl">📚</span>
                  <span className="relative z-10">View Training Programs</span>
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 text-center">
                  📧 Contact Zach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Service & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Military Service & Credentials
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Zach's military background and ongoing training provide the foundation for 
              world-class tactical education rooted in real-world experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] text-center">
              <div className="text-6xl mb-6 text-patriot-red">🎖️</div>
              <div className="text-3xl font-bold mb-2 text-tactical-dark">U.S. Army</div>
              <div className="text-lg font-semibold text-patriot-red mb-4">Veteran Status</div>
              <p className="text-tactical-gray text-sm leading-relaxed">
                Honorably served with distinction, bringing military discipline and expertise to civilian training.
              </p>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] text-center">
              <div className="text-6xl mb-6 text-yellow-400">🏆</div>
              <div className="text-3xl font-bold mb-2 text-tactical-dark">#12 Regional</div>
              <div className="text-lg font-semibold text-patriot-red mb-4">Long-Range Competition</div>
              <p className="text-tactical-gray text-sm leading-relaxed">
                First-year competitive achievement demonstrating exceptional marksmanship skills and dedication.
              </p>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] text-center">
              <div className="text-6xl mb-6 text-patriot-blue">📚</div>
              <div className="text-3xl font-bold mb-2 text-tactical-dark">Ongoing</div>
              <div className="text-lg font-semibold text-patriot-red mb-4">Professional Development</div>
              <p className="text-tactical-gray text-sm leading-relaxed">
                Continuous training and certification to stay current with latest tactical methodologies.
              </p>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-200 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] text-center">
              <div className="text-6xl mb-6 text-green-500">👨‍👩‍👦</div>
              <div className="text-3xl font-bold mb-2 text-tactical-dark">Family Focus</div>
              <div className="text-lg font-semibold text-patriot-red mb-4">Personal Protection Motivation</div>
              <p className="text-tactical-gray text-sm leading-relaxed">
                Married to Anne Marie with son Myles, driving passion for family protection education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Mission Statement */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">⭐</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">OUR MISSION</span>
              <span className="text-3xl animate-pulse">⭐</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To provide comprehensive, professional tactical training that empowers individuals 
              with the knowledge, skills, and confidence needed for personal protection and 
              firearm safety, rooted in military discipline and veteran expertise.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-16 h-1 bg-yellow-400 opacity-60"></div>
              <div className="text-2xl text-yellow-400">⭐</div>
              <div className="w-16 h-1 bg-yellow-400 opacity-60"></div>
            </div>
          </div>

          {/* Enhanced Core Values Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Seven Core Values
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These Army values guide every aspect of our training and operations, 
              ensuring excellence in everything we do.
            </p>
          </div>
          
          {/* First Row - 4 Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { 
                title: 'Loyalty', 
                desc: 'Bear true faith and allegiance to our students, community, and the principles we stand for.',
                icon: '🎯',
                gradient: 'from-red-600 to-red-800'
              },
              { 
                title: 'Duty', 
                desc: 'Fulfill our obligation to provide the highest quality training with unwavering standards.',
                icon: '⚔️',
                gradient: 'from-blue-600 to-blue-800'
              },
              { 
                title: 'Respect', 
                desc: 'Treat every person with dignity while fostering a professional learning environment.',
                icon: '🛡️',
                gradient: 'from-green-600 to-green-800'
              },
              { 
                title: 'Selfless Service', 
                desc: 'Put the welfare and safety of our students above our own interests.',
                icon: '🤝',
                gradient: 'from-purple-600 to-purple-800'
              },
            ].map((value, index) => (
              <div key={index} className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${value.gradient} tactical-star flex items-center justify-center text-2xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="filter drop-shadow-lg text-white">{value.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Second Row - 3 Values Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                title: 'Honor', 
                desc: 'Live up to our core values and maintain the highest ethical standards.',
                icon: '⭐',
                gradient: 'from-yellow-600 to-orange-800'
              },
              { 
                title: 'Integrity', 
                desc: 'Do what is right, legally and morally, with complete transparency.',
                icon: '💎',
                gradient: 'from-cyan-600 to-teal-800'
              },
              { 
                title: 'Personal Courage', 
                desc: 'Face fear, danger, or adversity while empowering others to do the same.',
                icon: '🦅',
                gradient: 'from-orange-600 to-red-800'
              },
            ].map((value, index) => (
              <div key={index + 4} className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${value.gradient} tactical-star flex items-center justify-center text-2xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="filter drop-shadow-lg text-white">{value.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
                Our Story
              </h2>
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Liberty Ridge Training Grounds was born from a simple belief: that everyone 
                deserves access to professional, military-grade training for personal protection 
                and firearm safety. Founded by Army veteran Zach Gaudette, our company represents 
                the intersection of military discipline and civilian education.
              </p>
              
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Located in Pasco, WA, we're currently in Phase One of our development, focusing 
                on comprehensive classroom training. Our phased approach ensures we build a 
                strong foundation of safety and knowledge before expanding to live-fire training 
                and tactical gear sales.
              </p>
              
              <p className="text-lg text-tactical-gray mb-8 leading-relaxed">
                What sets us apart is our commitment to the seven core Army values that guide 
                every aspect of our training: Loyalty, Duty, Respect, Selfless Service, 
                Honor, Integrity, and Personal Courage. These aren't just words to us—they're 
                the foundation of everything we do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="group relative overflow-hidden bg-gradient-to-r from-patriot-red to-patriot-blue text-white hover:from-patriot-blue hover:to-patriot-red font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-2xl text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="mr-3 text-xl">🎯</span>
                  <span className="relative z-10">Explore Training</span>
                </Link>
                <Link href="/contact" className="border-2 border-tactical-dark text-tactical-dark hover:bg-tactical-dark hover:text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 text-center">
                  💬 Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="group relative overflow-hidden bg-gradient-to-br from-patriot-blue/20 to-patriot-red/20 backdrop-blur-sm rounded-3xl border-2 border-gray-200 shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="h-64 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-t-3xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-2xl font-bold">Founded on Values</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-tactical-dark">Why Choose Liberty Ridge?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: '🎖️', text: 'Veteran-owned and operated' },
                      { icon: '⚔️', text: 'Military-grade training standards' },
                      { icon: '🏆', text: 'Nationally competitive instructor' },
                      { icon: '🛡️', text: 'Comprehensive safety protocols' },
                      { icon: '👨‍🏫', text: 'Personalized training approach' },
                      { icon: '🏠', text: 'Strong community focus' },
                      { icon: '📚', text: 'Evidence-based methodologies' },
                      { icon: '🤝', text: 'Family protection emphasis' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-patriot-red mr-3 text-xl">{item.icon}</span>
                        <span className="text-tactical-gray">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Facility */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">📍</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">STRATEGIC LOCATION</span>
              <span className="text-3xl animate-pulse">📍</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Location & Facility
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategically positioned in Pasco, WA, with exceptional accessibility for 
              local and traveling students seeking elite tactical training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">📍</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300">
                Pasco, Washington
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Heart of the Tri-Cities area, providing easy access for students throughout 
                Eastern Washington and the greater Pacific Northwest region.
              </p>
              <div className="text-sm text-green-400 font-semibold">
                Serving Tri-Cities & Beyond
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-blue-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">✈️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                Airport Proximity
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                <strong className="text-blue-400">20 minutes</strong> from Pasco Airport (PSC). 
                Perfect for traveling students and out-of-state tactical training seekers.
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                Easy Regional & National Access
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-purple-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-purple-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">🏫</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Elite Classroom
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Phase One: Modern, professionally equipped classroom designed specifically 
                for tactical education and advanced safety training.
              </p>
              <div className="text-sm text-purple-400 font-semibold">
                Military-Grade Standards
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-red-600 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-orange-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">🎯</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                Future Grounds
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Phase Three: Dedicated live-fire training grounds planned within 
                <strong className="text-orange-400"> 1 hour</strong> of PSC Airport for comprehensive tactical experience.
              </p>
              <div className="text-sm text-orange-400 font-semibold">
                Phase 3 Development
              </div>
            </div>
          </div>

          {/* Enhanced Access Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Exceptional Accessibility for All Students
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Whether you're a local resident or traveling from across the country, 
                Liberty Ridge offers unmatched convenience and accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h4 className="text-xl font-bold text-white mb-2">Local Students</h4>
                <p className="text-gray-300 text-sm">
                  Easy parking, flexible scheduling, and central Tri-Cities location 
                  for convenient access from Pasco, Kennewick, and Richland.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h4 className="text-xl font-bold text-white mb-2">Regional Travelers</h4>
                <p className="text-gray-300 text-sm">
                  Quick 20-minute drive from Pasco Airport makes us accessible 
                  for students from Seattle, Portland, Spokane, and beyond.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏨</div>
                <h4 className="text-xl font-bold text-white mb-2">Extended Training</h4>
                <p className="text-gray-300 text-sm">
                  Local accommodations and multi-day training programs available 
                  for intensive tactical education experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
            <span className="text-3xl animate-pulse">🚀</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">FUTURE VISION</span>
            <span className="text-3xl animate-pulse">🚀</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Vision for the Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            We&apos;re building more than just a training company—we&apos;re creating a community 
            of prepared, confident, and responsible citizens.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 tactical-star flex items-center justify-center text-2xl shadow-2xl border-2 border-yellow-300">
                <span className="filter drop-shadow-lg text-white font-bold">2</span>
              </div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🎯</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  Phase Two
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                Expanding to include tactical gear sales featuring premium brands 
                like Vortex and Sig Sauer for complete equipment solutions.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-yellow-400 h-2 rounded-full transition-all duration-1000" style={{width: '25%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Planning Phase ★ 25% Complete</div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 tactical-star flex items-center justify-center text-2xl shadow-2xl border-2 border-blue-300">
                <span className="filter drop-shadow-lg text-white font-bold">3</span>
              </div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400 group-hover:text-white transition-colors duration-300">
                  Phase Three
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                Live-fire training sessions on our own dedicated training grounds 
                for comprehensive hands-on tactical experience.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-blue-400 h-2 rounded-full transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Research Phase ★ 10% Complete</div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-red-400/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 tactical-star flex items-center justify-center text-xl shadow-2xl border-2 border-red-300">
                <span className="filter drop-shadow-lg text-white font-bold">∞</span>
              </div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🌟</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  Beyond
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                Expanding our team with additional veteran instructors and 
                specialized training programs for advanced tactical skills.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '5%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Vision Phase ★ 5% Complete</div>
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-gradient-to-r from-patriot-red to-patriot-blue p-4 sm:p-6 rounded-full">
            <span className="text-sm sm:text-lg font-semibold text-white">🚀 Current Focus: Phase One Excellence</span>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Liberty Ridge Family
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Experience the difference that military-grade training and veteran 
            expertise can make in your tactical education and personal protection readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/courses" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              🎯 Start Training Today
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              📧 Get in Touch
            </Link>
          </div>
          <div className="text-sm opacity-75">
            🎖️ Veteran-Owned ★ ⚔️ Military Standards ★ 🏆 Proven Excellence
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}