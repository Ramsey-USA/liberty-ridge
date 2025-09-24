import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Dark/Light Mode Support */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-patriot-red via-patriot-navy to-black dark:from-patriot-red/90 dark:via-patriot-navy/90 dark:to-gray-900">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/we-want-you.jpg" 
            alt="About Liberty Ridge Training Grounds"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-patriot-red/80 via-patriot-navy/70 to-black/90 dark:from-patriot-red/70 dark:via-patriot-navy/60 dark:to-gray-900/95"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none tracking-tight text-white drop-shadow-2xl">
            ABOUT LIBERTY RIDGE
          </h1>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 text-accent-gold drop-shadow-lg leading-tight tracking-wide">
            Founded on Military Values & Veteran Expertise
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-white max-w-3xl mx-auto drop-shadow-md font-medium leading-relaxed">
            Dedicated to providing exceptional tactical and firearm safety education rooted in honor, integrity, and service.
          </p>
        </div>
      </section>

      {/* Enhanced Founder Section with Dark/Light Mode Support */}
      <section className="py-24 bg-gradient-to-br from-patriot-navy via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(var(--accent-gold),0.1)_49%,_rgba(var(--accent-gold),0.1)_51%,_transparent_52%)] bg-[length:20px_20px]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-patriot-red/10 dark:bg-patriot-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-gold/10 dark:bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm h-96 rounded-2xl border-2 border-accent-gold/30 dark:border-accent-gold/20 shadow-2xl transition-all duration-500 hover:shadow-accent-gold/20 hover:-translate-y-2 hover:scale-105 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-patriot-red to-red-700 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-accent-gold transition-transform duration-500 group-hover:scale-110">
                      <span className="text-white font-black">ZG</span>
                    </div>
                  </div>
                  <div className="text-white font-bold text-2xl mb-2 group-hover:text-accent-gold transition-colors duration-300">Zach Gaudette</div>
                  <div className="text-gray-300 dark:text-gray-400 text-lg">Founder & Lead Instructor</div>
                </div>
                <div className="absolute top-4 left-4 bg-military-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-green-300 flex items-center space-x-2">
                  <div className="icon icon-xs text-white icon-shield"></div>
                  <span>U.S. Army Veteran</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                  Meet Zach Gaudette
                </h2>
                <h3 className="text-2xl font-bold text-accent-gold mb-6 flex items-center space-x-2">
                  <div className="icon icon-sm text-accent-gold icon-award"></div>
                  <span>Founder & Lead Instructor</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
                  Zach Gaudette is a dedicated U.S. Army veteran who brings years of military 
                  experience and tactical expertise to civilian training. His commitment to 
                  excellence and safety has made Liberty Ridge Training Grounds a trusted 
                  name in tactical education throughout the Pacific Northwest.
                </p>
                
                <p className="text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
                  Beyond his military service, Zach is a devoted family man, proudly married 
                  to Anne Marie and father to their 18-month-old son, Myles. This personal 
                  perspective on family protection drives his passion for teaching others 
                  the skills they need to keep their loved ones safe.
                </p>
                
                <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm text-white p-6 rounded-2xl shadow-lg border border-accent-gold/30 dark:border-accent-gold/20">
                  <h4 className="text-xl font-bold mb-4 flex items-center text-accent-gold space-x-2">
                    <div className="icon icon-sm text-accent-gold icon-target"></div>
                    <span>Current Achievement</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-black mb-2 text-accent-gold">#12 Regional</div>
                      <p className="text-lg text-white">Long-Range Shooting</p>
                      <p className="text-sm text-gray-300 dark:text-gray-400">First Year of Competition</p>
                    </div>
                    <div className="text-right sm:text-left">
                      <div className="text-lg font-bold mb-2 text-accent-gold flex items-center space-x-2">
                        <div className="icon icon-xs text-accent-gold icon-crosshair"></div>
                        <span>Expertise Areas</span>
                      </div>
                      <div className="text-sm space-y-1 text-gray-300 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <div className="icon icon-xs text-military-green icon-bullet"></div>
                          <span>Tactical Training</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="icon icon-xs text-military-green icon-bullet"></div>
                          <span>Firearm Safety</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="icon icon-xs text-military-green icon-bullet"></div>
                          <span>Long-Range Precision</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="bg-patriot-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center space-x-2">
                  <div className="icon icon-sm text-white icon-target"></div>
                  <span>View Training Programs</span>
                </Link>
                <Link href="/contact" className="border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 text-center flex items-center justify-center space-x-2">
                  <div className="icon icon-sm icon-location"></div>
                  <span>Contact Zach</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Service & Credentials with Dark/Light Mode Support */}
      <section className="py-20 bg-background dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-badge-enhanced mx-auto mb-6 bg-surface border-2 border-border px-4 py-2 rounded-lg inline-flex items-center space-x-2">
              <div className="icon icon-xs text-patriot-red icon-shield"></div>
              <span className="text-text-primary font-semibold text-sm tracking-wide uppercase">Military Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-text-primary">
              Military Service & Credentials
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Zach's military background and ongoing training provide the foundation for 
              world-class tactical education rooted in real-world experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden bg-surface border-2 border-border rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:border-patriot-red text-center">
              <div className="icon icon-3xl text-patriot-red mb-6 mx-auto icon-shield"></div>
              <div className="text-3xl font-black mb-2 text-text-primary">U.S. Army</div>
              <div className="text-lg font-bold text-patriot-red mb-4">Veteran Status</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Honorably served with distinction, bringing military discipline and expertise to civilian training.
              </p>
            </div>
            
            <div className="group relative overflow-hidden bg-surface border-2 border-border rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:border-accent-gold text-center">
              <div className="icon icon-3xl text-accent-gold mb-6 mx-auto icon-award"></div>
              <div className="text-3xl font-black mb-2 text-text-primary">#12 Regional</div>
              <div className="text-lg font-bold text-patriot-red mb-4">Long-Range Competition</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                First-year competitive achievement demonstrating exceptional marksmanship skills and dedication.
              </p>
            </div>
            
            <div className="group relative overflow-hidden bg-surface border-2 border-border rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:border-patriot-blue text-center">
              <div className="icon icon-3xl text-patriot-blue mb-6 mx-auto icon-target"></div>
              <div className="text-3xl font-black mb-2 text-text-primary">Ongoing</div>
              <div className="text-lg font-bold text-patriot-red mb-4">Professional Development</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Continuous training and certification to stay current with latest tactical methodologies.
              </p>
            </div>
            
            <div className="group relative overflow-hidden bg-surface border-2 border-border rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:border-military-green text-center">
              <div className="icon icon-3xl text-military-green mb-6 mx-auto icon-users"></div>
              <div className="text-3xl font-black mb-2 text-text-primary">Family Focus</div>
              <div className="text-lg font-bold text-patriot-red mb-4">Personal Protection Motivation</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Married to Anne Marie with son Myles, driving passion for family protection education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values with Dark/Light Mode Support */}
      <section className="py-24 bg-gradient-to-br from-patriot-navy via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(var(--accent-gold),0.1)_49%,_rgba(var(--accent-gold),0.1)_51%,_transparent_52%)] bg-[length:20px_20px]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-patriot-red/10 dark:bg-patriot-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-gold/10 dark:bg-accent-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Mission Statement */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm px-8 py-4 rounded-full border border-accent-gold/50 dark:border-accent-gold/30 mb-8 shadow-2xl">
              <div className="icon icon-sm text-accent-gold icon-star"></div>
              <span className="text-accent-gold font-bold text-lg tracking-wider">OUR MISSION</span>
              <div className="icon icon-sm text-accent-gold icon-star"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              <span className="bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To provide comprehensive, professional tactical training that empowers individuals 
              with the knowledge, skills, and confidence needed for personal protection and 
              firearm safety, rooted in military discipline and veteran expertise.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-16 h-1 bg-accent-gold opacity-60"></div>
              <div className="icon icon-sm text-accent-gold icon-star"></div>
              <div className="w-16 h-1 bg-accent-gold opacity-60"></div>
            </div>
          </div>

          {/* Enhanced Core Values Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
              Seven Core Values
            </h3>
            <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
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
                icon: 'icon-shield',
                color: 'patriot-red'
              },
              { 
                title: 'Duty', 
                desc: 'Fulfill our obligation to provide the highest quality training with unwavering standards.',
                icon: 'icon-target',
                color: 'patriot-blue'
              },
              { 
                title: 'Respect', 
                desc: 'Treat every person with dignity while fostering a professional learning environment.',
                icon: 'icon-users',
                color: 'military-green'
              },
              { 
                title: 'Selfless Service', 
                desc: 'Put the welfare and safety of our students above our own interests.',
                icon: 'icon-crosshair',
                color: 'accent-gold'
              },
            ].map((value, index) => (
              <div key={index} className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-accent-gold/50 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className={`icon icon-3xl text-${value.color} mb-4 mx-auto ${value.icon} group-hover:scale-110 transition-transform duration-500`}></div>
                <h3 className="text-lg font-bold mb-3 text-accent-gold group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
                icon: 'icon-award',
                color: 'accent-gold'
              },
              { 
                title: 'Integrity', 
                desc: 'Do what is right, legally and morally, with complete transparency.',
                icon: 'icon-shield',
                color: 'patriot-blue'
              },
              { 
                title: 'Personal Courage', 
                desc: 'Face fear, danger, or adversity while empowering others to do the same.',
                icon: 'icon-crosshair',
                color: 'patriot-red'
              },
            ].map((value, index) => (
              <div key={index + 4} className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-accent-gold/50 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className={`icon icon-3xl text-${value.color} mb-4 mx-auto ${value.icon} group-hover:scale-110 transition-transform duration-500`}></div>
                <h3 className="text-lg font-bold mb-3 text-accent-gold group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Story with Dark/Light Mode Support */}
      <section className="py-20 bg-background dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-badge-enhanced mb-6 bg-surface border-2 border-border px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                <div className="icon icon-xs text-patriot-red icon-shield"></div>
                <span className="text-text-primary font-semibold text-sm tracking-wide uppercase">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-text-primary">
                Our Story
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Liberty Ridge Training Grounds was born from a simple belief: that everyone 
                deserves access to professional, military-grade training for personal protection 
                and firearm safety. Founded by Army veteran Zach Gaudette, our company represents 
                the intersection of military discipline and civilian education.
              </p>
              
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Located in Pasco, WA, we're currently in Phase One of our development, focusing 
                on comprehensive classroom training. Our phased approach ensures we build a 
                strong foundation of safety and knowledge before expanding to live-fire training 
                and tactical gear sales.
              </p>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                What sets us apart is our commitment to the seven core Army values that guide 
                every aspect of our training: Loyalty, Duty, Respect, Selfless Service, 
                Honor, Integrity, and Personal Courage. These aren't just words to us—they're 
                the foundation of everything we do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="bg-patriot-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center space-x-2">
                  <div className="icon icon-sm text-white icon-target"></div>
                  <span>Explore Training</span>
                </Link>
                <Link href="/contact" className="border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 text-center flex items-center justify-center space-x-2">
                  <div className="icon icon-sm icon-location"></div>
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="group relative overflow-hidden bg-surface border-2 border-border rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105">
                <div className="h-64 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-t-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="icon icon-3xl text-white mb-4 mx-auto icon-shield"></div>
                    <h3 className="text-2xl font-black">Founded on Values</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-6 text-text-primary">Why Choose Liberty Ridge?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: 'icon-shield', text: 'Veteran-owned and operated', color: 'patriot-red' },
                      { icon: 'icon-crosshair', text: 'Military-grade training standards', color: 'patriot-blue' },
                      { icon: 'icon-award', text: 'Nationally competitive instructor', color: 'accent-gold' },
                      { icon: 'icon-shield', text: 'Comprehensive safety protocols', color: 'military-green' },
                      { icon: 'icon-users', text: 'Personalized training approach', color: 'patriot-red' },
                      { icon: 'icon-location', text: 'Strong community focus', color: 'patriot-blue' },
                      { icon: 'icon-target', text: 'Evidence-based methodologies', color: 'accent-gold' },
                      { icon: 'icon-users', text: 'Family protection emphasis', color: 'military-green' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`icon icon-sm text-${item.color} ${item.icon}`}></div>
                        <span className="text-text-secondary">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Facility with Dark/Light Mode Support */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 dark:from-patriot-red/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 dark:from-patriot-blue/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 dark:border-yellow-400/30 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">📍</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">STRATEGIC LOCATION</span>
              <span className="text-3xl animate-pulse">📍</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Location & Facility
              </span>
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategically positioned in Pasco, WA, with exceptional accessibility for 
              local and traveling students seeking elite tactical training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">📍</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300">
                Pasco, Washington
              </h3>
              <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Heart of the Tri-Cities area, providing easy access for students throughout 
                Eastern Washington and the greater Pacific Northwest region.
              </p>
              <div className="text-sm text-green-400 font-semibold">
                Serving Tri-Cities & Beyond
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-blue-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">✈️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                Airport Proximity
              </h3>
              <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                <strong className="text-blue-400">20 minutes</strong> from Pasco Airport (PSC). 
                Perfect for traveling students and out-of-state tactical training seekers.
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                Easy Regional & National Access
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-purple-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-purple-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">🏫</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Elite Classroom
              </h3>
              <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Phase One: Modern, professionally equipped classroom designed specifically 
                for tactical education and advanced safety training.
              </p>
              <div className="text-sm text-purple-400 font-semibold">
                Military-Grade Standards
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-red-600 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-orange-300 group-hover:scale-110 transition-transform duration-500">
                  <span className="filter drop-shadow-lg text-white">🎯</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                Future Grounds
              </h3>
              <p className="text-gray-300 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Phase Three: Dedicated live-fire training grounds planned within 
                <strong className="text-orange-400"> 1 hour</strong> of PSC Airport for comprehensive tactical experience.
              </p>
              <div className="text-sm text-orange-400 font-semibold">
                Phase 3 Development
              </div>
            </div>
          </div>

          {/* Enhanced Access Information */}
          <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-600/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Exceptional Accessibility for All Students
              </h3>
              <p className="text-lg text-gray-300 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Whether you're a local resident or traveling from across the country, 
                Liberty Ridge offers unmatched convenience and accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h4 className="text-xl font-bold text-white mb-2">Local Students</h4>
                <p className="text-gray-300 dark:text-gray-300 text-sm">
                  Easy parking, flexible scheduling, and central Tri-Cities location 
                  for convenient access from Pasco, Kennewick, and Richland.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h4 className="text-xl font-bold text-white mb-2">Regional Travelers</h4>
                <p className="text-gray-300 dark:text-gray-300 text-sm">
                  Quick 20-minute drive from Pasco Airport makes us accessible 
                  for students from Seattle, Portland, Spokane, and beyond.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏨</div>
                <h4 className="text-xl font-bold text-white mb-2">Extended Training</h4>
                <p className="text-gray-300 dark:text-gray-300 text-sm">
                  Local accommodations and multi-day training programs available 
                  for intensive tactical education experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision with Dark/Light Mode Support */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 dark:from-patriot-red/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 dark:from-patriot-blue/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 dark:border-yellow-400/30 mb-8 shadow-2xl">
            <span className="text-3xl animate-pulse">🚀</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">FUTURE VISION</span>
            <span className="text-3xl animate-pulse">🚀</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Vision for the Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            We&apos;re building more than just a training company—we&apos;re creating a community 
            of prepared, confident, and responsible citizens.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 tactical-star flex items-center justify-center text-2xl shadow-2xl border-2 border-yellow-300">
                <span className="filter drop-shadow-lg text-white font-bold">2</span>
              </div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🎯</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  Phase Two
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                Expanding to include tactical gear sales featuring premium brands 
                like Vortex and Sig Sauer for complete equipment solutions.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-yellow-400 h-2 rounded-full transition-all duration-1000" style={{width: '25%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Planning Phase ★ 25% Complete</div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 tactical-star flex items-center justify-center text-2xl shadow-2xl border-2 border-blue-300">
                <span className="filter drop-shadow-lg text-white font-bold">3</span>
              </div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400 group-hover:text-white transition-colors duration-300">
                  Phase Three
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                Live-fire training sessions on our own dedicated training grounds 
                for comprehensive hands-on tactical experience.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-blue-400 h-2 rounded-full transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Research Phase ★ 10% Complete</div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-600/30 hover:bg-white/15 dark:hover:bg-gray-800/30 hover:border-red-400/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 tactical-star flex items-center justify-center text-xl shadow-2xl border-2 border-red-300">
                <span className="filter drop-shadow-lg text-white font-bold">∞</span>
              </div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🌟</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  Beyond
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
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

      {/* Enhanced Call to Action with New Brand Colors */}
      <section className="py-20 bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Join the Liberty Ridge Family
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Experience the difference that military-grade training and veteran 
            expertise can make in your tactical education and personal protection readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/courses" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <div className="icon icon-sm text-patriot-blue icon-target"></div>
              <span>Start Training Today</span>
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <div className="icon icon-sm icon-location"></div>
              <span>Get in Touch</span>
            </Link>
          </div>
          <div className="text-sm opacity-75 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="icon icon-xs text-accent-gold icon-shield"></div>
              <span>Veteran-Owned</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="icon icon-xs text-accent-gold icon-award"></div>
              <span>Military Standards</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="icon icon-xs text-accent-gold icon-star"></div>
              <span>Proven Excellence</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}