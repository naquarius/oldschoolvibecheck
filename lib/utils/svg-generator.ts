export const generateCrystalPinkGuaSVG = (binary: string): string => {
  const yaos = binary.split('').map((bit) => (bit === '1' ? 'yang' : 'yin'));

  return `
    <svg width="100" height="90" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crystalPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffd6e0" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#ffb6c1" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#ff91a4" stop-opacity="0.9"/>
        </linearGradient>
        <filter id="crystalGlow">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"/>
        </filter>
      </defs>
      ${yaos
        .map((type, index) => {
          const y = 6 + index * 12;
          if (type === 'yang') {
            return `
            <rect x="10" y="${y}" width="80" height="6" fill="url(#crystalPink)" filter="url(#crystalGlow)" rx="2" opacity="0.85"/>
            <rect x="10" y="${y}" width="80" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
          `;
          } else {
            return `
            <rect x="10" y="${y}" width="35" height="6" fill="url(#crystalPink)" filter="url(#crystalGlow)" rx="2" opacity="0.85"/>
            <rect x="55" y="${y}" width="35" height="6" fill="url(#crystalPink)" filter="url(#crystalGlow)" rx="2" opacity="0.85"/>
            <rect x="10" y="${y}" width="35" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
            <rect x="55" y="${y}" width="35" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
          `;
          }
        })
        .join('')}
    </svg>
  `;
};

export const generateCrystalBlueGuaSVG = (binary: string): string => {
  const yaos = binary.split('').map((bit) => (bit === '1' ? 'yang' : 'yin'));

  return `
    <svg width="100" height="90" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- 水晶蓝渐变 -->
        <linearGradient id="crystalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d6eaff" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#b6d6ff" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#91b4ff" stop-opacity="0.9"/>
        </linearGradient>
        <filter id="crystalGlowBlue">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"/>
        </filter>
      </defs>
      ${yaos
        .map((type, index) => {
          const y = 6 + index * 12;
          if (type === 'yang') {
            return `
            <rect x="10" y="${y}" width="80" height="6" fill="url(#crystalBlue)" filter="url(#crystalGlowBlue)" rx="2" opacity="0.85"/>
            <rect x="10" y="${y}" width="80" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
          `;
          } else {
            return `
            <rect x="10" y="${y}" width="35" height="6" fill="url(#crystalBlue)" filter="url(#crystalGlowBlue)" rx="2" opacity="0.85"/>
            <rect x="55" y="${y}" width="35" height="6" fill="url(#crystalBlue)" filter="url(#crystalGlowBlue)" rx="2" opacity="0.85"/>
            <rect x="10" y="${y}" width="35" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
            <rect x="55" y="${y}" width="35" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
          `;
          }
        })
        .join('')}
    </svg>
  `;
};
