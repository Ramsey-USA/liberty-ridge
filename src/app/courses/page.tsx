import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import { CourseCard, StatsCard } from '@/components/cards';
import { courses } from '@/data/courses';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
            <BulletHero
        title="TACTICAL TRAINING COURSES"
        subtitle="Elite-Level Firearm & Tactical Education Programs"
        description="Professional-grade courses designed for serious practitioners seeking advanced tactical skills and firearms proficiency."
      />

      {/* Enhanced Course Listing */}
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
              <span className="text-3xl animate-pulse">🎓</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">ELITE PROGRAMS</span>
              <span className="text-3xl animate-pulse">🎓</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Elite Training Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional courses designed by Army veteran Zach Gaudette, combining military discipline 
              with comprehensive safety protocols for all skill levels.
            </p>
          </div>
          
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={course.id} className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Enhanced Course Image */}
                  <div className="lg:col-span-1">
                    <div className="h-64 rounded-2xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-tactical-dark to-patriot-blue">
                      <div className="absolute inset-0 bg-gradient-to-br from-patriot-red/30 to-yellow-500/20"></div>
                      <div className="relative z-10">
                        <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${
                          index === 0 ? 'from-green-600 to-green-800' :
                          index === 1 ? 'from-blue-600 to-blue-800' :
                          'from-red-600 to-red-800'
                        } tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500`}>
                          <span className="filter drop-shadow-lg text-white">
                            {index === 0 ? '🛡️' : index === 1 ? '🎯' : '⚔️'}
                          </span>
                        </div>
                      </div>
                      <div className={`absolute top-4 right-4 px-4 py-2 rounded-xl text-sm font-bold border-2 ${
                        course.level === 'Beginner' ? 'bg-green-600/80 text-white border-green-400' :
                        course.level === 'Intermediate' ? 'bg-yellow-600/80 text-white border-yellow-400' :
                        'bg-red-600/80 text-white border-red-400'
                      } backdrop-blur-sm`}>
                        {course.level}
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Course Details */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-6 text-gray-300">
                            <div className="flex items-center">
                              <span className="mr-2">⏱️</span>
                              <span className="font-semibold">{course.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">👥</span>
                              <span className="font-semibold">Small Class Size</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <span className="text-3xl md:text-4xl font-bold text-yellow-400">
                            {course.price}
                          </span>
                          <span className="text-gray-300 ml-2">per person</span>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                          {course.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="font-bold text-white mb-4 text-lg">Course Includes:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {course.includes.map((item, index) => (
                              <div key={index} className="flex items-center">
                                <span className="text-green-400 mr-3 text-lg">✓</span>
                                <span className="text-gray-300">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          href="/signup" 
                          className="bg-gradient-to-r from-patriot-red to-red-600 text-white hover:from-red-600 hover:to-patriot-red font-bold py-3 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-xl border-2 border-yellow-400/30 hover:border-yellow-400/70 flex-1 text-center"
                        >
                          🎯 Enroll Now
                        </Link>
                        <Link 
                          href="/contact" 
                          className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-3 px-6 rounded-2xl transition-all transform hover:scale-105 border-2 border-white/30 hover:border-yellow-400/70 shadow-xl flex-1 text-center"
                        >
                          📞 Ask Questions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Phase Information */}
      <section className="py-24 bg-gradient-to-br from-black via-tactical-dark to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">🚀</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">TACTICAL EVOLUTION</span>
              <span className="text-3xl animate-pulse">🚀</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Training Evolution
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our training program is designed with a strategic phased approach to ensure 
              comprehensive skill development, safety excellence, and progressive advancement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 tactical-star flex items-center justify-center text-white font-bold text-lg border-2 border-yellow-400">
                1
              </div>
              <div className="mb-6 mt-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500 mb-4">
                  <span className="filter drop-shadow-lg text-white">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 group-hover:text-white transition-colors duration-300">
                  Phase One (Current)
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Comprehensive classroom-only courses covering firearm safety and personal 
                firearm training fundamentals with military-grade instruction standards.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-green-500 h-3 rounded-full transition-all duration-1000 shadow-lg" style={{width: '100%'}}></div>
              </div>
              <div className="text-sm text-green-400 font-semibold">Active Phase ★ Fully Operational</div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 tactical-star flex items-center justify-center text-white font-bold text-lg border-2 border-yellow-400">
                2
              </div>
              <div className="mb-6 mt-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500 mb-4">
                  <span className="filter drop-shadow-lg text-white">🛒</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-white transition-colors duration-300">
                  Phase Two (Upcoming)
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Integration of e-commerce functionality for tactical gear 
                and accessories from premium brands like Vortex and Sig Sauer.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-blue-500 h-3 rounded-full transition-all duration-1000 shadow-lg" style={{width: '25%'}}></div>
              </div>
              <div className="text-sm text-blue-400 font-semibold">Planning Phase ★ 25% Complete</div>
            </div>
            
            <div className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 tactical-star flex items-center justify-center text-white font-bold text-lg border-2 border-yellow-400">
                3
              </div>
              <div className="mb-6 mt-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-red-600 tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500 mb-4">
                  <span className="filter drop-shadow-lg text-white">🏃‍♂️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 group-hover:text-white transition-colors duration-300">
                  Phase Three (Future)
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Live firearm training sessions on dedicated training grounds 
                once land acquisition is completed for hands-on tactical experience.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div className="bg-orange-500 h-3 rounded-full transition-all duration-1000 shadow-lg" style={{width: '10%'}}></div>
              </div>
              <div className="text-sm text-orange-400 font-semibold">Research Phase ★ 10% Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Credentials Section */}
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
              <span className="text-3xl animate-pulse">🎖️</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">ELITE INSTRUCTOR</span>
              <span className="text-3xl animate-pulse">🎖️</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Your Elite Instructor
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from Army veteran Zach Gaudette, whose military experience and competitive achievements 
              ensure the highest quality tactical training.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎖️</div>
              <div className="text-lg font-bold text-yellow-400 mb-2">U.S. Army Veteran</div>
              <div className="text-sm text-gray-300">Military discipline and proven tactical expertise</div>
            </div>
            
            <div className="group bg-gradient-to-r from-patriot-red/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/50 hover:bg-yellow-500/20 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
              <div className="text-lg font-bold text-yellow-400 mb-2">#12 Regional Champion</div>
              <div className="text-sm text-gray-300">First-year competitor achieving elite status</div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <div className="text-lg font-bold text-yellow-400 mb-2">100+ Students Trained</div>
              <div className="text-sm text-gray-300">Proven track record of successful instruction</div>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
              <div className="text-lg font-bold text-yellow-400 mb-2">100% Safety Record</div>
              <div className="text-sm text-gray-300">Uncompromising commitment to student safety</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-br from-black via-tactical-dark to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
            <span className="text-3xl animate-pulse">🚀</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">START YOUR JOURNEY</span>
            <span className="text-3xl animate-pulse">🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Ready to Start Your Training Journey?
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
            Choose the course that best fits your skill level and goals. 
            All courses include certificate of completion and lifetime support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/signup" className="group bg-gradient-to-r from-patriot-red to-red-600 text-white hover:from-red-600 hover:to-patriot-red font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl border-2 border-yellow-400/30 hover:border-yellow-400/70">
              <span className="flex items-center justify-center space-x-2">
                <span>🎯 Enroll Today</span>
                <span className="text-yellow-400 group-hover:scale-110 transition-transform">→</span>
              </span>
            </Link>
            <Link href="/contact" className="group bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 border-2 border-white/30 hover:border-yellow-400/70 shadow-xl">
              <span className="flex items-center justify-center space-x-2">
                <span>📞 Ask Questions</span>
                <span className="group-hover:scale-110 transition-transform">💬</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⭐</span>
              <span>Small Class Sizes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">🎖️</span>
              <span>Veteran Instruction</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">🛡️</span>
              <span>100% Safety Record</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}