'use client';

import { createContext, useContext, useSyncExternalStore, useCallback } from 'react';
import { translations, type Language } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getLanguage(): Language {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage === 'fr' || savedLanguage === 'en'
    ? savedLanguage
    : navigator.language.split('-')[0] === 'en' ? 'en' : 'fr';
}

function subscribeLanguage(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener('languagechange', onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener('languagechange', onChange);
  };
}

function getServerLanguage(): Language {
  return 'fr';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLanguage, getLanguage, getServerLanguage);
  const setLanguage = useCallback((nextLanguage: Language) => {
    localStorage.setItem('language', nextLanguage);
    window.dispatchEvent(new Event('languagechange'));
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : key;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
