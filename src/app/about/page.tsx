import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function AboutZachPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section - Zach's Personal Brand */}
      <section className="relative bg-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-50"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Zach's Photo and Credentials */}
            <div className="lg:text-left text-center">
              <div className="inline-block relative mb-8">
                <div className="group relative bg-surface shadow-clean p-8 border hover:border-patriot-red border-border rounded-lg transition-all duration-300">
                  <div className="flex justify-center items-center bg-surface mx-auto mb-6 border-2 border-patriot-red rounded-lg w-48 h-64 text-6xl">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '4rem'}}>person</span>
                  </div>
                  <div className="top-4 right-4 absolute flex items-center space-x-2 bg-patriot-red px-3 py-1 rounded font-bold text-white text-sm">
                    <span className="material-icons-outlined text-white" style={{fontSize: '1rem'}}>military_tech</span>
                    <span>U.S. ARMY VETERAN</span>
                  </div>
                  <div className="bottom-4 left-4 absolute flex items-center space-x-2 bg-patriot-blue px-3 py-1 rounded font-bold text-white text-sm">
                    <span className="material-icons-outlined text-white" style={{fontSize: '1rem'}}>emoji_events</span>
                    <span>REGIONAL #12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zach's Story */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-surface mb-4 px-4 py-2 border border-border rounded-lg">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>person</span>
                  <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">About Zach</span>
                </div>
                <h1 className="mb-4 font-black text-text-primary text-5xl lg:text-6xl leading-tight">
                  ZACH GAUDETTE
                </h1>
                <h2 className="mb-6 font-bold text-patriot-red text-2xl lg:text-3xl">
                  Firearms Consultation Specialist
                </h2>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-text-secondary text-lg leading-relaxed">
                  U.S. Army veteran Zach Gaudette brings military precision and real-world experience to personal 
                  firearms consultation. With a passion for safety, accuracy, and professional development, Zach 
                  specializes in personalized training that meets each client's unique needs and goals.
                </p>
                
                <p className="text-text-secondary text-lg leading-relaxed">
                  As a devoted husband to Anne Marie and father to their son Myles, Zach understands the personal 
                  responsibility that comes with firearm ownership and the importance of proper training for family 
                  protection and personal development.
                </p>
              </div>

              <div className="flex sm:flex-row flex-col gap-4">
                <Link 
                  href="/consultation" 
                  className="flex justify-center items-center space-x-2 px-6 py-3 border-2 border-text-primary rounded-none font-bold bg-text-primary text-background hover:bg-text-primary/90 hover:scale-102 transition-all duration-300"
                >
                  <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
                  <span>Book Consultation</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="flex justify-center items-center space-x-2 bg-transparent px-6 py-3 border-2 border-text-primary rounded-none font-bold text-text-primary hover:bg-text-primary hover:text-background hover:scale-102 transition-all duration-300"
                >
                  <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>email</span>
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zach's Military Journey */}
      <section className="bg-surface py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-background mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>military_tech</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Military Background</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              From Military Service to Firearms Expertise
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Zach's journey from U.S. Army service to becoming a Regional #12 instructor represents dedication, 
              discipline, and an unwavering commitment to excellence in firearms training.
            </p>
          </div>
          
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-8">
              {/* Military Service */}
              <div className="bg-background p-6 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.5rem'}}>shield</span>
                  <h3 className="font-bold text-text-primary text-xl">U.S. Army Service</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Zach served honorably in the U.S. Army, where he developed the foundation of discipline, 
                  precision, and safety protocols that define his approach to firearms training today. His 
                  military experience instilled the values of accountability and excellence that he brings 
                  to every consultation.
                </p>
              </div>

              {/* Transition to Civilian Life */}
              <div className="bg-background p-6 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.5rem'}}>home</span>
                  <h3 className="font-bold text-text-primary text-xl">Family & Personal Growth</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  After military service, Zach married his wife Anne Marie and became a father to their 
                  son Myles. This personal transformation deepened his understanding of the responsibility 
                  that comes with firearm ownership and the importance of proper training for family protection.
                </p>
              </div>

              {/* Competitive Achievement */}
              <div className="bg-background p-6 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.5rem'}}>emoji_events</span>
                  <h3 className="font-bold text-text-primary text-xl">Regional #12 Achievement</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  In his first year of competitive shooting, Zach achieved Regional #12 ranking, demonstrating 
                  exceptional marksmanship and dedication to continuous improvement. This achievement reflects 
                  his commitment to maintaining the highest standards in firearms proficiency.
                </p>
              </div>
            </div>

            <div className="bg-background p-8 border border-border rounded-lg">
              <h3 className="mb-6 font-bold text-text-primary text-2xl text-center">Professional Credentials</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.25rem'}}>verified</span>
                    <span className="font-medium text-text-primary">U.S. Army Veteran</span>
                  </div>
                  <span className="font-bold text-patriot-red text-sm">VERIFIED</span>
                </div>

                <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.25rem'}}>target</span>
                    <span className="font-medium text-text-primary">Regional #12 Instructor</span>
                  </div>
                  <span className="font-bold text-patriot-blue text-sm">ACTIVE</span>
                </div>

                <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.25rem'}}>school</span>
                    <span className="font-medium text-text-primary">Firearms Safety Specialist</span>
                  </div>
                  <span className="font-bold text-patriot-red text-sm">CERTIFIED</span>
                </div>

                <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.25rem'}}>psychology</span>
                    <span className="font-medium text-text-primary">Personal Consultation Expert</span>
                  </div>
                  <span className="font-bold text-patriot-blue text-sm">SPECIALIZED</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link 
                  href="/consultation" 
                  className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-patriot-red/90 px-6 py-3 border-2 border-patriot-red rounded-none font-bold text-white hover:scale-102 transition-all duration-300"
                >
                  <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
                  <span>Book Your Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy & Approach */}
      <section className="bg-background py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-surface mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>psychology</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Training Philosophy</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Personal Training Philosophy
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Every consultation is tailored to your individual needs, experience level, and goals. 
              Zach's approach combines military precision with personal understanding.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="bg-surface p-6 border hover:border-patriot-red border-border rounded-lg text-center transition-all duration-300">
              <span className="mb-4 material-icons-outlined text-patriot-red" style={{fontSize: '3rem'}}>security</span>
              <h3 className="mb-4 font-bold text-text-primary text-xl">Safety First</h3>
              <p className="text-text-secondary leading-relaxed">
                Every consultation begins with comprehensive safety protocols. Military training instilled 
                the importance of safety as the foundation of all firearms handling.
              </p>
            </div>

            <div className="bg-surface p-6 border hover:border-patriot-blue border-border rounded-lg text-center transition-all duration-300">
              <span className="mb-4 material-icons-outlined text-patriot-blue" style={{fontSize: '3rem'}}>person</span>
              <h3 className="mb-4 font-bold text-text-primary text-xl">Personalized Approach</h3>
              <p className="text-text-secondary leading-relaxed">
                No two clients are the same. Each consultation is customized based on your experience, 
                goals, and comfort level to ensure maximum benefit and confidence building.
              </p>
            </div>

            <div className="bg-surface p-6 border hover:border-patriot-red border-border rounded-lg text-center transition-all duration-300">
              <span className="mb-4 material-icons-outlined text-patriot-red" style={{fontSize: '3rem'}}>trending_up</span>
              <h3 className="mb-4 font-bold text-text-primary text-xl">Continuous Improvement</h3>
              <p className="text-text-secondary leading-relaxed">
                Learning doesn't stop after one session. Zach provides ongoing support and follow-up 
                to ensure you continue developing your skills and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services Overview */}
      <section className="bg-surface py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-background mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>business_center</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Consultation Services</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Professional Consultation Services
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Choose from three tailored consultation options designed to meet your specific needs 
              and experience level. Each session is personalized for maximum value and learning.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {/* Skills Assessment */}
            <div className="bg-background p-6 border hover:border-patriot-blue border-border rounded-lg transition-all duration-300">
              <div className="mb-6">
                <span className="mb-4 material-icons-outlined text-patriot-blue" style={{fontSize: '2.5rem'}}>assessment</span>
                <h3 className="mb-2 font-bold text-text-primary text-xl">Skills Assessment</h3>
                <p className="mb-4 font-bold text-patriot-blue text-2xl">$150</p>
                <p className="text-text-secondary">
                  Comprehensive evaluation of your current firearms knowledge and skills. 
                  Perfect for beginners or those returning to shooting after a break.
                </p>
              </div>
              <Link 
                href="/consultation" 
                className="flex justify-center items-center space-x-2 bg-transparent hover:bg-patriot-blue px-4 py-2 border-2 border-patriot-blue rounded-none w-full font-bold text-patriot-blue hover:text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                <span>Book Assessment</span>
              </Link>
            </div>

            {/* Advanced Consultation */}
            <div className="relative bg-background p-6 border-2 border-patriot-red rounded-lg">
              <div className="top-4 right-4 absolute bg-patriot-red px-2 py-1 rounded font-bold text-white text-xs">
                POPULAR
              </div>
              <div className="mb-6">
                <span className="mb-4 material-icons-outlined text-patriot-red" style={{fontSize: '2.5rem'}}>school</span>
                <h3 className="mb-2 font-bold text-text-primary text-xl">Advanced Consultation</h3>
                <p className="mb-4 font-bold text-patriot-red text-2xl">$250</p>
                <p className="text-text-secondary">
                  In-depth training session covering advanced techniques, safety protocols, 
                  and personalized skill development based on your specific goals.
                </p>
              </div>
              <Link 
                href="/consultation" 
                className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-patriot-red/90 px-4 py-2 border-2 border-patriot-red rounded-none w-full font-bold text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Progress Review */}
            <div className="bg-background p-6 border hover:border-patriot-blue border-border rounded-lg transition-all duration-300">
              <div className="mb-6">
                <span className="mb-4 material-icons-outlined text-patriot-blue" style={{fontSize: '2.5rem'}}>trending_up</span>
                <h3 className="mb-2 font-bold text-text-primary text-xl">Progress Review</h3>
                <p className="mb-4 font-bold text-patriot-blue text-2xl">$100</p>
                <p className="text-text-secondary">
                  Follow-up session to review your progress, address questions, and refine 
                  techniques. Ideal for ongoing development and skill maintenance.
                </p>
              </div>
              <Link 
                href="/consultation" 
                className="flex justify-center items-center space-x-2 bg-transparent hover:bg-patriot-blue px-4 py-2 border-2 border-patriot-blue rounded-none w-full font-bold text-patriot-blue hover:text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                <span>Book Review</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zach */}
      <section className="bg-background py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center space-x-2 bg-surface mb-6 px-4 py-2 border border-border rounded-lg">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>star</span>
                <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Why Choose Zach</span>
              </div>
              <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
                Experience the Difference
              </h2>
              <p className="mb-8 text-text-secondary text-lg leading-relaxed">
                When you work with Zach, you're not just getting an instructor—you're partnering with 
                someone who understands the responsibility and privilege that comes with firearms ownership.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="mt-1 material-icons-outlined text-patriot-red" style={{fontSize: '1.25rem'}}>check_circle</span>
                  <div>
                    <h4 className="font-bold text-text-primary">Military-Trained Precision</h4>
                    <p className="text-text-secondary text-sm">Army training instilled discipline and attention to detail</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="mt-1 material-icons-outlined text-patriot-blue" style={{fontSize: '1.25rem'}}>check_circle</span>
                  <div>
                    <h4 className="font-bold text-text-primary">Proven Competition Results</h4>
                    <p className="text-text-secondary text-sm">Regional #12 ranking demonstrates ongoing skill development</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="mt-1 material-icons-outlined text-patriot-red" style={{fontSize: '1.25rem'}}>check_circle</span>
                  <div>
                    <h4 className="font-bold text-text-primary">Personal Understanding</h4>
                    <p className="text-text-secondary text-sm">Father and husband who understands family protection needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="mt-1 material-icons-outlined text-patriot-blue" style={{fontSize: '1.25rem'}}>check_circle</span>
                  <div>
                    <h4 className="font-bold text-text-primary">Personalized Approach</h4>
                    <p className="text-text-secondary text-sm">Every consultation tailored to your specific needs and goals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 border border-border rounded-lg">
              <h3 className="mb-6 font-bold text-text-primary text-2xl text-center">Client Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-background p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>person</span>
                    <span className="font-medium text-text-primary">First-Time Shooter</span>
                  </div>
                  <p className="text-text-secondary text-sm italic">
                    "Zach's patient approach helped me go from nervous beginner to confident shooter. 
                    His military background gave me confidence in the safety protocols."
                  </p>
                </div>

                <div className="bg-background p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>person</span>
                    <span className="font-medium text-text-primary">Experienced Shooter</span>
                  </div>
                  <p className="text-text-secondary text-sm italic">
                    "Even with years of experience, Zach helped me refine my technique and improve 
                    my accuracy. His competitive background shows in his attention to detail."
                  </p>
                </div>

                <div className="bg-background p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>person</span>
                    <span className="font-medium text-text-primary">Family Protection Focus</span>
                  </div>
                  <p className="text-text-secondary text-sm italic">
                    "As a parent, I appreciated Zach's understanding of family protection needs. 
                    He helped me develop skills while emphasizing responsible ownership."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-text-primary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-black text-background text-4xl md:text-5xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-background/80 text-xl leading-relaxed">
            Take the first step toward improved firearms skills and confidence. 
            Book your consultation with Zach today and experience professional, personalized training.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-8">
            <Link 
              href="/consultation" 
              className="flex justify-center items-center space-x-2 bg-background hover:bg-background/90 px-8 py-4 border-2 border-background rounded-none font-bold text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
              <span>Book Consultation</span>
            </Link>
            <Link 
              href="/contact" 
              className="flex justify-center items-center space-x-2 bg-transparent hover:bg-background px-8 py-4 border-2 border-background rounded-none font-bold text-background hover:text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>email</span>
              <span>Ask Questions</span>
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-6 text-background/60 text-sm">
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>verified</span>
              <span>Veteran-Owned</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>emoji_events</span>
              <span>Regional #12</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>security</span>
              <span>Safety Focused</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}