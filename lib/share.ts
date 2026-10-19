import { GuaResultType } from './core/types';
import { shareUrl } from './core/share-code';
import { i18n } from './i18n';

/**
 * The vibes reading as plain text, used by share and by copy in vibes mode.
 * Reads the final hexagram (the changed one if lines moved). Never includes the question.
 */
export const vibesShareText = (result: GuaResultType) => {
  const t = i18n.getUiStrings();
  const finalId = (result.changedGua || result.originalGua).id;
  const vibe = i18n.getVibes(finalId);
  const colon = i18n.getLanguage() === 'zh' ? '：' : ': ';
  const body = `${t.myVibe}${colon}${vibe.vibe}\n${vibe.realTalk}\n${t.theMove}${colon}${vibe.theMove}`;
  const url = shareUrl(result);

  return { body, url, full: `${body}\n\n${t.seeMyReading} → ${url}` };
};
