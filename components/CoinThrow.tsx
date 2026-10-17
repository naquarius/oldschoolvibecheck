'use client';

import { Coin } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { useEffect, useState } from 'react';
import { CashCoin } from './CashCoin';
import styles from './CoinThrow.module.css';

interface CoinThrowProps {
  /** The real coins of the reading's final (top line) throw. */
  finalCoins: Coin[];
}

const LAND_AFTER_MS = 2600;

export const CoinThrow = ({ finalCoins }: CoinThrowProps) => {
  const [landed, setLanded] = useState(false);
  const strings = i18n.getUiStrings();

  useEffect(() => {
    const timer = setTimeout(() => setLanded(true), LAND_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.coinThrowContainer}>
      <div className={styles.coinsGrid}>
        {finalCoins.map((coin, index) => (
          <div key={index} className={styles.coinItem}>
            <div
              className={`${styles.modernCoin} ${
                landed ? styles.coinSettled : styles.coinSpinning
              }`}
            >
              <CashCoin
                className={styles.coinArt}
                face={landed ? coin.face : 'heads'}
              />
            </div>
            <p className={styles.coinValue} aria-live="polite">
              {landed && strings[coin.face]}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.throwFooter}>
        <div className={styles.energyBar}>
          <div
            className={`${styles.energyFill} ${landed ? styles.energyFull : ''}`}
          ></div>
        </div>
        <p className={styles.throwMessage}>
          {landed ? strings.cosmicReadingReady : strings.universeAligning}
        </p>
      </div>
    </div>
  );
};
