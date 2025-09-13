import React from 'react';
import Link from 'next/link';
import { Product, ratingCategories, getRatingColor, getRatingBars } from '@/data/shop';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <div className={`enhanced-course-card group ${className}`}>
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
                          i < getRatingBars(product.ratings[category.key])
                            ? 'bg-patriot-red'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-sm font-bold ${getRatingColor(product.ratings[category.key])}`}>
                    {product.ratings[category.key].toFixed(1)}
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
  );
}