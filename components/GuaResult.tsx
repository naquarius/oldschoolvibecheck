'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { useQuestion } from '@/lib/context/QuestionContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import { usePersistentState } from '@/lib/hooks/usePersistentState';
import { useState } from 'react';
import GuaCard from './GuaCard';

interface Props {
  result: GuaResultType;
}

const serializeMode = (value: 'vibe' | 'standard') => value;
const deserializeMode = (value: string) => value as 'vibe' | 'standard';
const isValidMode = (value: 'vibe' | 'standard') =>
  value === 'vibe' || value === 'standard';

export const GuaResult = ({ result }: Props) => {
  const [mode, setMode] = usePersistentState<'vibe' | 'standard'>(
    'vibecheck.mode',
    'vibe',
    {
      serialize: serializeMode,
      deserialize: deserializeMode,
      validate: isValidMode,
    }
  );
  const showVibe = mode === 'vibe';
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  // GuaCard component handles rendering and its own reference toggle state

  const { language } = useLanguage();
  const { question } = useQuestion();

  const originalGuaData = i18n.getGuaData(result.originalGua.id);
  const originalModern = i18n.getModernJudgment(result.originalGua.id);

  const changedGuaData = result.changedGua
    ? i18n.getGuaData(result.changedGua.id)
    : null;
  const changedModern = result.changedGua
    ? i18n.getModernJudgment(result.changedGua.id)
    : null;

  // In vibe mode, show only the final result (changed gua if exists, otherwise original)
  const finalGua = result.changedGua || result.originalGua;
  const finalGuaData = changedGuaData || originalGuaData;
  const finalModern = changedModern || originalModern;
  const finalBinary = result.changedBinary || result.originalBinary;

  const renderChangeInfo = () => {
    if (result.changingPositions.length > 0) {
      return (
        <div className="change-info">
          <div className="change-badge">
            <span className="change-icon">⚡</span>
            <span>
              {language === 'zh' ? '能量变化检测' : 'Energy Shift Detected'}
            </span>
          </div>
          <p className="change-text">
            {showVibe
              ? language === 'zh'
                ? '你的能量正在转化。上面的解读显示你的最终氛围。'
                : 'Your energy is transforming. The reading above shows your final vibe.'
              : language === 'zh'
              ? `变爻位置: 第 ${result.changingPositions.join(
                  '、'
                )} 爻 - 重点关注"未来方向"`
              : `Changing lines at positions: ${result.changingPositions.join(
                  ', '
                )} - focus on "Future Direction"`}
          </p>
        </div>
      );
    } else {
      return (
        <div className="stable-info">
          <div className="stable-badge">
            <span className="stable-icon">🎯</span>
            <span>{language === 'zh' ? '稳定能量' : 'Stable Energy'}</span>
          </div>
          <p className="stable-text">
            {showVibe
              ? language === 'zh'
                ? '你的能量稳定清晰。专注上面的指导。'
                : 'Your energy is stable and clear. Focus on the guidance above.'
              : language === 'zh'
              ? '无变爻，专注当前状态的指导'
              : 'No changing lines, focus on current situation guidance'}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="result-container">
      {/* Header with controls */}
      <div className="result-controls">
        <div className="theme-toggle">
          <button
            onClick={() =>
              setColorTheme(colorTheme === 'pink' ? 'blue' : 'pink')
            }
            className="control-button"
          >
            {colorTheme === 'pink' ? '💙' : '💗'}
          </button>
        </div>

        <div className="vibe-toggle">
          <button
            onClick={() => setMode('vibe')}
            className={`toggle-button ${showVibe ? 'active' : ''}`}
          >
            {language === 'zh' ? 'Vibe模式' : 'Vibe Mode'}
          </button>
          <button
            onClick={() => setMode('standard')}
            className={`toggle-button ${!showVibe ? 'active' : ''}`}
          >
            {language === 'zh' ? '标准模式' : 'Standard'}
          </button>
        </div>
      </div>

      {/* Main Results */}
      {question && (
        <div className="question-reminder">
          <h3 className="question-title">
            {language === 'zh' ? '你的提问' : 'Your Question'}
          </h3>
          <p className="question-text">{question}</p>
        </div>
      )}
      {showVibe ? (
        // VIBE MODE: Show only the final result
        <div className="gua-results single-result">
          <GuaCard
            guaData={finalGuaData}
            modernData={finalModern}
            binary={finalBinary}
            title={language === 'zh' ? '今日氛围' : 'Your Vibe Today'}
            subtitle={language === 'zh' ? '氛围解读:' : 'The Vibe:'}
            showVibeText={true}
            colorTheme={colorTheme}
          />
        </div>
      ) : (
        // STANDARD MODE: Show the progression
        <div className="gua-results">
          {/* Original Gua */}
          <GuaCard
            guaData={originalGuaData}
            modernData={originalModern}
            binary={result.originalBinary}
            title={language === 'zh' ? '当前状况' : 'Current Situation'}
            subtitle={language === 'zh' ? '当前能量:' : 'Current Energy:'}
            colorTheme={colorTheme}
          />

          {/* Changed Gua */}
          {changedGuaData && (
            <GuaCard
              guaData={changedGuaData}
              modernData={changedModern!}
              binary={result.changedBinary!}
              title={language === 'zh' ? '未来方向' : 'Future Direction'}
              subtitle={
                language === 'zh' ? '未来走向:' : "Where You're Headed:"
              }
              colorTheme={colorTheme}
            />
          )}
        </div>
      )}

      {/* Bottom Info */}
      <div className="result-footer">{renderChangeInfo()}</div>
    </div>
  );
};
