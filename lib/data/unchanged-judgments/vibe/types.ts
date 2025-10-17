export interface VibeJudgment {
  id: number;
  vibe: string;
  interpretation: string;
  keywords: string[];
  energy: string;
  suitableFor: string;
}

export type VibeJudgments = VibeJudgment[];
