export type Language = 'zh' | 'en';

export interface BaseGuaData {
  id: number;
  symbol: string;
  binary: string;
  pronunciation: string;
}

export interface LocalizedGuaData extends BaseGuaData {
  name: string;
  full_name: string;
  judgment: string;
}

export interface ModernJudgment {
  standard: string;
  vibe: string;
}
