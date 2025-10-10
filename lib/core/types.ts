export type CoinFace = 'heads' | 'tails';

export interface Coin {
  id: number;
  face: CoinFace;
  value: 3 | 2;
}

export type CoinThrow = [Coin, Coin, Coin];

export type YaoType = 'old_yin' | 'young_yang' | 'young_yin' | 'old_yang';

export interface ThrowResult {
  coins: CoinThrow;
  sum: number;
  yaoType: YaoType;
  binary: 0 | 1;
  isChanging: boolean;
}

export interface Yao {
  position: number;
  throwResult: ThrowResult;
  changingTo?: 0 | 1;
}

export interface GuaResultType {
  originalBinary: string;
  changingPositions: number[];
  changedBinary?: string;
  originalGua: any;
  changedGua?: any;
  yaos: Yao[];
}
