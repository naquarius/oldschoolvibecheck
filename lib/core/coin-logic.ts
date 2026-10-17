import { Coin, CoinThrow, ThrowResult, YAO_CONFIGURATIONS } from './types';

const COIN_VALUES = {
  heads: 3 as const,
  tails: 2 as const,
} as const;

export const createCoin = (id: number): Coin => {
  // One toss decides the face; the value always follows from it
  const face = Math.random() > 0.5 ? 'heads' : 'tails';
  return { id, face, value: COIN_VALUES[face] };
};

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
