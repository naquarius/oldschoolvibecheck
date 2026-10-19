import { COIN_VALUES } from './coin-logic';
import { qiguaFromThrows } from './qigua';
import { Coin, CoinThrow, GuaResultType } from './types';

/**
 * A reading fits in a short code: 6 throws × 3 coins = 18 bits
 * (heads = 1), bottom line first, written in base 36.
 * The question is never part of the code.
 */
const BITS = 18;

export const encodeCast = (result: GuaResultType): string => {
  let bits = 0;
  result.yaos.forEach((yao, line) =>
    yao.throwResult.coins.forEach((coin, index) => {
      if (coin.face === 'heads') bits |= 1 << (line * 3 + index);
    })
  );
  return bits.toString(36);
};

export const decodeCast = (code: string): GuaResultType | null => {
  if (!/^[0-9a-z]{1,4}$/.test(code)) return null;
  const bits = parseInt(code, 36);
  if (!Number.isInteger(bits) || bits < 0 || bits >= 2 ** BITS) return null;

  const throws = Array.from({ length: 6 }, (_, line) =>
    [0, 1, 2].map((index): Coin => {
      const face = bits & (1 << (line * 3 + index)) ? 'heads' : 'tails';
      return { id: index + 1, face, value: COIN_VALUES[face] };
    }) as CoinThrow
  );

  return qiguaFromThrows(throws);
};

/** Link to a reading on the current site, e.g. https://site/?c=k3f9 */
export const shareUrl = (result: GuaResultType): string =>
  `${window.location.origin}${window.location.pathname}?c=${encodeCast(result)}`;
