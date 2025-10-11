'use client';

import React, { useEffect, useState } from 'react';

import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 bg-surface border border-border rounded-md">
        <div className="w-6 h-6 bg-surface border border-border mt-0.5 ml-0.5 flex items-center justify-center rounded-sm">
          <span className="text-xs">🌙</span>
        </div>
      </div>
    );
  }

  return <ThemeToggleClient />;
};

const ThemeToggleClient: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-16 h-8 bg-surface-elevated border-2 border-border hover:border-primary focus:border-primary transition-all duration-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background indicator */}
      <div className="absolute inset-1 bg-background rounded-sm transition-colors duration-300"></div>
      
      {/* Sliding toggle button */}
      <div
        className={`absolute w-6 h-6 bg-surface border-2 border-border-strong hover:border-primary transition-all duration-300 top-0.5 flex items-center justify-center text-xs rounded-sm shadow-sm ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0.5'
        }`}
      >
        {/* Icons */}
        <span className={`transition-all duration-300 ${theme === 'dark' ? 'text-accent-gold' : 'text-primary'}`}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </div>
      
      {/* Labels */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 text-xs font-bold pointer-events-none">
        <span className={`transition-all duration-300 ${theme === 'light' ? 'text-primary opacity-100' : 'text-muted opacity-50'}`}>
          L
        </span>
        <span className={`transition-all duration-300 ${theme === 'dark' ? 'text-accent-gold opacity-100' : 'text-muted opacity-50'}`}>
          D
        </span>
      </div>
      
      {/* Screen reader text */}
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
