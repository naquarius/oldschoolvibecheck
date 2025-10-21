'use client';

import { i18n } from '@/lib/i18n';
import { Language } from '@/lib/i18n/types';
import { usePersistentState } from '@/lib/hooks/usePersistentState';
import React, {
  createContext,
  ReactNode,
  useContext,
} from 'react';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const serializeLanguage = (value: Language) => value;
const deserializeLanguage = (value: string) => value as Language;
const isValidLanguage = (value: Language) => value === 'en' || value === 'zh';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = usePersistentState<Language>(
    'vibecheck.language',
    () => i18n.getLanguage(),
    {
      serialize: serializeLanguage,
      deserialize: deserializeLanguage,
      validate: isValidLanguage,
    }
  );

  if (i18n.getLanguage() !== language) {
    i18n.setLanguage(language);
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
