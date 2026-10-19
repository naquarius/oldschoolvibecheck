import { useQuestion } from '@/lib/context/QuestionContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { vibesShareText } from '@/lib/share';
import { useState } from 'react';
import styles from './CopyButton.module.css';

interface CopyButtonProps {
  result: GuaResultType;
  /** Vibes copies the same short message as share; classic copies the detailed reading. */
  mode: 'vibe' | 'traditional';
  /** Fill the row (when it's the only action) instead of the fixed width. */
  fill?: boolean;
}

export const CopyButton = ({ result, mode, fill = false }: CopyButtonProps) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const { question } = useQuestion();
  const strings = i18n.getUiStrings();
  const language = i18n.getLanguage();

  const handleCopyResult = async () => {
    const formattedQuestion = question
      ? `${strings.asked}: ${question}\n\n`
      : '';

    const formattedHexagrams = `${strings.ogResult}: ${
      result.originalGua.name[language]
    } - ID: ${result.originalGua.id}\n${
      result.changedGua
        ? `${strings.changedResult}: ${result.changedGua.name[language]} - ID: ${result.changedGua.id}\n`
        : ''
    }`;

    const formattedChanges = `${strings.changedLines}: ${
      result.changingPositions.length > 0
        ? result.changingPositions.join(', ')
        : strings.noChanges
    }`;

    const formattedText =
      mode === 'vibe'
        ? vibesShareText(result).full
        : `${formattedQuestion}${formattedHexagrams}${formattedChanges}`;

    try {
      await navigator.clipboard.writeText(formattedText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`${styles.copyResultContainer} ${fill ? styles.fill : ''}`}>
      <button onClick={handleCopyResult} className={styles.copyButton}>
        <svg
          className={styles.copyIcon}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
        >
          {copySuccess ? (
            <path
              d="M9.5 16.2 4.8 11.5l-1.6 1.6 6.3 6.3L21 7.9l-1.6-1.6z"
              fill="currentColor"
            />
          ) : (
            <path
              d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8zM5 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v10h10V9z"
              fill="currentColor"
            />
          )}
        </svg>
        <span className={styles.copyText} role="status" aria-live="polite">
          {copySuccess ? strings.copied : strings.copyResult}
        </span>
      </button>
    </div>
  );
};
