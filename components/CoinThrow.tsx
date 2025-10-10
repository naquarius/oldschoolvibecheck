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
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="coin-throw-container">
      <div className="throw-status">
        <div className="status-indicator">
          <div className="pulse-dot"></div>
          <span className="status-text">
            {coins.every((coin) => coin !== 'spinning')
              ? 'Reading complete ✨'
              : 'Channeling energy...'}
          </span>
        </div>
      </div>

      <div className="coins-grid">
        {coins.map((face, index) => (
          <div key={index} className="coin-item">
            <div
              className={`modern-coin ${face} ${
                face === 'spinning' ? 'coin-spinning' : 'coin-settled'
              }`}
            >
              <div className="coin-inner">
                {face === 'heads' && <span className="coin-symbol">●</span>}
                {face === 'tails' && <span className="coin-symbol">○</span>}
                {face === 'spinning' && <div className="spinner"></div>}
              </div>
            </div>
            <div className="coin-label-modern">
              Coin {index + 1}
            </div>
          </div>
        ))}
      </div>

      <div className="throw-footer">
        <div className="energy-bar">
          <div className="energy-fill"></div>
        </div>
        <p className="throw-message">
          {coins.every((coin) => coin !== 'spinning')
            ? 'Your cosmic reading is ready! 🌟'
            : 'The universe is aligning your answer...'}
        </p>
      </div>
    </div>
  );
};
