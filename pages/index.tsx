'use client';

import { CoinThrow } from '@/components/CoinThrow';
import { GuaResult } from '@/components/GuaResult';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useQuestion } from '@/lib/context/QuestionContext';
import { qigua } from '@/lib/core/qigua';
import { GuaResultType } from '@/lib/core/types';
import { getUiStrings } from '@/lib/i18n/ui';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<GuaResultType | null>(null);
  const [isThrowing, setIsThrowing] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { question, setQuestion } = useQuestion();
  const strings = getUiStrings(language);

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
    setQuestion('');
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
          <div className="tagline">{strings.appTagline}</div>

          {/* Language Toggle */}
          <div className="language-toggle">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="language-button"
            >
              {language === 'zh' ? strings.languageToggle : strings.languageToggleAlt}
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
                  <h2 className="hero-title">{strings.whatIsYourVibe}</h2>
                  <p className="hero-subtitle">{strings.heroSubtitle}</p>
                </div>

                <div className="question-input-wrapper">
                  <label className="question-label" htmlFor="question-box">
                    {strings.askTheUniverse}
                  </label>
                  <textarea
                    id="question-box"
                    className="question-input"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    placeholder={strings.questionPlaceholder}
                    rows={3}
                  />
                </div>

                <button onClick={handleQigua} className="cta-button">
                  <span className="button-text">{strings.throwCoins}</span>
                  <div className="button-glow"></div>
                </button>

                <div className="quick-info">
                  <div className="info-item">
                    <span className="info-icon">🪙</span>
                    <span>{strings.threeCoins}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⚡</span>
                    <span>{strings.instantResults}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🔮</span>
                    <span>{strings.ancientWisdom}</span>
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
                  {isThrowing ? strings.reading : strings.newReading}
                </button>
              </div>
            )}
          </div>

          {/* Throwing Section */}
          {isThrowing && (
            <div className="throwing-section">
              <div className="throwing-header">
                <h3 className="throwing-title">{strings.readingYourEnergy}</h3>
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
          <div className="footer-text">{strings.footerText}</div>
        </footer>
      </div>
    </>
  );
}
