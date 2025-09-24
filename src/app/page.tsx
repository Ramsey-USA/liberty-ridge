import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section with LR Theme - Always Visible on Large Screens */}
      <section className="block relative min-h-screen lg:min-h-screen 2xl:min-h-screen xl:min-h-screen overflow-hidden hero-gradient-bg section-padding-enhanced">
        {/* Tactical accent elements - Enhanced with larger icons */}
        <div className="lg:block xl:block top-10 left-10 absolute animate-two-tone-pulse icon icon-xl icon-primary icon-crosshair"></div>
        <div className="lg:block xl:block top-20 right-20 absolute animate-two-tone-pulse animation-delay-1000 icon icon-lg icon-secondary icon-target"></div>
        <div className="lg:block xl:block bottom-20 left-20 absolute animate-two-tone-pulse animation-delay-2000 icon icon-md icon-accent icon-bullet"></div>
        
        {/* Enhanced Typography Content - Always Visible on Large Screens */}
        <div className="block lg:block 2xl:block xl:block z-10 relative text-center animate-fade-in-up container-enhanced">
          {/* Elite Badge - Enhanced with larger icons */}
          <div className="block lg:block xl:block mb-8 section-badge-enhanced">
            <div className="icon icon-md icon-primary icon-shield"></div>
            <span className="text-highlight-red">Elite Training Available</span>
            <div className="icon icon-md icon-secondary icon-star"></div>
          </div>
          
          {/* Main Title with Enhanced LR Typography - Always Visible on Large Screens */}
          <h1 className="block lg:block 2xl:block xl:block mb-6 animate-fade-in-up hero-title-enhanced">
            <span className="drop-shadow-text text-text-primary">
              LIBERTY RIDGE
            </span>
            <br />
            <span className="text-gradient">
              TRAINING GROUNDS
            </span>
          </h1>
          
          {/* Enhanced Subtitle with Icon Integration - Always Visible on Large Screens */}
          <div className="block lg:block 2xl:block xl:block space-x-4 mb-8 animate-fade-in-up animation-delay-500 hero-subtitle-enhanced">
            <span className="inline-flex items-center gap-2 text-highlight-red">
              <div className="icon icon-sm icon-primary icon-target"></div>
              Practical Tactical Training
            </span>
            <span className="text-text-secondary">•</span>
            <span className="inline-flex items-center gap-2 text-highlight-blue">
              <div className="icon icon-sm icon-secondary icon-shield"></div>
              Veteran Excellence
            </span>
            <span className="text-text-secondary">•</span>
            <span className="inline-flex items-center gap-2 text-highlight-red">
              <div className="icon icon-sm icon-accent icon-crosshair"></div>
              Combat-Ready Skills
            </span>
          </div>
          
          {/* Enhanced Description - Always Visible on Large Screens */}
          <p className="block lg:block 2xl:block xl:block mx-auto mb-12 max-w-5xl text-enhanced animate-fade-in-up animation-delay-1000">
            Master tactical fundamentals through proven military methodologies and elite-level firearm training programs designed for serious practitioners seeking <span className="text-highlight-blue">championship-level excellence</span>.
          </p>
          
          {/* Enhanced CTA Buttons - Always Visible on Large Screens */}
          <div className="flex lg:flex 2xl:flex xl:flex sm:flex-row flex-col justify-center gap-6 mb-16 animate-fade-in-up animation-delay-1500">
            <Link href="/signup" className="block lg:block xl:block btn-hero-primary">
              <div className="icon icon-lg icon-primary icon-flag-usa"></div>
              Start Training Today
            </Link>
            <Link href="/courses" className="block lg:block xl:block btn-hero-secondary">
              <div className="icon icon-lg icon-secondary icon-target"></div>
              View Courses
            </Link>
          </div>
          
          {/* Enhanced Stats Preview - Always Visible on Large Screens with Larger Icons */}
          <div className="block lg:grid 2xl:grid xl:grid grid-3-enhanced mx-auto max-w-2xl animate-fade-in-up animation-delay-2000">
            <div className="group hover:border-patriot-red stats-card">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-primary icon-users"></div>
              <div className="text-patriot-red stats-counter">100+</div>
              <div className="stats-label">Students Trained</div>
            </div>
            <div className="group hover:border-patriot-blue stats-card">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-secondary icon-shield"></div>
              <div className="text-patriot-blue stats-counter">100%</div>
              <div className="stats-label">Safety Record</div>
            </div>
            <div className="group hover:border-accent-gold stats-card">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-accent icon-award"></div>
              <div className="text-accent-gold stats-counter">#12</div>
              <div className="stats-label">Regional Ranking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Call-to-Action Banner with Black & White Design */}
      <section className="relative bg-pure-white dark:bg-pure-black py-24 overflow-hidden">
        {/* Clean Background with Subtle Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-patriot-red/5 via-transparent to-patriot-blue/5"></div>
        </div>
        
        {/* Minimal Sharp Geometric Elements */}
        <div className="top-10 left-10 absolute border-2 border-patriot-red rounded-xs w-4 h-4 rotate-45 animate-sharp-hover animation-delay-500"></div>
        <div className="top-20 right-20 absolute border-2 border-patriot-blue rounded-xs w-3 h-3 animate-two-tone-pulse animation-delay-1000"></div>
        <div className="bottom-20 left-20 absolute bg-patriot-red rounded-xs w-2 h-2 animate-two-tone-pulse animation-delay-1500"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          {/* Sharp Badge - Fixed for better dark mode contrast */}
          <div className="group inline-flex items-center space-x-3 bg-surface-tactical dark:bg-surface shadow-sharp hover:shadow-sharp-lg mb-8 px-6 py-3 border border-patriot-red hover:border-patriot-blue rounded-sm transition-all duration-300">
            <div className="bg-patriot-red rounded-xs w-2 h-2 animate-two-tone-pulse"></div>
            <span className="font-bold text-text-inverse dark:text-text-primary group-hover:text-patriot-blue text-sm uppercase tracking-wider transition-colors duration-300">
              Elite Training Available
            </span>
            <div className="bg-patriot-blue rounded-xs w-2 h-2 animate-two-tone-pulse animation-delay-500"></div>
          </div>
          
          {/* Sharp Main Heading */}
          <h3 className="mb-6 font-black text-pure-black dark:text-pure-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tighter">
            Ready to Master 
            <span className="block bg-clip-text bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red text-transparent">
              Tactical Excellence?
            </span>
          </h3>
          
          {/* Clean Description with Highlights */}
          <p className="mx-auto mb-12 max-w-4xl text-pure-black/80 dark:text-pure-white/80 text-xl lg:text-2xl leading-relaxed">
            Join <span className="font-bold text-patriot-red">100+ trained students</span> in professional firearm safety and tactical training programs that deliver <span className="font-bold text-patriot-blue">real results</span>.
          </p>
          
          {/* Sharp CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center gap-6 mb-16">
            <Link 
              href="/signup" 
              className="group relative bg-patriot-red hover:bg-patriot-red/90 shadow-sharp hover:shadow-sharp-lg px-12 py-6 rounded-sm overflow-hidden font-bold text-pure-white text-xl hover:scale-102 transition-all duration-300 transform"
            >
              <span className="z-10 relative flex justify-center items-center">
                Start Training Today
                <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1 duration-300 transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-pure-black transition-transform translate-x-full group-hover:translate-x-0 duration-300"></div>
            </Link>
            
            <Link 
              href="/courses" 
              className="group relative bg-surface dark:bg-surface-elevated shadow-sharp hover:shadow-sharp-lg px-12 py-6 border-2 border-patriot-blue rounded-sm overflow-hidden font-bold text-patriot-blue hover:text-text-inverse text-xl hover:scale-102 transition-all duration-300"
            >
              <span className="z-10 relative flex justify-center items-center">
                View All Courses
                <svg className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform duration-300 transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17L8,13H11V7H13V13H16L12,17Z"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-patriot-blue transition-transform translate-x-full group-hover:translate-x-0 duration-300"></div>
            </Link>
          </div>
          
          {/* Sharp Stats Counter */}
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-3">
            <div className="group text-center cursor-pointer">
              <div className="mb-2 font-black text-pure-black dark:text-pure-white text-5xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-patriot-red">100+</span>
              </div>
              <div className="font-semibold text-pure-black/70 dark:text-pure-white/70 group-hover:text-patriot-red uppercase tracking-wider transition-colors duration-300">
                Students Trained
              </div>
              <div className="bg-patriot-red mx-auto mt-3 rounded-xs w-12 h-1 scale-0 group-hover:scale-100 transition-transform duration-300 transform"></div>
            </div>
            
            <div className="group text-center cursor-pointer">
              <div className="mb-2 font-black text-pure-black dark:text-pure-white text-5xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-patriot-blue">100%</span>
              </div>
              <div className="font-semibold text-pure-black/70 dark:text-pure-white/70 group-hover:text-patriot-blue uppercase tracking-wider transition-colors duration-300">
                Safety Record
              </div>
              <div className="bg-patriot-blue mx-auto mt-3 rounded-xs w-12 h-1 scale-0 group-hover:scale-100 transition-transform duration-300 transform"></div>
            </div>
            
            <div className="group text-center cursor-pointer">
              <div className="mb-2 font-black text-pure-black dark:text-pure-white text-5xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-patriot-red">#12</span>
              </div>
              <div className="font-semibold text-pure-black/70 dark:text-pure-white/70 group-hover:text-patriot-red uppercase tracking-wider transition-colors duration-300">
                Regional Ranking
              </div>
              <div className="bg-patriot-red mx-auto mt-3 rounded-xs w-12 h-1 scale-0 group-hover:scale-100 transition-transform duration-300 transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with LR Theme */}
      <section className="bg-background section-padding-enhanced">
        <div className="container-enhanced">
          <div className="items-center grid-2-enhanced">
            <div className="space-y-enhanced">
              <div className="mb-8 section-badge-enhanced">
                <div className="icon icon-md icon-primary icon-shield"></div>
                <span className="text-highlight-red">Veteran Leadership</span>
              </div>
              
              <div className="mb-0 text-left section-header-enhanced">
                <h2 className="mb-6 text-left section-title-enhanced">
                  Meet Your Liberty Ridge Instructor
                </h2>
                <h3 className="mb-6 text-highlight-red heading-secondary">
                  <div className="inline-block mr-3 icon icon-xl icon-primary icon-flag-usa"></div>
                  Zach Gaudette - U.S. Army Veteran
                </h3>
              </div>
              
              <p className="mb-6 text-compact">
                Led by founder and owner Zach Gaudette, a dedicated U.S. Army veteran 
                with extensive experience in tactical training and firearm safety. 
                Zach brings military discipline and expertise to civilian training, 
                ensuring the highest standards of safety and professionalism.
              </p>
              
              <p className="mb-8 text-body text-text-secondary">
                Proudly married and father to a wonderful son, 
                Zach understands the importance of personal protection and family safety. 
                His passion for training extends beyond the classroom to real-world application.
              </p>
              
              {/* Enhanced Statistics Grid with LR Theme */}
              <div className="grid-4-enhanced">
                <div className="stats-flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-primary icon-users"></div>
                      <div className="text-patriot-red stats-counter">100+</div>
                      <div className="stats-label">Students Trained</div>
                    </div>
                    <div className="flip-card-back">
                      <div className="mb-4 icon icon-xl icon-accent icon-star"></div>
                      <div className="mb-2 text-text-inverse heading-card">Student Success</div>
                      <div className="text-body text-text-inverse/80">
                        Over 100 students have completed our programs with exceptional results and confidence.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="stats-flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-secondary icon-clock"></div>
                      <div className="text-patriot-blue stats-counter">5+</div>
                      <div className="stats-label">Years Experience</div>
                    </div>
                    <div className="flip-card-back">
                      <div className="mb-4 icon icon-xl icon-accent icon-lightning"></div>
                      <div className="mb-2 text-text-inverse heading-card">Expert Training</div>
                      <div className="text-body text-text-inverse/80">
                        Years of military and civilian training experience ensuring top-tier instruction.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="stats-flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-accent icon-award"></div>
                      <div className="text-accent-gold stats-counter">#12</div>
                      <div className="stats-label">Regional Ranking</div>
                    </div>
                    <div className="flip-card-back">
                      <div className="mb-4 icon icon-xl icon-accent icon-crosshair"></div>
                      <div className="mb-2 text-text-inverse heading-card">Championship Level</div>
                      <div className="text-body text-text-inverse/80">
                        Ranked #12 regionally in long-range shooting competitions in first year.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="stats-flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300 icon icon-2xl icon-success icon-shield"></div>
                      <div className="text-military-green stats-counter">100%</div>
                      <div className="stats-label">Safety Record</div>
                    </div>
                    <div className="flip-card-back">
                      <div className="mb-4 icon icon-xl icon-success icon-check"></div>
                      <div className="mb-2 text-text-inverse heading-card">Zero Incidents</div>
                      <div className="text-body text-text-inverse/80">
                        Perfect safety record with comprehensive protocols and veteran oversight.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="h-96 lg:h-[500px] feature-card">
                <div className="flex flex-col justify-center items-center h-full text-center">
                  <div className="mb-6 w-32 h-32 text-6xl feature-card-icon">
                    <div className="icon icon-4xl icon-primary icon-flag-usa"></div>
                  </div>
                  <div className="mb-4 text-text-primary heading-tertiary">Zach Gaudette</div>
                  <div className="mb-4 text-compact text-highlight-blue">U.S. Army Veteran</div>
                  <div className="mb-6 text-body text-text-secondary">Expert Instructor & Founder</div>
                  
                  {/* Enhanced credentials */}
                  <div className="gap-4 grid grid-cols-2 w-full max-w-xs">
                    <div className="text-center">
                      <div className="mb-1 icon icon-xl icon-accent icon-award"></div>
                      <div className="text-caption text-text-muted">Military Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 icon icon-xl icon-primary icon-target"></div>
                      <div className="text-caption text-text-muted">Competition Shooter</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 icon icon-xl icon-success icon-users"></div>
                      <div className="text-caption text-text-muted">100+ Students</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 icon icon-xl icon-secondary icon-shield"></div>
                      <div className="text-caption text-text-muted">Safety Expert</div>
                    </div>
                  </div>
                </div>
                <div className="top-4 right-4 absolute bg-patriot-red px-3 py-1 rounded text-caption text-white">
                  INSTRUCTOR
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
          
          <p className="mx-auto mb-16 max-w-4xl text-text-secondary text-xl lg:text-2xl leading-relaxed">
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
                  
                  <Link href="/rankings" className="shadow-tactical px-8 py-4 group-hover:text-text-inverse text-lg transition-all duration-300 group-hover:bg-accent-gold btn-primary">
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
              <Link href="/rankings" className="hover:bg-surface px-8 py-4 border-white btn-outline text-white hover:text-text-primary text-lg">
                View All Rankings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section with LR Theme */}
      <section className="bg-surface-elevated section-padding-enhanced">
        <div className="container-enhanced">
          <div className="section-header-enhanced">
            <div className="mb-8 section-badge-enhanced">
              <div className="icon icon-md icon-primary icon-target"></div>
              <span className="text-highlight-red">Training Programs</span>
            </div>
            
            <h2 className="mb-6 section-title-enhanced">
              Master Every Shooting Discipline
            </h2>
            <p className="section-subtitle-enhanced">
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
              <p className="mb-6 text-text-secondary leading-relaxed">
                Master the fundamentals of long-range shooting with military-grade precision techniques and championship-level instruction.
              </p>
              
              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-white text-3xl">$299</span>
                <span className="font-medium text-text-muted">8 hours intensive</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Ballistics & wind reading mastery
                </li>
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Precision rifle setup & tuning
                </li>
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mr-3 rounded-full w-2 h-2"></div>
                  Advanced marksmanship techniques
                </li>
                <li className="flex items-center text-text-secondary">
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
              <p className="mb-6 text-text-secondary leading-relaxed">
                Develop combat-ready pistol skills with real-world tactical applications and stress inoculation training.
              </p>
              
              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-white text-3xl">$199</span>
                <span className="font-medium text-text-muted">6 hours intensive</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Draw & presentation mastery
                </li>
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Tactical reload techniques
                </li>
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 mr-3 rounded-full w-2 h-2"></div>
                  Movement & cover tactics
                </li>
                <li className="flex items-center text-text-secondary">
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
              <p className="mb-6 text-text-secondary leading-relaxed">
                Build a solid foundation with comprehensive safety protocols and essential marksmanship training.
              </p>
              
              {/* Price and Duration */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-white text-3xl">$149</span>
                <span className="font-medium text-text-muted">4 hours essential</span>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Comprehensive safety protocols
                </li>
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Basic marksmanship principles
                </li>
                <li className="flex items-center text-text-secondary">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 mr-3 rounded-full w-2 h-2"></div>
                  Proper stance & grip technique
                </li>
                <li className="flex items-center text-text-secondary">
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
              <div className="group bg-surface p-6 border border-border rounded-lg text-center hover:scale-105 transition-all duration-300">
                <div className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300 icon icon-3xl icon-clock"></div>
                <h4 className="mb-3 heading-card">Flexible Scheduling</h4>
                <p className="text-body">
                  Weekend and evening classes available to fit your busy schedule.
                </p>
              </div>
              
              <div className="group bg-surface p-6 border border-border rounded-lg text-center hover:scale-105 transition-all duration-300">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-accent-gold icon icon-3xl icon-award"></div>
                <h4 className="mb-3 heading-card">Certification Included</h4>
                <p className="text-body">
                  Receive official completion certificates for all training programs.
                </p>
              </div>
              
              <div className="group bg-surface p-6 border border-border rounded-lg text-center hover:scale-105 transition-all duration-300">
                <div className="mx-auto mb-4 text-military-green group-hover:scale-110 transition-transform duration-300 icon icon-3xl icon-users"></div>
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
            <div className="inline-flex items-center space-x-2 bg-surface mx-auto mb-6 px-4 py-2 border-2 border-border rounded-lg section-badge-enhanced">
              <div className="text-patriot-red icon icon-md icon-shield"></div>
              <span className="font-semibold text-text-primary text-sm uppercase tracking-wide">Our Values</span>
            </div>
            
            <h2 className="mb-4 font-black text-text-primary text-4xl lg:text-5xl leading-tight">
              Built on Military Principles
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-lg leading-relaxed">
              Every aspect of our training is grounded in proven military values 
              and time-tested principles that build character and competence.
            </p>
          </div>
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="group text-center">
              <div className="bg-surface group-hover:shadow-lg p-6 border-2 group-hover:border-patriot-red border-border rounded-lg h-full hover:scale-105 transition-all duration-300">
                <div className="mx-auto mb-4 text-patriot-red group-hover:scale-110 transition-transform duration-300 icon icon-4xl icon-shield"></div>
                <h3 className="mb-3 font-bold text-text-primary text-xl">Safety First</h3>
                <p className="text-body text-sm">
                  Unwavering commitment to safety protocols and responsible firearm handling in every training session.
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-surface-elevated group-hover:shadow-md p-6 border group-hover:border-accent-gold border-border rounded-lg h-full transition-all duration-300">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-accent-gold icon icon-4xl icon-award"></div>
                <h3 className="mb-3 text-text-primary heading-card">Excellence</h3>
                <p className="text-body text-sm">
                  Pursuit of perfection in marksmanship, technique, and personal development through disciplined practice.
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-surface-elevated group-hover:shadow-md p-6 border group-hover:border-military-green border-border rounded-lg h-full transition-all duration-300">
                <div className="mx-auto mb-4 text-military-green group-hover:scale-110 transition-transform duration-300 icon icon-4xl icon-users"></div>
                <h3 className="mb-3 text-text-primary heading-card">Brotherhood</h3>
                <p className="text-body text-sm">
                  Building a community of responsible shooters who support and learn from each other.
                </p>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="bg-surface-elevated group-hover:shadow-md p-6 border group-hover:border-primary border-border rounded-lg h-full transition-all duration-300">
                <div className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300 icon icon-4xl icon-target"></div>
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
              <div className="text-accent-gold icon icon-md icon-award"></div>
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
                  <div className="mb-4 text-primary hover:scale-110 transition-transform duration-300 icon icon-4xl icon-shield"></div>
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
                  <div className="mb-4 hover:scale-110 transition-transform duration-300 text-accent-gold icon icon-4xl icon-target"></div>
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
                  <div className="mb-4 text-military-green hover:scale-110 transition-transform duration-300 icon icon-4xl icon-users"></div>
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
                  <div className="mb-4 text-primary hover:scale-110 transition-transform duration-300 icon icon-4xl icon-clock"></div>
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
                  <div className="mb-4 hover:scale-110 transition-transform duration-300 text-accent-gold icon icon-4xl icon-award"></div>
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
                  <div className="mb-4 text-military-green hover:scale-110 transition-transform duration-300 icon icon-4xl icon-crosshair"></div>
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
              <div className="text-accent-gold icon icon-md icon-star"></div>
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
            <div className="text-accent-gold icon icon-md icon-star"></div>
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
            <Link href="/contact" className="px-8 py-4 border-2 border-accent-gold rounded-lg font-bold hover:text-text-inverse text-lg transition-all duration-300 text-accent-gold hover:bg-accent-gold">
              Contact Us
            </Link>
          </div>
          
          {/* Enhanced trust indicators with color coordination and larger icons */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-6">
            <div className="group text-center">
              <div className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 icon icon-4xl icon-users" style={{ color: 'rgb(var(--accent-gold))' }}></div>
              <div className="mb-1 font-bold text-2xl" style={{ color: 'rgb(var(--text-inverse))' }}>100+</div>
              <div className="text-sm uppercase tracking-wide" style={{ color: 'rgba(var(--text-inverse), 0.7)' }}>Trained Students</div>
            </div>
            <div className="group text-center">
              <div className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 icon icon-4xl icon-shield" style={{ color: 'rgb(var(--military-green))' }}></div>
              <div className="mb-1 font-bold text-2xl" style={{ color: 'rgb(var(--text-inverse))' }}>100%</div>
              <div className="text-sm uppercase tracking-wide" style={{ color: 'rgba(var(--text-inverse), 0.7)' }}>Safety Record</div>
            </div>
            <div className="group text-center">
              <div className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 icon icon-4xl icon-award" style={{ color: 'rgb(var(--patriot-red))' }}></div>
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