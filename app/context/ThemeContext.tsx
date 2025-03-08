'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface ThemeContextType {
  theme: 'dark';
}

const defaultValue: ThemeContextType = {
  theme: 'dark'
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Apply dark theme when page loads
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
}; 