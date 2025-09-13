import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tactical-dark to-patriot-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Liberty Ridge</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Founded on military values and veteran expertise, Liberty Ridge Training Grounds 
            is dedicated to providing exceptional tactical and firearm safety education.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-tactical-gray text-lg">Zach Gaudette Photo</span>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 text-tactical-dark">
                Meet Zach Gaudette
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-patriot-red">
                Founder & Lead Instructor
              </h3>
              
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Zach Gaudette is a dedicated U.S. Army veteran who brings years of military 
                experience and tactical expertise to civilian training. His commitment to 
                excellence and safety has made Liberty Ridge Training Grounds a trusted 
                name in tactical education.
              </p>
              
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Beyond his military service, Zach is a devoted family man, proudly married 
                to Anne Marie and father to their 18-month-old son, Myles. This personal 
                perspective on family protection drives his passion for teaching others 
                the skills they need to keep their loved ones safe.
              </p>
              
              <div className="bg-patriot-red text-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-3">Current Achievement</h4>
                <div className="text-3xl font-bold mb-2">#12 National Ranking</div>
                <p>Long-Range Shooting Competition</p>
              </div>
              
              <Link href="/rankings" className="btn-secondary">
                View Full Rankings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-tactical-dark">Our Mission</h2>
            <p className="text-xl text-tactical-gray max-w-4xl mx-auto">
              To provide comprehensive, professional tactical training that empowers individuals 
              with the knowledge, skills, and confidence needed for personal protection and 
              firearm safety, rooted in military discipline and veteran expertise.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: 'Loyalty', desc: 'Upholding our commitment to our students and community.' },
              { title: 'Duty', desc: 'Providing comprehensive training with the highest standards.' },
              { title: 'Respect', desc: 'Fostering an environment of professionalism and mutual respect.' },
              { title: 'Selfless Service', desc: 'Dedicating ourselves to the safety and readiness of our students.' },
              { title: 'Honor', desc: 'Conducting all operations with integrity and a strong moral compass.' },
              { title: 'Integrity', desc: 'Maintaining transparency and honesty in all we do.' },
              { title: 'Personal Courage', desc: 'Empowering students to act with confidence and skill.' },
            ].map((value, index) => (
              <div key={index} className="tactical-card text-center">
                <h3 className="text-xl font-bold mb-4 text-patriot-red">{value.title}</h3>
                <p className="text-tactical-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-tactical-dark">Our Story</h2>
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Liberty Ridge Training Grounds was born from a simple belief: that everyone 
                deserves access to professional, military-grade training for personal protection 
                and firearm safety. Founded by Army veteran Zach Gaudette, our company represents 
                the intersection of military discipline and civilian education.
              </p>
              
              <p className="text-lg text-tactical-gray mb-6 leading-relaxed">
                Located in Pasco, WA, we&apos;re currently in Phase One of our development, focusing 
                on comprehensive classroom training. Our phased approach ensures we build a 
                strong foundation of safety and knowledge before expanding to live-fire training 
                and tactical gear sales.
              </p>
              
              <p className="text-lg text-tactical-gray mb-8 leading-relaxed">
                What sets us apart is our commitment to the seven core values that guide 
                every aspect of our training: Loyalty, Duty, Respect, Selfless Service, 
                Honor, Integrity, and Personal Courage. These aren&apos;t just words to us—they&apos;re 
                the foundation of everything we do.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-patriot-blue to-patriot-red text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose Liberty Ridge?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">★</span>
                  <span>Veteran-owned and operated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">★</span>
                  <span>Military-grade training standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">★</span>
                  <span>Nationally ranked instructor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">★</span>
                  <span>Comprehensive safety protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">★</span>
                  <span>Personalized training approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">★</span>
                  <span>Strong community focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            We&apos;re building more than just a training company—we&apos;re creating a community 
            of prepared, confident, and responsible citizens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-tactical-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-patriot-red">Phase Two</h3>
              <p className="text-gray-300 mb-4">
                Expanding to include tactical gear sales featuring premium brands 
                like Vortex and Sig Sauer.
              </p>
            </div>
            
            <div className="bg-tactical-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-patriot-blue">Phase Three</h3>
              <p className="text-gray-300 mb-4">
                Live-fire training sessions on our own dedicated training grounds 
                for comprehensive hands-on experience.
              </p>
            </div>
            
            <div className="bg-tactical-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Beyond</h3>
              <p className="text-gray-300 mb-4">
                Expanding our team with additional veteran instructors and 
                specialized training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-patriot-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Join the Liberty Ridge Family
          </h2>
          <p className="text-xl mb-8">
            Experience the difference that military-grade training and veteran 
            expertise can make in your tactical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-patriot-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Start Training Today
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-patriot-red font-semibold py-4 px-8 rounded-lg text-lg transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}