'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light'); // Default to light mode
  const [mounted, setMounted] = useState(false);

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('liberty-ridge-theme') as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      // Default to light mode for better accessibility and professional appearance
      setThemeState('light');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      
      // Remove previous theme class
      root.classList.remove('light', 'dark');
      
      // Add current theme class
      root.classList.add(theme);
      
      // Save theme preference
      localStorage.setItem('liberty-ridge-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  const value = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};