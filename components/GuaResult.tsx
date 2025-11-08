'use client';

import { useApp } from '@/lib/context/AppContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { useState } from 'react';
import { CopyButton } from './AppControls/CopyButton';
import { ModeToggle } from './AppControls/ModeToggle';
import GuaCard from './GuaCard';
import styles from './GuaResult.module.css';
import { YaoChangeInfo } from './YaoChangeInfo';

interface Props {
  result: GuaResultType;
}

export const GuaResult = ({ result }: Props) => {
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
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
      <CopyButton result={result} />

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
