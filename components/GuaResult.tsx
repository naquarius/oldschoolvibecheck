'use client';

import { useApp } from '@/lib/context/AppContext';
import { useQuestion } from '@/lib/context/QuestionContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { useState } from 'react';
import { ModeToggle } from './AppControls/ModeToggle';
import GuaCard from './GuaCard';
import styles from './GuaResult.module.css';
import { YaoChangeInfo } from './YaoChangeInfo';

interface Props {
  result: GuaResultType;
}

export const GuaResult = ({ result }: Props) => {
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  const [copySuccess, setCopySuccess] = useState(false);

  const { question } = useQuestion();
  const { mode } = useApp();
  const strings = i18n.getUiStrings();
  const showVibe = mode === 'vibe';

  // Get data for original gua
  const originalGuaData = i18n.getGuaData(result.originalGua.id);

  // Get data for changed gua (if it exists)
  const changedGuaData = result.changedGua
    ? i18n.getGuaData(result.changedGua.id)
    : null;

  // For vibe mode: show the final result (changed gua if exists, otherwise original)
  const finalGuaData = changedGuaData || originalGuaData;
  const finalBinary = result.changedBinary || result.originalBinary;

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
    <div className={styles.resultContainer}>
      {/* Header with controls */}
      <div className={styles.resultControls}>
        <div className={styles.themeToggle}>
          <button
            onClick={() =>
              setColorTheme(colorTheme === 'pink' ? 'blue' : 'pink')
            }
            className={styles.controlButton}
            aria-label="Toggle color theme"
          >
            {colorTheme === 'pink' ? '💙' : '💗'}
          </button>
        </div>
        <ModeToggle />
      </div>

      {/* Copy button */}
      <div className={styles.copyResultContainer}>
        <button onClick={handleCopyResult} className={styles.copyResultButton}>
          <span className={styles.copyIcon}>{copySuccess ? '✓' : '📋'}</span>
          <span className={styles.copyText}>
            {copySuccess ? strings.copied : strings.copyResult}
          </span>
        </button>
      </div>

      {/* Main Results */}
      {showVibe ? (
        // VIBE MODE: Show only the final result
        <div className={`${styles.guaResults} ${styles.singleResult}`}>
          <GuaCard
            guaData={finalGuaData}
            binary={finalBinary}
            title={strings.yourVibeToday}
            showVibeText={true}
            colorTheme={colorTheme}
          />
        </div>
      ) : (
        // STANDARD MODE: Show the progression
        <div>
          <div className={styles.guaResults}>
            <GuaCard
              guaData={originalGuaData}
              binary={result.originalBinary}
              title={strings.currentSituation}
              colorTheme={colorTheme}
            />

            {changedGuaData && (
              <GuaCard
                guaData={changedGuaData}
                binary={result.changedBinary}
                title={strings.futureDirection}
                colorTheme={colorTheme}
              />
            )}
          </div>
          <YaoChangeInfo result={result} />
        </div>
      )}
    </div>
  );
};
