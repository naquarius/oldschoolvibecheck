'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { getUiStrings } from '@/lib/i18n/ui';
import { useEffect, useState } from 'react';
import styles from './CoinThrow.module.css';

export const CoinThrow = () => {
  const [coins, setCoins] = useState<Array<'heads' | 'tails' | 'spinning'>>([
    'spinning',
    'spinning',
    'spinning',
  ]);
  const { language } = useLanguage();
  const strings = getUiStrings(language);

  useEffect(() => {
    const timer = setTimeout(() => {
      const results: Array<'heads' | 'tails'> = [];
      for (let i = 0; i < 3; i++) {
        results.push(Math.random() > 0.5 ? 'heads' : 'tails');
      }
      setCoins(results);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.coinThrowContainer}>
      <div className={styles.throwStatus}>
        <div className={styles.statusIndicator}>
          <div className={styles.pulseDot}></div>
          <span className={styles.statusText}>
            {coins.every((coin) => coin !== 'spinning')
              ? strings.readingComplete
              : strings.channelingEnergy}
          </span>
        </div>
      </div>

      <div className={styles.coinsGrid}>
        {coins.map((face, index) => (
          <div key={index} className={styles.coinItem}>
            <div
              className={`${styles.modernCoin} ${face} ${
                face === 'spinning' ? styles.coinSpinning : styles.coinSettled
              }`}
            >
              <div className={styles.coinInner}>
                {face === 'heads' && <span className={styles.coinSymbol}>●</span>}
                {face === 'tails' && <span className={styles.coinSymbol}>○</span>}
                {face === 'spinning' && <div className={styles.spinner}></div>}
              </div>
            </div>
            <div className={styles.coinLabelModern}>
              {strings.coin} {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.throwFooter}>
        <div className={styles.energyBar}>
          <div className={styles.energyFill}></div>
        </div>
        <p className={styles.throwMessage}>
          {coins.every((coin) => coin !== 'spinning')
            ? strings.cosmicReadingReady
            : strings.universeAligning}
        </p>
      </div>
    </div>
  );
};
