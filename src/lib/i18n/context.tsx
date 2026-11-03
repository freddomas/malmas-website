'use client';

import { createContext, useContext, useSyncExternalStore, useCallback, useEffect } from 'react';
import { translations, type Language } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);
let sessionLanguage: Language | undefined;

function getLanguage(): Language {
  if (sessionLanguage) return sessionLanguage;
  try {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'fr' || savedLanguage === 'en') return savedLanguage;
  } catch {
    // Browser privacy settings can make storage unavailable.
  }
  return navigator.language.split('-')[0] === 'en' ? 'en' : 'fr';
}

function subscribeLanguage(onChange: () => void) {
  const onStorageChange = (event: StorageEvent) => {
    if (event.key === 'language' || event.key === null) {
      sessionLanguage = undefined;
      onChange();
    }
  };
  window.addEventListener('storage', onStorageChange);
  window.addEventListener('languagechange', onChange);
  return () => {
    window.removeEventListener('storage', onStorageChange);
    window.removeEventListener('languagechange', onChange);
  };
}

function getServerLanguage(): Language {
  return 'fr';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLanguage, getLanguage, getServerLanguage);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const setLanguage = useCallback((nextLanguage: Language) => {
    sessionLanguage = nextLanguage;
    try {
      localStorage.setItem('language', nextLanguage);
    } catch {
      // Keep the selected language for this page even if persistence is denied.
    }
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
