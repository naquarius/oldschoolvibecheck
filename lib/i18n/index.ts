import { guaData } from '@/lib/data/gua-data';
import {
  modernJudgmentsEn,
  modernJudgmentsZh,
} from '@/lib/data/modern-judgments';
import { Language, LocalizedGuaData, ModernJudgment } from './types';

let currentLanguage: Language = 'zh';

export const i18n = {
  setLanguage: (lang: Language) => {
    currentLanguage = lang;
  },

  getLanguage: (): Language => currentLanguage,

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

  getModernJudgment: (id: number): ModernJudgment => {
    const judgments =
      currentLanguage === 'zh' ? modernJudgmentsZh : modernJudgmentsEn;
    const judgment = judgments[id];

    if (!judgment) {
      return {
        standard: `No modern judgment found for ID ${id}`,
        vibe: `No vibe data found for ID ${id}`,
      };
    }

    return judgment;
  },
};
