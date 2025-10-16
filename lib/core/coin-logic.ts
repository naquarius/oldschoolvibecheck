import { Coin, CoinThrow, ThrowResult, YAO_CONFIGURATIONS } from './types';

const COIN_VALUES = {
  heads: 3 as const,
  tails: 2 as const,
} as const;

export const createCoin = (id: number): Coin => ({
  id,
  face: Math.random() > 0.5 ? 'heads' : 'tails',
  value: Math.random() > 0.5 ? COIN_VALUES.heads : COIN_VALUES.tails,
});

export const throwThreeCoins = (): CoinThrow => [
  createCoin(1),
  createCoin(2),
  createCoin(3),
];

export const calculateThrowResult = (coins: CoinThrow): ThrowResult => {
  const sum = coins.reduce((total, coin) => total + coin.value, 0);
  const resultConfig =
    YAO_CONFIGURATIONS[sum as keyof typeof YAO_CONFIGURATIONS];

  if (!resultConfig) {
    throw new Error(`Invalid coin sum: ${sum}`);
  }

  return {
    coins,
    sum,
    yaoType: resultConfig.type,
    binary: resultConfig.binary,
    isChanging: resultConfig.changing,
  };
};
