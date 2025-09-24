import BulletHero from '@/components/BulletHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">�️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">ELITE PROGRAMS</span>
              <span className="text-3xl animate-pulse">�️</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                Elite Training Programs
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              Professional courses designed by Army veteran Zach Gaudette, combining military discipline 
              with comprehensive safety protocols for all skill levels.
            </p>
          </div>
          
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={course.id} className="group bg-white/10 hover:bg-white/15 shadow-2xl backdrop-blur-sm p-8 border border-white/20 hover:border-yellow-400/50 rounded-3xl transition-all hover:-translate-y-1 duration-500">
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
                  {/* Enhanced Course Image */}
                  <div className="lg:col-span-1">
                    <div className="relative flex justify-center items-center bg-gradient-to-br from-tactical-dark to-patriot-blue rounded-2xl h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-patriot-red/30 to-yellow-500/20"></div>
                      <div className="z-10 relative">
                        <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${
                          index === 0 ? 'from-green-600 to-green-800' :
                          index === 1 ? 'from-blue-600 to-blue-800' :
                          'from-red-600 to-red-800'
                        } tactical-star flex items-center justify-center text-4xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500`}>
                          <span className="drop-shadow-lg text-white filter">
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
                          <h3 className="mb-2 font-bold text-white group-hover:text-yellow-400 text-2xl md:text-3xl transition-colors duration-300">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-6 text-gray-300">
                            <div className="flex items-center">
                              <span className="mr-2">⏱️</span>
                              <span className="font-semibold">{course.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">⚔️</span>
                              <span className="font-semibold">Small Class Size</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <span className="font-bold text-yellow-400 text-3xl md:text-4xl">
                            {course.price}
                          </span>
                          <span className="ml-2 text-gray-300">per person</span>
                        </div>
                        
                        <p className="mb-6 text-gray-300 text-lg leading-relaxed">
                          {course.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="mb-4 font-bold text-white text-lg">Course Includes:</h4>
                          <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                            {course.includes.map((item, index) => (
                              <div key={index} className="flex items-center">
                                <span className="mr-3 text-green-400 text-lg">✓</span>
                                <span className="text-gray-300">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex sm:flex-row flex-col gap-4">
                        <Link 
                          href="/signup" 
                          className="flex-1 bg-gradient-to-r from-patriot-red hover:from-red-600 to-red-600 hover:to-patriot-red shadow-xl px-6 py-3 border-2 border-yellow-400/30 hover:border-yellow-400/70 rounded-2xl font-bold text-white text-center hover:scale-105 transition-all transform"
                        >
                          🎯 Enroll Now
                        </Link>
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-white/10 hover:bg-white/20 shadow-xl backdrop-blur-sm px-6 py-3 border-2 border-white/30 hover:border-yellow-400/70 rounded-2xl font-bold text-white text-center hover:scale-105 transition-all transform"
                        >
                          🎖️ Ask Questions
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
      <section className="relative bg-gradient-to-br from-black via-tactical-dark to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-0 left-0 absolute bg-gradient-to-br from-yellow-500/30 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-patriot-red/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">�️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">TACTICAL EVOLUTION</span>
              <span className="text-3xl animate-pulse">�️</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                Training Evolution
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              Our training program is designed with a strategic phased approach to ensure 
              comprehensive skill development, safety excellence, and progressive advancement.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-8 border border-white/30 hover:border-yellow-400/50 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="top-4 left-4 absolute flex justify-center items-center bg-gradient-to-br from-green-600 to-green-800 border-2 border-yellow-400 w-12 h-12 font-bold text-white text-lg tactical-star">
                1
              </div>
              <div className="mt-8 mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-green-600 to-green-800 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">�️</span>
                </div>
                <h3 className="mb-4 font-bold text-green-400 group-hover:text-white text-2xl transition-colors duration-300">
                  Phase One (Current)
                </h3>
              </div>
              <p className="mb-6 text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                Comprehensive classroom-only courses covering firearm safety and personal 
                firearm training fundamentals with military-grade instruction standards.
              </p>
              <div className="bg-gray-700 mb-4 rounded-full w-full h-3">
                <div className="bg-green-500 shadow-lg rounded-full h-3 transition-all duration-1000" style={{width: '100%'}}></div>
              </div>
              <div className="font-semibold text-green-400 text-sm">Active Phase ★ Fully Operational</div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-8 border border-white/30 hover:border-yellow-400/50 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="top-4 left-4 absolute flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-yellow-400 w-12 h-12 font-bold text-white text-lg tactical-star">
                2
              </div>
              <div className="mt-8 mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">🛒</span>
                </div>
                <h3 className="mb-4 font-bold text-blue-400 group-hover:text-white text-2xl transition-colors duration-300">
                  Phase Two (Upcoming)
                </h3>
              </div>
              <p className="mb-6 text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                Integration of e-commerce functionality for tactical gear 
                and accessories from premium brands like Vortex and Sig Sauer.
              </p>
              <div className="bg-gray-700 mb-4 rounded-full w-full h-3">
                <div className="bg-blue-500 shadow-lg rounded-full h-3 transition-all duration-1000" style={{width: '25%'}}></div>
              </div>
              <div className="font-semibold text-blue-400 text-sm">Planning Phase ★ 25% Complete</div>
            </div>
            
            <div className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-8 border border-white/30 hover:border-yellow-400/50 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
              <div className="top-4 left-4 absolute flex justify-center items-center bg-gradient-to-br from-orange-600 to-red-600 border-2 border-yellow-400 w-12 h-12 font-bold text-white text-lg tactical-star">
                3
              </div>
              <div className="mt-8 mb-6">
                <div className="flex justify-center items-center bg-gradient-to-br from-orange-600 to-red-600 shadow-2xl mx-auto mb-4 border-4 border-yellow-300 w-20 h-20 text-4xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                  <span className="drop-shadow-lg text-white filter">🏃‍♂️</span>
                </div>
                <h3 className="mb-4 font-bold text-orange-400 group-hover:text-white text-2xl transition-colors duration-300">
                  Phase Three (Future)
                </h3>
              </div>
              <p className="mb-6 text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                Live firearm training sessions on dedicated training grounds 
                once land acquisition is completed for hands-on tactical experience.
              </p>
              <div className="bg-gray-700 mb-4 rounded-full w-full h-3">
                <div className="bg-orange-500 shadow-lg rounded-full h-3 transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
              <div className="font-semibold text-orange-400 text-sm">Research Phase ★ 10% Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Credentials Section */}
      <section className="relative bg-gradient-to-br from-tactical-dark via-black to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">🎖️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">ELITE INSTRUCTOR</span>
              <span className="text-3xl animate-pulse">🎖️</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
                Your Elite Instructor
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              Learn from Army veteran Zach Gaudette, whose military experience and competitive achievements 
              ensure the highest quality tactical training.
            </p>
          </div>
          
          <div className="gap-6 grid grid-cols-2 lg:grid-cols-4">
            <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 border border-white/20 hover:border-yellow-400/50 rounded-2xl text-center transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">🎖️</div>
              <div className="mb-2 font-bold text-yellow-400 text-lg">U.S. Army Veteran</div>
              <div className="text-gray-300 text-sm">Military discipline and proven tactical expertise</div>
            </div>
            
            <div className="group hover:bg-yellow-500/20 bg-gradient-to-r from-patriot-red/20 to-yellow-500/20 backdrop-blur-sm p-6 border border-yellow-400/50 rounded-2xl text-center transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">🏆</div>
              <div className="mb-2 font-bold text-yellow-400 text-lg">#12 Regional Champion</div>
              <div className="text-gray-300 text-sm">First-year competitor achieving elite status</div>
            </div>
            
            <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 border border-white/20 hover:border-yellow-400/50 rounded-2xl text-center transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">⚔️</div>
              <div className="mb-2 font-bold text-yellow-400 text-lg">100+ Students Trained</div>
              <div className="text-gray-300 text-sm">Proven track record of successful instruction</div>
            </div>
            
            <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 border border-white/20 hover:border-yellow-400/50 rounded-2xl text-center transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 text-3xl group-hover:scale-110 transition-transform">🛡️</div>
              <div className="mb-2 font-bold text-yellow-400 text-lg">100% Safety Record</div>
              <div className="text-gray-300 text-sm">Uncompromising commitment to student safety</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative bg-gradient-to-br from-black via-tactical-dark to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-0 left-0 absolute bg-gradient-to-br from-yellow-500/30 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-patriot-red/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
            <span className="text-3xl animate-pulse">🎖️</span>
            <span className="font-bold text-yellow-400 text-lg tracking-wider">START YOUR JOURNEY</span>
            <span className="text-3xl animate-pulse">🎖️</span>
          </div>
          
          <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
            <span className="bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 text-transparent">
              Ready to Start Your Training Journey?
            </span>
          </h2>
          <p className="mb-10 text-gray-300 text-xl md:text-2xl leading-relaxed">
            Choose the course that best fits your skill level and goals. 
            All courses include certificate of completion and lifetime support.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-6 mb-8">
            <Link href="/signup" className="group bg-gradient-to-r from-patriot-red hover:from-red-600 to-red-600 hover:to-patriot-red shadow-xl px-8 py-4 border-2 border-yellow-400/30 hover:border-yellow-400/70 rounded-2xl font-bold text-white text-lg hover:scale-105 transition-all transform">
              <span className="flex justify-center items-center space-x-2">
                <span>🎯 Enroll Today</span>
                <span className="text-yellow-400 group-hover:scale-110 transition-transform">→</span>
              </span>
            </Link>
            <Link href="/contact" className="group bg-white/10 hover:bg-white/20 shadow-xl backdrop-blur-sm px-8 py-4 border-2 border-white/30 hover:border-yellow-400/70 rounded-2xl font-bold text-white text-lg hover:scale-105 transition-all transform">
              <span className="flex justify-center items-center space-x-2">
                <span>🎖️ Ask Questions</span>
                <span className="group-hover:scale-110 transition-transform">🎖️</span>
              </span>
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">🎖️</span>
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