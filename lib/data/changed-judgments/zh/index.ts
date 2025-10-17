import { changedJudgments1 } from './1';
import { changedJudgments10 } from './10';
import { changedJudgments11 } from './11';
import { changedJudgments12 } from './12';
import { changedJudgments13 } from './13';
import { changedJudgments14 } from './14';
import { changedJudgments15 } from './15';
import { changedJudgments16 } from './16';
import { changedJudgments17 } from './17';
import { changedJudgments18 } from './18';
import { changedJudgments19 } from './19';
import { changedJudgments2 } from './2';
import { changedJudgments20 } from './20';
import { changedJudgments21 } from './21';
import { changedJudgments22 } from './22';
import { changedJudgments23 } from './23';
import { changedJudgments24 } from './24';
import { changedJudgments25 } from './25';
import { changedJudgments26 } from './26';
import { changedJudgments27 } from './27';
import { changedJudgments28 } from './28';
import { changedJudgments29 } from './29';
import { changedJudgments3 } from './3';
import { changedJudgments30 } from './30';
import { changedJudgments31 } from './31';
import { changedJudgments32 } from './32';
import { changedJudgments4 } from './4';
import { changedJudgments5 } from './5';
import { changedJudgments6 } from './6';
import { changedJudgments7 } from './7';
import { changedJudgments8 } from './8';
import { changedJudgments9 } from './9';
import type { ChangedJudgmentsMap } from './types';

/**
 * A map of all changed judgments in Chinese.
 * Key: The original gua ID (1-32)
 * Value: Array of possible changes and their interpretations
 */
export const changedJudgmentsZh: ChangedJudgmentsMap = {
  1: changedJudgments1,
  2: changedJudgments2,
  3: changedJudgments3,
  4: changedJudgments4,
  5: changedJudgments5,
  6: changedJudgments6,
  7: changedJudgments7,
  8: changedJudgments8,
  9: changedJudgments9,
  10: changedJudgments10,
  11: changedJudgments11,
  12: changedJudgments12,
  13: changedJudgments13,
  14: changedJudgments14,
  15: changedJudgments15,
  16: changedJudgments16,
  17: changedJudgments17,
  18: changedJudgments18,
  19: changedJudgments19,
  20: changedJudgments20,
  21: changedJudgments21,
  22: changedJudgments22,
  23: changedJudgments23,
  24: changedJudgments24,
  25: changedJudgments25,
  26: changedJudgments26,
  27: changedJudgments27,
  28: changedJudgments28,
  29: changedJudgments29,
  30: changedJudgments30,
  31: changedJudgments31,
  32: changedJudgments32,
} as const;

/**
 * Get the changed judgment interpretation for a specific transformation.
 * @param fromId The original gua ID (1-32)
 * @param toId The gua ID it changes to
 * @returns The interpretation text, or undefined if not found
 */
export function getChangedJudgment(
  fromId: number,
  toId: number
): string | undefined {
  const changes = changedJudgmentsZh[fromId];
  if (!changes) return undefined;

  const change = changes.find((c) => c.changedToId === toId);
  return change?.interpretation;
}
