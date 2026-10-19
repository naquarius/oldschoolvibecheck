'use client';

import { useApp } from '@/lib/context/AppContext';
import { useQuestion } from '@/lib/context/QuestionContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { CopyButton } from './AppControls/CopyButton';
import { CastRecord } from './CastRecord';
import { ModeToggle } from './AppControls/ModeToggle';
import styles from './GuaResult.module.css';
import { HexagramPlate } from './HexagramPlate';
import { TraditionalCard } from './TraditionalCard';
import { VibeCard } from './VibeCard';
import { YaoChangeInfo } from './YaoChangeInfo';

// Lines finish drawing at ~2.4s and the reading fades in at 2.5s
const CAST_DURATION_MS = 3300;

interface Props {
  result: GuaResultType;
  onNewReading: () => void;
}

export const GuaResult = ({ result, onNewReading }: Props) => {
  const { mode } = useApp();
  const { question } = useQuestion();
  const strings = i18n.getUiStrings();
  const showVibe = mode === 'vibe';
  // A fresh reading casts itself once; switching modes afterwards doesn't replay it
  const [casting, setCasting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCasting(false), CAST_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  const originalGuaData = i18n.getGuaData(result.originalGua.id);
  const changedGuaData = result.changedGua
    ? i18n.getGuaData(result.changedGua.id)
    : null;

  // Vibe mode reads the final hexagram: the changed one if lines moved
  const finalGuaData = changedGuaData || originalGuaData;
  const finalBinary = result.changedBinary || result.originalBinary;

  return (
    <div
      className={`${styles.resultContainer} ${casting ? 'is-casting' : ''}`}
    >
      <div className={styles.controls}>
        <ModeToggle />
        <CopyButton result={result} />
      </div>

      {question.trim() && (
        <figure className={styles.asked}>
          <figcaption className={styles.askedLabel}>{strings.asked}</figcaption>
          <blockquote className={styles.askedText}>{question}</blockquote>
        </figure>
      )}

      {showVibe ? (
        <VibeCard
          name={finalGuaData.name}
          id={finalGuaData.id}
          binary={finalBinary}
          title={strings.yourVibeToday}
          casting={casting}
        >
          <CastRecord yaos={result.yaos} />
        </VibeCard>
      ) : (
        <div className={styles.classic}>
          <HexagramPlate
            figures={[
              {
                binary: result.originalBinary,
                name: originalGuaData.name,
                id: originalGuaData.id,
                label: strings.currentSituation,
              },
              ...(changedGuaData && result.changedBinary
                ? [
                    {
                      binary: result.changedBinary,
                      name: changedGuaData.name,
                      id: changedGuaData.id,
                      label: strings.futureDirection,
                      changing: result.changingPositions,
                    },
                  ]
                : []),
            ]}
            casting={casting}
          />
          <div className="cast-reveal">
            <CastRecord yaos={result.yaos} />
            <YaoChangeInfo result={result} />
          </div>
          <div className={`${styles.readings} cast-reveal`}>
            <TraditionalCard
              guaData={originalGuaData}
              title={strings.currentSituation}
            />
            {changedGuaData && (
              <TraditionalCard
                guaData={changedGuaData}
                title={strings.futureDirection}
              />
            )}
          </div>
        </div>
      )}

      <button
        onClick={onNewReading}
        className={`${styles.newReading} cast-reveal`}
      >
        {strings.newReading}
      </button>
    </div>
  );
};
