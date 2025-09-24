import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Modern Hero Section with Advanced Tailwind Patterns */}
      <section className="relative flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen overflow-hidden">
        {/* Enhanced Background with Parallax Effect */}
        <div className="z-0 absolute inset-0">
          <img 
            src="/we-want-you.jpg" 
            alt="Liberty Ridge Training Grounds - Elite Tactical Training"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-[20s] ease-out"
          />
          {/* Multi-layer gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40"></div>
        </div>
        
        {/* Animated Patriotic Accent Layers */}
        <div className="top-0 left-0 absolute bg-gradient-to-br from-red-600/25 via-red-500/15 to-transparent w-1/3 h-full animate-pulse"></div>
        <div className="top-0 right-0 absolute bg-gradient-to-bl from-blue-600/25 via-blue-500/15 to-transparent w-1/4 h-2/3 animate-pulse animation-delay-1000"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-yellow-400/20 via-yellow-300/10 to-transparent w-1/2 h-1/3 animate-pulse animation-delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="top-10 left-10 absolute bg-yellow-400/60 rounded-full w-2 h-2 animate-bounce animation-delay-500"></div>
        <div className="top-20 right-20 absolute bg-red-500/60 rounded-full w-3 h-3 animate-bounce animation-delay-1500"></div>
        <div className="bottom-20 left-20 absolute bg-blue-500/60 rounded-full w-2 h-2 animate-bounce animation-delay-2500"></div>
        
        {/* Enhanced Hero Content */}
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl text-center animate-fade-in-up">
          {/* Main Title with Advanced Typography */}
          <h1 className="mb-4 sm:mb-6 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight hover:scale-105 transition-all duration-1000 transform">
            <span className="inline-block drop-shadow-2xl text-white hover:text-gray-100 transition-colors duration-500 filter">
              LIBERTY RIDGE
            </span>
            <br />
            <span className="inline-block bg-300% bg-clip-text bg-gradient-to-r from-yellow-400 hover:from-yellow-300 via-red-500 hover:via-red-400 to-blue-600 hover:to-blue-500 text-transparent transition-all animate-gradient-x duration-1000">
              TRAINING GROUNDS
            </span>
          </h1>
          
          {/* Enhanced Subtitle with Separator Animation */}
          <div className="mb-6 sm:mb-8 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wide">
            <span className="inline-block drop-shadow-lg text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
              Practical Tactical Training
            </span>
            <span className="mx-2 sm:mx-3 text-white text-xl sm:text-2xl animate-pulse">•</span>
            <span className="inline-block drop-shadow-lg text-blue-400 hover:text-blue-300 transition-colors duration-300">
              Veteran Excellence
            </span>
            <span className="mx-2 sm:mx-3 text-white text-xl sm:text-2xl animate-pulse animation-delay-500">•</span>
            <span className="inline-block drop-shadow-lg text-red-400 hover:text-red-300 transition-colors duration-300">
              Combat-Ready Skills
            </span>
          </div>
          
          {/* Enhanced Description */}
          <p className="drop-shadow-md mx-auto mb-10 sm:mb-12 max-w-5xl font-medium text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-1000">
            Master tactical fundamentals through proven military methodologies and elite-level firearm training programs designed for serious practitioners seeking <span className="font-semibold text-yellow-400">championship-level excellence</span>.
          </p>
          
          {/* Modern CTA Buttons with Advanced Hover Effects */}
          <div className="flex sm:flex-row flex-col justify-center gap-4 sm:gap-6 mb-16 animate-fade-in-up animation-delay-1500">
            <Link 
              href="/signup" 
              className="group relative bg-gradient-to-r from-red-600 hover:from-red-500 to-red-700 hover:to-red-600 shadow-2xl hover:shadow-red-500/25 px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden font-bold text-white text-base sm:text-lg hover:scale-105 transition-all duration-300 transform"
            >
              <span className="z-10 relative">Start Training Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 transition-transform translate-y-full group-hover:translate-y-0 duration-300"></div>
            </Link>
            
            <Link 
              href="/courses" 
              className="group relative bg-black/20 shadow-lg hover:shadow-yellow-400/25 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 border-2 border-yellow-400 rounded-xl overflow-hidden font-bold text-yellow-400 hover:text-slate-900 text-base sm:text-lg transition-all duration-300"
            >
              <span className="z-10 relative">View Courses</span>
              <div className="absolute inset-0 bg-yellow-400 transition-transform translate-y-full group-hover:translate-y-0 duration-300"></div>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="hidden sm:block bottom-4 sm:bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform">
            <div className="flex justify-center border-2 border-white/60 rounded-full w-6 h-10">
              <div className="bg-white/60 mt-2 rounded-full w-1 h-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Call-to-Action Banner with Advanced Animations */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-blue-900/30 animate-pulse"></div>
          <div className="top-0 left-1/4 absolute bg-yellow-500/10 blur-3xl rounded-full w-96 h-96 animate-bounce animation-delay-1000"></div>
          <div className="right-1/4 bottom-0 absolute bg-red-500/10 blur-3xl rounded-full w-80 h-80 animate-bounce animation-delay-2000"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="top-10 left-10 absolute border-2 border-yellow-400/60 w-4 h-4 rotate-45 animate-spin animation-delay-500"></div>
        <div className="top-20 right-20 absolute border-2 border-red-500/60 rounded-full w-6 h-6 animate-pulse animation-delay-1500"></div>
        <div className="bottom-20 left-20 absolute bg-blue-500/60 w-3 h-3 rotate-45 animate-bounce animation-delay-2500"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          {/* Animated Badge */}
          <div className="group inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 to-slate-900/80 shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-lg mb-8 px-6 py-3 border border-yellow-500/30 hover:border-yellow-400/50 rounded-full transition-all duration-500">
            <div className="bg-yellow-400 rounded-full w-2 h-2 animate-pulse"></div>
            <span className="font-bold text-yellow-400 group-hover:text-yellow-300 text-sm uppercase tracking-wider transition-colors duration-300">
              Elite Training Available
            </span>
            <div className="bg-yellow-400 rounded-full w-2 h-2 animate-pulse animation-delay-500"></div>
          </div>
          
          {/* Main Heading with Typing Animation Effect */}
          <h3 className="mb-6 font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Ready to Master 
            <span className="block bg-300% bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 text-transparent animate-gradient-x">
              Tactical Excellence?
            </span>
          </h3>
          
          {/* Enhanced Description */}
          <p className="mx-auto mb-12 max-w-4xl text-slate-300 text-xl lg:text-2xl leading-relaxed">
            Join <span className="font-bold text-yellow-400 animate-pulse">100+ trained students</span> in professional firearm safety and tactical training programs that deliver <span className="font-bold text-red-400">real results</span>.
          </p>
          
          {/* Advanced CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center gap-6 mb-16">
            <Link 
              href="/signup" 
              className="group relative bg-gradient-to-r from-red-600 hover:from-red-500 to-red-700 hover:to-red-600 shadow-2xl hover:shadow-red-500/30 px-12 py-6 rounded-2xl overflow-hidden font-bold text-white text-xl hover:scale-110 transition-all duration-500 transform"
            >
              <span className="z-10 relative flex justify-center items-center">
                Start Training Today
                <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2 duration-300 transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 transition-transform translate-y-full group-hover:translate-y-0 duration-500"></div>
            </Link>
            
            <Link 
              href="/courses" 
              className="group relative bg-black/20 shadow-xl hover:shadow-yellow-400/30 backdrop-blur-sm px-12 py-6 border-2 border-yellow-400 rounded-2xl overflow-hidden font-bold text-yellow-400 hover:text-slate-900 text-xl hover:scale-105 transition-all duration-500"
            >
              <span className="z-10 relative flex justify-center items-center">
                View All Courses
                <svg className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform duration-300 transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17L8,13H11V7H13V13H16L12,17Z"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-yellow-400 transition-transform translate-y-full group-hover:translate-y-0 duration-500"></div>
            </Link>
          </div>
          
          {/* Animated Stats Counter */}
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-3">
            <div className="group text-center cursor-pointer">
              <div className="mb-2 font-black text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                <span className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent">100+</span>
              </div>
              <div className="font-semibold text-slate-400 group-hover:text-yellow-400 uppercase tracking-wider transition-colors duration-300">
                Students Trained
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-3 rounded-full w-12 h-1 scale-0 group-hover:scale-100 transition-transform duration-500 transform"></div>
            </div>
            
            <div className="group text-center cursor-pointer">
              <div className="mb-2 font-black text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                <span className="bg-clip-text bg-gradient-to-r from-green-400 to-green-500 text-transparent">100%</span>
              </div>
              <div className="font-semibold text-slate-400 group-hover:text-green-400 uppercase tracking-wider transition-colors duration-300">
                Safety Record
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-500 mx-auto mt-3 rounded-full w-12 h-1 scale-0 group-hover:scale-100 transition-transform duration-500 transform"></div>
            </div>
            
            <div className="group text-center cursor-pointer">
              <div className="mb-2 font-black text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                <span className="bg-clip-text bg-gradient-to-r from-red-400 to-red-500 text-transparent">#12</span>
              </div>
              <div className="font-semibold text-slate-400 group-hover:text-red-400 uppercase tracking-wider transition-colors duration-300">
                Regional Ranking
              </div>
              <div className="bg-gradient-to-r from-red-400 to-red-500 mx-auto mt-3 rounded-full w-12 h-1 scale-0 group-hover:scale-100 transition-transform duration-500 transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Optimized Color Scheme */}
      <section className="section-padding-enhanced" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container-enhanced">
          <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white mb-8 px-4 py-2 border-2 border-gray-200 rounded-lg section-badge-enhanced">
                <div className="text-patriot-red icon icon-xs icon-shield"></div>
                <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Veteran Leadership</span>
              </div>
              
              <h2 className="mb-6 font-black text-gray-900 text-4xl lg:text-5xl leading-tight">
                Meet Your Liberty Ridge Instructor
              </h2>
              <h3 className="mb-6 font-bold text-patriot-red text-2xl lg:text-3xl">
                Zach Gaudette - U.S. Army Veteran
              </h3>
              
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Led by founder and owner Zach Gaudette, a dedicated U.S. Army veteran 
                with extensive experience in tactical training and firearm safety. 
                Zach brings military discipline and expertise to civilian training, 
                ensuring the highest standards of safety and professionalism.
              </p>
              
              <p className="mb-8 text-gray-600 leading-relaxed">
                Proudly married and father to a wonderful son, 
                Zach understands the importance of personal protection and family safety. 
                His passion for training extends beyond the classroom to real-world application.
              </p>
              
              {/* Enhanced Statistics Grid with Modern Styling */}
              <div className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="bg-surface border-border flip-card-front">
                      <div className="mb-3 text-primary icon icon-xl icon-users"></div>
                      <div className="mb-1 font-bold text-text-primary text-2xl">100+</div>
                      <div className="text-text-muted text-sm">Students Trained</div>
                    </div>
                    <div className="bg-surface-tactical border-border-tactical flip-card-back">
                      <div className="mb-2 font-semibold text-text-inverse text-sm">Student Success</div>
                      <div className="text-text-inverse/80 text-xs leading-relaxed">
                        Over 100 students have completed our programs with exceptional results and confidence.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="bg-surface border-border flip-card-front">
                      <div className="mb-3 text-primary icon icon-xl icon-clock"></div>
                      <div className="mb-1 font-bold text-text-primary text-2xl">5+</div>
                      <div className="text-text-muted text-sm">Years Experience</div>
                    </div>
                    <div className="bg-surface-tactical border-border-tactical flip-card-back">
                      <div className="mb-2 font-semibold text-text-inverse text-sm">Expert Training</div>
                      <div className="text-text-inverse/80 text-xs leading-relaxed">
                        Years of military and civilian training experience ensuring top-tier instruction.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="bg-surface border-border flip-card-front">
                      <div className="mb-3 text-accent-gold icon icon-xl icon-award"></div>
                      <div className="mb-1 font-bold text-text-primary text-2xl">#12</div>
                      <div className="text-text-muted text-sm">Regional Ranking</div>
                    </div>
                    <div className="bg-surface-tactical border-border-tactical flip-card-back">
                      <div className="mb-2 font-semibold text-text-inverse text-sm">Championship Level</div>
                      <div className="text-text-inverse/80 text-xs leading-relaxed">
                        Ranked #12 regionally in long-range shooting competitions in first year.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="bg-surface border-border flip-card-front">
                      <div className="mb-3 text-military-green icon icon-xl icon-shield"></div>
                      <div className="mb-1 font-bold text-text-primary text-2xl">100%</div>
                      <div className="text-text-muted text-sm">Safety Record</div>
                    </div>
                    <div className="bg-surface-tactical border-border-tactical flip-card-back">
                      <div className="mb-2 font-semibold text-text-inverse text-sm">Zero Incidents</div>
                      <div className="text-text-inverse/80 text-xs leading-relaxed">
                        Perfect safety record with comprehensive protocols and veteran oversight.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="relative flex justify-center items-center bg-surface-elevated shadow-md border border-border rounded-lg h-96 lg:h-[500px] overflow-hidden">
                  <div className="text-text-primary text-center">
                    <div className="flex justify-center items-center bg-surface-tactical shadow-tactical mx-auto mb-6 rounded-lg w-32 h-32 text-text-inverse text-6xl">
                      ZG
                    </div>
                    <div className="mb-4 text-text-secondary text-lg">U.S. Army Veteran</div>
                    <div className="mb-4 font-semibold text-text-primary text-lg">Expert Instructor</div>
                  </div>
                  <div className="top-4 right-4 absolute bg-primary px-3 py-2 rounded font-bold text-text-inverse text-sm">
                    INSTRUCTOR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Regional Rankings - Competitive Excellence */}
      <section className="relative bg-gradient-to-br from-surface-tactical via-gray-900 to-surface-tactical overflow-hidden section-padding-enhanced">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-blue-900/20"></div>
        <div className="top-0 left-1/4 absolute blur-3xl rounded-full w-96 h-96 bg-accent-gold/10"></div>
        <div className="right-1/4 bottom-0 absolute bg-patriot-red/10 blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto max-w-6xl text-center container-padding">
          <div className="bg-surface-elevated/10 backdrop-blur-sm mx-auto mb-8 border-border/30 section-badge-enhanced">
            <div className="text-accent-gold icon icon-sm icon-award"></div>
            <span className="font-semibold text-white text-sm uppercase tracking-wide">Championship Excellence</span>
            <div className="text-accent-gold icon icon-sm icon-award"></div>
          </div>
          
          <h2 className="mb-6 font-black text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="bg-clip-text bg-gradient-to-r via-yellow-400 text-gradient text-transparent from-accent-gold to-accent-gold">
              REGIONALLY RANKED
            </span>
            <br />
            <span className="text-white">EXCELLENCE</span>
          </h2>
          
          <p className="mx-auto mb-16 max-w-4xl text-gray-300 text-xl lg:text-2xl leading-relaxed">
            In his first year of competitive shooting, Zach has achieved <strong className="text-accent-gold">remarkable regional recognition</strong> 
            in long-range shooting competitions, demonstrating exceptional natural talent and unwavering dedication to precision marksmanship.
          </p>
          
          {/* Enhanced ranking showcase */}
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mb-16">
            {/* Main ranking card */}
            <div className="lg:col-span-2">
              <div className="group bg-surface-elevated/20 shadow-2xl backdrop-blur-lg p-12 border border-accent-gold/30 rounded-2xl text-center hover:scale-105 transition-all duration-500 hover:shadow-accent-gold/20">
                <div className="relative">
                  {/* Ranking number with enhanced styling */}
                  <div className="relative bg-clip-text bg-gradient-to-br via-yellow-300 mb-4 font-black text-transparent text-8xl lg:text-9xl from-accent-gold to-accent-gold">
                    #12
                    {/* Glow effect */}
                    <div className="absolute inset-0 blur-lg font-black text-8xl lg:text-9xl text-accent-gold/20">#12</div>
                  </div>
                  
                  <div className="mb-6 font-bold text-white text-3xl lg:text-4xl transition-colors duration-300 group-hover:text-accent-gold">
                    Regional Long-Range Champion
                  </div>
                  
                  <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 mb-8">
                    <div className="bg-white/10 p-4 border border-white/20 rounded-xl text-center">
                      <div className="mx-auto mb-2 text-accent-gold icon icon-xl icon-star"></div>
                      <div className="font-semibold text-white/90 text-sm">First Year</div>
                      <div className="text-white/70 text-xs">Competitor</div>
                    </div>
                    <div className="bg-white/10 p-4 border border-white/20 rounded-xl text-center">
                      <div className="mx-auto mb-2 text-accent-gold icon icon-xl icon-target"></div>
                      <div className="font-semibold text-white/90 text-sm">Precision</div>
                      <div className="text-white/70 text-xs">Excellence</div>
                    </div>
                    <div className="bg-white/10 p-4 border border-white/20 rounded-xl text-center">
                      <div className="mx-auto mb-2 text-accent-gold icon icon-xl icon-crosshair"></div>
                      <div className="font-semibold text-white/90 text-sm">Rising</div>
                      <div className="text-white/70 text-xs">Talent</div>
                    </div>
                  </div>
                  
                  <Link href="/rankings" className="shadow-tactical px-8 py-4 group-hover:text-surface-tactical text-lg transition-all duration-300 group-hover:bg-accent-gold btn-primary">
                    View Full Rankings
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Competition stats sidebar */}
            <div className="space-y-6">
              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-lg p-6 border border-white/30 rounded-xl text-center transition-all duration-300">
                <div className="mx-auto mb-3 text-patriot-red icon icon-2xl icon-award"></div>
                <div className="mb-2 font-bold text-white text-2xl">2024</div>
                <div className="font-medium text-white/80 text-sm">Competition Season</div>
                <div className="text-white/60 text-xs">Debut Year Excellence</div>
              </div>
              
              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-lg p-6 border border-white/30 rounded-xl text-center transition-all duration-300">
                <div className="mx-auto mb-3 text-blue-400 icon icon-2xl icon-target"></div>
                <div className="mb-2 font-bold text-white text-2xl">1000+</div>
                <div className="font-medium text-white/80 text-sm">Yards</div>
                <div className="text-white/60 text-xs">Maximum Range</div>
              </div>
              
              <div className="bg-white/10 hover:bg-white/15 backdrop-blur-lg p-6 border border-white/30 rounded-xl text-center transition-all duration-300">
                <div className="mx-auto mb-3 text-military-green icon icon-2xl icon-shield"></div>
                <div className="mb-2 font-bold text-white text-2xl">95%+</div>
                <div className="font-medium text-white/80 text-sm">Accuracy</div>
                <div className="text-white/60 text-xs">Competition Average</div>
              </div>
            </div>
          </div>
          
          {/* Competition achievements timeline */}
          <div className="bg-white/5 backdrop-blur-lg mb-12 p-8 border border-white/20 rounded-2xl">
            <h3 className="mb-8 font-bold text-white text-2xl">2024 Competition Highlights</h3>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gradient-to-br to-yellow-400/20 p-6 border border-accent-gold/30 rounded-xl text-center from-accent-gold/20">
                <div className="mb-2 font-bold text-lg text-accent-gold">Spring Championship</div>
                <div className="mb-2 font-black text-white text-3xl">#15</div>
                <div className="text-white/80 text-sm">Regional Placement</div>
                <div className="mt-2 text-white/60 text-xs">First Major Competition</div>
              </div>
              
              <div className="bg-gradient-to-br from-patriot-red/20 to-red-400/20 p-6 border border-patriot-red/30 rounded-xl text-center">
                <div className="mb-2 font-bold text-patriot-red text-lg">Summer Series</div>
                <div className="mb-2 font-black text-white text-3xl">#13</div>
                <div className="text-white/80 text-sm">Regional Placement</div>
                <div className="mt-2 text-white/60 text-xs">Consistent Improvement</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 border border-blue-400/30 rounded-xl text-center">
                <div className="mb-2 font-bold text-blue-400 text-lg">Fall Classic</div>
                <div className="mb-2 font-black text-white text-3xl">#12</div>
                <div className="text-white/80 text-sm">Current Ranking</div>
                <div className="mt-2 text-white/60 text-xs">Peak Performance</div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <p className="mb-6 text-white/90 text-lg">
              Experience the same training methods that achieved <strong className="text-accent-gold">top regional rankings</strong>
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Link href="/courses" className="shadow-tactical px-8 py-4 text-lg btn-primary">
                Train Like a Champion
              </Link>
              <Link href="/rankings" className="hover:bg-white px-8 py-4 border-white btn-outline text-white hover:text-surface-tactical text-lg">
                View All Rankings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section with Optimized Color Scheme */}
      <section className="bg-gray-100 section-padding-enhanced">
        <div className="container-enhanced">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="inline-flex items-center space-x-2 bg-white mx-auto mb-6 px-4 py-2 border-2 border-gray-200 rounded-lg section-badge-enhanced">
              <div className="text-patriot-red icon icon-xs icon-target"></div>
              <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Training Programs</span>
            </div>
            
            <h2 className="mb-4 font-black text-gray-900 text-4xl lg:text-5xl leading-tight">
              Master Every Shooting Discipline
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              From precision long-range shooting to tactical pistol training, our comprehensive 
              courses are designed to elevate your skills under expert veteran instruction.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Liberty Ridge Course Card - Precision Long Range */}
            <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-yellow-500/20 p-8 border border-slate-700/50 hover:border-yellow-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
              {/* Card Header with Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-gradient-to-br from-red-600 to-red-700 shadow-lg p-3 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm px-3 py-1 border border-yellow-400/30 rounded-full">
                  <span className="font-bold text-yellow-400 text-xs uppercase tracking-wider">Signature</span>
                </div>
              </div>
              
              {/* Card Content */}
              <h3 className="mb-4 font-black text-white group-hover:text-yellow-400 text-2xl transition-colors duration-300">
                Precision Long Range
              </h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Master the fundamentals of long-range shooting with military-grade precision techniques and championship-level instruction.
              </p>
              
              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-white text-3xl">$299</span>
                <span className="font-medium text-slate-400">8 hours intensive</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Ballistics & wind reading mastery
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Precision rifle setup & tuning
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Advanced marksmanship techniques
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Competition-level training
                </li>
              </ul>
              
              {/* CTA Button */}
              <button className="group/btn relative bg-gradient-to-r from-red-600 hover:from-red-500 to-red-700 hover:to-red-600 shadow-lg px-6 py-4 rounded-xl w-full overflow-hidden font-bold text-white hover:scale-105 transition-all duration-300 transform">
                <span className="z-10 relative">Book Training</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 transition-transform translate-y-full group-hover/btn:translate-y-0 duration-300"></div>
              </button>
            </div>

            {/* Liberty Ridge Course Card - Tactical Pistol */}
            <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-blue-500/20 p-8 border border-slate-700/50 hover:border-blue-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
              {/* Card Header with Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg p-3 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6L21 9ZM12 8C14.8 8 17 10.2 17 13V16L15 18V22H9V18L7 16V13C7 10.2 9.2 8 12 8Z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-r from-blue-400/20 to-blue-500/20 backdrop-blur-sm px-3 py-1 border border-blue-400/30 rounded-full">
                  <span className="font-bold text-blue-400 text-xs uppercase tracking-wider">Popular</span>
                </div>
              </div>
              
              {/* Card Content */}
              <h3 className="mb-4 font-black text-white group-hover:text-blue-400 text-2xl transition-colors duration-300">
                Tactical Pistol
              </h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Develop combat-ready pistol skills with real-world tactical applications and stress inoculation training.
              </p>
              
              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-white text-3xl">$199</span>
                <span className="font-medium text-slate-400">6 hours intensive</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Draw & presentation mastery
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Tactical reload techniques
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Movement & cover tactics
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Stress inoculation training
                </li>
              </ul>
              
              {/* CTA Button */}
              <button className="group/btn relative bg-gradient-to-r from-blue-600 hover:from-blue-500 to-blue-700 hover:to-blue-600 shadow-lg px-6 py-4 rounded-xl w-full overflow-hidden font-bold text-white hover:scale-105 transition-all duration-300 transform">
                <span className="z-10 relative">Book Training</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 transition-transform translate-y-full group-hover/btn:translate-y-0 duration-300"></div>
              </button>
            </div>

            {/* Liberty Ridge Course Card - Fundamentals */}
            <div className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl hover:shadow-green-500/20 p-8 border border-slate-700/50 hover:border-green-500/50 rounded-2xl transition-all hover:-translate-y-2 duration-500">
              {/* Card Header with Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-gradient-to-br from-green-600 to-green-700 shadow-lg p-3 rounded-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,13.4 13.4,15 12,15C10.6,15 9.2,13.4 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 backdrop-blur-sm px-3 py-1 border border-green-400/30 rounded-full">
                  <span className="font-bold text-green-400 text-xs uppercase tracking-wider">Beginner</span>
                </div>
              </div>
              
              {/* Card Content */}
              <h3 className="mb-4 font-black text-white group-hover:text-green-400 text-2xl transition-colors duration-300">
                Firearms Fundamentals
              </h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Build a solid foundation with comprehensive safety protocols and essential marksmanship training.
              </p>
              
              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-white text-3xl">$149</span>
                <span className="font-medium text-slate-400">4 hours essential</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Comprehensive safety protocols
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Basic marksmanship principles
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Proper stance & grip technique
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Equipment basics & selection
                </li>
              </ul>
              
              {/* CTA Button */}
              <button className="group/btn relative bg-gradient-to-r from-green-600 hover:from-green-500 to-green-700 hover:to-green-600 shadow-lg px-6 py-4 rounded-xl w-full overflow-hidden font-bold text-white hover:scale-105 transition-all duration-300 transform">
                <span className="z-10 relative">Book Training</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transition-transform translate-y-full group-hover/btn:translate-y-0 duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Enhanced Course Features Grid */}
          <div className="mt-12">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
              <div className="bg-surface p-6 border border-border rounded-lg text-center">
                <div className="mx-auto mb-4 text-primary icon icon-2xl icon-clock"></div>
                <h4 className="mb-3 heading-card">Flexible Scheduling</h4>
                <p className="text-body">
                  Weekend and evening classes available to fit your busy schedule.
                </p>
              </div>
              
              <div className="bg-surface p-6 border border-border rounded-lg text-center">
                <div className="mx-auto mb-4 text-accent-gold icon icon-2xl icon-award"></div>
                <h4 className="mb-3 heading-card">Certification Included</h4>
                <p className="text-body">
                  Receive official completion certificates for all training programs.
                </p>
              </div>
              
              <div className="bg-surface p-6 border border-border rounded-lg text-center">
                <div className="mx-auto mb-4 text-military-green icon icon-2xl icon-users"></div>
                <h4 className="mb-3 heading-card">Small Class Sizes</h4>
                <p className="text-body">
                  Maximum 8 students per class for personalized attention and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Enhanced Core Values Section with Optimized Color Scheme */}
      <section className="section-padding-enhanced" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <div className="container-enhanced">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white mx-auto mb-6 px-4 py-2 border-2 border-gray-200 rounded-lg section-badge-enhanced">
              <div className="text-patriot-red icon icon-xs icon-shield"></div>
              <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Our Values</span>
            </div>
            
            <h2 className="mb-4 font-black text-gray-900 text-4xl lg:text-5xl leading-tight">
              Built on Military Principles
            </h2>
            <p className="mx-auto max-w-3xl text-gray-700 text-lg leading-relaxed">
              Every aspect of our training is grounded in proven military values 
              and time-tested principles that build character and competence.
            </p>
          </div>
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center">
              <div className="bg-white group-hover:shadow-lg p-6 border-2 border-gray-200 group-hover:border-patriot-red rounded-lg h-full hover:scale-105 transition-all duration-300">
                <div className="mx-auto mb-4 text-patriot-red group-hover:scale-110 transition-transform duration-300 icon icon-3xl icon-shield"></div>
                <h3 className="mb-3 font-bold text-gray-900 text-xl">Safety First</h3>
                <p className="text-body text-sm">
                  Unwavering commitment to safety protocols and responsible firearm handling in every training session.
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-surface-elevated group-hover:shadow-md p-6 border group-hover:border-accent-gold border-border rounded-lg h-full transition-all duration-300">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-accent-gold icon icon-3xl icon-award"></div>
                <h3 className="mb-3 text-text-primary heading-card">Excellence</h3>
                <p className="text-body text-sm">
                  Pursuit of perfection in marksmanship, technique, and personal development through disciplined practice.
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-surface-elevated group-hover:shadow-md p-6 border group-hover:border-military-green border-border rounded-lg h-full transition-all duration-300">
                <div className="mx-auto mb-4 text-military-green group-hover:scale-110 transition-transform duration-300 icon icon-3xl icon-users"></div>
                <h3 className="mb-3 text-text-primary heading-card">Brotherhood</h3>
                <p className="text-body text-sm">
                  Building a community of responsible shooters who support and learn from each other.
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-surface-elevated group-hover:shadow-md p-6 border group-hover:border-primary border-border rounded-lg h-full transition-all duration-300">
                <div className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300 icon icon-3xl icon-target"></div>
                <h3 className="mb-3 text-text-primary heading-card">Precision</h3>
                <p className="text-body text-sm">
                  Focus on accuracy, attention to detail, and methodical improvement in all training aspects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Liberty Ridge Section with Optimized Variables */}
      <section className="bg-surface-elevated section-padding-enhanced">
        <div className="container-enhanced">
          <div className="mb-12 text-center">
            <div className="bg-background mx-auto mb-6 border-border section-badge-enhanced">
              <div className="text-accent-gold icon icon-xs icon-award"></div>
              <span className="font-semibold text-text-secondary text-sm uppercase tracking-wide">Tactical Advantage</span>
            </div>
            
            <h2 className="mb-4 heading-primary">
              Why Choose Liberty Ridge?
            </h2>
            <p className="mx-auto max-w-3xl text-enhanced">
              Experience the difference that military-grade training and veteran expertise 
              can make in your tactical education journey.
            </p>
          </div>
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="mb-4 text-primary icon icon-3xl icon-shield"></div>
                  <h3 className="mb-3 heading-card">Veteran Instruction</h3>
                  <p className="text-body text-sm">Expert military professionals with real-world tactical knowledge.</p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Military Excellence</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    Learn from instructors who have served in real combat situations and understand the importance 
                    of proper training, discipline, and safety protocols.
                  </p>
                  <ul className="space-y-1 text-text-inverse/80 text-sm">
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Combat experience</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Proven techniques</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Safety-first mindset</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="mb-4 text-accent-gold icon icon-3xl icon-target"></div>
                  <h3 className="mb-3 heading-card">Proven Methods</h3>
                  <p className="text-body text-sm">Time-tested training techniques adapted from military and competitive shooting.</p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Championship Results</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    Our training methods have produced championship-level shooters and confident defenders. 
                    Ranked #12 regionally in our first competitive year.
                  </p>
                  <ul className="space-y-1 text-text-inverse/80 text-sm">
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Competition-tested</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Results-driven</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Continuously refined</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="mb-4 text-military-green icon icon-3xl icon-users"></div>
                  <h3 className="mb-3 heading-card">Personalized Training</h3>
                  <p className="text-body text-sm">Small class sizes ensure individual attention and customized instruction.</p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Individual Focus</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    Maximum 8 students per class means every participant receives personal coaching 
                    and immediate feedback on their technique and progress.
                  </p>
                  <ul className="space-y-1 text-text-inverse/80 text-sm">
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Small class sizes</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Personal coaching</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Immediate feedback</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="mb-4 text-primary icon icon-3xl icon-clock"></div>
                  <h3 className="mb-3 heading-card">Flexible Schedule</h3>
                  <p className="text-body text-sm">Evening and weekend classes available to accommodate your busy lifestyle.</p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Your Schedule</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    We understand that life is busy. That's why we offer multiple scheduling options 
                    to fit training into your work and family commitments.
                  </p>
                  <ul className="space-y-1 text-text-inverse/80 text-sm">
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Weekend sessions</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Evening classes</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Private instruction</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="mb-4 text-accent-gold icon icon-3xl icon-award"></div>
                  <h3 className="mb-3 heading-card">Progressive Curriculum</h3>
                  <p className="text-body text-sm">Structured learning path from fundamentals to advanced competitive techniques.</p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Skill Development</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    Our curriculum is designed to take you from beginner to expert through carefully 
                    structured lessons that build upon each other.
                  </p>
                  <ul className="space-y-1 text-text-inverse/80 text-sm">
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Fundamentals first</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Progressive complexity</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Mastery-based advancement</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="mb-4 text-military-green icon icon-3xl icon-crosshair"></div>
                  <h3 className="mb-3 heading-card">Equipment Included</h3>
                  <p className="text-body text-sm">All necessary firearms and safety equipment provided for training sessions.</p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Professional Gear</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    No need to invest in expensive equipment before you know what works for you. 
                    We provide quality firearms and safety gear for all training.
                  </p>
                  <ul className="space-y-1 text-text-inverse/80 text-sm">
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Quality firearms</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Safety equipment</li>
                    <li className="flex items-center"><div className="mr-2 text-accent-gold icon icon-xs icon-bullet"></div>Try before you buy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Optimized Variables */}
      <section className="bg-background section-padding-enhanced">
        <div className="container-enhanced">
          <div className="mb-12 text-center">
            <div className="bg-surface-elevated mx-auto mb-6 border-border section-badge-enhanced">
              <div className="text-accent-gold icon icon-xs icon-star"></div>
              <span className="font-semibold text-text-secondary text-sm uppercase tracking-wide">Student Success</span>
            </div>
            
            <h2 className="mb-4 heading-primary">
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-3xl text-enhanced">
              Real feedback from students who have experienced our professional training programs 
              and achieved their tactical goals.
            </p>
          </div>
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center bg-surface-tactical mr-4 rounded-full w-14 h-14 font-bold text-text-inverse text-lg">
                      MS
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Mike S.</h4>
                      <p className="text-text-muted text-sm">First-time Shooter</p>
                    </div>
                  </div>
                  <div className="flex mb-3 text-accent-gold">
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                  </div>
                  <p className="text-body text-sm italic">
                    "Zach's patient instruction and military experience made all the difference..."
                  </p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Exceptional Training</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    "As a complete beginner, I was nervous about firearms training. Zach's patient instruction 
                    and military experience made all the difference. The safety protocols were thorough, 
                    and I felt confident by the end of my first session."
                  </p>
                  <p className="flex items-center font-semibold text-text-inverse/80 text-xs">
                    <div className="mr-2 text-accent-gold icon icon-xs icon-star"></div>
                    Fundamentals Course Graduate
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center bg-surface-tactical mr-4 rounded-full w-14 h-14 font-bold text-text-inverse text-lg">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Jennifer D.</h4>
                      <p className="text-text-muted text-sm">Law Enforcement</p>
                    </div>
                  </div>
                  <div className="flex mb-3 text-accent-gold">
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                  </div>
                  <p className="text-body text-sm italic">
                    "The tactical pistol course elevated my skills to competition level..."
                  </p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Professional Excellence</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    "Even with law enforcement experience, the tactical pistol course elevated my skills 
                    to competition level. Zach's attention to detail and advanced techniques are 
                    exactly what serious shooters need."
                  </p>
                  <p className="flex items-center font-semibold text-text-inverse/80 text-xs">
                    <div className="mr-2 text-accent-gold icon icon-xs icon-star"></div>
                    Tactical Pistol Graduate
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="h-72 flip-card">
              <div className="flip-card-inner">
                <div className="bg-surface p-6 border-border flip-card-front">
                  <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center bg-surface-tactical mr-4 rounded-full w-14 h-14 font-bold text-text-inverse text-lg">
                      RT
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Robert T.</h4>
                      <p className="text-text-muted text-sm">Competitive Shooter</p>
                    </div>
                  </div>
                  <div className="flex mb-3 text-accent-gold">
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                  </div>
                  <p className="text-body text-sm italic">
                    "The precision long-range course transformed my understanding of ballistics..."
                  </p>
                </div>
                <div className="bg-surface-tactical p-6 border-border-tactical flip-card-back">
                  <h4 className="mb-3 font-bold text-text-inverse text-lg">Championship Training</h4>
                  <p className="mb-3 text-text-inverse/90 text-sm leading-relaxed">
                    "The precision long-range course transformed my understanding of ballistics and 
                    wind reading. Zach's military background shows in every aspect of his instruction. 
                    My competition scores improved dramatically."
                  </p>
                  <p className="flex items-center font-semibold text-text-inverse/80 text-xs">
                    <div className="mr-2 text-accent-gold icon icon-xs icon-star"></div>
                    Precision Long Range Graduate
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Statistics */}
          <div className="mt-12 text-center">
            <div className="bg-surface-elevated p-6 border border-border rounded-lg">
              <h3 className="mb-6 heading-secondary">Training Results</h3>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-bold text-primary text-3xl">100+</div>
                  <div className="text-text-muted text-sm uppercase tracking-wide">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-bold text-3xl text-accent-gold">100%</div>
                  <div className="text-text-muted text-sm uppercase tracking-wide">Safety Record</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-bold text-military-green text-3xl">4.9/5</div>
                  <div className="text-text-muted text-sm uppercase tracking-wide">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-bold text-primary text-3xl">95%</div>
                  <div className="text-text-muted text-sm uppercase tracking-wide">Return Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final Call to Action with Optimized Color Scheme */}
      <section className="relative overflow-hidden section-padding-enhanced" style={{ backgroundColor: 'rgb(var(--surface-tactical))' }}>
        {/* Enhanced patriotic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-patriot-navy via-surface-tactical to-patriot-red/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Tactical accent effects */}
        <div className="top-1/4 left-1/4 absolute blur-3xl rounded-full w-96 h-96 bg-accent-gold/10"></div>
        <div className="right-1/4 bottom-1/4 absolute bg-patriot-red/10 blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative text-center container-enhanced">
          <div className="bg-surface-elevated/20 backdrop-blur-sm mx-auto mb-8 border-accent-gold/30 section-badge-enhanced">
            <div className="text-accent-gold icon icon-xs icon-star"></div>
            <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: 'rgb(var(--accent-gold))' }}>Start Training</span>
          </div>
          
          <h2 className="mb-6 heading-primary" style={{ color: 'rgb(var(--text-inverse))' }}>
            Ready to Begin Your Elite Training?
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-enhanced" style={{ color: 'rgba(var(--text-inverse), 0.9)' }}>
            Join the Liberty Ridge community and start your journey toward 
            tactical excellence, personal protection mastery, and unshakeable confidence.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-12">
            <Link href="/signup" className="bg-patriot-red hover:bg-primary-hover shadow-tactical px-8 py-4 rounded-lg font-bold text-white text-lg hover:scale-105 transition-all duration-300 transform">
              Book Your Training
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-accent-gold rounded-lg font-bold hover:text-surface-tactical text-lg transition-all duration-300 text-accent-gold hover:bg-accent-gold">
              Contact Us
            </Link>
          </div>
          
          {/* Enhanced trust indicators with color coordination */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-6">
            <div className="text-center">
              <div className="mx-auto mb-2 icon icon-2xl icon-users" style={{ color: 'rgb(var(--accent-gold))' }}></div>
              <div className="mb-1 font-bold text-2xl" style={{ color: 'rgb(var(--text-inverse))' }}>100+</div>
              <div className="text-sm uppercase tracking-wide" style={{ color: 'rgba(var(--text-inverse), 0.7)' }}>Trained Students</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 icon icon-2xl icon-shield" style={{ color: 'rgb(var(--military-green))' }}></div>
              <div className="mb-1 font-bold text-2xl" style={{ color: 'rgb(var(--text-inverse))' }}>100%</div>
              <div className="text-sm uppercase tracking-wide" style={{ color: 'rgba(var(--text-inverse), 0.7)' }}>Safety Record</div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 icon icon-2xl icon-award" style={{ color: 'rgb(var(--patriot-red))' }}></div>
              <div className="mb-1 font-bold text-2xl" style={{ color: 'rgb(var(--text-inverse))' }}>#12</div>
              <div className="text-sm uppercase tracking-wide" style={{ color: 'rgba(var(--text-inverse), 0.7)' }}>Regional Ranking</div>
            </div>
          </div>
          
          {/* Enhanced contact info */}
          <div className="text-sm text-center" style={{ color: 'rgba(var(--text-inverse), 0.75)' }}>
            <p className="mb-2">Questions? Call us at <span style={{ color: 'rgb(var(--accent-gold))' }}>(509) 555-0123</span> or email <span style={{ color: 'rgb(var(--accent-gold))' }}>info@libertyridgetraining.com</span></p>
            <p className="text-xs" style={{ color: 'rgba(var(--text-inverse), 0.6)' }}>Professional tactical training • Veteran-owned • Pacific Northwest</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}