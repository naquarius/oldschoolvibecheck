import type { Language } from '../types';
import { uiStringsEn } from './en';
import { uiStringsZh } from './zh';

export const getUiStrings = (language: Language) => {
  return language === 'zh' ? uiStringsZh : uiStringsEn;
};

export type UiStrings = typeof uiStringsEn;
