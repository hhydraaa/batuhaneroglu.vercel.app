'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface AnimatedContentProps {
  children: React.ReactNode;
}

export default function AnimatedContent({ children }: AnimatedContentProps) {
  const [key, setKey] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [language]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}; 