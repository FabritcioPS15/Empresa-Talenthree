import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'system';
  });
  
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Function to update the DOM based on the theme
  const updateDOM = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      setResolvedTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setResolvedTheme('light');
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        updateDOM(mediaQuery.matches);
      }
    };
    
    // Initial theme setup
    if (theme === 'dark') {
      updateDOM(true);
    } else if (theme === 'light') {
      updateDOM(false);
    } else {
      updateDOM(mediaQuery.matches);
    }
    
    // Listen for system preference changes
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);
  
  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};