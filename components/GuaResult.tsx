'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import {
  generateCrystalBlueGuaSVG,
  generateCrystalPinkGuaSVG,
} from '@/lib/utils/svg-generator';
import { useState } from 'react';

interface Props {
  result: GuaResultType;
}

export const GuaResult = ({ result }: Props) => {
  const [showVibe, setShowVibe] = useState(true);
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  const [showReference, setShowReference] = useState<{
    [key: number]: boolean;
  }>({});
  const { language, setLanguage } = useLanguage();

  const originalGuaData = i18n.getGuaData(result.originalGua.id);
  const originalModern = i18n.getModernJudgment(result.originalGua.id);

  const changedGuaData = result.changedGua
    ? i18n.getGuaData(result.changedGua.id)
    : null;
  const changedModern = result.changedGua
    ? i18n.getModernJudgment(result.changedGua.id)
    : null;

  const svgGenerator =
    colorTheme === 'pink'
      ? generateCrystalPinkGuaSVG
      : generateCrystalBlueGuaSVG;

  const toggleReference = (guaId: number) => {
    setShowReference((prev) => ({
      ...prev,
      [guaId]: !prev[guaId],
    }));
  };

  // In vibe mode, show only the final result (changed gua if exists, otherwise original)
  const finalGua = result.changedGua || result.originalGua;
  const finalGuaData = changedGuaData || originalGuaData;
  const finalModern = changedModern || originalModern;
  const finalBinary = result.changedBinary || result.originalBinary;

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
            onClick={() => setShowVibe(true)}
            className={`toggle-button ${showVibe ? 'active' : ''}`}
          >
            {language === 'zh' ? 'Vibe模式' : 'Vibe Mode'}
          </button>
          <button
            onClick={() => setShowVibe(false)}
            className={`toggle-button ${!showVibe ? 'active' : ''}`}
          >
            {language === 'zh' ? '标准模式' : 'Standard'}
          </button>
        </div>
      </div>

      {/* Main Results */}
      {showVibe ? (
        // VIBE MODE: Show only the final result
        <div className="gua-results single-result">
          <div className="gua-card main-result">
            <div className="gua-header">
              <div className="gua-info">
                <h3 className="gua-title">
                  {language === 'zh' ? '今日氛围' : 'Your Vibe Today'}
                </h3>
                <div className="gua-name">{finalGuaData.name}</div>
                <span className="gua-number">#{finalGuaData.id}</span>
              </div>
            </div>

            <div className="gua-visual">
              <div
                dangerouslySetInnerHTML={{
                  __html: svgGenerator(finalBinary),
                }}
              />
            </div>

            <div className="gua-reading">
              <h4 className="reading-label">
                {language === 'zh' ? '氛围解读:' : 'The Vibe:'}
              </h4>
              <p className="reading-text vibe-text">{finalModern.vibe}</p>
            </div>

            {/* Reference Section */}
            <div className="reference-section">
              <button
                onClick={() => toggleReference(finalGua.id)}
                className="reference-toggle"
              >
                <span>
                  {language === 'zh' ? '📜 经典参考' : '📜 Classical Reference'}
                </span>
                <span
                  className={`arrow ${
                    showReference[finalGua.id] ? 'expanded' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {showReference[finalGua.id] && (
                <div className="reference-content">
                  <div className="reference-item">
                    <h5>{language === 'zh' ? '全名' : 'Full Name'}</h5>
                    <p>{finalGuaData.full_name}</p>
                  </div>
                  <div className="reference-item">
                    <h5>
                      {language === 'zh' ? '经典卦辞' : 'Classical Judgment'}
                    </h5>
                    <p className="classical-text">{finalGuaData.judgment}</p>
                  </div>
                  <div className="reference-item">
                    <h5>
                      {language === 'zh' ? '现代解读' : 'Modern Interpretation'}
                    </h5>
                    <p>{finalModern.standard}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // STANDARD MODE: Show the progression
        <div className="gua-results">
          {/* Original Gua */}
          <div className="gua-card">
            <div className="gua-header">
              <div className="gua-info">
                <h3 className="gua-title">
                  {language === 'zh' ? '当前状况' : 'Current Situation'}
                </h3>
                <div className="gua-name">{originalGuaData.name}</div>
                <span className="gua-number">#{originalGuaData.id}</span>
              </div>
            </div>

            <div className="gua-visual">
              <div
                dangerouslySetInnerHTML={{
                  __html: svgGenerator(result.originalBinary),
                }}
              />
            </div>

            <div className="gua-reading">
              <h4 className="reading-label">
                {language === 'zh' ? '当前能量:' : 'Current Energy:'}
              </h4>
              <p className="reading-text">{originalModern.standard}</p>
            </div>

            {/* Reference Section */}
            <div className="reference-section">
              <button
                onClick={() => toggleReference(originalGuaData.id)}
                className="reference-toggle"
              >
                <span>
                  {language === 'zh' ? '📜 经典参考' : '📜 Classical Reference'}
                </span>
                <span
                  className={`arrow ${
                    showReference[originalGuaData.id] ? 'expanded' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {showReference[originalGuaData.id] && (
                <div className="reference-content">
                  <div className="reference-item">
                    <h5>{language === 'zh' ? '全名' : 'Full Name'}</h5>
                    <p>{originalGuaData.full_name}</p>
                  </div>
                  <div className="reference-item">
                    <h5>
                      {language === 'zh' ? '经典卦辞' : 'Classical Judgment'}
                    </h5>
                    <p className="classical-text">{originalGuaData.judgment}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Changed Gua */}
          {changedGuaData && (
            <div className="gua-card">
              <div className="gua-header">
                <div className="gua-info">
                  <h3 className="gua-title">
                    {language === 'zh' ? '未来方向' : 'Future Direction'}
                  </h3>
                  <div className="gua-name">{changedGuaData.name}</div>
                  <span className="gua-number">#{changedGuaData.id}</span>
                </div>
              </div>

              <div className="gua-visual">
                <div
                  dangerouslySetInnerHTML={{
                    __html: svgGenerator(result.changedBinary!),
                  }}
                />
              </div>

              <div className="gua-reading">
                <h4 className="reading-label">
                  {language === 'zh' ? '未来走向:' : "Where You're Headed:"}
                </h4>
                <p className="reading-text">{changedModern?.standard}</p>
              </div>

              {/* Reference Section */}
              <div className="reference-section">
                <button
                  onClick={() => toggleReference(changedGuaData.id)}
                  className="reference-toggle"
                >
                  <span>
                    {language === 'zh'
                      ? '📜 经典参考'
                      : '📜 Classical Reference'}
                  </span>
                  <span
                    className={`arrow ${
                      showReference[changedGuaData.id] ? 'expanded' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {showReference[changedGuaData.id] && (
                  <div className="reference-content">
                    <div className="reference-item">
                      <h5>{language === 'zh' ? '全名' : 'Full Name'}</h5>
                      <p>{changedGuaData.full_name}</p>
                    </div>
                    <div className="reference-item">
                      <h5>
                        {language === 'zh' ? '经典卦辞' : 'Classical Judgment'}
                      </h5>
                      <p className="classical-text">
                        {changedGuaData.judgment}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bottom Info */}
      <div className="result-footer">
        {result.changingPositions.length > 0 ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
};
