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

  const handleCopyResult = async () => {
    const formattedText = `我问了: ${
      question || 'No question provided'
    }\n\n原卦: ${result.originalGua.name.en} (${
      result.originalGua.name.zh
    }) - ID: ${result.originalGua.id}\n${
      result.changedGua
        ? `变卦: ${result.changedGua.name.en} (${result.changedGua.name.zh}) - ID: ${result.changedGua.id}\n`
        : ''
    }变爻: ${
      result.changingPositions.length > 0
        ? result.changingPositions.join(', ')
        : 'None'
    }`;

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
