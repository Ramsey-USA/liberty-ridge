import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-text-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm mb-8 px-6 py-3 border border-background/30 rounded-lg">
            <span className="material-icons-outlined text-background" style={{fontSize: '1.25rem'}}>business_center</span>
            <span className="font-bold text-background text-sm uppercase tracking-wide">Professional Consultation</span>
          </div>
          
          <h1 className="mb-6 font-black text-background text-5xl md:text-6xl lg:text-7xl leading-tight">
            Expert Firearms
            <br />
            <span className="text-background">
              Consultation
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-4xl text-background/90 text-xl lg:text-2xl leading-relaxed">
            Work directly with Army veteran and Regional #12 ranked instructor 
            <strong className="text-background"> Zach Gaudette</strong> for personalized 
            firearms consultation tailored to your specific goals and experience level.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link 
              href="#services" 
              className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-patriot-red/90 px-8 py-4 border-2 border-patriot-red rounded-none font-bold text-white hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>visibility</span>
              <span>View Services</span>
            </Link>
            <Link 
              href="/contact" 
              className="flex justify-center items-center space-x-2 bg-transparent hover:bg-background px-8 py-4 border-2 border-background rounded-none font-bold text-background hover:text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
              <span>Schedule Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview Stats */}
      <section className="bg-surface py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>military_tech</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">10+ Years</h3>
              <p className="text-text-secondary text-sm">Military Experience</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>emoji_events</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">#12 Regional</h3>
              <p className="text-text-secondary text-sm">Competition Ranking</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>groups</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">100+</h3>
              <p className="text-text-secondary text-sm">Students Trained</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-16 h-16">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>verified</span>
              </div>
              <h3 className="mb-2 font-bold text-text-primary text-2xl">100%</h3>
              <p className="text-text-secondary text-sm">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section id="services" className="bg-background py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-surface mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>schedule</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Consultation Services</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Choose Your Service Level
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Professional one-on-one guidance from an experienced Army veteran 
              with Regional #12 competitive ranking. Each session is customized for your goals.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {/* Skills Assessment */}
            <div className="bg-surface p-8 border hover:border-patriot-blue border-border rounded-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex justify-center items-center bg-patriot-blue/10 border border-patriot-blue/30 rounded-lg w-16 h-16">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>assessment</span>
                </div>
                <div className="bg-patriot-blue/10 px-3 py-1 border border-patriot-blue/30 rounded">
                  <span className="font-bold text-patriot-blue text-xs uppercase tracking-wider">Essential</span>
                </div>
              </div>
              
              <h3 className="mb-4 font-bold text-text-primary text-2xl">
                Skills Assessment
              </h3>
              <p className="mb-6 text-text-secondary leading-relaxed">
                Comprehensive evaluation of your current skills, safety knowledge, and personalized training recommendations.
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-text-primary text-3xl">$150</span>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                  <span className="font-medium text-sm">90 minutes</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Personal skill evaluation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Safety protocol review</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Equipment recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Customized training roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Follow-up resources</span>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="flex justify-center items-center space-x-2 bg-transparent hover:bg-patriot-blue px-6 py-3 border-2 border-patriot-blue rounded-none w-full font-bold text-patriot-blue hover:text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                <span>Book Assessment</span>
              </Link>
            </div>

            {/* Advanced Consultation - Popular */}
            <div className="relative bg-surface p-8 border-2 border-patriot-red rounded-lg">
              <div className="top-4 right-4 absolute bg-patriot-red px-3 py-1 rounded font-bold text-white text-xs">
                MOST POPULAR
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex justify-center items-center bg-patriot-red/10 border border-patriot-red/30 rounded-lg w-16 h-16">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '2rem'}}>school</span>
                </div>
                <div className="bg-patriot-red/10 px-3 py-1 border border-patriot-red/30 rounded">
                  <span className="font-bold text-patriot-red text-xs uppercase tracking-wider">Premium</span>
                </div>
              </div>
              
              <h3 className="mb-4 font-bold text-text-primary text-2xl">
                Advanced Consultation
              </h3>
              <p className="mb-6 text-text-secondary leading-relaxed">
                In-depth technical consultation for experienced shooters seeking competitive-level expertise and advanced techniques.
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-text-primary text-3xl">$250</span>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                  <span className="font-medium text-sm">2 hours</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Competition technique analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Precision shooting optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Advanced ballistics consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Equipment tuning guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Mental performance strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Competition preparation</span>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-patriot-red/90 px-6 py-3 border-2 border-patriot-red rounded-none w-full font-bold text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Progress Review */}
            <div className="bg-surface p-8 border hover:border-patriot-blue border-border rounded-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex justify-center items-center bg-patriot-blue/10 border border-patriot-blue/30 rounded-lg w-16 h-16">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '2rem'}}>trending_up</span>
                </div>
                <div className="bg-patriot-blue/10 px-3 py-1 border border-patriot-blue/30 rounded">
                  <span className="font-bold text-patriot-blue text-xs uppercase tracking-wider">Follow-up</span>
                </div>
              </div>
              
              <h3 className="mb-4 font-bold text-text-primary text-2xl">
                Progress Review
              </h3>
              <p className="mb-6 text-text-secondary leading-relaxed">
                Follow-up consultation to review progress, address challenges, and refine your training approach.
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-text-primary text-3xl">$100</span>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                  <span className="font-medium text-sm">60 minutes</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Progress evaluation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Problem-solving session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Technique refinement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Next steps planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>check_circle</span>
                  <span className="text-text-secondary text-sm">Goal adjustment</span>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="flex justify-center items-center space-x-2 bg-transparent hover:bg-patriot-blue px-6 py-3 border-2 border-patriot-blue rounded-none w-full font-bold text-patriot-blue hover:text-white transition-all duration-300"
              >
                <span className="material-icons-outlined" style={{fontSize: '1rem'}}>schedule</span>
                <span>Schedule Review</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="bg-surface py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-background mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>timeline</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">How It Works</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Simple Consultation Process
            </h2>
            <p className="mx-auto max-w-3xl text-text-secondary text-xl leading-relaxed">
              Professional, structured approach to ensure you get maximum value from every consultation session.
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-red mx-auto mb-6 rounded-full w-16 h-16">
                <span className="font-black text-white text-xl">1</span>
              </div>
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-12 h-12">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.5rem'}}>event</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-lg">Schedule Session</h3>
              <p className="text-text-secondary text-sm">
                Contact us to schedule your consultation at a convenient time for both of us.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-blue mx-auto mb-6 rounded-full w-16 h-16">
                <span className="font-black text-white text-xl">2</span>
              </div>
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-12 h-12">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.5rem'}}>assignment</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-lg">Pre-Session Prep</h3>
              <p className="text-text-secondary text-sm">
                Complete a brief questionnaire about your goals, experience, and specific areas of focus.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-red mx-auto mb-6 rounded-full w-16 h-16">
                <span className="font-black text-white text-xl">3</span>
              </div>
              <div className="flex justify-center items-center bg-patriot-red/10 mx-auto mb-4 border border-patriot-red/30 rounded-lg w-12 h-12">
                <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.5rem'}}>record_voice_over</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-lg">Consultation Session</h3>
              <p className="text-text-secondary text-sm">
                One-on-one session via video call or in-person, focused entirely on your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center bg-patriot-blue mx-auto mb-6 rounded-full w-16 h-16">
                <span className="font-black text-white text-xl">4</span>
              </div>
              <div className="flex justify-center items-center bg-patriot-blue/10 mx-auto mb-4 border border-patriot-blue/30 rounded-lg w-12 h-12">
                <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.5rem'}}>description</span>
              </div>
              <h3 className="mb-3 font-bold text-text-primary text-lg">Follow-Up Resources</h3>
              <p className="text-text-secondary text-sm">
                Receive personalized action plan, recommended resources, and follow-up materials.
              </p>
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
                Military-Proven Expertise
              </h2>
              <p className="mb-8 text-text-secondary text-lg leading-relaxed">
                When you choose Zach Gaudette for consultation, you're working with someone who combines 
                authentic military experience with proven competitive results and a genuine passion for teaching.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-patriot-red/10 border border-patriot-red/30 rounded-lg w-12 h-12">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.25rem'}}>military_tech</span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-text-primary text-lg">Army-Trained Discipline</h4>
                    <p className="text-text-secondary">
                      Military service instilled the discipline, attention to detail, and safety-first mindset 
                      that forms the foundation of all consultation sessions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-patriot-blue/10 border border-patriot-blue/30 rounded-lg w-12 h-12">
                    <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.25rem'}}>emoji_events</span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-text-primary text-lg">Competition-Proven Results</h4>
                    <p className="text-text-secondary">
                      Regional #12 ranking in competitive shooting demonstrates ongoing skill development 
                      and the ability to perform under pressure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-patriot-red/10 border border-patriot-red/30 rounded-lg w-12 h-12">
                    <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1.25rem'}}>psychology</span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-text-primary text-lg">Personalized Teaching Approach</h4>
                    <p className="text-text-secondary">
                      Every consultation is tailored to your specific experience level, goals, and learning style 
                      for maximum effectiveness and retention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-patriot-blue/10 border border-patriot-blue/30 rounded-lg w-12 h-12">
                    <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1.25rem'}}>family_restroom</span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-text-primary text-lg">Family Protection Focus</h4>
                    <p className="text-text-secondary">
                      As a husband and father, Zach understands the importance of family protection 
                      and responsible firearms ownership in a family context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 border border-border rounded-lg">
              <h3 className="mb-6 font-bold text-text-primary text-2xl text-center">What Clients Say</h3>
              
              <div className="space-y-6">
                <div className="bg-background p-6 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex justify-center items-center bg-patriot-red/10 border border-patriot-red/30 rounded-full w-10 h-10">
                      <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>person</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Sarah M.</h4>
                      <p className="text-text-secondary text-sm">Skills Assessment Client</p>
                    </div>
                  </div>
                  <p className="text-text-secondary italic">
                    "Zach's military background immediately put me at ease. His systematic approach to safety 
                    and technique helped me build confidence I never thought possible."
                  </p>
                  <div className="flex items-center space-x-1 mt-3">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="material-icons-outlined text-yellow-500" style={{fontSize: '1rem'}}>star</span>
                    ))}
                  </div>
                </div>

                <div className="bg-background p-6 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex justify-center items-center bg-patriot-blue/10 border border-patriot-blue/30 rounded-full w-10 h-10">
                      <span className="material-icons-outlined text-patriot-blue" style={{fontSize: '1rem'}}>person</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Mike R.</h4>
                      <p className="text-text-secondary text-sm">Advanced Consultation Client</p>
                    </div>
                  </div>
                  <p className="text-text-secondary italic">
                    "Even with 15 years of shooting experience, Zach helped me identify and correct 
                    fundamental issues that immediately improved my accuracy and consistency."
                  </p>
                  <div className="flex items-center space-x-1 mt-3">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="material-icons-outlined text-yellow-500" style={{fontSize: '1rem'}}>star</span>
                    ))}
                  </div>
                </div>

                <div className="bg-background p-6 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex justify-center items-center bg-patriot-red/10 border border-patriot-red/30 rounded-full w-10 h-10">
                      <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>person</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">Jennifer L.</h4>
                      <p className="text-text-secondary text-sm">Progress Review Client</p>
                    </div>
                  </div>
                  <p className="text-text-secondary italic">
                    "The follow-up session was incredibly valuable. Zach helped me stay accountable 
                    to my training goals and provided solutions for challenges I was facing."
                  </p>
                  <div className="flex items-center space-x-1 mt-3">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="material-icons-outlined text-yellow-500" style={{fontSize: '1rem'}}>star</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-surface py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-background mb-6 px-4 py-2 border border-border rounded-lg">
              <span className="material-icons-outlined text-patriot-red" style={{fontSize: '1rem'}}>help</span>
              <span className="font-medium text-text-secondary text-sm uppercase tracking-wide">Common Questions</span>
            </div>
            <h2 className="mb-6 font-black text-text-primary text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-background p-6 border border-border rounded-lg">
              <h3 className="mb-3 font-bold text-text-primary text-lg">What if I'm a complete beginner?</h3>
              <p className="text-text-secondary">
                The Skills Assessment is perfect for beginners. We'll start with fundamental safety principles, 
                basic handling techniques, and build a foundation tailored to your specific interests and goals.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg">
              <h3 className="mb-3 font-bold text-text-primary text-lg">Can consultations be done remotely?</h3>
              <p className="text-text-secondary">
                Yes! Many consultation topics can be effectively covered via video call, including technique analysis, 
                equipment recommendations, and training planning. In-person sessions are also available in the Pasco, WA area.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg">
              <h3 className="mb-3 font-bold text-text-primary text-lg">What should I prepare for the session?</h3>
              <p className="text-text-secondary">
                Come with specific questions and goals. If you have firearms or equipment, having them available 
                (safely and legally) can be helpful for technique discussion. A pre-session questionnaire will guide your preparation.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg">
              <h3 className="mb-3 font-bold text-text-primary text-lg">How often should I schedule consultations?</h3>
              <p className="text-text-secondary">
                This depends on your goals and progress. Many clients start with a Skills Assessment, followed by 
                Progress Reviews every 2-3 months. Advanced consultations are often one-time deep dives on specific topics.
              </p>
            </div>

            <div className="bg-background p-6 border border-border rounded-lg">
              <h3 className="mb-3 font-bold text-text-primary text-lg">What topics can be covered in consultation?</h3>
              <p className="text-text-secondary">
                Anything related to firearms: safety protocols, basic through advanced shooting techniques, equipment selection, 
                competitive shooting, home defense planning, training progression, and troubleshooting specific challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-text-primary">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-black text-background text-4xl md:text-5xl">
            Ready to Start Your Consultation?
          </h2>
          <p className="mb-8 text-background/80 text-xl leading-relaxed">
            Take the next step in your firearms journey with professional guidance 
            from an Army veteran and competitive shooter. Book your consultation today.
          </p>
          
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-8">
            <Link 
              href="/contact" 
              className="flex justify-center items-center space-x-2 bg-background hover:bg-background/90 px-8 py-4 border-2 border-background rounded-none font-bold text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>schedule</span>
              <span>Schedule Consultation</span>
            </Link>
            <Link 
              href="/about" 
              className="flex justify-center items-center space-x-2 bg-transparent hover:bg-background px-8 py-4 border-2 border-background rounded-none font-bold text-background hover:text-text-primary hover:scale-102 transition-all duration-300"
            >
              <span className="material-icons-outlined" style={{fontSize: '1.25rem'}}>person</span>
              <span>Learn About Zach</span>
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-6 text-background/60 text-sm">
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>military_tech</span>
              <span>Army Veteran</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>emoji_events</span>
              <span>Regional #12</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined" style={{fontSize: '1rem'}}>verified</span>
              <span>Professional Guidance</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}