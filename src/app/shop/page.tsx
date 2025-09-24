import BulletHero from '@/components/BulletHero';
import FeatureCard from '@/components/cards/FeatureCard';
import ProductCard from '@/components/cards/ProductCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    callToAction,
    expertRatingInfo,
    featuredProducts,
    phaseTwoInfo,
    ratingCategories,
    shopFeatures,
    shopHero
} from '@/data/shop';
import Link from 'next/link';

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
      <section className="relative bg-tactical py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
                            <span className="text-3xl animate-pulse">🎯</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">TACTICAL GEAR</span>
              <span className="text-3xl animate-pulse">🎯</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="text-gradient">
                {expertRatingInfo.title}
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              {expertRatingInfo.description}
            </p>
          </div>
          
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {ratingCategories.map((category) => (
              <div key={category.key} className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 border border-white/30 hover:border-yellow-400/50 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500">
                <div className="inline-block relative mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-br from-patriot-red to-red-800 shadow-2xl mx-auto border-4 border-yellow-300 w-16 h-16 text-2xl group-hover:scale-110 transition-transform duration-500 tactical-star">
                    <span className="drop-shadow-lg text-white filter">{category.icon}</span>
                  </div>
                </div>
                <h3 className="mb-3 font-bold text-yellow-400 group-hover:text-white text-lg transition-colors duration-300">
                  {category.label}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Preview */}
      <section className="relative bg-gradient-to-br from-black via-tactical-dark to-patriot-blue py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-0 left-0 absolute bg-gradient-to-br from-yellow-500/30 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-patriot-red/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/30 to-orange-600/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">🏪</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">PREMIUM GEAR</span>
              <span className="text-3xl animate-pulse">🏪</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="text-gradient">
                Featured Products Preview
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              Get a preview of the premium tactical gear coming in Phase Two, complete with our comprehensive rating system.
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Phase Two Information */}
      <section className="relative bg-tactical py-24 overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_rgba(255,255,255,0.1)_30.5%,_rgba(255,255,255,0.1)_35%,_transparent_35.5%)]"></div>
        </div>
        <div className="top-10 right-10 absolute bg-gradient-to-bl from-patriot-red/20 to-transparent blur-3xl rounded-full w-96 h-96"></div>
        <div className="bottom-10 left-10 absolute bg-gradient-to-tr from-patriot-blue/20 to-transparent blur-3xl rounded-full w-80 h-80"></div>
        
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-patriot-red/30 to-patriot-blue/30 shadow-2xl backdrop-blur-sm mb-8 px-8 py-4 border border-yellow-400/50 rounded-full">
              <span className="text-3xl animate-pulse">�️</span>
              <span className="font-bold text-yellow-400 text-lg tracking-wider">PHASE TWO</span>
              <span className="text-3xl animate-pulse">�️</span>
            </div>
            
            <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
              <span className="text-gradient">
                {phaseTwoInfo.title}
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              {phaseTwoInfo.description}
            </p>
          </div>
          
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {shopFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={{
                  icon: feature.icon,
                  title: feature.title,
                  description: feature.description
                }}
                variant="default"
                className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-sm p-8 border border-white/30 hover:border-yellow-400/50 rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-1 duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative bg-primary py-20 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl md:text-5xl">
            {callToAction.title}
          </h2>
          <p className="opacity-95 mb-8 text-xl md:text-2xl leading-relaxed">
            {callToAction.description}
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white hover:bg-gray-100 shadow-lg px-8 py-4 rounded-lg font-bold text-patriot-blue text-lg hover:scale-105 transition-all transform">
              🔔 Get Notified
            </Link>
            <Link href="/courses" className="hover:bg-white px-8 py-4 border-2 border-white rounded-lg font-bold text-white hover:text-patriot-blue text-lg hover:scale-105 transition-all transform">
              📚 View Training
            </Link>
          </div>
          <div className="opacity-75 text-sm">
            {callToAction.features}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}