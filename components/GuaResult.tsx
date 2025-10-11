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
            onClick={() => setShowVibe(!showVibe)}
            className={`toggle-button ${showVibe ? 'active' : ''}`}
          >
            {language === 'zh' ? 'Vibe模式' : 'Vibe Mode'}
          </button>
          <button
            onClick={() => setShowVibe(!showVibe)}
            className={`toggle-button ${!showVibe ? 'active' : ''}`}
          >
            {language === 'zh' ? '标准模式' : 'Standard'}
          </button>
        </div>
      </div>

      {/* Main Results */}
      <div className="gua-results">
        {/* Original Gua */}
        <div className="gua-card">
          <div className="gua-header">
            <div className="gua-info">
              <h3 className="gua-title">
                {language === 'zh' ? '你的能量' : 'Your Energy'}
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
              {showVibe
                ? language === 'zh'
                  ? '氛围解读:'
                  : 'The Vibe:'
                : language === 'zh'
                ? '现代解读:'
                : 'Modern Reading:'}
            </h4>
            <p className="reading-text">
              {showVibe ? originalModern.vibe : originalModern.standard}
            </p>
          </div>
        </div>

        {/* Changed Gua */}
        {changedGuaData && (
          <div className="gua-card">
            <div className="gua-header">
              <div className="gua-info">
                <h3 className="gua-title">
                  {language === 'zh' ? '你的路径' : 'Your Path'}
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
                {showVibe
                  ? language === 'zh'
                    ? '未来走向:'
                    : "Where You're Headed:"
                  : language === 'zh'
                  ? '未来解读:'
                  : 'Future Reading:'}
              </h4>
              <p className="reading-text">
                {showVibe && changedModern
                  ? changedModern.vibe
                  : changedModern?.standard}
              </p>
            </div>
          </div>
        )}
      </div>

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
                  ? '你的能量正在变化！重点关注"未来走向"的解读。'
                  : 'Your energy is shifting! Focus on the "Where You\'re Headed" reading.'
                : language === 'zh'
                ? `变爻位置: 第 ${result.changingPositions.join(
                    '、'
                  )} 爻 - 以变卦卦辞为主参考`
                : `Changing lines at positions: ${result.changingPositions.join(
                    ', '
                  )} - focus on the changed hexagram judgment`}
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
                  ? '你的能量很稳定。重点关注当前氛围的解读。'
                  : 'Your energy is stable. Focus on your current vibe reading.'
                : language === 'zh'
                ? '无变爻，直接参考本卦卦辞'
                : 'No changing lines, refer directly to the original hexagram judgment'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
