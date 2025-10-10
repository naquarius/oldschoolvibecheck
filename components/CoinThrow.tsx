'use client';

import { useEffect, useState } from 'react';

export const CoinThrow = () => {
  const [coins, setCoins] = useState<Array<'heads' | 'tails' | 'spinning'>>([
    'spinning',
    'spinning',
    'spinning',
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const results: Array<'heads' | 'tails'> = [];
      for (let i = 0; i < 3; i++) {
        results.push(Math.random() > 0.5 ? 'heads' : 'tails');
      }
      setCoins(results);
    }, 4000); // 从2000ms增加到4000ms以匹配更慢的动画

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="crystal-card p-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">铜钱旋转中...</p>
      </div>

      <div className="coins-container">
        {coins.map((face, index) => (
          <div key={index} className="coin-wrapper">
            <div
              className={`crystal-coin ${face} ${
                face === 'spinning' ? 'coin-throwing' : ''
              }`}
            />
            <span className="coin-label">铜钱 {index + 1}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="text-xs text-gray-500">
          {coins.every((coin) => coin !== 'spinning')
            ? '投掷完成！'
            : '请稍候...'}
        </p>
      </div>
    </div>
  );
};
