import React from 'react';

interface StatsCardProps {
  stat: {
    title: string;
    value: string | number;
    description?: string;
    icon?: string;
    change?: {
      value: string;
      type: 'increase' | 'decrease' | 'neutral';
    };
    highlight?: boolean;
  };
  variant?: 'default' | 'large' | 'compact';
  className?: string;
}

export default function StatsCard({ stat, variant = 'default', className = '' }: StatsCardProps) {
  const baseClasses = "stats-card group relative transition-all duration-300 text-center";
  
  const variantClasses = {
    default: "p-6 rounded-xl shadow-lg hover:shadow-xl bg-white",
    large: "p-8 rounded-2xl shadow-2xl hover:shadow-3xl bg-gradient-to-br from-white to-gray-50",
    compact: "p-4 rounded-lg shadow-md hover:shadow-lg bg-white/95"
  };

  const getChangeColor = (type: 'increase' | 'decrease' | 'neutral') => {
    switch (type) {
      case 'increase': return 'text-green-600';
      case 'decrease': return 'text-red-600';
      case 'neutral': return 'text-tactical-gray';
      default: return 'text-tactical-gray';
    }
  };

  const getChangeIcon = (type: 'increase' | 'decrease' | 'neutral') => {
    switch (type) {
      case 'increase': return '↗️';
      case 'decrease': return '↘️';
      case 'neutral': return '➡️';
      default: return '';
    }
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className} ${
      stat.highlight ? 'ring-2 ring-patriot-blue/20' : ''
    }`}>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-patriot-blue/5 to-patriot-red/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        {stat.icon && (
          <div className={`${
            variant === 'large' ? 'text-5xl mb-4' : 
            variant === 'compact' ? 'text-3xl mb-2' : 
            'text-4xl mb-3'
          } group-hover:scale-110 transition-transform duration-300`}>
            {stat.icon}
          </div>
        )}
        
        {/* Value */}
        <div className={`${
          variant === 'large' ? 'text-5xl' : 
          variant === 'compact' ? 'text-2xl' : 
          'text-4xl'
        } font-bold text-patriot-blue mb-2 group-hover:text-patriot-red transition-colors duration-300`}>
          {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
        </div>
        
        {/* Title */}
        <h3 className={`${
          variant === 'large' ? 'text-xl' : 
          variant === 'compact' ? 'text-sm' : 
          'text-lg'
        } font-semibold text-tactical-dark mb-2 uppercase tracking-wide`}>
          {stat.title}
        </h3>
        
        {/* Description */}
        {stat.description && (
          <p className={`${
            variant === 'large' ? 'text-base' : 
            variant === 'compact' ? 'text-xs' : 
            'text-sm'
          } text-tactical-gray leading-relaxed`}>
            {stat.description}
          </p>
        )}
        
        {/* Change Indicator */}
        {stat.change && (
          <div className={`mt-3 flex items-center justify-center space-x-1 ${
            variant === 'compact' ? 'text-xs' : 'text-sm'
          }`}>
            <span className={getChangeColor(stat.change.type)}>
              {getChangeIcon(stat.change.type)}
            </span>
            <span className={getChangeColor(stat.change.type)}>
              {stat.change.value}
            </span>
          </div>
        )}
        
        {/* Highlight Badge */}
        {stat.highlight && (
          <div className="absolute -top-2 -right-2">
            <div className="w-4 h-4 bg-patriot-red rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-patriot-blue/30 transition-colors duration-300"></div>
      
      {/* Subtle Animation */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
    </div>
  );
}