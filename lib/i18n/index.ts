import { guaData } from '@/lib/data/gua-data';
import {
  vibeJudgmentsEn,
  vibeJudgmentsZh,
  type VibeJudgment,
} from '@/lib/data/vibes';
import { Language, LocalizedGuaData } from './types';
import { getUiStrings } from './ui';

let currentLanguage: Language = 'en';

export const i18n = {
  setLanguage: (lang: Language) => {
    currentLanguage = lang;
  },

  getLanguage: (): Language => currentLanguage,

  getUiStrings: () => getUiStrings(currentLanguage),

  getGuaData: (id: number): LocalizedGuaData => {
    const baseData = guaData.find((g) => g.id === id);

    return {
      id: baseData.id,
      symbol: baseData.symbol,
      binary: baseData.binary,
      pronunciation: baseData.pronunciation,
      name: baseData.name[currentLanguage],
      full_name: baseData.full_name[currentLanguage],
      judgment: baseData.judgment[currentLanguage],
    };
  },

  // to do fix this even more ugh
  getVibes: (id: number): VibeJudgment => {
    const vibeJudgments =
      currentLanguage === 'zh' ? vibeJudgmentsZh : vibeJudgmentsEn;
    const vibeInfo = vibeJudgments.find((v) => v.id === id);
    return vibeInfo;
  },
};
