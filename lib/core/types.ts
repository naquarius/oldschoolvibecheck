export type CoinFace = 'heads' | 'tails';

export interface Coin {
  id: number;
  face: CoinFace;
  value: 3 | 2;
}

export type CoinThrow = [Coin, Coin, Coin];

export type YaoType = 'old_yin' | 'young_yang' | 'young_yin' | 'old_yang';

/**
 * Configuration for each possible yao type based on coin throw sum.
 * Traditional I Ching coin values:
 * - 6 (三阴): broken line (0) that changes
 * - 7 (少阳): solid line (1) that stays
 * - 8 (少阴): broken line (0) that stays
 * - 9 (老阳): solid line (1) that changes
 */
export const YAO_CONFIGURATIONS = {
  6: { type: 'old_yin' as const, binary: 0 as const, changing: true },
  7: { type: 'young_yang' as const, binary: 1 as const, changing: false },
  8: { type: 'young_yin' as const, binary: 0 as const, changing: false },
  9: { type: 'old_yang' as const, binary: 1 as const, changing: true },
} as const;

export type YaoConfiguration =
  (typeof YAO_CONFIGURATIONS)[keyof typeof YAO_CONFIGURATIONS];
export type ValidCoinSum = keyof typeof YAO_CONFIGURATIONS;

export type GuaPosition = 1 | 2 | 3 | 4 | 5 | 6;

export interface ThrowResult {
  coins: CoinThrow;
  sum: number;
  yaoType: YaoType;
  binary: 0 | 1;
  isChanging: boolean;
}

export interface Yao {
  /**
   * Position of the yao counted from the bottom up.
   * 1 = bottom (first yao), 6 = top (last yao).
   */
  position: GuaPosition;
  throwResult: ThrowResult;
  changingTo?: 0 | 1;
}

export interface GuaResultType {
  originalBinary: string;
  changingPositions: GuaPosition[];
  changedBinary?: string;
  originalGua: any;
  changedGua?: any;
  yaos: Yao[];
}
