import { useQuestion } from '@/lib/context/QuestionContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { useState } from 'react';
import styles from './CopyButton.module.css';

interface CopyButtonProps {
  result: GuaResultType;
}

export const CopyButton = ({ result }: CopyButtonProps) => {
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

    const formattedText = `${formattedQuestion}${formattedHexagrams}${formattedChanges}`;

    try {
      await navigator.clipboard.writeText(formattedText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.copyResultContainer}>
      <button onClick={handleCopyResult} className={styles.copyButton}>
        <span className={styles.copyIcon}>{copySuccess ? '✓' : '📋'}</span>
        <span className={styles.copyText}>
          {copySuccess ? strings.copied : strings.copyResult}
        </span>
      </button>
    </div>
  );
};
