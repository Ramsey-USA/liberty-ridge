import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content - Testing our custom snippets */}
      <main>
        {/* This section badge was created using lr-badge snippet */}
        <div className="inline-flex items-center space-x-2 bg-surface mx-auto mb-6 px-4 py-2 border-2 border-border rounded-lg section-badge-enhanced">
          <div className="text-patriot-red icon icon-xs icon-shield"></div>
          <span className="font-semibold text-text-primary text-sm uppercase tracking-wide">Test Section</span>
        </div>
        
        {/* This card was created using lr-card snippet */}
        <div className="group relative bg-surface shadow-lg hover:shadow-2xl p-8 border-2 hover:border-patriot-red border-border rounded-2xl overflow-hidden text-center hover:scale-105 transition-all hover:-translate-y-2 duration-500">
          <div className="mx-auto mb-6 text-patriot-red icon icon-3xl icon-target"></div>
          <div className="mb-2 font-black text-text-primary text-3xl">Test Card</div>
          <div className="mb-4 font-bold text-patriot-red text-lg">Sample Content</div>
          <p className="text-text-secondary text-sm leading-relaxed">
            This card was generated using our custom lr-card snippet to demonstrate the power of the extensions.
          </p>
        </div>
        
        {/* This button was created using lr-btn snippet */}
        <div className="flex justify-center mt-8">
          <Link href="/courses" className="flex justify-center items-center space-x-2 bg-patriot-red hover:bg-red-700 shadow-lg px-8 py-4 rounded-lg font-bold text-white text-lg text-center hover:scale-105 transition-all transform">
            <div className="text-white icon icon-sm icon-target"></div>
            <span>Test Button</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}