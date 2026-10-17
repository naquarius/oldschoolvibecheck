'use client';

import { BobaButton } from '@/components/AppControls/BobaButton';
import { LanguageToggle } from '@/components/AppControls/LanguageToggle';
import { CoinThrow } from '@/components/CoinThrow';
import { GuaResult } from '@/components/GuaResult';
import { Sparkle } from '@/components/Sparkle';
import { SparkleText } from '@/components/SparkleText';
import { useApp } from '@/lib/context/AppContext';
import { useQuestion } from '@/lib/context/QuestionContext';
import { qigua } from '@/lib/core/qigua';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<GuaResultType | null>(null);
  const [isThrowing, setIsThrowing] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [pendingResult, setPendingResult] = useState<GuaResultType | null>(
    null
  );
  const { language, setLanguage } = useApp();
  const { question, setQuestion } = useQuestion();
  const strings = i18n.getUiStrings();

  const handleQigua = async () => {
    // Let the sparkles flare before the landing gives way to the throw
    setIsLaunching(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    setIsLaunching(false);
    // Cast up front so the toss can land on the real final throw
    const guaResult = qigua();
    setPendingResult(guaResult);
    setIsThrowing(true);
    setTimeout(() => {
      setResult(guaResult);
      setPendingResult(null);
      setIsThrowing(false);
    }, 3800);
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
            <span className="app-title">vibe check</span>
            <span className="tagline">· {strings.appTagline}</span>
          </div>
          {/* Controls group */}
          <div className="header-controls">
            <BobaButton />
            <LanguageToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {/* Welcome Section - Always visible but conditionally styled */}
          <div
            className={`welcome-section ${
              result || isThrowing ? 'welcome-compact' : ''
            } ${isLaunching ? 'welcome-launching' : ''}`}
          >
            {!result && !isThrowing && (
              <>
                <div className="stone-block">
                  <ul className="stone-facts">
                    <li>{strings.threeCoins}</li>
                    <li>{strings.instantResults}</li>
                    <li>{strings.ancientWisdom}</li>
                  </ul>
                  <Sparkle className="stone-sparkle stone-sparkle-large" size={36} />
                  <Sparkle className="stone-sparkle stone-sparkle-small" size={16} />
                </div>

                <div className="hero-text">
                  <h1 className="hero-title">{strings.whatIsYourVibe}</h1>
                  <p className="hero-subtitle">
                    <SparkleText text={strings.heroSubtitle} />
                  </p>
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

                <button
                  onClick={handleQigua}
                  className="cta-button"
                  disabled={isLaunching}
                >
                  <span>{strings.throwCoins}</span>
                  <Sparkle className="cta-sparkle" size={18} />
                </button>
              </>
            )}

          </div>

          {/* Throwing Section */}
          {isThrowing && (
            <div className="throwing-section">
              <div className="throwing-header">
                <h3 className="throwing-title">{strings.readingYourEnergy}</h3>
              </div>
              {pendingResult && (
                <CoinThrow
                  finalCoins={pendingResult.yaos[5].throwResult.coins}
                />
              )}
            </div>
          )}

          {/* Result Section */}
          {result && !isThrowing && (
            <div className="result-section">
              <GuaResult result={result} onNewReading={handleNewReading} />
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-text">
            <SparkleText text={strings.footerText} />
          </div>
        </footer>
      </div>
    </>
  );
}
