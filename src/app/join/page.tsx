import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tactical-dark to-patriot-navy text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Join Our Elite Team</h1>
          <p className="text-xl mb-8">
            Calling all military veterans who share our commitment to excellence, 
            tactical precision, and serving others through professional training.
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-tactical-dark">Team Requirements</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              We're looking for dedicated veterans with specialized skills to join our growing team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="tactical-card">
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Military Background</h3>
              <p className="text-tactical-gray">
                Honorable military service with tactical training experience preferred.
              </p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Medical Training</h3>
              <p className="text-tactical-gray">
                Combat medic, EMT, or civilian medical training for emergency response.
              </p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-xl font-semibold mb-4 text-tactical-dark">Evacuation Planning</h3>
              <p className="text-tactical-gray">
                Experience in tactical movement, evacuation procedures, and emergency planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-tactical-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tactical-card">
            <h2 className="text-3xl font-bold mb-8 text-tactical-dark text-center">Apply to Join</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-tactical-gray mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-patriot-blue focus:border-patriot-blue"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tactical-gray mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-patriot-blue focus:border-patriot-blue"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-tactical-gray mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-patriot-blue focus:border-patriot-blue"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-tactical-gray mb-2">
                  Military Service Branch
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-patriot-blue focus:border-patriot-blue">
                  <option>Select Branch</option>
                  <option>Army</option>
                  <option>Navy</option>
                  <option>Air Force</option>
                  <option>Marines</option>
                  <option>Coast Guard</option>
                  <option>Space Force</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-tactical-gray mb-2">
                  Specialized Skills & Experience
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-patriot-blue focus:border-patriot-blue"
                  placeholder="Describe your tactical training, medical, or evacuation experience..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary text-lg px-8 py-3">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}