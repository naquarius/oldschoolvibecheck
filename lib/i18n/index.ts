import { guaData } from '@/lib/data/gua-data';

import { Language, LocalizedGuaData } from './types';
import { getUiStrings } from './ui';

let currentLanguage: Language = 'zh';

export const i18n = {
  setLanguage: (lang: Language) => {
    currentLanguage = lang;
  },

  getLanguage: (): Language => currentLanguage,

  getUiStrings: () => getUiStrings(currentLanguage),

  getGuaData: (id: number): LocalizedGuaData => {
    const baseData = guaData.find((g) => g.id === id);
    if (!baseData) {
      throw new Error(`Missing gua id: ${id}`);
    }

    if (currentLanguage === 'en') {
      return {
        id: baseData.id,
        symbol: baseData.symbol,
        binary: baseData.binary,
        pronunciation: baseData.pronunciation,
        name: baseData.name.en,
        full_name: baseData.full_name.en,
        judgment: baseData.judgment.en,
      };
    }

    return {
      id: baseData.id,
      symbol: baseData.symbol,
      binary: baseData.binary,
      pronunciation: baseData.pronunciation,
      name: baseData.name.zh,
      full_name: baseData.full_name.zh,
      judgment: baseData.judgment.zh,
    };
  },
};
