import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';

export default function RankingsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Bullet Hero Section */}
      <BulletHero 
        title="NATIONAL RANKINGS"
        subtitle="Competitive Excellence in Long-Range Shooting"
        description="Zach Gaudette's achievements demonstrate the expertise you'll receive in training."
        backgroundGradient="from-patriot-red via-tactical-dark to-patriot-blue"
      />

      {/* Current Ranking */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white rounded-lg p-12 mb-12">
            <div className="text-8xl font-bold mb-4">#12</div>
            <h2 className="text-3xl font-semibold mb-4">Current National Ranking</h2>
            <p className="text-xl">Long-Range Shooting Competition</p>
            <p className="text-lg mt-4 opacity-90">Last Updated: September 2024</p>
          </div>
          
          <p className="text-xl text-tactical-gray max-w-4xl mx-auto">
            This ranking reflects years of dedication, precision, and the same attention to detail 
            that Zach brings to every training session at Liberty Ridge Training Grounds.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}