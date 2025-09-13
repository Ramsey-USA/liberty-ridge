import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title="FAQ"
        subtitle="Frequently Asked Questions"
        description="Find answers to common questions about our training courses and safety protocols."
        backgroundGradient="from-tactical-dark via-patriot-blue to-tactical-dark"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ Items */}
          <div className="space-y-8">
            <div className="tactical-card">
              <h3 className="text-xl font-semibold mb-3 text-tactical-dark">Do I need prior firearm experience?</h3>
              <p className="text-tactical-gray">No prior experience is required. Our courses are designed for all skill levels.</p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-xl font-semibold mb-3 text-tactical-dark">What is the minimum age requirement?</h3>
              <p className="text-tactical-gray">Students must be 18 years or older, or 16-17 with parental consent.</p>
            </div>
            
            <div className="tactical-card">
              <h3 className="text-xl font-semibold mb-3 text-tactical-dark">Are live firearms used in Phase One training?</h3>
              <p className="text-tactical-gray">No, Phase One is classroom-only training. Live-fire training will be available in Phase Three.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}