import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-tactical-dark">Tactical Gear Shop</h1>
          <div className="bg-patriot-blue text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon - Phase Two</h2>
            <p className="text-lg">
              Our tactical gear shop featuring premium brands like Vortex and Sig Sauer will be available in Phase Two. 
              Sign up for notifications to be the first to know when it launches.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}