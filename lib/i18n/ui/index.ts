import type { Language, UiStrings } from '../types';
import { uiStringsEn } from './en';
import { uiStringsZh } from './zh';

export const getUiStrings = (language: Language): UiStrings => {
  return language === 'zh' ? uiStringsZh : uiStringsEn;
};
