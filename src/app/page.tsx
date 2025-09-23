import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import { CourseCard, FeatureCard, TestimonialCard, StatsCard } from '@/components/cards';
import { courses, getPopularCourses } from '@/data/courses';
import { testimonials, getFeaturedTestimonials } from '@/data/testimonials';
import { coreValues, keyFeatures } from '@/data/company';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section with Optimized Variables */}
      <section className="relative min-h-screen flex items-center justify-center bg-surface-tactical overflow-hidden">
        <BulletHero
          title="LIBERTY RIDGE TRAINING GROUNDS"
          subtitle="Elite Tactical Training • Veteran Excellence • Combat-Ready Skills"
          description="Master tactical fundamentals through proven military methodologies and elite-level firearm training programs designed for serious practitioners."
        />
        
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-tactical via-gray-800 to-surface-tactical opacity-95"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)]"></div>
      </section>

      {/* Enhanced Call-to-Action Banner with Optimized Variables */}
      <section className="section-padding-enhanced bg-surface-tactical text-text-inverse relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-tactical via-gray-800 to-surface-tactical"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(255,255,255,0.05)_49%,_rgba(255,255,255,0.05)_51%,_transparent_52%)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container-enhanced relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-badge-enhanced bg-surface-elevated/10 backdrop-blur-sm border-border/20 mb-8">
              <div className="icon icon-sm text-accent-gold icon-star"></div>
              <span className="text-text-inverse font-semibold text-sm tracking-wide uppercase">Elite Training Available</span>
              <div className="icon icon-sm text-accent-gold icon-star"></div>
            </div>
          
            <h3 className="heading-primary text-text-inverse mb-6">
              Ready to Master Tactical Excellence?
            </h3>
            <p className="text-enhanced text-text-inverse/90 mb-10 max-w-3xl mx-auto">
              Join 100+ trained students in professional firearm safety and tactical training.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup" className="btn-primary shadow-tactical text-lg px-8 py-4">
                Start Training Today
              </Link>
              <Link href="/courses" className="btn-secondary bg-transparent text-text-inverse border-text-inverse hover:bg-text-inverse hover:text-surface-tactical text-lg px-8 py-4">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section with Optimized Variables */}
      <section className="section-padding-enhanced bg-background">
        <div className="container-enhanced">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge-enhanced mb-8 bg-surface-elevated border-border">
                <div className="icon icon-xs text-primary icon-shield"></div>
                <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Veteran Leadership</span>
              </div>
              
              <h2 className="heading-primary mb-6">
                Meet Your Liberty Ridge Instructor
              </h2>
              <h3 className="heading-tertiary mb-6">
                Zach Gaudette - U.S. Army Veteran
              </h3>
              
              <p className="text-enhanced mb-6">
                Led by founder and owner Zach Gaudette, a dedicated U.S. Army veteran 
                with extensive experience in tactical training and firearm safety. 
                Zach brings military discipline and expertise to civilian training, 
                ensuring the highest standards of safety and professionalism.
              </p>
              
              <p className="text-body mb-8">
                Proudly married and father to a wonderful son, 
                Zach understands the importance of personal protection and family safety. 
                His passion for training extends beyond the classroom to real-world application.
              </p>
              
              {/* Enhanced Statistics Grid with Modern Styling */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-surface border-border">
                      <div className="icon icon-xl text-primary mb-3 icon-users"></div>
                      <div className="text-2xl font-bold text-text-primary mb-1">100+</div>
                      <div className="text-sm text-text-muted">Students Trained</div>
                    </div>
                    <div className="flip-card-back bg-surface-tactical border-border-tactical">
                      <div className="text-sm text-text-inverse mb-2 font-semibold">Student Success</div>
                      <div className="text-xs text-text-inverse/80 leading-relaxed">
                        Over 100 students have completed our programs with exceptional results and confidence.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-surface border-border">
                      <div className="icon icon-xl text-primary mb-3 icon-clock"></div>
                      <div className="text-2xl font-bold text-text-primary mb-1">5+</div>
                      <div className="text-sm text-text-muted">Years Experience</div>
                    </div>
                    <div className="flip-card-back bg-surface-tactical border-border-tactical">
                      <div className="text-sm text-text-inverse mb-2 font-semibold">Expert Training</div>
                      <div className="text-xs text-text-inverse/80 leading-relaxed">
                        Years of military and civilian training experience ensuring top-tier instruction.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-surface border-border">
                      <div className="icon icon-xl text-accent-gold mb-3 icon-award"></div>
                      <div className="text-2xl font-bold text-text-primary mb-1">#12</div>
                      <div className="text-sm text-text-muted">Regional Ranking</div>
                    </div>
                    <div className="flip-card-back bg-surface-tactical border-border-tactical">
                      <div className="text-sm text-text-inverse mb-2 font-semibold">Championship Level</div>
                      <div className="text-xs text-text-inverse/80 leading-relaxed">
                        Ranked #12 regionally in long-range shooting competitions in first year.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-surface border-border">
                      <div className="icon icon-xl text-military-green mb-3 icon-shield"></div>
                      <div className="text-2xl font-bold text-text-primary mb-1">100%</div>
                      <div className="text-sm text-text-muted">Safety Record</div>
                    </div>
                    <div className="flip-card-back bg-surface-tactical border-border-tactical">
                      <div className="text-sm text-text-inverse mb-2 font-semibold">Zero Incidents</div>
                      <div className="text-xs text-text-inverse/80 leading-relaxed">
                        Perfect safety record with comprehensive protocols and veteran oversight.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="bg-surface-elevated h-96 lg:h-[500px] flex items-center justify-center relative overflow-hidden border border-border rounded-lg shadow-md">
                  <div className="text-center text-text-primary">
                    <div className="w-32 h-32 mx-auto mb-6 bg-surface-tactical flex items-center justify-center text-6xl text-text-inverse rounded-lg shadow-tactical">
                      ZG
                    </div>
                    <div className="text-lg text-text-secondary mb-4">U.S. Army Veteran</div>
                    <div className="text-lg text-text-primary mb-4 font-semibold">Expert Instructor</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-text-inverse px-3 py-2 text-sm font-bold rounded">
                    INSTRUCTOR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Rankings - Light Mode Optimized */}
      <section className="section-padding section-secondary">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <div className="section-badge space-x-2 mb-8">
            <div className="icon icon-sm icon-highlight icon-award"></div>
            <span className="font-semibold text-sm tracking-wide uppercase">Championship Excellence</span>
            <div className="icon icon-sm icon-highlight icon-award"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Regionally Ranked Excellence
          </h2>
          <p className="text-xl text-text-description mb-12 leading-relaxed">
            In his first year of competitive shooting, Zach has achieved impressive 
            regional recognition in long-range shooting competitions, demonstrating his natural talent and dedication.
          </p>
          
          <div className="card-light p-12 text-center max-w-2xl mx-auto">
            <div className="icon icon-2xl icon-accent mx-auto mb-6">
              #12
            </div>
            <div className="text-2xl font-bold mb-4 text-gray-800">
              Regional Long-Range Shooting Champion
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm mb-8 text-text-muted">
              <span className="flex items-center space-x-1">
                <div className="icon icon-xs icon-accent icon-star"></div>
                <span>First Year Competitor</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="icon icon-xs icon-accent icon-target"></div>
                <span>Precision Excellence</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="icon icon-xs icon-accent icon-lightning"></div>
                <span>Rising Talent</span>
              </span>
            </div>
            <Link href="/rankings" className="btn-primary">
              View Full Rankings
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section with Optimized Variables */}
      <section className="section-padding-enhanced bg-surface-elevated">
        <div className="container-enhanced">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-badge-enhanced mx-auto mb-6 bg-background border-border">
              <div className="icon icon-xs text-primary icon-target"></div>
              <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Training Programs</span>
            </div>
            
            <h2 className="heading-primary mb-4">
              Master Every Shooting Discipline
            </h2>
            <p className="text-enhanced">
              From precision long-range shooting to tactical pistol training, our comprehensive 
              courses are designed to elevate your skills under expert veteran instruction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Precision Long Range Course */}
            <div className="flip-card h-96">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="icon icon-2xl text-primary icon-crosshair"></div>
                    <div className="text-xs font-bold text-text-secondary bg-surface-elevated px-2 py-1 rounded border border-border">
                      SIGNATURE
                    </div>
                  </div>
                  <h3 className="heading-card mb-3">Precision Long Range</h3>
                  <p className="text-body mb-4">Master the fundamentals of long-range shooting with military-grade precision techniques.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-text-primary">$299</span>
                    <span className="text-sm text-text-muted">8 hours</span>
                  </div>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Course Includes:</h4>
                  <ul className="text-sm text-text-inverse/90 space-y-2 mb-4">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Ballistics & wind reading
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Precision rifle setup
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Advanced marksmanship
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Competition techniques
                    </li>
                  </ul>
                  <button className="btn-inverse w-full shadow-tactical">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Tactical Pistol Course */}
            <div className="flip-card h-96">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="icon icon-2xl text-accent-gold icon-target"></div>
                    <div className="text-xs font-bold text-text-secondary bg-surface-elevated px-2 py-1 rounded border border-border">
                      POPULAR
                    </div>
                  </div>
                  <h3 className="heading-card mb-3">Tactical Pistol</h3>
                  <p className="text-body mb-4">Develop combat-ready pistol skills with real-world tactical applications.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-text-primary">$199</span>
                    <span className="text-sm text-text-muted">6 hours</span>
                  </div>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Course Includes:</h4>
                  <ul className="text-sm text-text-inverse/90 space-y-2 mb-4">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Draw & presentation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Tactical reloads
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Movement & cover
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Stress inoculation
                    </li>
                  </ul>
                  <button className="btn-inverse w-full shadow-tactical">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Fundamentals Course */}
            <div className="flip-card h-96">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="icon icon-2xl text-military-green icon-shield"></div>
                    <div className="text-xs font-bold text-text-secondary bg-surface-elevated px-2 py-1 rounded border border-border">
                      BEGINNER
                    </div>
                  </div>
                  <h3 className="heading-card mb-3">Firearms Fundamentals</h3>
                  <p className="text-body mb-4">Build a solid foundation with comprehensive safety and marksmanship training.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-text-primary">$149</span>
                    <span className="text-sm text-text-muted">4 hours</span>
                  </div>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Course Includes:</h4>
                  <ul className="text-sm text-text-inverse/90 space-y-2 mb-4">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Safety protocols
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Basic marksmanship
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Stance & grip
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 flex-shrink-0"></div>
                      Equipment basics
                    </li>
                  </ul>
                  <button className="btn-inverse w-full shadow-tactical">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Course Features Grid */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-surface border border-border rounded-lg">
                <div className="icon icon-2xl text-primary mb-4 mx-auto icon-clock"></div>
                <h4 className="heading-card mb-3">Flexible Scheduling</h4>
                <p className="text-body">
                  Weekend and evening classes available to fit your busy schedule.
                </p>
              </div>
              
              <div className="text-center p-6 bg-surface border border-border rounded-lg">
                <div className="icon icon-2xl text-accent-gold mb-4 mx-auto icon-award"></div>
                <h4 className="heading-card mb-3">Certification Included</h4>
                <p className="text-body">
                  Receive official completion certificates for all training programs.
                </p>
              </div>
              
              <div className="text-center p-6 bg-surface border border-border rounded-lg">
                <div className="icon icon-2xl text-military-green mb-4 mx-auto icon-users"></div>
                <h4 className="heading-card mb-3">Small Class Sizes</h4>
                <p className="text-body">
                  Maximum 8 students per class for personalized attention and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Enhanced Core Values Section with Optimized Variables */}
      <section className="section-padding-enhanced bg-background">
        <div className="container-enhanced">
          <div className="text-center mb-12">
            <div className="section-badge-enhanced mx-auto mb-6 bg-surface-elevated border-border">
              <div className="icon icon-xs text-primary icon-shield"></div>
              <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Our Values</span>
            </div>
            
            <h2 className="heading-primary mb-4">
              Built on Military Principles
            </h2>
            <p className="text-enhanced max-w-3xl mx-auto">
              Every aspect of our training is grounded in proven military values 
              and time-tested principles that build character and competence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-surface-elevated border border-border p-6 rounded-lg h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-md">
                <div className="icon icon-3xl text-primary mb-4 mx-auto icon-shield group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="heading-card mb-3 text-text-primary">Safety First</h3>
                <p className="text-body text-sm">
                  Unwavering commitment to safety protocols and responsible firearm handling in every training session.
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-surface-elevated border border-border p-6 rounded-lg h-full transition-all duration-300 group-hover:border-accent-gold group-hover:shadow-md">
                <div className="icon icon-3xl text-accent-gold mb-4 mx-auto icon-award group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="heading-card mb-3 text-text-primary">Excellence</h3>
                <p className="text-body text-sm">
                  Pursuit of perfection in marksmanship, technique, and personal development through disciplined practice.
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-surface-elevated border border-border p-6 rounded-lg h-full transition-all duration-300 group-hover:border-military-green group-hover:shadow-md">
                <div className="icon icon-3xl text-military-green mb-4 mx-auto icon-users group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="heading-card mb-3 text-text-primary">Brotherhood</h3>
                <p className="text-body text-sm">
                  Building a community of responsible shooters who support and learn from each other.
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-surface-elevated border border-border p-6 rounded-lg h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-md">
                <div className="icon icon-3xl text-primary mb-4 mx-auto icon-target group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="heading-card mb-3 text-text-primary">Precision</h3>
                <p className="text-body text-sm">
                  Focus on accuracy, attention to detail, and methodical improvement in all training aspects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Liberty Ridge Section with Optimized Variables */}
      <section className="section-padding-enhanced bg-surface-elevated">
        <div className="container-enhanced">
          <div className="text-center mb-12">
            <div className="section-badge-enhanced mx-auto mb-6 bg-background border-border">
              <div className="icon icon-xs text-accent-gold icon-award"></div>
              <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Tactical Advantage</span>
            </div>
            
            <h2 className="heading-primary mb-4">
              Why Choose Liberty Ridge?
            </h2>
            <p className="text-enhanced max-w-3xl mx-auto">
              Experience the difference that military-grade training and veteran expertise 
              can make in your tactical education journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="icon icon-3xl text-primary mb-4 icon-shield"></div>
                  <h3 className="heading-card mb-3">Veteran Instruction</h3>
                  <p className="text-body text-sm">Expert military professionals with real-world tactical knowledge.</p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Military Excellence</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    Learn from instructors who have served in real combat situations and understand the importance 
                    of proper training, discipline, and safety protocols.
                  </p>
                  <ul className="text-sm text-text-inverse/80 space-y-1">
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Combat experience</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Proven techniques</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Safety-first mindset</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="icon icon-3xl text-accent-gold mb-4 icon-target"></div>
                  <h3 className="heading-card mb-3">Proven Methods</h3>
                  <p className="text-body text-sm">Time-tested training techniques adapted from military and competitive shooting.</p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Championship Results</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    Our training methods have produced championship-level shooters and confident defenders. 
                    Ranked #12 regionally in our first competitive year.
                  </p>
                  <ul className="text-sm text-text-inverse/80 space-y-1">
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Competition-tested</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Results-driven</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Continuously refined</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="icon icon-3xl text-military-green mb-4 icon-users"></div>
                  <h3 className="heading-card mb-3">Personalized Training</h3>
                  <p className="text-body text-sm">Small class sizes ensure individual attention and customized instruction.</p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Individual Focus</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    Maximum 8 students per class means every participant receives personal coaching 
                    and immediate feedback on their technique and progress.
                  </p>
                  <ul className="text-sm text-text-inverse/80 space-y-1">
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Small class sizes</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Personal coaching</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Immediate feedback</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="icon icon-3xl text-primary mb-4 icon-clock"></div>
                  <h3 className="heading-card mb-3">Flexible Schedule</h3>
                  <p className="text-body text-sm">Evening and weekend classes available to accommodate your busy lifestyle.</p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Your Schedule</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    We understand that life is busy. That's why we offer multiple scheduling options 
                    to fit training into your work and family commitments.
                  </p>
                  <ul className="text-sm text-text-inverse/80 space-y-1">
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Weekend sessions</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Evening classes</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Private instruction</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="icon icon-3xl text-accent-gold mb-4 icon-award"></div>
                  <h3 className="heading-card mb-3">Progressive Curriculum</h3>
                  <p className="text-body text-sm">Structured learning path from fundamentals to advanced competitive techniques.</p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Skill Development</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    Our curriculum is designed to take you from beginner to expert through carefully 
                    structured lessons that build upon each other.
                  </p>
                  <ul className="text-sm text-text-inverse/80 space-y-1">
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Fundamentals first</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Progressive complexity</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Mastery-based advancement</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="icon icon-3xl text-military-green mb-4 icon-crosshair"></div>
                  <h3 className="heading-card mb-3">Equipment Included</h3>
                  <p className="text-body text-sm">All necessary firearms and safety equipment provided for training sessions.</p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Professional Gear</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    No need to invest in expensive equipment before you know what works for you. 
                    We provide quality firearms and safety gear for all training.
                  </p>
                  <ul className="text-sm text-text-inverse/80 space-y-1">
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Quality firearms</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Safety equipment</li>
                    <li className="flex items-center"><div className="icon icon-xs text-accent-gold mr-2 icon-bullet"></div>Try before you buy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Optimized Variables */}
      <section className="section-padding-enhanced bg-background">
        <div className="container-enhanced">
          <div className="text-center mb-12">
            <div className="section-badge-enhanced mx-auto mb-6 bg-surface-elevated border-border">
              <div className="icon icon-xs text-accent-gold icon-star"></div>
              <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Student Success</span>
            </div>
            
            <h2 className="heading-primary mb-4">
              What Our Students Say
            </h2>
            <p className="text-enhanced max-w-3xl mx-auto">
              Real feedback from students who have experienced our professional training programs 
              and achieved their tactical goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-surface-tactical text-text-inverse flex items-center justify-center rounded-full font-bold text-lg mr-4">
                      MS
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Mike S.</h4>
                      <p className="text-sm text-text-muted">First-time Shooter</p>
                    </div>
                  </div>
                  <div className="flex text-accent-gold mb-3">
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                  </div>
                  <p className="text-body italic text-sm">
                    "Zach's patient instruction and military experience made all the difference..."
                  </p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Exceptional Training</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    "As a complete beginner, I was nervous about firearms training. Zach's patient instruction 
                    and military experience made all the difference. The safety protocols were thorough, 
                    and I felt confident by the end of my first session."
                  </p>
                  <p className="text-xs text-text-inverse/80 font-semibold flex items-center">
                    <div className="icon icon-xs text-accent-gold mr-2 icon-star"></div>
                    Fundamentals Course Graduate
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-surface-tactical text-text-inverse flex items-center justify-center rounded-full font-bold text-lg mr-4">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Jennifer D.</h4>
                      <p className="text-sm text-text-muted">Law Enforcement</p>
                    </div>
                  </div>
                  <div className="flex text-accent-gold mb-3">
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                  </div>
                  <p className="text-body italic text-sm">
                    "The tactical pistol course elevated my skills to competition level..."
                  </p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Professional Excellence</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    "Even with law enforcement experience, the tactical pistol course elevated my skills 
                    to competition level. Zach's attention to detail and advanced techniques are 
                    exactly what serious shooters need."
                  </p>
                  <p className="text-xs text-text-inverse/80 font-semibold flex items-center">
                    <div className="icon icon-xs text-accent-gold mr-2 icon-star"></div>
                    Tactical Pistol Graduate
                  </p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="flip-card h-72">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-surface border-border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-surface-tactical text-text-inverse flex items-center justify-center rounded-full font-bold text-lg mr-4">
                      RT
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">Robert T.</h4>
                      <p className="text-sm text-text-muted">Competitive Shooter</p>
                    </div>
                  </div>
                  <div className="flex text-accent-gold mb-3">
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                    <div className="icon icon-sm icon-star"></div>
                  </div>
                  <p className="text-body italic text-sm">
                    "The precision long-range course transformed my understanding of ballistics..."
                  </p>
                </div>
                <div className="flip-card-back bg-surface-tactical border-border-tactical p-6">
                  <h4 className="text-lg font-bold text-text-inverse mb-3">Championship Training</h4>
                  <p className="text-sm text-text-inverse/90 leading-relaxed mb-3">
                    "The precision long-range course transformed my understanding of ballistics and 
                    wind reading. Zach's military background shows in every aspect of his instruction. 
                    My competition scores improved dramatically."
                  </p>
                  <p className="text-xs text-text-inverse/80 font-semibold flex items-center">
                    <div className="icon icon-xs text-accent-gold mr-2 icon-star"></div>
                    Precision Long Range Graduate
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Statistics */}
          <div className="mt-12 text-center">
            <div className="bg-surface-elevated border border-border rounded-lg p-6">
              <h3 className="heading-secondary mb-6">Training Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-text-muted uppercase tracking-wide">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">100%</div>
                  <div className="text-sm text-text-muted uppercase tracking-wide">Safety Record</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-military-green mb-2">4.9/5</div>
                  <div className="text-sm text-text-muted uppercase tracking-wide">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-text-muted uppercase tracking-wide">Return Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final Call to Action with Optimized Variables */}
      <section className="section-padding-enhanced bg-surface-tactical text-text-inverse relative overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-tactical via-surface-tactical/95 to-surface-tactical/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        <div className="container-enhanced text-center relative z-10">
          <div className="section-badge-enhanced mx-auto mb-8 bg-surface-elevated border-border-tactical">
            <div className="icon icon-xs text-accent-gold icon-star"></div>
            <span className="text-text-secondary font-semibold text-sm tracking-wide uppercase">Start Training</span>
          </div>
          
          <h2 className="heading-primary text-text-inverse mb-6">
            Ready to Begin Your Elite Training?
          </h2>
          <p className="text-enhanced text-text-inverse/90 mb-8 max-w-4xl mx-auto">
            Join the Liberty Ridge community and start your journey toward 
            tactical excellence, personal protection mastery, and unshakeable confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/signup" className="btn-inverse text-lg px-8 py-4 shadow-tactical">
              Book Your Training
            </Link>
            <Link href="/contact" className="btn-outline-inverse text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
          
          {/* Enhanced trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="icon icon-2xl text-accent-gold mb-2 mx-auto icon-users"></div>
              <div className="text-2xl font-bold text-text-inverse mb-1">100+</div>
              <div className="text-sm text-text-inverse/70 uppercase tracking-wide">Trained Students</div>
            </div>
            <div className="text-center">
              <div className="icon icon-2xl text-accent-gold mb-2 mx-auto icon-shield"></div>
              <div className="text-2xl font-bold text-text-inverse mb-1">100%</div>
              <div className="text-sm text-text-inverse/70 uppercase tracking-wide">Safety Record</div>
            </div>
            <div className="text-center">
              <div className="icon icon-2xl text-accent-gold mb-2 mx-auto icon-award"></div>
              <div className="text-2xl font-bold text-text-inverse mb-1">#12</div>
              <div className="text-sm text-text-inverse/70 uppercase tracking-wide">Regional Ranking</div>
            </div>
          </div>
          
          {/* Enhanced contact info */}
          <div className="text-sm text-text-inverse/75 text-center">
            <p className="mb-2">Questions? Call us at (509) 555-0123 or email info@libertyridgetraining.com</p>
            <p className="text-xs text-text-inverse/60">Professional tactical training • Veteran-owned • Pacific Northwest</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}