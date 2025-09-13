import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import ProductCard from '@/components/cards/ProductCard';
import FeatureCard from '@/components/cards/FeatureCard';
import Link from 'next/link';
import {
  featuredProducts,
  ratingCategories,
  shopFeatures,
  shopHero,
  expertRatingInfo,
  phaseTwoInfo,
  callToAction
} from '@/data/shop';

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Bullet Hero Section */}
      <BulletHero 
        title={shopHero.title}
        subtitle={shopHero.subtitle}
        description={shopHero.description}
      />

      {/* Expert Rating System Info */}
      <section className="py-24 bg-tactical relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">📊</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">EXPERT RATINGS</span>
              <span className="text-3xl animate-pulse">📊</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-gradient">
                {expertRatingInfo.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {expertRatingInfo.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ratingCategories.map((category) => (
              <div key={category.key} className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-patriot-red to-red-800 tactical-star flex items-center justify-center text-2xl shadow-2xl border-4 border-yellow-300 group-hover:scale-110 transition-transform duration-500">
                    <span className="filter drop-shadow-lg text-white">{category.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-yellow-400 group-hover:text-white transition-colors duration-300">
                  {category.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Preview */}
      <section className="py-24 bg-gradient-to-br from-black via-tactical-dark to-patriot-blue relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/30 to-orange-600/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">🏪</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">PREMIUM GEAR</span>
              <span className="text-3xl animate-pulse">🏪</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-gradient">
                Featured Products Preview
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get a preview of the premium tactical gear coming in Phase Two, complete with our comprehensive rating system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Phase Two Information */}
      <section className="py-24 bg-tactical relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-patriot-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-patriot-blue/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/50 mb-8 shadow-2xl">
              <span className="text-3xl animate-pulse">🚀</span>
              <span className="text-yellow-400 font-bold text-lg tracking-wider">PHASE TWO</span>
              <span className="text-3xl animate-pulse">🚀</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-gradient">
                {phaseTwoInfo.title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {phaseTwoInfo.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={{
                  icon: feature.icon,
                  title: feature.title,
                  description: feature.description
                }}
                variant="default"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {callToAction.title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            {callToAction.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="bg-white text-patriot-blue hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              🔔 Get Notified
            </Link>
            <Link href="/courses" className="border-2 border-white text-white hover:bg-white hover:text-patriot-blue font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
              📚 View Training
            </Link>
          </div>
          <div className="text-sm opacity-75">
            {callToAction.features}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}