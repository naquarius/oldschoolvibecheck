'use client';

import { CoinThrow } from '@/components/CoinThrow';
import { GuaResult } from '@/components/GuaResult';
import { qigua } from '@/lib/core/qigua';
import { GuaResultType } from '@/lib/core/types';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<GuaResultType | null>(null);
  const [isThrowing, setIsThrowing] = useState(false);

  const handleQigua = async () => {
    setIsThrowing(true);
    setTimeout(() => {
      const guaResult = qigua();
      setResult(guaResult);
      setIsThrowing(false);
    }, 1000);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container">
          <div className="logo-icon">✨</div>
          <h1 className="app-title">Vibe Check</h1>
        </div>
        <div className="tagline">ancient wisdom, modern vibes</div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {!result && !isThrowing && (
          <div className="welcome-section">
            <div className="hero-text">
              <h2 className="hero-title">What's your vibe today?</h2>
              <p className="hero-subtitle">
                Get instant wisdom from ancient I Ching coins. No BS, just vibes ✨
              </p>
            </div>
            
            <button
              onClick={handleQigua}
              className="cta-button"
            >
              <span className="button-text">Throw Coins</span>
              <div className="button-glow"></div>
            </button>

            <div className="quick-info">
              <div className="info-item">
                <span className="info-icon">🪙</span>
                <span>3 coins</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⚡</span>
                <span>instant results</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🔮</span>
                <span>ancient wisdom</span>
              </div>
            </div>
          </div>
        )}

        {isThrowing && (
          <div className="throwing-section">
            <div className="throwing-header">
              <h3 className="throwing-title">Reading your energy...</h3>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
            <CoinThrow />
          </div>
        )}

        {result && !isThrowing && (
          <div className="result-section">
            <div className="result-header">
              <button 
                onClick={() => setResult(null)}
                className="back-button"
              >
                ← New Reading
              </button>
            </div>
            <GuaResult result={result} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-text">
          Made with ✨ for the spiritually curious
        </div>
      </footer>
    </div>
  );
}
