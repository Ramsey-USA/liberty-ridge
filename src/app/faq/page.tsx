import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-tactical-dark">Frequently Asked Questions</h1>
          
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