'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { useQuestion } from '@/lib/context/QuestionContext';
import { GuaResultType } from '@/lib/core/types';
import { usePersistentState } from '@/lib/hooks/usePersistentState';
import { i18n } from '@/lib/i18n';
import { getUiStrings } from '@/lib/i18n/ui';
import { useState } from 'react';
import GuaCard from './GuaCard';
import styles from './GuaResult.module.css';

interface Props {
  result: GuaResultType;
}

const serializeMode = (value: 'vibe' | 'standard') => value;
const deserializeMode = (value: string) => value as 'vibe' | 'standard';
const isValidMode = (value: 'vibe' | 'standard') =>
  value === 'vibe' || value === 'standard';

export const GuaResult = ({ result }: Props) => {
  const [mode, setMode] = usePersistentState<'vibe' | 'standard'>(
    'vibecheck.mode',
    'vibe',
    {
      serialize: serializeMode,
      deserialize: deserializeMode,
      validate: isValidMode,
    }
  );
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  const [copySuccess, setCopySuccess] = useState(false);

  const { language } = useLanguage();
  const { question } = useQuestion();
  const strings = getUiStrings(language);

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

  const renderChangeInfo = () => {
    if (result.changingPositions.length > 0) {
      return (
        <div className={styles.changeInfo}>
          <div className={styles.changeBadge}>
            <span className={styles.changeIcon}>⚡</span>
            <span>{strings.energyShiftDetected}</span>
          </div>
          <p className={styles.changeText}>
            {showVibe
              ? strings.energyTransforming
              : `${strings.changingLinesAt} ${result.changingPositions.join(
                  ', '
                )} ${strings.focusFutureDirection}`}
          </p>
        </div>
      );
    }

    return (
      <div className={styles.stableInfo}>
        <div className={styles.stableBadge}>
          <span className={styles.stableIcon}>🎯</span>
          <span>{strings.stableEnergy}</span>
        </div>
        <p className={styles.stableText}>
          {showVibe ? strings.stableEnergyClear : strings.noChangingLines}
        </p>
      </div>
    );
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

        <div className={styles.vibeToggle}>
          <button
            onClick={() => setMode('vibe')}
            className={`${styles.toggleButton} ${
              showVibe ? styles.active : ''
            }`}
          >
            {strings.vibeMode}
          </button>
          <button
            onClick={() => setMode('standard')}
            className={`${styles.toggleButton} ${
              !showVibe ? styles.active : ''
            }`}
          >
            {strings.standardMode}
          </button>
        </div>
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
              binary={result.changedBinary!}
              title={strings.futureDirection}
              colorTheme={colorTheme}
            />
          )}
        </div>
      )}

      {/* Bottom Info */}
      <div className={styles.resultFooter}>{renderChangeInfo()}</div>
    </div>
  );
};
