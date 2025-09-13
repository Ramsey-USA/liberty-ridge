import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BulletHero from '@/components/BulletHero';
import Link from 'next/link';

export default function ShopPage() {
  // Sample products for Phase Two preview
  const featuredProducts = [
    {
      id: 1,
      name: 'Vortex Viper PST Gen II 5-25x50',
      brand: 'Vortex',
      category: 'Rifle Scopes',
      price: '$899',
      image: '🔭',
      ratings: {
        durability: 9.2,
        accuracy: 9.5,
        value: 8.8,
        easeOfUse: 8.9,
        features: 9.1,
        overall: 9.1
      },
      description: 'Premium long-range rifle scope with exceptional clarity and precision tracking.',
      features: ['First Focal Plane', 'EBR-2C MRAD Reticle', 'XD Lens Elements', 'ArmorTek Coating']
    },
    {
      id: 2,
      name: 'Sig Sauer P320 X-Series',
      brand: 'Sig Sauer',
      category: 'Firearms',
      price: '$749',
      image: '🔫',
      ratings: {
        durability: 9.4,
        accuracy: 9.3,
        value: 8.9,
        easeOfUse: 9.2,
        features: 9.0,
        overall: 9.2
      },
      description: 'Modular striker-fired pistol system with exceptional accuracy and reliability.',
      features: ['Modular Design', 'X-Ray3 Day/Night Sights', 'Enhanced Trigger', 'Picatinny Rail']
    },
    {
      id: 3,
      name: 'Vortex Strike Eagle 1-8x24',
      brand: 'Vortex',
      category: 'Rifle Scopes',
      price: '$329',
      image: '🎯',
      ratings: {
        durability: 8.7,
        accuracy: 8.9,
        value: 9.4,
        easeOfUse: 9.1,
        features: 8.6,
        overall: 8.9
      },
      description: 'Versatile low-power variable optic perfect for tactical applications.',
      features: ['1-8x Magnification', 'AR-BDC3 Reticle', 'Single-Piece Tube', 'Fully Multi-Coated']
    }
  ];

  const ratingCategories = [
    { key: 'durability', label: 'Durability', icon: '🛡️' },
    { key: 'accuracy', label: 'Accuracy', icon: '🎯' },
    { key: 'value', label: 'Value', icon: '💰' },
    { key: 'easeOfUse', label: 'Ease of Use', icon: '⚡' },
    { key: 'features', label: 'Features', icon: '⚙️' }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return 'text-green-500';
    if (rating >= 8) return 'text-blue-500';
    if (rating >= 7) return 'text-yellow-500';
    if (rating >= 6) return 'text-orange-500';
    return 'text-red-500';
  };

  const getRatingBars = (rating: number) => {
    return Math.round(rating);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Bullet Hero Section */}
      <BulletHero 
        title="TACTICAL GEAR SHOP"
        subtitle="Premium Equipment for Elite Performance"
        description="High-quality tactical gear from trusted brands like Vortex and Sig Sauer, rated by our expert team across 5 key performance areas."
        backgroundGradient="from-tactical-dark via-patriot-red to-patriot-navy"
      />

      {/* Expert Rating System Info */}
      <section className="py-16 bg-tactical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tactical-dark">
              Expert Rating System
            </h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto leading-relaxed">
              Every product is personally tested and rated by our team across 5 critical performance areas, 
              providing you with honest, military-grade evaluations.
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
                  {category.key === 'durability' && 'Build quality and long-term reliability'}
                  {category.key === 'accuracy' && 'Precision and performance consistency'}
                  {category.key === 'value' && 'Quality-to-price ratio assessment'}
                  {category.key === 'easeOfUse' && 'User-friendliness and setup simplicity'}
                  {category.key === 'features' && 'Innovation and feature completeness'}
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
              <div key={product.id} className="enhanced-course-card group">
                <div className="relative">
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-to-br from-tactical-dark to-patriot-blue rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl text-white opacity-90">{product.image}</div>
                    <div className="absolute top-4 right-4 bg-white text-tactical-dark px-3 py-1 rounded-full text-sm font-bold">
                      {product.brand}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-patriot-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-tactical-dark group-hover:text-patriot-blue transition-colors duration-300 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-tactical-gray leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Overall Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold mr-2">⭐</span>
                        <span className={`text-2xl font-bold ${getRatingColor(product.ratings.overall)}`}>
                          {product.ratings.overall.toFixed(1)}
                        </span>
                        <span className="text-tactical-gray ml-2">/ 10 Overall</span>
                      </div>
                      <div className="course-price text-2xl font-bold">
                        {product.price}
                      </div>
                    </div>

                    {/* Detailed Ratings */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-bold text-tactical-dark">Expert Ratings:</h4>
                      {ratingCategories.map((category) => (
                        <div key={category.key} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="mr-2">{category.icon}</span>
                            <span className="text-sm font-medium text-tactical-gray">{category.label}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 mx-0.5 rounded-full ${
                                    i < getRatingBars(product.ratings[category.key as keyof typeof product.ratings] as number)
                                      ? 'bg-patriot-red'
                                      : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className={`text-sm font-bold ${getRatingColor(product.ratings[category.key as keyof typeof product.ratings] as number)}`}>
                              {(product.ratings[category.key as keyof typeof product.ratings] as number).toFixed(1)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tactical-dark mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <span className="text-green-500 mr-2 text-sm">✓</span>
                            <span className="text-tactical-gray text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="btn-primary flex-1 text-center opacity-50 cursor-not-allowed">
                        🛒 Coming Soon
                      </button>
                      <Link href="/contact" className="btn-outline flex-1 text-center">
                        📧 Get Notified
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Two Information */}
      <section className="py-20 bg-tactical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Phase Two Development
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're developing a comprehensive e-commerce platform featuring top-tier tactical gear 
              with our expert rating system and veteran-approved selections.
            </p>
          </div>
          
          <div className="home-grid-1">
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🏪</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                Curated Selection
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every product personally tested and approved by our veteran team, ensuring only 
                the highest quality gear makes it to our store.
              </p>
            </div>
            
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                Expert Ratings
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive 1-10 scale ratings across 5 key areas: Durability, Accuracy, 
                Value, Ease of Use, and Features, plus overall scores.
              </p>
            </div>
            
            <div className="feature-benefit-card group">
              <div className="text-5xl mb-6 text-center">🎖️</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-patriot-red transition-colors duration-300">
                Veteran Approved
              </h3>
              <p className="text-gray-300 leading-relaxed">
                All products tested under real-world conditions by experienced military personnel 
                who understand what professionals need in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-patriot-blue via-patriot-red to-patriot-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be First to Access Our Shop
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Sign up for notifications and be the first to know when our tactical gear shop 
            launches with expert-rated equipment from Vortex, Sig Sauer, and more.
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
            🏪 Curated Selection • 📊 Expert Ratings • 🎖️ Veteran Approved
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}