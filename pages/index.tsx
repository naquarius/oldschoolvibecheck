'use client';

import { CoinThrow } from '@/components/CoinThrow';
import { GuaResult } from '@/components/GuaResult';
import { useLanguage } from '@/lib/context/LanguageContext';
import { qigua } from '@/lib/core/qigua';
import { GuaResultType } from '@/lib/core/types';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<GuaResultType | null>(null);
  const [isThrowing, setIsThrowing] = useState(false);
  const { language, setLanguage } = useLanguage();

  const [mode, setMode] = useState<'vibe' | 'standard'>('vibe');
  const [en, setEn] = useState(true);

  const handleQigua = async () => {
    setIsThrowing(true);
    setTimeout(() => {
      const guaResult = qigua();
      setResult(guaResult);
      setIsThrowing(false);
    }, 3000);
  };

  const handleNewReading = () => {
    setResult(null);
    setIsThrowing(false);
  };

  // Dynamic page title based on state
  const getPageTitle = () => {
    if (result) {
      const guaName =
        language === 'zh'
          ? result.originalGua.name.zh
          : result.originalGua.name.en;
      return `${guaName} - Vibe Check`;
    }
    if (isThrowing) {
      return language === 'zh'
        ? '正在解读... - Vibe Check'
        : 'Reading your energy... - Vibe Check';
    }
    return language === 'zh'
      ? 'Vibe Check - 古老智慧，现代氛围'
      : 'Vibe Check - Ancient Wisdom, Modern Vibes';
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
      </Head>

      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <div className="logo-container">
            <div className="logo-icon">✨</div>
            <h1 className="app-title">Vibe Check</h1>
          </div>
          <div className="tagline">
            {language === 'zh'
              ? '古老智慧，现代氛围'
              : 'ancient wisdom, modern vibes'}
          </div>

          {/* Language Toggle */}
          <div className="language-toggle">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="btn btn--rust language-button"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {/* Welcome Section - Always visible but conditionally styled */}
          <div
            className={`welcome-section ${
              result || isThrowing ? 'welcome-compact' : ''
            }`}
          >
            {!result && !isThrowing && (
              <>
                <div className="hero-text">
                  <h2 className="hero-title">
                    {language === 'zh'
                      ? '今天的氛围如何？'
                      : "What's your vibe today?"}
                  </h2>
                  <p className="hero-subtitle">
                    {language === 'zh'
                      ? '从古老的易经铜钱中获得即时智慧。没有废话，只有氛围 ✨'
                      : 'Get instant wisdom from ancient I Ching coins. No BS, just vibes ✨'}
                  </p>
                </div>

                <button onClick={handleQigua} className="cta-button">
                  <span className="button-text">
                    {language === 'zh' ? '投掷铜钱' : 'Throw Coins'}
                  </span>
                  <div className="button-glow"></div>
                </button>

                <div className="quick-info">
                  <div className="info-item">
                    <span className="info-icon">🪙</span>
                    <span>{language === 'zh' ? '3枚铜钱' : '3 coins'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⚡</span>
                    <span>
                      {language === 'zh' ? '即时结果' : 'instant results'}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🔮</span>
                    <span>
                      {language === 'zh' ? '古老智慧' : 'ancient wisdom'}
                    </span>
                  </div>
                </div>
              </>
            )}

            {(result || isThrowing) && (
              <div className="compact-header">
                <div className="compact-title">
                  <div className="logo-icon-small">✨</div>
                  <span>Vibe Check</span>
                </div>
                <button
                  onClick={handleNewReading}
                  className="new-reading-button"
                  disabled={isThrowing}
                >
                  {isThrowing
                    ? language === 'zh'
                      ? '解读中...'
                      : 'Reading...'
                    : language === 'zh'
                    ? '新的解读'
                    : 'New Reading'}
                </button>
              </div>
            )}
          </div>

          {/* Throwing Section */}
          {isThrowing && (
            <div className="throwing-section">
              <div className="throwing-header">
                <h3 className="throwing-title">
                  {language === 'zh'
                    ? '正在解读你的能量...'
                    : 'Reading your energy...'}
                </h3>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
              <CoinThrow />
            </div>
          )}

          {/* Result Section */}
          {result && !isThrowing && (
            <div className="result-section">
              <GuaResult result={result} />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-text">
            {language === 'zh'
              ? '为精神好奇者而制 ✨'
              : 'Made with ✨ for the spiritually curious'}
          </div>
        </footer>
      </div>
    </>
  );
}
