import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-tactical-dark">Our Team</h1>
          
          <div className="tactical-card text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-patriot-red">Zach Gaudette</h2>
            <p className="text-lg text-tactical-gray mb-4">Founder & Lead Instructor</p>
            <p className="text-tactical-gray">
              U.S. Army Veteran with extensive tactical training experience and #12 national ranking 
              in long-range shooting competitions. Dedicated to providing exceptional training with 
              military-grade standards.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-patriot-blue text-white p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Expanding Our Team</h3>
              <p className="mb-4">
                We&apos;re looking for qualified military veterans to join our team, especially those with 
                specializations in medical and evacuation planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}