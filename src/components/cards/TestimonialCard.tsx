import React from 'react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export default function TestimonialCard({ testimonial, variant = 'default', className = '' }: TestimonialCardProps) {
  const baseClasses = "testimonial-card group relative transition-all duration-300";
  
  const variantClasses = {
    default: "p-6 rounded-xl shadow-lg hover:shadow-xl bg-white",
    featured: "p-8 rounded-2xl shadow-2xl hover:shadow-3xl bg-gradient-to-br from-white to-gray-50",
    compact: "p-4 rounded-lg shadow-md hover:shadow-lg bg-white/95"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Quote Icon */}
      <div className="absolute top-4 left-4 text-patriot-blue/20 text-6xl leading-none">
        "
      </div>
      
      <div className="relative z-10 pt-8">
        {/* Rating Stars */}
        {testimonial.rating && (
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-xl ${
                  i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ⭐
              </span>
            ))}
            <span className="ml-2 text-sm text-tactical-gray">
              ({testimonial.rating}/5)
            </span>
          </div>
        )}
        
        {/* Testimonial Text */}
        <blockquote className={`${
          variant === 'featured' ? 'text-lg' : 'text-base'
        } text-tactical-dark leading-relaxed mb-6 italic`}>
          {testimonial.testimonial}
        </blockquote>
        
        {/* Course/Context */}
        {testimonial.courseCompleted && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm bg-patriot-blue/10 text-patriot-blue rounded-full">
              {testimonial.courseCompleted}
            </span>
          </div>
        )}
        
        {/* Author Information */}
        <div className="flex items-center">
          {/* Avatar or Initial */}
          <div className="w-12 h-12 bg-gradient-to-br from-patriot-blue to-patriot-red rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            {testimonial.name.charAt(0)}
          </div>
          
          <div className="flex-1">
            <div className="font-semibold text-tactical-dark">
              {testimonial.name}
            </div>
            {testimonial.location && (
              <div className="text-sm text-tactical-gray">
                {testimonial.location}
              </div>
            )}
            {testimonial.role && (
              <div className="text-sm text-tactical-gray">
                {testimonial.role}
              </div>
            )}
          </div>
          
          {/* Verification Badge */}
          {testimonial.verified && (
            <div className="ml-4">
              <span className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                <span className="mr-1">✓</span>
                Verified
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-patriot-blue/20 transition-colors duration-300"></div>
    </div>
  );
}