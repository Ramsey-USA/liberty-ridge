import React from 'react';

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: string;
    details?: string[];
    actionLink?: {
      text: string;
      href: string;
    };
  };
  variant?: 'default' | 'hero' | 'compact';
  className?: string;
}

export default function FeatureCard({ feature, variant = 'default', className = '' }: FeatureCardProps) {
  const baseClasses = "feature-card group relative transition-all duration-300";
  
  const variantClasses = {
    default: "p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2",
    hero: "p-12 rounded-2xl shadow-2xl hover:shadow-3xl",
    compact: "p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
  };

  // Check if this should be a flip card
  const isFlipCard = className.includes('feature-flip-card');

  if (isFlipCard) {
    return (
      <div className="feature-flip-card">
        <div className="flip-card-inner">
          {/* Front of card */}
          <div className="flip-card-front">
            <div className={`${
              variant === 'hero' ? 'icon icon-2xl icon-accent mb-6' : 
              variant === 'compact' ? 'icon icon-lg icon-primary mb-4' : 
              'icon icon-xl icon-secondary mb-6'
            } mx-auto`}>
              {feature.icon}
            </div>
            
            <h3 className={`${
              variant === 'hero' ? 'text-2xl' : 
              variant === 'compact' ? 'text-lg' : 
              'text-xl'
            } font-bold text-dark mb-4 text-center`}>
              {feature.title}
            </h3>
            
            <p className="text-sm text-tactical-gray text-center">
              Hover to learn more
            </p>
          </div>
          
          {/* Back of card */}
          <div className="flip-card-back">
            <h3 className={`${
              variant === 'hero' ? 'text-xl' : 
              variant === 'compact' ? 'text-lg' : 
              'text-lg'
            } font-bold text-dark mb-4 text-center`}>
              {feature.title}
            </h3>
            
            <p className={`${
              variant === 'hero' ? 'text-base' : 
              variant === 'compact' ? 'text-xs' : 
              'text-sm'
            } text-tactical-gray leading-relaxed text-center mb-4`}>
              {feature.description}
            </p>
            
            {/* Additional Details */}
            {feature.details && feature.details.length > 0 && (
              <div className="space-y-1">
                {feature.details.slice(0, 3).map((detail: string, index: number) => (
                  <div key={index} className="flex items-start text-xs">
                    <span className="text-green-500 mr-1 mt-0.5">✓</span>
                    <span className="text-tactical-gray">{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`${
          variant === 'hero' ? 'icon icon-2xl icon-accent mb-6' : 
          variant === 'compact' ? 'icon icon-lg icon-primary mb-4' : 
          'icon icon-xl icon-secondary mb-6'
        } mx-auto icon-animated`}>
          {feature.icon}
        </div>
        
        {/* Title */}
        <h3 className={`${
          variant === 'hero' ? 'text-3xl' : 
          variant === 'compact' ? 'text-xl' : 
          'text-2xl'
        } font-bold text-dark mb-4 text-center group-hover:text-patriot-blue transition-colors duration-300`}>
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className={`${
          variant === 'hero' ? 'text-lg' : 
          variant === 'compact' ? 'text-sm' : 
          'text-base'
        } text-tactical-gray leading-relaxed text-center`}>
          {feature.description}
        </p>
        
        {/* Additional Details */}
        {feature.details && feature.details.length > 0 && (
          <div className="mt-6 space-y-2">
            {feature.details.map((detail: string, index: number) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-sm text-tactical-gray">{detail}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Action Link */}
        {feature.actionLink && (
          <div className="mt-6 text-center">
            <a 
              href={feature.actionLink.href} 
              className="inline-flex items-center text-patriot-blue hover:text-patriot-red transition-colors duration-200 font-semibold"
            >
              {feature.actionLink.text}
              <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        )}
      </div>
      
      {/* Subtle Border Animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-patriot-blue/20 transition-colors duration-300"></div>
    </div>
  );
}