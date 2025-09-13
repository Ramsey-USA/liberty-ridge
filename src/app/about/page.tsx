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
        backgroundGradient="from-patriot-red via-tactical-dark to-patriot-blue"
      />

      {/* Enhanced Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-tactical-dark to-patriot-blue h-96 rounded-xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 text-white">👨‍💼</div>
                  <div className="text-white font-bold text-lg">Zach Gaudette</div>
                  <div className="text-gray-300">Founder & Lead Instructor</div>
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  🎖️ U.S. Army Veteran
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-tactical-dark">
                  Meet Zach Gaudette
                </h2>
                <h3 className="text-2xl font-semibold text-patriot-red mb-6">
                  🎖️ Founder & Lead Instructor
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-tactical-gray leading-relaxed">
                  Zach Gaudette is a dedicated U.S. Army veteran who brings years of military 
                  experience and tactical expertise to civilian training. His commitment to 
                  excellence and safety has made Liberty Ridge Training Grounds a trusted 
                  name in tactical education throughout the Pacific Northwest.
                </p>
                
                <p className="text-lg text-tactical-gray leading-relaxed">
                  Beyond his military service, Zach is a devoted family man, proudly married 
                  to Anne Marie and father to their 18-month-old son, Myles. This personal 
                  perspective on family protection drives his passion for teaching others 
                  the skills they need to keep their loved ones safe.
                </p>
                
                <div className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    🏆 Current Achievement
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold mb-2">#12 Regional</div>
                      <p className="text-lg">Long-Range Shooting</p>
                      <p className="text-sm opacity-90">First Year of Competition</p>
                    </div>
                    <div className="text-right sm:text-left">
                      <div className="text-lg font-semibold mb-2">🎯 Expertise Areas</div>
                      <div className="text-sm space-y-1">
                        <div className="tactical-bullet">Tactical Training</div>
                        <div className="tactical-bullet">Firearm Safety</div>
                        <div className="tactical-bullet">Long-Range Precision</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="btn-primary text-center">
                  📚 View Training Programs
                </Link>
                <Link href="/contact" className="btn-outline text-center">
                  📧 Contact Zach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Service & Credentials */}
      <section className="py-20 bg-tactical-light">
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
          
          <div className="home-grid-1">
            <div className="stats-card group">
              <div className="stat-icon">🎖️</div>
              <div className="stat-value">U.S. Army</div>
              <div className="stat-label">Veteran Status</div>
              <p className="stat-description">
                Honorably served with distinction, bringing military discipline and expertise to civilian training.
              </p>
            </div>
            
            <div className="stats-card group">
              <div className="stat-icon">🏆</div>
              <div className="stat-value">#12 Regional</div>
              <div className="stat-label">Long-Range Competition</div>
              <p className="stat-description">
                First-year competitive achievement demonstrating exceptional marksmanship skills and dedication.
              </p>
            </div>
            
            <div className="stats-card group">
              <div className="stat-icon">📚</div>
              <div className="stat-value">Ongoing</div>
              <div className="stat-label">Professional Development</div>
              <p className="stat-description">
                Continuous training and certification to stay current with latest tactical methodologies.
              </p>
            </div>
            
            <div className="stats-card group">
              <div className="stat-icon">👨‍👩‍👦</div>
              <div className="stat-value">Family Focus</div>
              <div className="stat-label">Personal Protection Motivation</div>
              <p className="stat-description">
                Married to Anne Marie with son Myles, driving passion for family protection education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Mission Statement */}
          <div className="mission-statement-hero text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              To provide comprehensive, professional tactical training that empowers individuals 
              with the knowledge, skills, and confidence needed for personal protection and 
              firearm safety, rooted in military discipline and veteran expertise.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-16 h-1 bg-white opacity-60"></div>
              <div className="text-2xl">⭐</div>
              <div className="w-16 h-1 bg-white opacity-60"></div>
            </div>
          </div>

          {/* Enhanced Core Values Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-tactical-dark">
              Seven Core Values
            </h3>
            <p className="text-lg text-tactical-gray max-w-2xl mx-auto">
              These Army values guide every aspect of our training and operations, 
              ensuring excellence in everything we do.
            </p>
          </div>
          
          <div className="home-grid-2">
            {[
              { 
                title: 'Loyalty', 
                desc: 'Bear true faith and allegiance to our students, community, and the principles we stand for.',
                icon: '🎯'
              },
              { 
                title: 'Duty', 
                desc: 'Fulfill our obligation to provide the highest quality training with unwavering standards.',
                icon: '⚔️'
              },
              { 
                title: 'Respect', 
                desc: 'Treat every person with dignity while fostering a professional learning environment.',
                icon: '🛡️'
              },
              { 
                title: 'Selfless Service', 
                desc: 'Put the welfare and safety of our students above our own interests.',
                icon: '🤝'
              },
              { 
                title: 'Honor', 
                desc: 'Live up to our core values and maintain the highest ethical standards.',
                icon: '⭐'
              },
              { 
                title: 'Integrity', 
                desc: 'Do what is right, legally and morally, with complete transparency.',
                icon: '💎'
              },
              { 
                title: 'Personal Courage', 
                desc: 'Face fear, danger, or adversity while empowering others to do the same.',
                icon: '🦅'
              },
            ].map((value, index) => (
              <div key={index} className="mission-value-card text-center group">
                <div className="mission-value-icon">
                  <span className="text-xl sm:text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-patriot-blue transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-tactical-gray text-xs sm:text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Story */}
      <section className="py-20 bg-tactical-light">
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
                <Link href="/courses" className="btn-primary text-center">
                  🎯 Explore Training
                </Link>
                <Link href="/contact" className="btn-outline text-center">
                  💬 Learn More
                </Link>
              </div>
            </div>
            
            <div className="enhanced-course-card">
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-2xl font-bold">Founded on Values</h3>
                  </div>
                </div>
                
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
      </section>

      {/* Location & Facility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Our Location & Facility
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Strategically located in Pasco, WA, serving the Tri-Cities area and beyond 
              with accessible, professional training facilities.
            </p>
          </div>
          
          <div className="home-grid-1">
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">📍</div>
              <h3 className="text-2xl font-bold mb-4 text-tactical-dark group-hover:text-patriot-red transition-colors duration-300">
                Pasco, Washington
              </h3>
              <p className="text-tactical-gray leading-relaxed mb-4">
                Centrally located in the heart of the Tri-Cities area, providing easy access 
                for students throughout Eastern Washington and beyond.
              </p>
              <div className="text-sm text-patriot-blue font-semibold">
                Serving Pasco, Kennewick, Richland & Surrounding Areas
              </div>
            </div>
            
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🏫</div>
              <h3 className="text-2xl font-bold mb-4 text-tactical-dark group-hover:text-patriot-red transition-colors duration-300">
                Professional Classroom
              </h3>
              <p className="text-tactical-gray leading-relaxed mb-4">
                Current Phase One facilities feature a modern, well-equipped classroom environment 
                designed specifically for tactical and safety education.
              </p>
              <div className="text-sm text-patriot-blue font-semibold">
                Phase Two: Expanded Facilities Planned
              </div>
            </div>
            
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🚗</div>
              <h3 className="text-2xl font-bold mb-4 text-tactical-dark group-hover:text-patriot-red transition-colors duration-300">
                Convenient Access
              </h3>
              <p className="text-tactical-gray leading-relaxed mb-4">
                Easy parking and accessibility for all students, with flexible scheduling 
                to accommodate various work schedules and commitments.
              </p>
              <div className="text-sm text-patriot-blue font-semibold">
                Flexible Scheduling Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            We&apos;re building more than just a training company—we&apos;re creating a community 
            of prepared, confident, and responsible citizens.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="future-phase-card group">
              <div className="phase-number">2</div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🎯</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                  Phase Two
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Expanding to include tactical gear sales featuring premium brands 
                like Vortex and Sig Sauer for complete equipment solutions.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-patriot-red h-2 rounded-full transition-all duration-1000" style={{width: '25%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Planning Phase ★ 25% Complete</div>
            </div>
            
            <div className="future-phase-card group">
              <div className="phase-number">3</div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-patriot-blue group-hover:text-white transition-colors duration-300">
                  Phase Three
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Live-fire training sessions on our own dedicated training grounds 
                for comprehensive hands-on tactical experience.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-patriot-blue h-2 rounded-full transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Research Phase ★ 10% Complete</div>
            </div>
            
            <div className="future-phase-card group">
              <div className="phase-number">∞</div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🌟</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                  Beyond
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Expanding our team with additional veteran instructors and 
                specialized training programs for advanced tactical skills.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '5%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Vision Phase ★ 5% Complete</div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-gradient-to-r from-patriot-red to-patriot-blue p-4 sm:p-6 rounded-full">
              <span className="text-sm sm:text-lg font-semibold">🚀 Current Focus: Phase One Excellence</span>
            </div>
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