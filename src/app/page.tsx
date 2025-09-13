import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-tactical-dark via-patriot-navy to-tactical-dark">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-patriot-blue/20 via-transparent to-patriot-red/20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            LIBERTY RIDGE
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
            TRAINING GROUNDS LLC
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional Tactical Training Led by Army Veteran Zach Gaudette
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary text-lg px-8 py-4">
              Start Your Training
            </Link>
            <Link href="/courses" className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-tactical-dark">
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-tactical-dark">
                Meet Your Instructor
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-patriot-red">
                Zach Gaudette - U.S. Army Veteran
              </h3>
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Led by founder and owner Zach Gaudette, a dedicated U.S. Army veteran 
                with extensive experience in tactical training and firearm safety. 
                Zach brings military discipline and expertise to civilian training, 
                ensuring the highest standards of safety and professionalism.
              </p>
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Proudly married to Anne Marie and father to 18-month-old Myles, 
                Zach understands the importance of personal protection and family safety. 
                His passion for training extends beyond the classroom to real-world application.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="tactical-card">
                  <div className="text-3xl font-bold text-patriot-red mb-2">100+</div>
                  <div className="text-sm text-tactical-gray">Students Trained</div>
                </div>
                <div className="tactical-card">
                  <div className="text-3xl font-bold text-patriot-blue mb-2">5+</div>
                  <div className="text-sm text-tactical-gray">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-tactical-gray text-lg">
                Photo of Zach Gaudette
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* National Rankings Section */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-tactical-dark">
            Nationally Ranked Excellence
          </h2>
          <p className="text-xl text-tactical-gray mb-8 max-w-3xl mx-auto">
            Zach&apos;s expertise extends to competitive shooting, where he has achieved 
            national recognition in long-range shooting competitions.
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
            <div className="text-6xl font-bold text-patriot-red mb-4">#12</div>
            <div className="text-2xl font-semibold text-tactical-dark mb-2">
              National Long-Range Shooting
            </div>
            <div className="text-lg text-tactical-gray mb-6">
              Current National Ranking
            </div>
            <Link href="/rankings" className="btn-secondary">
              View Full Rankings
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-tactical-dark">
              Phase One Training Courses
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Currently offering classroom-based training focused on firearm safety 
              and personal firearm training fundamentals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="tactical-card">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-tactical-gray">Course Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">
                Firearm Safety Fundamentals
              </h3>
              <p className="text-tactical-gray mb-6">
                Comprehensive classroom training covering the essential principles 
                of firearm safety, handling, and basic maintenance.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-patriot-red">$199</span>
                <Link href="/signup" className="btn-primary">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="tactical-card">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-tactical-gray">Course Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">
                Personal Firearm Training
              </h3>
              <p className="text-tactical-gray mb-6">
                Personalized training focused on your specific firearm and 
                individual skill development needs.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-patriot-red">$299</span>
                <Link href="/signup" className="btn-primary">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Course 3 */}
            <div className="tactical-card">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-tactical-gray">Course Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">
                Advanced Safety Protocols
              </h3>
              <p className="text-tactical-gray mb-6">
                Advanced classroom instruction on tactical safety protocols 
                and emergency response procedures.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-patriot-red">$399</span>
                <Link href="/signup" className="btn-primary">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/courses" className="btn-secondary text-lg px-8 py-4">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rooted in U.S. Army principles and veteran discipline, our values guide 
              every aspect of training and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Loyalty', desc: 'Upholding our commitment to students and community', color: 'patriot-red' },
              { title: 'Duty', desc: 'Providing comprehensive training with highest standards', color: 'white' },
              { title: 'Respect', desc: 'Fostering professionalism and mutual respect', color: 'patriot-blue' },
              { title: 'Selfless Service', desc: 'Dedicating ourselves to student safety and readiness', color: 'patriot-red' },
              { title: 'Honor', desc: 'Conducting operations with integrity and moral compass', color: 'white' },
              { title: 'Integrity', desc: 'Maintaining transparency and honesty in all we do', color: 'patriot-blue' },
              { title: 'Personal Courage', desc: 'Empowering students to act with confidence and skill', color: 'patriot-red' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold mb-4 ${value.color === 'patriot-red' ? 'text-patriot-red' : value.color === 'patriot-blue' ? 'text-patriot-blue' : 'text-white'}`}>
                  {value.title}
                </div>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-tactical-dark">
              What Our Students Say
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Real feedback from students who have experienced our training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'First-time Gun Owner',
                testimonial: 'Zach\'s patient and thorough approach made me feel confident and safe. The classroom training was comprehensive and easy to understand.',
                rating: 5
              },
              {
                name: 'Mike Rodriguez',
                role: 'Law Enforcement',
                testimonial: 'Outstanding instruction with real-world applications. Zach\'s military experience really shows in the quality of training provided.',
                rating: 5
              },
              {
                name: 'Emily Chen',
                role: 'Self-Defense Student',
                testimonial: 'Professional, respectful, and incredibly knowledgeable. I feel much more prepared to protect myself and my family.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="tactical-card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-tactical-gray mb-6 italic">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div>
                  <div className="font-semibold text-tactical-dark">{testimonial.name}</div>
                  <div className="text-sm text-tactical-gray">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-patriot-blue to-patriot-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Training?
          </h2>
          <p className="text-xl mb-8">
            Join the Liberty Ridge community and start your journey toward 
            tactical excellence and personal protection mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-patriot-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Book Your Training
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-semibold py-4 px-8 rounded-lg text-lg transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}