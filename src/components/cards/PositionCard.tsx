import React from 'react';
import { Position } from '@/data/join';

interface PositionCardProps {
  position: Position;
  className?: string;
}

export default function PositionCard({ position, className = '' }: PositionCardProps) {
  return (
    <div className={`enhanced-course-card group relative border-2 ${position.borderColor} transition-all duration-300 ${className}`}>
      <div className={`absolute top-4 right-4 ${position.statusColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
        {position.status}
      </div>
      
      <div className={`h-48 bg-gradient-to-br ${position.gradient} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
        <div className="relative z-10 text-center text-white">
          <div className="text-6xl mb-4">{position.icon}</div>
          <h3 className="text-xl font-bold">{position.shortTitle}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-tactical-dark">{position.title}</h3>
        <div className={`text-lg font-semibold mb-4 ${
          position.statusColor === 'bg-patriot-red' ? 'text-patriot-red' :
          position.statusColor === 'bg-patriot-blue' ? 'text-patriot-blue' :
          'text-green-600'
        }`}>
          Open Position - {position.status.replace(/([A-Z])/g, ' $1').trim()}
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-tactical-dark mb-2">🎯 Requirements:</h4>
            <ul className="text-sm text-tactical-gray space-y-1">
              {position.requirements.map((req, index) => (
                <li key={index}>★ {req}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-tactical-dark mb-2">💼 Responsibilities:</h4>
            <ul className="text-sm text-tactical-gray space-y-1">
              {position.responsibilities.map((resp, index) => (
                <li key={index}>★ {resp}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className={`w-full ${position.buttonColor} ${position.buttonHoverColor} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
          Apply for {position.shortTitle}
        </button>
      </div>
    </div>
  );
}