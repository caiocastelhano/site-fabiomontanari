'use client';

import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang) => {
    if (lang === 'en' || lang === 'pt') {
      setLanguage(lang);
    } else {
      setLanguage(prev => (prev === 'en' ? 'pt' : 'en'));
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
