import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import Link from 'next/link';

export default function LiveTrainingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title="LIVE FIRE TRAINING"
        subtitle="Phase Three: Hands-On Training Sessions"
        description="Coming soon to Liberty Ridge Training Grounds - Real-world tactical application."
        backgroundGradient="from-gray-50 via-white to-slate-50"
      />

      {/* What's Coming Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-patriot-red text-white p-4 rounded-lg inline-block mb-6">
              <span className="text-lg font-bold">COMING PHASE 3</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-tactical-dark">Future Training Capabilities</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Once land is acquired, we'll expand to offer comprehensive live fire training sessions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tactical-card">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-tactical-gray">Range Training</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Live Fire Exercises</h3>
              <p className="text-tactical-gray">
                Practical application of classroom knowledge with live ammunition 
                under controlled, supervised conditions.
              </p>
            </div>
            
            <div className="tactical-card">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-tactical-gray">Tactical Movement</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Tactical Movement Training</h3>
              <p className="text-tactical-gray">
                Advanced movement techniques, cover utilization, and dynamic 
                shooting scenarios in realistic environments.
              </p>
            </div>
            
            <div className="tactical-card">
              <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-tactical-gray">Scenario Training</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Scenario-Based Training</h3>
              <p className="text-tactical-gray">
                Real-world scenario simulations to prepare students for 
                high-stress defensive situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-tactical-dark">Development Timeline</h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-tactical-dark">Phase 1: Classroom Training (Current)</h3>
                <p className="text-tactical-gray">Firearm safety and personal training courses now available</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-tactical-dark">Phase 2: E-commerce Integration (In Progress)</h3>
                <p className="text-tactical-gray">Tactical gear and accessories from Vortex and Sig Sauer</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-patriot-red rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-tactical-dark">Phase 3: Live Fire Training (Future)</h3>
                <p className="text-tactical-gray">Hands-on training facility once land acquisition is complete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-tactical-dark">Stay Updated</h2>
          <p className="text-xl text-tactical-gray mb-8">
            Be the first to know when live fire training becomes available.
          </p>
          
          <div className="tactical-card">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-patriot-blue focus:border-patriot-blue"
              />
              <button type="submit" className="btn-primary px-8 py-3">
                Notify Me
              </button>
            </form>
            <p className="text-sm text-tactical-gray mt-4">
              We'll send updates about live training availability and land acquisition progress.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}