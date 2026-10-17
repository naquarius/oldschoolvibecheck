import { useId } from 'react';

interface CashCoinProps {
  /** Heads is the inscribed side (乾隆通寶); tails is the plain back. */
  face: 'heads' | 'tails';
  className?: string;
}

// Characters read top, bottom, right, left, as on the coin
const INSCRIPTION = [
  { char: '乾', x: 50, y: 25 },
  { char: '隆', x: 50, y: 83 },
  { char: '通', x: 79, y: 54 },
  { char: '寶', x: 21, y: 54 },
];

// A classic round cash coin with a square hole, drawn as one SVG
export const CashCoin = ({ face, className }: CashCoinProps) => {
  const gradientId = `coin-gold-${useId().replace(/:/g, '')}`;

  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#f0d27a" />
          <stop offset="45%" stopColor="#c9a23a" />
          <stop offset="100%" stopColor="#8a6420" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#${gradientId})`} stroke="#7a5a1e" strokeWidth="3" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#7a5a1e" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="35" y="35" width="30" height="30" fill="none" stroke="#7a5a1e" strokeOpacity="0.4" strokeWidth="3" />
      <rect x="38.5" y="38.5" width="23" height="23" fill="var(--paper)" stroke="#7a5a1e" strokeWidth="2" />
      {face === 'heads' &&
        INSCRIPTION.map(({ char, x, y }) => (
          <text
            key={char}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="15"
            fontWeight="700"
            fill="#5e4313"
            fontFamily="'Songti TC', 'Songti SC', 'Noto Serif TC', 'Noto Serif SC', serif"
          >
            {char}
          </text>
        ))}
    </svg>
  );
};
