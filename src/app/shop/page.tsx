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
        backgroundGradient={shopHero.backgroundGradient}
      />

      {/* Expert Rating System Info */}
      <section className="py-16 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              {expertRatingInfo.title}
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              {expertRatingInfo.description}
            </p>
          </div>
          
          <div className="home-grid-2">
            {ratingCategories.map((category) => (
              <div key={category.key} className="mission-value-card text-center group">
                <div className="mission-value-icon">
                  <span className="text-xl sm:text-2xl text-white">{category.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-patriot-red group-hover:text-patriot-blue transition-colors duration-300">
                  {category.label}
                </h3>
                <p className="text-tactical-gray text-xs sm:text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Featured Products Preview
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Get a preview of the premium tactical gear coming in Phase Two, complete with our comprehensive rating system.
            </p>
          </div>
          
          <div className="home-grid-1">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Phase Two Information */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {phaseTwoInfo.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {phaseTwoInfo.description}
            </p>
          </div>
          
          <div className="home-grid-1">
            {shopFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={{
                  icon: feature.icon,
                  title: feature.title,
                  description: feature.description
                }}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white relative overflow-hidden">
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