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
      
      {/* Enhanced Bullet Hero Section */}
      <BulletHero 
        title="LIBERTY RIDGE TRAINING GROUNDS"
        subtitle="Elite Tactical Training by Army Veteran Zach Gaudette"
        description="Master tactical skills with military-grade training, professional instruction, and proven safety protocols for civilian protection."
        backgroundGradient="from-slate-100 via-white to-gray-100"
      />

      {/* Enhanced Call-to-Action Banner */}
      <section className="py-16 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-patriot-red/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
            <span className="text-3xl animate-pulse">⭐</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">ELITE TRAINING AVAILABLE</span>
            <span className="text-3xl animate-pulse">⭐</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Ready to Master Tactical Excellence?
            </span>
          </h3>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
            Join 100+ trained students in professional firearm safety and tactical training.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup" className="group bg-gradient-to-r from-patriot-red to-red-600 text-white hover:from-red-600 hover:to-patriot-red font-bold py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-2xl border-2 border-yellow-400/30 hover:border-yellow-400/70">
              <span className="flex items-center justify-center space-x-2">
                <span>Start Training Today</span>
                <span className="text-yellow-400 group-hover:scale-110 transition-transform">🎯</span>
              </span>
            </Link>
            <Link href="/courses" className="group bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-5 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 border-2 border-white/30 hover:border-yellow-400/70 shadow-2xl">
              <span className="flex items-center justify-center space-x-2">
                <span>View All Courses</span>
                <span className="group-hover:scale-110 transition-transform">📚</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section className="py-24 bg-gradient-to-br from-tactical-dark via-black to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/50 mb-8 shadow-xl">
                <span className="text-2xl">🎖️</span>
                <span className="text-yellow-400 font-bold tracking-wider">VETERAN LEADERSHIP</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Meet Your Elite Instructor
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">
                Zach Gaudette - U.S. Army Veteran
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Led by founder and owner Zach Gaudette, a dedicated U.S. Army veteran 
                with extensive experience in tactical training and firearm safety. 
                Zach brings military discipline and expertise to civilian training, 
                ensuring the highest standards of safety and professionalism.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Proudly married to Anne Marie and father to 18-month-old Myles, 
                Zach understands the importance of personal protection and family safety. 
                His passion for training extends beyond the classroom to real-world application.
              </p>
              
              {/* Enhanced Statistics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">👥</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
                  <div className="text-sm text-gray-300">Students Trained</div>
                </div>
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">⏱️</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">5+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="group bg-gradient-to-r from-patriot-red/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/50 hover:bg-yellow-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">#12</div>
                  <div className="text-sm text-gray-300">Regional Ranking</div>
                </div>
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🛡️</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-sm text-gray-300">Safety Record</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Enhanced placeholder with military styling */}
                <div className="bg-gradient-to-br from-tactical-dark via-patriot-blue to-black h-96 lg:h-[500px] rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-patriot-red/30 to-yellow-500/20"></div>
                  <div className="absolute inset-0 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 tactical-star flex items-center justify-center text-6xl shadow-2xl border-4 border-yellow-300">
                      <span className="filter drop-shadow-lg">👨‍💼</span>
                    </div>
                    <span className="text-2xl font-bold block mb-2">Zach Gaudette</span>
                    <div className="text-lg text-yellow-400 mb-4">U.S. Army Veteran</div>
                    <div className="text-sm text-gray-300">Elite Tactical Instructor</div>
                  </div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-patriot-red to-red-600 text-white px-4 py-3 rounded-2xl text-sm font-bold border border-yellow-400/50 shadow-xl">
                    <span className="flex items-center space-x-2">
                      <span>🏆</span>
                      <span>#12 Regional</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Regional Rankings Section */}
      <section className="py-24 bg-gradient-to-br from-black via-tactical-dark to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/30 to-orange-600/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
            <span className="text-3xl animate-pulse">🏆</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">CHAMPIONSHIP EXCELLENCE</span>
            <span className="text-3xl animate-pulse">🏆</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Regionally Ranked Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            In his first year of competitive shooting, Zach has achieved impressive 
            regional recognition in long-range shooting competitions, demonstrating his natural talent and dedication.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-500 to-orange-600 tactical-star flex items-center justify-center shadow-2xl border-4 border-yellow-300">
                <span className="text-7xl md:text-8xl font-bold text-white filter drop-shadow-lg">#12</span>
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Regional Long-Range Shooting Champion
            </div>
            <div className="flex items-center justify-center space-x-6 text-lg md:text-xl mb-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">⭐</span>
                <span>First Year Competitor</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">⭐</span>
                <span>Precision Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">⭐</span>
                <span>Rising Talent</span>
              </div>
            </div>
            <Link href="/rankings" className="group bg-gradient-to-r from-patriot-red to-red-600 text-white hover:from-red-600 hover:to-patriot-red font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl border-2 border-yellow-400/30 hover:border-yellow-400/70">
              <span className="flex items-center justify-center space-x-2">
                <span>View Full Rankings</span>
                <span className="text-yellow-400 group-hover:scale-110 transition-transform">📊</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
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
              <span className="text-3xl animate-pulse">📚</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">TACTICAL EDUCATION</span>
              <span className="text-3xl animate-pulse">📚</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Elite Training Courses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Currently offering comprehensive classroom-based training focused on firearm safety 
              and personal firearm training fundamentals with military-grade instruction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.slice(0, 3).map((course) => (
              <CourseCard 
                key={course.id}
                course={course}
                featured={course.popular}
                className="h-full"
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="group bg-gradient-to-r from-patriot-red to-red-600 text-white hover:from-red-600 hover:to-patriot-red font-bold py-4 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-xl border-2 border-yellow-400/30 hover:border-yellow-400/70">
              <span className="flex items-center justify-center space-x-2">
                <span>View All Courses</span>
                <span className="text-yellow-400 group-hover:scale-110 transition-transform">🎯</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="py-24 bg-gradient-to-br from-black via-tactical-dark to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">🇺🇸</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">ARMY VALUES</span>
              <span className="text-3xl animate-pulse">🇺🇸</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rooted in U.S. Army principles and veteran discipline, our values guide 
              every aspect of training and service delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div key={value.id} className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-patriot-red to-red-800 tactical-star flex items-center justify-center text-2xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                    <span className="filter drop-shadow-lg text-white">{value.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Liberty Ridge Section */}
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
              <span className="text-3xl animate-pulse">💪</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">TACTICAL ADVANTAGE</span>
              <span className="text-3xl animate-pulse">💪</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Why Choose Liberty Ridge?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that military-grade training and veteran expertise 
              can make in your tactical education journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                feature={feature}
                variant="default"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
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
              <span className="text-3xl animate-pulse">⭐</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">STUDENT SUCCESS</span>
              <span className="text-3xl animate-pulse">⭐</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                What Our Students Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real feedback from students who have experienced our professional training programs 
              and achieved their tactical goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedTestimonials().slice(0, 3).map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                variant="default"
                className="h-full group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Elite Training?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Join the Liberty Ridge community and start your journey toward 
            tactical excellence, personal protection mastery, and unshakeable confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/signup" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              🎯 Book Your Training
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              📞 Contact Us
            </Link>
          </div>
          <div className="text-sm opacity-75">
            ⭐ Join 100+ trained students ★ 🛡️ 100% Safety Record ★ 🏆 Regional Champion Instruction
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}