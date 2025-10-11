
import { memo } from 'react';

import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const TestimonialCard = memo<TestimonialCardProps>(({ testimonial, variant = 'default', className = '' }) => {
  const baseClasses = "testimonial-card group relative transition-all duration-300";
  
  const variantClasses = {
    default: "p-6 rounded-xl shadow-lg hover:shadow-xl bg-white",
    featured: "p-8 rounded-2xl shadow-2xl hover:shadow-3xl bg-gradient-to-br from-white to-gray-50",
    compact: "p-4 rounded-lg shadow-md hover:shadow-lg bg-white/95"
  };

  // Check if this should be a flip card
  const isFlipCard = className.includes('flip-card');

  if (isFlipCard) {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front of card */}
          <div className="flip-card-front">
            {/* Quote Icon */}
            <div className="top-4 left-4 absolute text-patriot-blue/20 text-4xl leading-none">
              "
            </div>
            
            <div className="z-10 relative pt-8">
              {/* Rating Stars */}
              {testimonial.rating && (
                <div className="flex justify-center items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-lg ${
                        i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              )}
              
              {/* Testimonial Text - Truncated */}
              <blockquote className="mb-6 text-tactical-dark text-sm text-center italic leading-relaxed">
                {testimonial.testimonial.length > 100 
                  ? `${testimonial.testimonial.substring(0, 100)}...` 
                  : testimonial.testimonial}
              </blockquote>
              
              {/* Author Name */}
              <div className="text-center">
                <div className="font-semibold text-tactical-dark">
                  {testimonial.name}
                </div>
                <div className="mt-1 text-tactical-gray text-xs">
                  Hover for details
                </div>
              </div>
            </div>
          </div>
          
          {/* Back of card */}
          <div className="flip-card-back">
            <div className="flex flex-col justify-center h-full">
              {/* Full testimonial */}
              <blockquote className="mb-4 text-tactical-dark text-sm text-center italic leading-relaxed">
                {testimonial.testimonial}
              </blockquote>
              
              {/* Service/Context */}
              {testimonial.serviceReceived && (
                <div className="mb-4 text-center">
                  <span className="inline-block bg-patriot-blue/10 px-2 py-1 rounded-full text-patriot-blue text-xs">
                    {testimonial.serviceReceived}
                  </span>
                </div>
              )}
              
              {/* Author Information */}
              <div className="text-center">
                <div className="mb-1 font-semibold text-tactical-dark">
                  {testimonial.name}
                </div>
                {testimonial.location && (
                  <div className="mb-1 text-tactical-gray text-xs">
                    {testimonial.location}
                  </div>
                )}
                {testimonial.role && (
                  <div className="mb-2 text-tactical-gray text-xs">
                    {testimonial.role}
                  </div>
                )}
                
                {/* Verification Badge */}
                {testimonial.verified && (
                  <div>
                    <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-full text-green-800 text-xs">
                      <span className="mr-1">✓</span>
                      Verified
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Quote Icon */}
      <div className="top-4 left-4 absolute text-patriot-blue/20 text-6xl leading-none">
        "
      </div>
      
      <div className="z-10 relative pt-8">
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
            <span className="ml-2 text-tactical-gray text-sm">
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
        {testimonial.serviceReceived && (
          <div className="mb-4 text-center">
            <span className="inline-block bg-patriot-blue/10 px-3 py-1 rounded-full font-medium text-patriot-blue text-xs">
              {testimonial.serviceReceived}
            </span>
          </div>
        )}
        
        {/* Author Information */}
        <div className="flex items-center">
          {/* Avatar or Initial */}
          <div className="flex justify-center items-center bg-gradient-to-br from-patriot-blue to-patriot-red mr-4 rounded-full w-12 h-12 font-bold text-white text-lg">
            {testimonial.name.charAt(0)}
          </div>
          
          <div className="flex-1">
            <div className="font-semibold text-tactical-dark">
              {testimonial.name}
            </div>
            {testimonial.location && (
              <div className="text-tactical-gray text-sm">
                {testimonial.location}
              </div>
            )}
            {testimonial.role && (
              <div className="text-tactical-gray text-sm">
                {testimonial.role}
              </div>
            )}
          </div>
          
          {/* Verification Badge */}
          {testimonial.verified && (
            <div className="ml-4">
              <span className="inline-flex items-center bg-green-100 px-2 py-1 rounded-full text-green-800 text-xs">
                <span className="mr-1">✓</span>
                Verified
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 group-hover:border-patriot-blue/20 border-transparent rounded-xl transition-colors duration-300"></div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo optimization
  return (
    prevProps.testimonial.id === nextProps.testimonial.id &&
    prevProps.variant === nextProps.variant &&
    prevProps.className === nextProps.className
  );
});

// Add display name for debugging
TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;