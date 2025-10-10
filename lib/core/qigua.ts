import { guaData } from '../data/gua-data';
import { calculateThrowResult, throwThreeCoins } from './coin-logic';
import { GuaResultType, ThrowResult, Yao } from './types';

const createYao = (position: number, throwResult: ThrowResult): Yao => ({
  position,
  throwResult,
  changingTo: throwResult.isChanging
    ? throwResult.binary === 1
      ? 0
      : 1
    : undefined,
});

const generateYaos = (): Yao[] =>
  Array.from({ length: 6 }, (_, index) =>
    createYao(index + 1, calculateThrowResult(throwThreeCoins()))
  ).reverse();

const yaosToBinary = (yaos: Yao[]): string =>
  yaos.map((yao) => yao.throwResult.binary).join('');

const findChangingPositions = (yaos: Yao[]): number[] =>
  yaos.filter((yao) => yao.throwResult.isChanging).map((yao) => yao.position);

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
