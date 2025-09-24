import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Dark/Light Mode Support */}
      <section className="relative flex justify-center items-center bg-gradient-to-br from-patriot-red dark:from-patriot-red/90 via-patriot-navy dark:via-patriot-navy/90 to-black dark:to-gray-900 min-h-screen overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/we-want-you.jpg" 
            alt="About Liberty Ridge Training Grounds"
            className="opacity-30 dark:opacity-20 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-patriot-red/80 dark:from-patriot-red/70 via-patriot-navy/70 dark:via-patriot-navy/60 to-black/90 dark:to-gray-900/95"></div>
        </div>
        
        {/* Content */}
        <div className="z-10 relative mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-4xl text-center">
          <h1 className="drop-shadow-2xl mb-6 font-black text-white text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight">
            ABOUT LIBERTY RIDGE
          </h1>
          <h2 className="drop-shadow-lg mb-8 font-bold text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wide text-accent-gold">
            Founded on Military Values & Veteran Expertise
          </h2>
          <p className="drop-shadow-md mx-auto max-w-3xl font-medium text-white text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Dedicated to providing exceptional tactical and firearm safety education rooted in honor, integrity, and service.
          </p>
        </div>
      </section>

      {/* Enhanced Founder Section with Dark/Light Mode Support */}
      <section className="relative bg-gradient-to-br from-patriot-navy dark:from-gray-800 via-gray-900 dark:via-gray-900 to-black dark:to-black py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(45deg,_transparent_48%,_rgba(var(--accent-gold),0.1)_49%,_rgba(var(--accent-gold),0.1)_51%,_transparent_52%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-patriot-red/10 dark:bg-patriot-red/5 blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute blur-3xl rounded-full w-80 h-80 bg-accent-gold/10 dark:bg-accent-gold/5"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <div className="group relative flex justify-center items-center bg-white/10 dark:bg-gray-800/30 shadow-2xl backdrop-blur-sm border-2 border-accent-gold/30 dark:border-accent-gold/20 rounded-2xl h-96 overflow-hidden hover:scale-105 transition-all hover:-translate-y-2 duration-500 hover:shadow-accent-gold/20">
                <div className="text-center">
                  <div className="inline-block relative mb-6">
                    <div className="flex justify-center items-center bg-gradient-to-br from-patriot-red to-red-700 shadow-2xl mx-auto border-4 border-accent-gold rounded-full w-32 h-32 text-6xl group-hover:scale-110 transition-transform duration-500">
                      <span className="font-black text-white">ZG</span>
                    </div>
                  </div>
                  <div className="mb-2 font-bold text-white text-2xl transition-colors duration-300 group-hover:text-accent-gold">Zach Gaudette</div>
                  <div className="text-gray-300 dark:text-gray-400 text-lg">Founder & Lead Instructor</div>
                </div>
                <div className="top-4 left-4 absolute flex items-center space-x-2 bg-military-green shadow-lg px-4 py-2 border border-green-300 rounded-full font-bold text-white text-sm">
                  <div className="text-white icon icon-xs icon-shield"></div>
                  <span>U.S. Army Veteran</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h2 className="mb-4 font-black text-white text-4xl md:text-5xl">
                  Meet Zach Gaudette
                </h2>
                <h3 className="flex items-center space-x-2 mb-6 font-bold text-2xl text-accent-gold">
                  <div className="text-accent-gold icon icon-sm icon-award"></div>
                  <span>Founder & Lead Instructor</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
                  Zach Gaudette is a dedicated U.S. Army veteran who brings years of military 
                  experience and tactical expertise to civilian training. His commitment to 
                  excellence and safety has made Liberty Ridge Training Grounds a trusted 
                  name in tactical education throughout the Pacific Northwest.
                </p>
                
                <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
                  Beyond his military service, Zach is a devoted family man, proudly married 
                  to Anne Marie and father to their 18-month-old son, Myles. This personal 
                  perspective on family protection drives his passion for teaching others 
                  the skills they need to keep their loved ones safe.
                </p>
                
                <div className="bg-white/10 dark:bg-gray-800/20 shadow-lg backdrop-blur-sm p-6 border border-accent-gold/30 dark:border-accent-gold/20 rounded-2xl text-white">
                  <h4 className="flex items-center space-x-2 mb-4 font-bold text-xl text-accent-gold">
                    <div className="text-accent-gold icon icon-sm icon-target"></div>
                    <span>Current Achievement</span>
                  </h4>
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 font-black text-3xl text-accent-gold">#12 Regional</div>
                      <p className="text-white text-lg">Long-Range Shooting</p>
                      <p className="text-gray-300 dark:text-gray-400 text-sm">First Year of Competition</p>
                    </div>
                    <div className="sm:text-left text-right">
                      <div className="flex items-center space-x-2 mb-2 font-bold text-lg text-accent-gold">
                        <div className="text-accent-gold icon icon-xs icon-crosshair"></div>
                        <span>Expertise Areas</span>
                      </div>
                      <div className="space-y-1 text-gray-300 dark:text-gray-400 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="text-military-green icon icon-xs icon-bullet"></div>
                          <span>Tactical Training</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-military-green icon icon-xs icon-bullet"></div>
                          <span>Firearm Safety</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-military-green icon icon-xs icon-bullet"></div>
                          <span>Long-Range Precision</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex sm:flex-row flex-col gap-4 mt-8">
                <Link href="/courses" className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-red-700 shadow-lg px-8 py-4 rounded-lg font-bold text-white text-lg text-center hover:scale-105 transition-all transform">
                  <div className="text-white icon icon-sm icon-target"></div>
                  <span>View Training Programs</span>
                </Link>
                <Link href="/contact" className="flex justify-center items-center space-x-2 px-8 py-4 border-2 border-accent-gold rounded-lg font-bold hover:text-black text-lg text-center hover:scale-105 transition-all text-accent-gold hover:bg-accent-gold transform">
                  <div className="icon icon-sm icon-location"></div>
                  <span>Contact Zach</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Service & Credentials with Dark/Light Mode Support */}
      <section className="bg-background dark:bg-gray-800 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-surface mx-auto mb-6 px-4 py-2 border-2 border-border rounded-lg section-badge-enhanced">
              <div className="text-patriot-red icon icon-xs icon-shield"></div>
              <span className="font-semibold text-text-primary text-sm uppercase tracking-wide">Military Excellence</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Military Service & Credentials
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Zach's military background and ongoing training provide the foundation for 
              world-class tactical education rooted in real-world experience.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative bg-surface shadow-lg hover:shadow-2xl p-8 border-2 hover:border-patriot-red border-border rounded-2xl overflow-hidden text-center hover:scale-105 transition-all hover:-translate-y-2 duration-500">
              <div className="mx-auto mb-6 text-patriot-red icon icon-3xl icon-shield"></div>
              <div className="mb-2 font-black text-text-primary text-3xl">U.S. Army</div>
              <div className="mb-4 font-bold text-patriot-red text-lg">Veteran Status</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Honorably served with distinction, bringing military discipline and expertise to civilian training.
              </p>
            </div>
            
            <div className="group relative bg-surface shadow-lg hover:shadow-2xl p-8 border-2 hover:border-accent-gold border-border rounded-2xl overflow-hidden text-center hover:scale-105 transition-all hover:-translate-y-2 duration-500">
              <div className="mx-auto mb-6 text-accent-gold icon icon-3xl icon-award"></div>
              <div className="mb-2 font-black text-text-primary text-3xl">#12 Regional</div>
              <div className="mb-4 font-bold text-patriot-red text-lg">Long-Range Competition</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                First-year competitive achievement demonstrating exceptional marksmanship skills and dedication.
              </p>
            </div>
            
            <div className="group relative bg-surface shadow-lg hover:shadow-2xl p-8 border-2 hover:border-patriot-blue border-border rounded-2xl overflow-hidden text-center hover:scale-105 transition-all hover:-translate-y-2 duration-500">
              <div className="mx-auto mb-6 text-patriot-blue icon icon-3xl icon-target"></div>
              <div className="mb-2 font-black text-text-primary text-3xl">Ongoing</div>
              <div className="mb-4 font-bold text-patriot-red text-lg">Professional Development</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Continuous training and certification to stay current with latest tactical methodologies.
              </p>
            </div>
            
            <div className="group relative bg-surface shadow-lg hover:shadow-2xl p-8 border-2 hover:border-military-green border-border rounded-2xl overflow-hidden text-center hover:scale-105 transition-all hover:-translate-y-2 duration-500">
              <div className="mx-auto mb-6 text-military-green icon icon-3xl icon-users"></div>
              <div className="mb-2 font-black text-text-primary text-3xl">Family Focus</div>
              <div className="mb-4 font-bold text-patriot-red text-lg">Personal Protection Motivation</div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Married to Anne Marie with son Myles, driving passion for family protection education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values with Dark/Light Mode Support */}
      <section className="relative bg-gradient-to-br from-patriot-navy dark:from-gray-800 via-gray-900 dark:via-gray-900 to-black dark:to-black py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[length:20px_20px] bg-[linear-gradient(45deg,_transparent_48%,_rgba(var(--accent-gold),0.1)_49%,_rgba(var(--accent-gold),0.1)_51%,_transparent_52%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-patriot-red/10 dark:bg-patriot-red/5 blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute blur-3xl rounded-full w-80 h-80 bg-accent-gold/10 dark:bg-accent-gold/5"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Enhanced Mission Statement */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 dark:bg-gray-800/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-accent-gold/50 dark:border-accent-gold/30 rounded-full">
              <div className="text-accent-gold icon icon-sm icon-star"></div>
              <span className="font-bold text-lg tracking-wider text-accent-gold">OUR MISSION</span>
              <div className="text-accent-gold icon icon-sm icon-star"></div>
            </div>
            <h2 className="mb-6 font-black text-white text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r via-yellow-400 text-transparent from-accent-gold to-accent-gold">
                Our Mission
              </span>
            </h2>
            <p className="mx-auto max-w-4xl text-gray-300 dark:text-gray-300 text-xl md:text-2xl leading-relaxed">
              To provide comprehensive, professional tactical training that empowers individuals 
              with the knowledge, skills, and confidence needed for personal protection and 
              firearm safety, rooted in military discipline and veteran expertise.
            </p>
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="opacity-60 w-16 h-1 bg-accent-gold"></div>
              <div className="text-accent-gold icon icon-sm icon-star"></div>
              <div className="opacity-60 w-16 h-1 bg-accent-gold"></div>
            </div>
          </div>

          {/* Enhanced Core Values Grid */}
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-black text-white text-3xl md:text-4xl">
              Seven Core Values
            </h3>
            <p className="mx-auto max-w-2xl text-gray-300 dark:text-gray-300 text-lg">
              These Army values guide every aspect of our training and operations, 
              ensuring excellence in everything we do.
            </p>
          </div>
          
          {/* First Row - 4 Values */}
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
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
              <div key={index} className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-6 border border-white/30 hover:border-accent-gold/50 dark:border-gray-600/30 rounded-2xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
                <div className={`icon icon-3xl text-${value.color} mb-4 mx-auto ${value.icon} group-hover:scale-110 transition-transform duration-500`}></div>
                <h3 className="mb-3 font-bold group-hover:text-white text-lg transition-colors duration-300 text-accent-gold">
                  {value.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Second Row - 3 Values Centered */}
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl">
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
              <div key={index + 4} className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-6 border border-white/30 hover:border-accent-gold/50 dark:border-gray-600/30 rounded-2xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
                <div className={`icon icon-3xl text-${value.color} mb-4 mx-auto ${value.icon} group-hover:scale-110 transition-transform duration-500`}></div>
                <h3 className="mb-3 font-bold group-hover:text-white text-lg transition-colors duration-300 text-accent-gold">
                  {value.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Story with Dark/Light Mode Support */}
      <section className="bg-background dark:bg-gray-800 py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center space-x-2 bg-surface mb-6 px-4 py-2 border-2 border-border rounded-lg section-badge-enhanced">
                <div className="text-patriot-red icon icon-xs icon-shield"></div>
                <span className="font-semibold text-text-primary text-sm uppercase tracking-wide">Our Foundation</span>
              </div>
              <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="mb-6 text-text-secondary text-lg leading-relaxed">
                Liberty Ridge Training Grounds was born from a simple belief: that everyone 
                deserves access to professional, military-grade training for personal protection 
                and firearm safety. Founded by Army veteran Zach Gaudette, our company represents 
                the intersection of military discipline and civilian education.
              </p>
              
              <p className="mb-6 text-text-secondary text-lg leading-relaxed">
                Located in Pasco, WA, we're currently in Phase One of our development, focusing 
                on comprehensive classroom training. Our phased approach ensures we build a 
                strong foundation of safety and knowledge before expanding to live-fire training 
                and tactical gear sales.
              </p>
              
              <p className="mb-8 text-text-secondary text-lg leading-relaxed">
                What sets us apart is our commitment to the seven core Army values that guide 
                every aspect of our training: Loyalty, Duty, Respect, Selfless Service, 
                Honor, Integrity, and Personal Courage. These aren't just words to us—they're 
                the foundation of everything we do.
              </p>

              <div className="flex sm:flex-row flex-col gap-4">
                <Link href="/courses" className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-red-700 shadow-lg px-8 py-4 rounded-lg font-bold text-white text-lg text-center hover:scale-105 transition-all transform">
                  <div className="text-white icon icon-sm icon-target"></div>
                  <span>Explore Training</span>
                </Link>
                <Link href="/contact" className="flex justify-center items-center space-x-2 px-8 py-4 border-2 border-text-primary rounded-lg font-bold text-text-primary hover:bg-text-primary hover:text-background text-lg text-center hover:scale-105 transition-all transform">
                  <div className="icon icon-sm icon-location"></div>
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="group relative bg-surface shadow-lg hover:shadow-2xl border-2 border-border rounded-2xl overflow-hidden hover:scale-105 transition-all hover:-translate-y-2 duration-500">
                <div className="relative flex justify-center items-center bg-gradient-to-br from-patriot-blue to-patriot-red mb-6 rounded-t-2xl h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
                  <div className="z-10 relative text-white text-center">
                    <div className="mx-auto mb-4 text-white icon icon-3xl icon-shield"></div>
                    <h3 className="font-black text-2xl">Founded on Values</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-6 font-black text-text-primary text-2xl">Why Choose Liberty Ridge?</h3>
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
      <section className="relative bg-gradient-to-br from-tactical-dark dark:from-gray-900 via-black dark:via-black to-patriot-blue dark:to-gray-800 py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 dark:from-patriot-red/10 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 dark:from-patriot-blue/10 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 dark:border-yellow-400/30 rounded-full">
              <span className="text-3xl animate-pulse">🏛️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">STRATEGIC LOCATION</span>
              <span className="text-3xl animate-pulse">🏛️</span>
            </div>
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                Our Location & Facility
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 dark:text-gray-300 text-xl leading-relaxed">
              Strategically positioned in Pasco, WA, with exceptional accessibility for 
              local and traveling students seeking elite tactical training.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 hover:border-yellow-400/50 dark:border-gray-600/30 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="inline-block relative mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-green-600 to-green-800 shadow-2xl mx-auto border-4 border-yellow-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">🏛️</span>
                </div>
              </div>
              <h3 className="mb-4 font-bold text-white group-hover:text-yellow-300 text-2xl transition-colors duration-300">
                Pasco, Washington
              </h3>
              <p className="mb-4 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                Heart of the Tri-Cities area, providing easy access for students throughout 
                Eastern Washington and the greater Pacific Northwest region.
              </p>
              <div className="font-semibold text-green-400 text-sm">
                Serving Tri-Cities & Beyond
              </div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 dark:border-gray-600/30 hover:border-blue-400/50 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="inline-block relative mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl mx-auto border-4 border-blue-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">✈️</span>
                </div>
              </div>
              <h3 className="mb-4 font-bold text-white group-hover:text-blue-300 text-2xl transition-colors duration-300">
                Airport Proximity
              </h3>
              <p className="mb-4 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                <strong className="text-blue-400">20 minutes</strong> from Pasco Airport (PSC). 
                Perfect for traveling students and out-of-state tactical training seekers.
              </p>
              <div className="font-semibold text-blue-400 text-sm">
                Easy Regional & National Access
              </div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 hover:border-purple-400/50 dark:border-gray-600/30 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="inline-block relative mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-purple-600 to-purple-800 shadow-2xl mx-auto border-4 border-purple-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">🏫</span>
                </div>
              </div>
              <h3 className="mb-4 font-bold text-white group-hover:text-purple-300 text-2xl transition-colors duration-300">
                Elite Classroom
              </h3>
              <p className="mb-4 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                Phase One: Modern, professionally equipped classroom designed specifically 
                for tactical education and advanced safety training.
              </p>
              <div className="font-semibold text-purple-400 text-sm">
                Military-Grade Standards
              </div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 hover:border-orange-400/50 dark:border-gray-600/30 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="inline-block relative mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-orange-600 to-red-600 shadow-2xl mx-auto border-4 border-orange-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">🎯</span>
                </div>
              </div>
              <h3 className="mb-4 font-bold text-white group-hover:text-orange-300 text-2xl transition-colors duration-300">
                Future Grounds
              </h3>
              <p className="mb-4 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                Phase Three: Dedicated live-fire training grounds planned within 
                <strong className="text-orange-400"> 1 hour</strong> of PSC Airport for comprehensive tactical experience.
              </p>
              <div className="font-semibold text-orange-400 text-sm">
                Phase 3 Development
              </div>
            </div>
          </div>

          {/* Enhanced Access Information */}
          <div className="bg-white/10 dark:bg-gray-800/20 shadow-2xl backdrop-blur-sm p-8 border border-white/20 dark:border-gray-600/20 rounded-3xl">
            <div className="mb-8 text-center">
              <h3 className="mb-4 font-bold text-yellow-400 text-3xl">
                Exceptional Accessibility for All Students
              </h3>
              <p className="mx-auto max-w-4xl text-gray-300 dark:text-gray-300 text-lg leading-relaxed">
                Whether you're a local resident or traveling from across the country, 
                Liberty Ridge offers unmatched convenience and accessibility.
              </p>
            </div>
            
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">🚗</div>
                <h4 className="mb-2 font-bold text-white text-xl">Local Students</h4>
                <p className="text-gray-300 dark:text-gray-300 text-sm">
                  Easy parking, flexible scheduling, and central Tri-Cities location 
                  for convenient access from Pasco, Kennewick, and Richland.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 text-4xl">✈️</div>
                <h4 className="mb-2 font-bold text-white text-xl">Regional Travelers</h4>
                <p className="text-gray-300 dark:text-gray-300 text-sm">
                  Quick 20-minute drive from Pasco Airport makes us accessible 
                  for students from Seattle, Portland, Spokane, and beyond.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 text-4xl">🏨</div>
                <h4 className="mb-2 font-bold text-white text-xl">Extended Training</h4>
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
      <section className="relative bg-gradient-to-br from-tactical-dark dark:from-gray-900 via-black dark:via-black to-patriot-blue dark:to-gray-800 py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 dark:from-patriot-red/10 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 dark:from-patriot-blue/10 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 dark:border-yellow-400/30 rounded-full">
            <span className="text-3xl animate-pulse">🎖️</span>
            <span className="font-bold text-yellow-400 text-lg tracking-wider">FUTURE VISION</span>
            <span className="text-3xl animate-pulse">🎖️</span>
          </div>
          <h2 className="mb-6 font-bold text-white text-4xl">
            <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
              Our Vision for the Future
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-4xl text-gray-300 dark:text-gray-300 text-xl">
            We&apos;re building more than just a training company—we&apos;re creating a community 
            of prepared, confident, and responsible citizens.
          </p>
          
          <div className="gap-6 sm:gap-8 grid grid-cols-1 lg:grid-cols-3 mb-16">
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 hover:border-yellow-400/50 dark:border-gray-600/30 rounded-3xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
              <div className="top-4 right-4 absolute flex justify-center items-center bg-gradient-to-br from-yellow-600 to-orange-600 shadow-2xl border-2 border-yellow-300 w-12 h-12 text-2xl tactical-star">
                <span className="drop-shadow-lg font-bold text-white filter">2</span>
              </div>
              <div className="mb-6">
                <div className="mb-4 text-4xl sm:text-6xl">🎯</div>
                <h3 className="mb-4 font-bold text-yellow-400 group-hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                  Phase Two
                </h3>
              </div>
              <p className="mb-6 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                Expanding to include tactical gear sales featuring premium brands 
                like Vortex and Sig Sauer for complete equipment solutions.
              </p>
              <div className="bg-gray-700 mb-4 rounded-full w-full h-2">
                <div className="bg-yellow-400 rounded-full h-2 transition-all duration-1000" style={{width: '25%'}}></div>
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Planning Phase ★ 25% Complete</div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 dark:border-gray-600/30 hover:border-blue-400/50 rounded-3xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
              <div className="top-4 right-4 absolute flex justify-center items-center bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl border-2 border-blue-300 w-12 h-12 text-2xl tactical-star">
                <span className="drop-shadow-lg font-bold text-white filter">3</span>
              </div>
              <div className="mb-6">
                <div className="mb-4 text-4xl sm:text-6xl">🏃‍♂️</div>
                <h3 className="mb-4 font-bold text-blue-400 group-hover:text-white text-xl sm:text-2xl transition-colors duration-300">
                  Phase Three
                </h3>
              </div>
              <p className="mb-6 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                Live-fire training sessions on our own dedicated training grounds 
                for comprehensive hands-on tactical experience.
              </p>
              <div className="bg-gray-700 mb-4 rounded-full w-full h-2">
                <div className="bg-blue-400 rounded-full h-2 transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Research Phase ★ 10% Complete</div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 backdrop-blur-sm p-8 border border-white/30 dark:border-gray-600/30 hover:border-red-400/50 rounded-3xl overflow-hidden transition-all hover:-translate-y-1 duration-500">
              <div className="top-4 right-4 absolute flex justify-center items-center bg-gradient-to-br from-red-600 to-orange-600 shadow-2xl border-2 border-red-300 w-12 h-12 text-xl tactical-star">
                <span className="drop-shadow-lg font-bold text-white filter">∞</span>
              </div>
              <div className="mb-6">
                <div className="mb-4 text-4xl sm:text-6xl">�️</div>
                <h3 className="mb-4 font-bold text-white group-hover:text-red-400 text-xl sm:text-2xl transition-colors duration-300">
                  Beyond
                </h3>
              </div>
              <p className="mb-6 text-gray-300 dark:text-gray-300 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                Expanding our team with additional veteran instructors and 
                specialized training programs for advanced tactical skills.
              </p>
              <div className="bg-gray-700 mb-4 rounded-full w-full h-2">
                <div className="bg-white rounded-full h-2 transition-all duration-1000" style={{width: '5%'}}></div>
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Vision Phase ★ 5% Complete</div>
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-gradient-to-r from-patriot-red to-patriot-blue p-4 sm:p-6 rounded-full">
            <span className="font-semibold text-white text-sm sm:text-lg">🎖️ Current Focus: Phase One Excellence</span>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with New Brand Colors */}
      <section className="relative bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red py-20 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-black text-4xl md:text-5xl">
            Join the Liberty Ridge Family
          </h2>
          <p className="opacity-95 mb-8 text-xl md:text-2xl leading-relaxed">
            Experience the difference that military-grade training and veteran 
            expertise can make in your tactical education and personal protection readiness.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-8">
            <Link href="/courses" className="flex justify-center items-center space-x-2 bg-white hover:bg-gray-100 shadow-lg px-8 py-4 rounded-lg font-bold text-patriot-blue text-lg hover:scale-105 transition-all transform">
              <div className="text-patriot-blue icon icon-sm icon-target"></div>
              <span>Start Training Today</span>
            </Link>
            <Link href="/contact" className="flex justify-center items-center space-x-2 hover:bg-white px-8 py-4 border-2 border-white rounded-lg font-bold text-white hover:text-patriot-blue text-lg hover:scale-105 transition-all transform">
              <div className="icon icon-sm icon-location"></div>
              <span>Get in Touch</span>
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-4 opacity-75 text-sm">
            <div className="flex items-center space-x-1">
              <div className="text-accent-gold icon icon-xs icon-shield"></div>
              <span>Veteran-Owned</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-accent-gold icon icon-xs icon-award"></div>
              <span>Military Standards</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-accent-gold icon icon-xs icon-star"></div>
              <span>Proven Excellence</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}