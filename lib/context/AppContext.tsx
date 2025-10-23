'use client';

import { usePersistentState } from '@/lib/hooks/usePersistentState';
import { i18n } from '@/lib/i18n';
import { Language } from '@/lib/i18n/types';
import React, { createContext, ReactNode, useContext } from 'react';

type Mode = 'vibe' | 'traditional';

interface AppContextType {
  // Language
  language: Language;
  setLanguage: (lang: Language) => void;
  // Mode
  mode: Mode;
  setVibeMode: () => void;
  setTraditionalMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Serializers for language
const serializeLanguage = (value: Language) => value;
const deserializeLanguage = (value: string) => value as Language;
const isValidLanguage = (value: Language) => value === 'en' || value === 'zh';

// Serializers for mode
const serializeMode = (value: Mode) => value;
const deserializeMode = (value: string) => value as Mode;
const isValidMode = (value: Mode) =>
  value === 'vibe' || value === 'traditional';

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Language state
  const [language, setLanguage] = usePersistentState<Language>(
    'vibecheck.language',
    () => i18n.getLanguage(),
    {
      serialize: serializeLanguage,
      deserialize: deserializeLanguage,
      validate: isValidLanguage,
    }
  );

  // Mode state
  const [mode, setMode] = usePersistentState<Mode>('vibecheck.mode', 'vibe', {
    serialize: serializeMode,
    deserialize: deserializeMode,
    validate: isValidMode,
  });

  // Sync language with i18n
  if (i18n.getLanguage() !== language) {
    i18n.setLanguage(language);
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const setVibeMode = () => setMode('vibe');
  const setTraditionalMode = () => setMode('traditional');

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        mode,
        setVibeMode,
        setTraditionalMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Combined hook to access everything
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Individual hooks for backwards compatibility (optional - you can delete these)
export const useLanguage = () => {
  const { language, setLanguage } = useApp();
  return { language, setLanguage };
};

export const useMode = () => {
  const { mode, setVibeMode, setTraditionalMode } = useApp();
  return { mode, setVibeMode, setTraditionalMode };
};
