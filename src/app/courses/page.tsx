import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import Link from 'next/link';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Firearm Safety Fundamentals',
      duration: '4 hours',
      price: '$199',
      level: 'Beginner',
      description: 'Comprehensive classroom training covering the essential principles of firearm safety, handling, storage, and basic maintenance. Perfect for first-time gun owners.',
      includes: [
        'Safe handling procedures',
        'Firearm storage and security',
        'Basic maintenance and cleaning',
        'Legal responsibilities',
        'Emergency protocols',
        'Certificate of completion'
      ]
    },
    {
      id: 2,
      title: 'Personal Firearm Training',
      duration: '6 hours',
      price: '$299',
      level: 'Intermediate',
      description: 'Personalized training focused on your specific firearm and individual skill development needs. Includes one-on-one instruction and customized curriculum.',
      includes: [
        'Weapon-specific training',
        'Personalized skill assessment',
        'Customized training plan',
        'Advanced safety protocols',
        'Tactical fundamentals',
        'Follow-up consultation'
      ]
    },
    {
      id: 3,
      title: 'Advanced Safety Protocols',
      duration: '8 hours',
      price: '$399',
      level: 'Advanced',
      description: 'Advanced classroom instruction on tactical safety protocols, emergency response procedures, and crisis management techniques.',
      includes: [
        'Crisis situation management',
        'Advanced tactical protocols',
        'Emergency response planning',
        'Threat assessment',
        'De-escalation techniques',
        'Scenario-based training'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title="TRAINING COURSES"
        subtitle="Professional Firearm Safety & Tactical Training"
        description="Comprehensive courses designed for all skill levels, from beginners to advanced practitioners."
        backgroundGradient="from-tactical-dark to-patriot-navy"
      />

      {/* Enhanced Course Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Elite Training Programs
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Professional courses designed by Army veteran Zach Gaudette, combining military discipline 
              with comprehensive safety protocols for all skill levels.
            </p>
          </div>
          
          <div className="space-y-12">
            {courses.map((course, index) => (
              <div key={course.id} className="enhanced-course-card group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Enhanced Course Image */}
                  <div className="lg:col-span-1">
                    <div className={`h-64 rounded-xl flex items-center justify-center relative overflow-hidden ${
                      index === 0 ? 'bg-gradient-to-br from-patriot-blue to-patriot-red' :
                      index === 1 ? 'bg-gradient-to-br from-tactical-dark to-patriot-blue' :
                      'bg-gradient-to-br from-patriot-red to-tactical-dark'
                    }`}>
                      <div className={`text-6xl text-white opacity-90 ${
                        index === 0 ? '🛡️' : index === 1 ? '🎯' : '⚔️'
                      }`}>
                        {index === 0 ? '🛡️' : index === 1 ? '🎯' : '⚔️'}
                      </div>
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                        course.level === 'Beginner' ? 'bg-green-500 text-white' :
                        course.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {course.level}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Course Details */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <div className="mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300 mb-2">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-6 text-tactical-gray">
                            <div className="flex items-center">
                              <span className="mr-2">⏱️</span>
                              <span className="font-semibold">{course.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">�</span>
                              <span className="font-semibold">Small Class Size</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <span className="course-price text-3xl md:text-4xl font-bold">
                            {course.price}
                          </span>
                          <span className="text-tactical-gray ml-2">per person</span>
                        </div>
                        
                        <p className="text-tactical-gray mb-6 leading-relaxed text-lg">
                          {course.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="font-bold text-tactical-dark mb-4 text-lg">Course Includes:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {course.includes.map((item, index) => (
                              <div key={index} className="flex items-center">
                                <span className="text-green-500 mr-3 text-lg">✓</span>
                                <span className="text-tactical-gray">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          href="/signup" 
                          className="btn-primary flex-1 text-center transform group-hover:scale-105 transition-transform duration-200"
                        >
                          🎯 Enroll Now
                        </Link>
                        <Link 
                          href="/contact" 
                          className="btn-outline flex-1 text-center transform hover:scale-105 transition-transform duration-200"
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
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Training Evolution
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Our training program is designed with a strategic phased approach to ensure 
              comprehensive skill development, safety excellence, and progressive advancement.
            </p>
          </div>
          
          <div className="home-grid-1">
            <div className="future-phase-card group">
              <div className="phase-number">1</div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                  Phase One (Current)
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive classroom-only courses covering firearm safety and personal 
                firearm training fundamentals with military-grade instruction standards.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-patriot-red h-2 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
              </div>
              <div className="text-sm text-gray-400">Active Phase • Fully Operational</div>
            </div>
            
            <div className="future-phase-card group">
              <div className="phase-number">2</div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold mb-4 text-patriot-blue group-hover:text-white transition-colors duration-300">
                  Phase Two (Upcoming)
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Integration of e-commerce functionality for tactical gear 
                and accessories from premium brands like Vortex and Sig Sauer.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-patriot-blue h-2 rounded-full transition-all duration-1000" style={{width: '25%'}}></div>
              </div>
              <div className="text-sm text-gray-400">Planning Phase • 25% Complete</div>
            </div>
            
            <div className="future-phase-card group">
              <div className="phase-number">3</div>
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl mb-4">🏃‍♂️</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                  Phase Three (Future)
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Live firearm training sessions on dedicated training grounds 
                once land acquisition is completed for hands-on tactical experience.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{width: '10%'}}></div>
              </div>
              <div className="text-sm text-gray-400">Research Phase • 10% Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Credentials Section */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Elite Instructor
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from Army veteran Zach Gaudette, whose military experience and competitive achievements 
              ensure the highest quality tactical training.
            </p>
          </div>
          
          <div className="home-grid-2">
            <div className="mission-value-card text-center group bg-tactical-gray border-gray-600">
              <div className="mission-value-icon">
                <span className="text-xl sm:text-2xl text-white">🎖️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                U.S. Army Veteran
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Military discipline and proven tactical expertise
              </p>
            </div>
            
            <div className="mission-value-card text-center group bg-tactical-gray border-gray-600">
              <div className="mission-value-icon">
                <span className="text-xl sm:text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                #12 Regional Champion
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                First-year competitor achieving elite status
              </p>
            </div>
            
            <div className="mission-value-card text-center group bg-tactical-gray border-gray-600">
              <div className="mission-value-icon">
                <span className="text-xl sm:text-2xl text-white">👥</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                100+ Students Trained
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Proven track record of successful instruction
              </p>
            </div>
            
            <div className="mission-value-card text-center group bg-tactical-gray border-gray-600">
              <div className="mission-value-icon">
                <span className="text-xl sm:text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-white transition-colors duration-300">
                100% Safety Record
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Uncompromising commitment to student safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Training Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Choose the course that best fits your skill level and goals. 
            All courses include certificate of completion and lifetime support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/signup" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              🎯 Enroll Today
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              📞 Ask Questions
            </Link>
          </div>
          <div className="text-sm opacity-75">
            ⭐ Small Class Sizes • 🎖️ Veteran Instruction • 🛡️ 100% Safety Record
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}