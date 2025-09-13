import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
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
        backgroundGradient="from-tactical-dark via-patriot-navy to-patriot-blue"
      />

      {/* Enhanced Call-to-Action Banner */}
      <section className="py-12 bg-gradient-to-r from-patriot-red to-patriot-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Master Tactical Excellence?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join 100+ trained students in professional firearm safety and tactical training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors transform hover:scale-105">
              Start Training Today
            </Link>
            <Link href="/courses" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
                Meet Your Elite Instructor
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-patriot-red">
                Zach Gaudette - U.S. Army Veteran
              </h3>
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Led by founder and owner Zach Gaudette, a dedicated U.S. Army veteran 
                with extensive experience in tactical training and firearm safety. 
                Zach brings military discipline and expertise to civilian training, 
                ensuring the highest standards of safety and professionalism.
              </p>
              <p className="text-lg text-tactical-gray mb-8 leading-relaxed">
                Proudly married to Anne Marie and father to 18-month-old Myles, 
                Zach understands the importance of personal protection and family safety. 
                His passion for training extends beyond the classroom to real-world application.
              </p>
              
              {/* Enhanced Statistics Grid */}
              <div className="home-grid-2 text-center">
                <div className="stats-card">
                  <div className="text-2xl sm:text-3xl font-bold text-patriot-red mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-tactical-gray">Students Trained</div>
                </div>
                <div className="stats-card">
                  <div className="text-2xl sm:text-3xl font-bold text-patriot-blue mb-2">5+</div>
                  <div className="text-xs sm:text-sm text-tactical-gray">Years Experience</div>
                </div>
                <div className="stats-card">
                  <div className="text-2xl sm:text-3xl font-bold text-patriot-red mb-2">#12</div>
                  <div className="text-xs sm:text-sm text-tactical-gray">Regional Ranking</div>
                </div>
                <div className="stats-card">
                  <div className="text-2xl sm:text-3xl font-bold text-patriot-blue mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-tactical-gray">Safety Record</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Enhanced placeholder with military styling */}
                <div className="bg-gradient-to-br from-tactical-gray to-tactical-dark h-96 lg:h-[500px] rounded-xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/20 to-patriot-red/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <span className="text-lg font-semibold">Zach Gaudette</span>
                    <div className="text-sm opacity-75 mt-2">U.S. Army Veteran</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-patriot-red text-white px-3 py-2 rounded-full text-sm font-bold">
                    #12 Regional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Regional Rankings Section */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
            Regionally Ranked Excellence
          </h2>
          <p className="text-xl text-tactical-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            In his first year of competitive shooting, Zach has achieved impressive 
            regional recognition in long-range shooting competitions, demonstrating his natural talent and dedication.
          </p>
          
          <div className="mission-statement-hero max-w-3xl mx-auto text-center">
            <div className="text-7xl md:text-8xl font-bold mb-4">#12</div>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Regional Long-Range Shooting Champion
            </div>
            <div className="text-lg md:text-xl mb-8 opacity-90">
              First Year Competitor • Precision Excellence • Rising Talent
            </div>
            <Link href="/rankings" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              View Full Rankings
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Elite Training Courses
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Currently offering comprehensive classroom-based training focused on firearm safety 
              and personal firearm training fundamentals with military-grade instruction.
            </p>
          </div>
          
          <div className="home-grid-1 mb-12">
            {/* Course 1 - Enhanced */}
            <div className="enhanced-course-card group">
              <div className="relative">
                <div className="h-56 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-white opacity-90">🛡️</div>
                  <div className="absolute top-4 right-4 bg-white text-patriot-blue px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
                    Firearm Safety Fundamentals
                  </h3>
                  <p className="text-tactical-gray leading-relaxed">
                    Comprehensive classroom training covering the essential principles 
                    of firearm safety, handling, and basic maintenance with expert instruction.
                  </p>
                  
                  {/* Course Features */}
                  <div className="space-y-2 text-sm text-tactical-gray">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>4-Hour Comprehensive Session</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Safety Protocols & Best Practices</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Certificate of Completion</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <span className="course-price">$199</span>
                      <span className="text-sm text-tactical-gray ml-2">per person</span>
                    </div>
                    <Link href="/signup" className="btn-primary px-6 py-3 text-sm font-semibold transform group-hover:scale-105 transition-transform duration-200">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 - Enhanced */}
            <div className="enhanced-course-card group">
              <div className="relative">
                <div className="h-56 bg-gradient-to-br from-tactical-dark to-patriot-blue rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-white opacity-90">🎯</div>
                  <div className="absolute top-4 right-4 bg-patriot-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    Custom
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
                    Personal Firearm Training
                  </h3>
                  <p className="text-tactical-gray leading-relaxed">
                    Personalized training focused on your specific firearm and 
                    individual skill development needs with one-on-one attention.
                  </p>
                  
                  {/* Course Features */}
                  <div className="space-y-2 text-sm text-tactical-gray">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Personalized 1-on-1 Instruction</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Your Specific Firearm Focus</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Customized Training Plan</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <span className="course-price">$299</span>
                      <span className="text-sm text-tactical-gray ml-2">per session</span>
                    </div>
                    <Link href="/signup" className="btn-primary px-6 py-3 text-sm font-semibold transform group-hover:scale-105 transition-transform duration-200">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3 - Enhanced */}
            <div className="enhanced-course-card group">
              <div className="relative">
                <div className="h-56 bg-gradient-to-br from-patriot-red to-tactical-dark rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-white opacity-90">⚔️</div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-tactical-dark px-3 py-1 rounded-full text-sm font-bold">
                    Advanced
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
                    Advanced Safety Protocols
                  </h3>
                  <p className="text-tactical-gray leading-relaxed">
                    Advanced classroom instruction on tactical safety protocols 
                    and emergency response procedures for serious practitioners.
                  </p>
                  
                  {/* Course Features */}
                  <div className="space-y-2 text-sm text-tactical-gray">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Advanced Tactical Protocols</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Emergency Response Training</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Military-Grade Instruction</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <span className="course-price">$399</span>
                      <span className="text-sm text-tactical-gray ml-2">intensive</span>
                    </div>
                    <Link href="/signup" className="btn-primary px-6 py-3 text-sm font-semibold transform group-hover:scale-105 transition-transform duration-200">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-transform duration-200">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rooted in U.S. Army principles and veteran discipline, our values guide 
              every aspect of training and service delivery.
            </p>
          </div>
          
          <div className="home-grid-2">
            {[
              { title: 'Loyalty', desc: 'Upholding our commitment to students and community', icon: '🎯' },
              { title: 'Duty', desc: 'Providing comprehensive training with highest standards', icon: '⚔️' },
              { title: 'Respect', desc: 'Fostering professionalism and mutual respect', icon: '🛡️' },
              { title: 'Selfless Service', desc: 'Dedicating ourselves to student safety and readiness', icon: '🤝' },
              { title: 'Honor', desc: 'Conducting operations with integrity and moral compass', icon: '⭐' },
              { title: 'Integrity', desc: 'Maintaining transparency and honesty in all we do', icon: '💎' },
              { title: 'Personal Courage', desc: 'Empowering students to act with confidence and skill', icon: '🦅' },
            ].map((value, index) => (
              <div key={index} className="mission-value-card text-center group bg-tactical-gray border-gray-600">
                <div className="mission-value-icon">
                  <span className="text-xl sm:text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Liberty Ridge Section */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Why Choose Liberty Ridge?
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Experience the difference that military-grade training and veteran expertise 
              can make in your tactical education journey.
            </p>
          </div>
          
          <div className="home-grid-1">
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🎖️</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                Veteran-Owned & Operated
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Led by U.S. Army veteran Zach Gaudette, bringing authentic military experience 
                and discipline to civilian tactical training with proven methodologies.
              </p>
            </div>
            
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                Rising Competition Talent
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Learn from an instructor who achieved #12 regional ranking in his first year of 
                long-range shooting competition, combining natural talent with proven teaching ability.
              </p>
            </div>
            
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                100% Safety Record
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Maintaining the highest safety standards with comprehensive protocols, 
                ensuring every student trains in a secure and controlled environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              What Our Students Say
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Real feedback from students who have experienced our professional training programs 
              and achieved their tactical goals.
            </p>
          </div>
          
          <div className="home-grid-1">
            {[
              {
                name: 'Sarah Johnson',
                role: 'First-time Gun Owner',
                testimonial: 'Zach\'s patient and thorough approach made me feel confident and safe. The classroom training was comprehensive and easy to understand.',
                rating: 5,
                image: '👩‍💼'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Law Enforcement',
                testimonial: 'Outstanding instruction with real-world applications. Zach\'s military experience really shows in the quality of training provided.',
                rating: 5,
                image: '👮‍♂️'
              },
              {
                name: 'Emily Chen',
                role: 'Self-Defense Student',
                testimonial: 'Professional, respectful, and incredibly knowledgeable. I feel much more prepared to protect myself and my family.',
                rating: 5,
                image: '👩‍🔬'
              }
            ].map((testimonial, index) => (
              <div key={index} className="enhanced-testimonial-card group">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-lg text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-tactical-gray">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-tactical-gray leading-relaxed italic text-lg">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-patriot-red font-semibold">
                    <span className="mr-2">✓</span>
                    Verified Graduate
                  </div>
                </div>
              </div>
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
            ⭐ Join 100+ trained students • 🛡️ 100% Safety Record • 🏆 Regional Champion Instruction
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}