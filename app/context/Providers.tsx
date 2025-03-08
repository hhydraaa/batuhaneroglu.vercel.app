'use client';

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';

// TransitionWrapper
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper = ({ children }: TransitionWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TransitionWrapper>
        {children}
      </TransitionWrapper>
    </ThemeProvider>
  );
} 