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
  const showVibe = mode === 'vibe';
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  // GuaCard component handles rendering and its own reference toggle state

  const { language } = useLanguage();
  const { question } = useQuestion();
  const [copySuccess, setCopySuccess] = useState(false);
  const strings = getUiStrings(language);

  const originalGuaData = i18n.getGuaData(result.originalGua.id);
  const originalModern = i18n.getModernJudgment(result.originalGua.id);

  const changedGuaData = result.changedGua
    ? i18n.getGuaData(result.changedGua.id)
    : null;
  const changedModern = result.changedGua
    ? i18n.getModernJudgment(result.changedGua.id)
    : null;

  // In vibe mode, show only the final result (changed gua if exists, otherwise original)
  const finalGua = result.changedGua || result.originalGua;
  const finalGuaData = changedGuaData || originalGuaData;
  const finalModern = changedModern || originalModern;
  const finalBinary = result.changedBinary || result.originalBinary;

  const handleCopyResult = async () => {
    const copyData = {
      question: question || 'No question provided',
      originalGua: {
        id: result.originalGua.id,
        name: result.originalGua.name,
      },
      changedGua: result.changedGua
        ? {
            id: result.changedGua.id,
            name: result.changedGua.name,
          }
        : null,
      changingPositions: result.changingPositions,
    };

    const formattedText = `我问了: ${copyData.question}\n\n原卦: ${
      copyData.originalGua.name.en
    } (${copyData.originalGua.name.zh}) - ID: ${copyData.originalGua.id}\n${
      copyData.changedGua
        ? `变卦: ${copyData.changedGua.name.en} (${copyData.changedGua.name.zh}) - ID: ${copyData.changedGua.id}\n`
        : ''
    }变爻: ${
      copyData.changingPositions.length > 0
        ? copyData.changingPositions.join(', ')
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
                )} - ${strings.focusFutureDirection}`}
          </p>
        </div>
      );
    } else {
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
    }
  };

  return (    <div className={styles.resultContainer}>
      {/* Header with controls */}
      <div className={styles.resultControls}>
        <div className={styles.themeToggle}>
          <button
            onClick={() =>
              setColorTheme(colorTheme === 'pink' ? 'blue' : 'pink')
            }
            className={styles.controlButton}>
            {colorTheme === 'pink' ? '💙' : '💗'}
          </button>
        </div>

        <div className={styles.vibeToggle}>
          <button
            onClick={() => setMode('vibe')}
            className={`${styles.toggleButton} ${showVibe ? 'active' : ''}`}
          >
            {strings.vibeMode}
          </button>
          <button
            onClick={() => setMode('standard')}
            className={`${styles.toggleButton} ${!showVibe ? 'active' : ''}`}
          >
            {strings.standardMode}
          </button>
        </div>
      </div>

      {/* Main Results */}
      {/* Main Results */}
      <div className={styles.copyResultContainer}>
        <button onClick={handleCopyResult} className={styles.copyResultButton}>
          <span className={styles.copyIcon}>{copySuccess ? '✓' : '📋'}</span>
          <span className={styles.copyText}>
            {copySuccess ? strings.copied : strings.copyResult}
          </span>
        </button>
      </div>

      {showVibe ? (
        // VIBE MODE: Show only the final result
        <div className={`${styles.guaResults} ${styles.singleResult}`}>
          <GuaCard
            guaData={finalGuaData}
            modernData={finalModern}
            binary={finalBinary}
            title={strings.yourVibeToday}
            subtitle={strings.theVibe}
            showVibeText={true}
            colorTheme={colorTheme}
          />
        </div>
      ) : (
        // STANDARD MODE: Show the progression

        <div className={styles.guaResults}>
          {/* Original Gua */}
          <GuaCard
            guaData={originalGuaData}
            modernData={originalModern}
            binary={result.originalBinary}
            title={strings.currentSituation}
            subtitle={strings.currentEnergy}
            colorTheme={colorTheme}
          />

          {/* Changed Gua */}
          {changedGuaData && (
            <GuaCard
              guaData={changedGuaData}
              modernData={changedModern!}
              binary={result.changedBinary!}
              title={strings.futureDirection}
              subtitle={strings.whereYoureHeaded}
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
