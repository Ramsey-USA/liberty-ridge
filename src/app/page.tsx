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
                <StatsCard 
                  stat={{
                    title: 'Students Trained',
                    value: '100+',
                    icon: '👥'
                  }}
                  variant="compact"
                />
                <StatsCard 
                  stat={{
                    title: 'Years Experience',
                    value: '5+',
                    icon: '⏱️'
                  }}
                  variant="compact"
                />
                <StatsCard 
                  stat={{
                    title: 'Regional Ranking',
                    value: '#12',
                    icon: '🏆',
                    highlight: true
                  }}
                  variant="compact"
                />
                <StatsCard 
                  stat={{
                    title: 'Safety Record',
                    value: '100%',
                    icon: '🛡️'
                  }}
                  variant="compact"
                />
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
              First Year Competitor ★ Precision Excellence ★ Rising Talent
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
            <Link href="/courses" className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-transform duration-200">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-patriot-blue via-white to-patriot-red relative overflow-hidden">
        {/* Patriotic Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(30,64,175,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Our Core Values
            </h2>
            <p className="text-xl text-tactical-dark max-w-3xl mx-auto leading-relaxed font-medium">
              Rooted in U.S. Army principles and veteran discipline, our values guide 
              every aspect of training and service delivery.
            </p>
          </div>
          
          <div className="home-grid-2">
            {coreValues.map((value) => (
              <div key={value.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <span className="flip-card-icon">{value.icon}</span>
                    <h3 className="flip-card-title">{value.title}</h3>
                    <p className="text-sm opacity-75">Hover to learn more</p>
                  </div>
                  <div className="flip-card-back">
                    <h3 className="flip-card-title">{value.title}</h3>
                    <p className="flip-card-description">{value.description}</p>
                  </div>
                </div>
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
            {keyFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                feature={feature}
                variant="default"
                className="feature-benefit-card group"
              />
            ))}
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
            {getFeaturedTestimonials().slice(0, 3).map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                variant="default"
                className="h-full"
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