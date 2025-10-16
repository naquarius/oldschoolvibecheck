import { guaData } from '../data/gua-data';
import { calculateThrowResult, throwThreeCoins } from './coin-logic';
import { GuaPosition, GuaResultType, ThrowResult, Yao } from './types';

/**
 * Creates a single yao (line) of the hexagram.
 * Following I Ching tradition, positions are numbered from bottom (1) to top (6).
 * This matches the order of casting: the first throw creates the bottom line.
 */
const createYao = (position: GuaPosition, throwResult: ThrowResult): Yao => ({
  position, // position 1 = bottom yao, 6 = top yao
  throwResult,
  changingTo: throwResult.isChanging
    ? throwResult.binary === 1
      ? 0
      : 1
    : undefined,
});

/**
 * Generates all six yaos of a hexagram through coin throws.
 * Follows traditional I Ching casting order: bottom to top.
 * - First throw creates position 1 (bottom yao)
 * - Last throw creates position 6 (top yao)
 */
const generateYaos = (): Yao[] =>
  Array.from({ length: 6 }, (_, index) =>
    createYao(
      (index + 1) as GuaPosition,
      calculateThrowResult(throwThreeCoins())
    )
  );

/**
 * Converts yaos to a binary string.
 * Maintains traditional I Ching bottom-up order where:
 * - First character represents bottom yao (position 1)
 * - Last character represents top yao (position 6)
 * This matches the binary format in gua-data.ts
 */
const yaosToBinary = (yaos: Yao[]): string =>
  yaos.map((yao) => yao.throwResult.binary).join('');

/**
 * Returns positions of changing lines in bottom-up order.
 * Example: [1, 3, 6] means the bottom, third, and top lines are changing.
 * This matches traditional I Ching reading order from bottom to top.
 */
const findChangingPositions = (yaos: Yao[]): GuaPosition[] =>
  yaos.filter((yao) => yao.throwResult.isChanging).map((yao) => yao.position);

/**
 * Generates the binary string for the changed hexagram.
 * Maintains bottom-up order (first char = bottom yao)
 * following I Ching tradition.
 */
const generateChangedBinary = (yaos: Yao[]): string =>
  yaos
    .map((yao) =>
      yao.changingTo !== undefined ? yao.changingTo : yao.throwResult.binary
    )
    .join('');

const findGuaByBinary = (binary: string) =>
  guaData.find((gua) => gua.binary === binary);

export const qigua = (): GuaResultType => {
  const yaos = generateYaos();
  const originalBinary = yaosToBinary(yaos);
  const changingPositions = findChangingPositions(yaos);
  const changedBinary =
    changingPositions.length > 0 ? generateChangedBinary(yaos) : undefined;

  const originalGua = findGuaByBinary(originalBinary);
  const changedGua = changedBinary ? findGuaByBinary(changedBinary) : undefined;

  if (!originalGua) {
    throw new Error(`Could not find gua for binary: ${originalBinary}`);
  }

  return {
    originalBinary,
    changingPositions,
    changedBinary,
    originalGua,
    changedGua,
    yaos,
  };
};
