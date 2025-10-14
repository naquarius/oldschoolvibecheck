export const generateCrystalGuaSVG = (
  binary: string,
  color: 'pink' | 'blue' = 'pink'
): string => {
  const yaos = binary.split('').map((bit) => (bit === '1' ? 'yang' : 'yin'));
  const colorConfig = {
    pink: {
      gradientId: 'crystalPink',
      filterId: 'crystalGlow',
      stops: [
        { offset: '0%', color: '#ffd6e0', opacity: '0.9' },
        { offset: '50%', color: '#ffb6c1', opacity: '0.7' },
        { offset: '100%', color: '#ff91a4', opacity: '0.9' },
      ],
    },
    blue: {
      gradientId: 'crystalBlue',
      filterId: 'crystalGlowBlue',
      stops: [
        { offset: '0%', color: '#d6eaff', opacity: '0.9' },
        { offset: '50%', color: '#b6d6ff', opacity: '0.7' },
        { offset: '100%', color: '#91b4ff', opacity: '0.9' },
      ],
    },
  };

  const config = colorConfig[color];

  const generateGradient = () => `
    <linearGradient id="${
      config.gradientId
    }" x1="0%" y1="0%" x2="100%" y2="100%">
      ${config.stops
        .map(
          (stop) =>
            `<stop offset="${stop.offset}" stop-color="${stop.color}" stop-opacity="${stop.opacity}"/>`
        )
        .join('')}
    </linearGradient>
  `;

  const generateYao = (type: string, index: number) => {
    const y = 90 - 18 - index * 12;

    if (type === 'yang') {
      return `
        <rect x="10" y="${y}" width="80" height="6" fill="url(#${config.gradientId})" filter="url(#${config.filterId})" rx="2" opacity="0.85"/>
        <rect x="10" y="${y}" width="80" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
      `;
    } else {
      return `
        <rect x="10" y="${y}" width="35" height="6" fill="url(#${config.gradientId})" filter="url(#${config.filterId})" rx="2" opacity="0.85"/>
        <rect x="55" y="${y}" width="35" height="6" fill="url(#${config.gradientId})" filter="url(#${config.filterId})" rx="2" opacity="0.85"/>
        <rect x="10" y="${y}" width="35" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
        <rect x="55" y="${y}" width="35" height="2" fill="#ffffff" opacity="0.5" rx="1"/>
      `;
    }
  };

  return `
    <svg width="100" height="90" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        ${generateGradient()}
        <filter id="${config.filterId}">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"/>
        </filter>
      </defs>
      ${yaos.map((type, index) => generateYao(type, index)).join('')}
    </svg>
  `;
};
