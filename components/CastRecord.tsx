import { Yao, YaoType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { useState } from 'react';
import { CashCoin } from './CashCoin';
import styles from './CastRecord.module.css';

interface CastRecordProps {
  yaos: Yao[];
  /** Folded by default; tap to see the throws. */
  defaultOpen?: boolean;
}

// The six real throws behind the hexagram: three coins, their sum, and what the line is
export const CastRecord = ({ yaos, defaultOpen = false }: CastRecordProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const t = i18n.getUiStrings();
  const kind: Record<YaoType, string> = {
    old_yin: t.oldYin,
    young_yang: t.youngYang,
    young_yin: t.youngYin,
    old_yang: t.oldYang,
  };

  return (
    <details
      className={styles.record}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className={styles.summary}>
        <span className={styles.title}>{t.howItWasCast}</span>
        <span className={styles.count}>
          {t.sixThrows}
          <svg
            className={styles.chevron}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z" fill="currentColor" />
          </svg>
        </span>
      </summary>

      <ol className={styles.rows}>
        {/* Top line first, as the hexagram reads on the page */}
        {[...yaos].reverse().map(({ position, throwResult }) => (
          <li key={position} className={styles.row}>
            <span className={styles.line}>
              {t.lineN.replace('{n}', String(position))}
            </span>
            <span className={styles.coins}>
              {throwResult.coins.map((coin) => (
                <CashCoin key={coin.id} face={coin.face} className={styles.coin} />
              ))}
            </span>
            <span
              className={`${styles.meaning} ${
                throwResult.isChanging ? styles.changing : ''
              }`}
            >
              {throwResult.sum} · {kind[throwResult.yaoType]}
              {throwResult.isChanging && ` · ${t.changes}`}
            </span>
          </li>
        ))}
      </ol>
    </details>
  );
};
