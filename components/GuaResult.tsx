'use client';

import { GuaResultType } from '@/lib/core/types';
import { findModernJudgment } from '@/lib/data/modern-judgments';
import {
  generateCrystalBlueGuaSVG,
  generateCrystalPinkGuaSVG,
} from '@/lib/utils/svg-generator';
import { useState } from 'react';

interface Props {
  result: GuaResultType;
}

export const GuaResult = ({ result }: Props) => {
  const [showVibe, setShowVibe] = useState(true); // Default to vibe mode for Gen Z
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  const { originalGua, changedGua, changingPositions } = result;
  const originalModern = findModernJudgment(originalGua.id);
  const changedModern = changedGua ? findModernJudgment(changedGua.id) : null;

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
            onClick={() => setColorTheme(colorTheme === 'pink' ? 'blue' : 'pink')}
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
            Vibe Mode
          </button>
          <button
            onClick={() => setShowVibe(!showVibe)}
            className={`toggle-button ${!showVibe ? 'active' : ''}`}
          >
            Traditional
          </button>
        </div>
      </div>

      {/* Main Results */}
      <div className="gua-results">
        {/* Original Gua */}
        <div className="gua-card">
          <div className="gua-header">
            <div className="gua-info">
              <h3 className="gua-title">Your Energy</h3>
              <div className="gua-name">{originalGua.name}</div>
              <span className="gua-number">#{originalGua.id}</span>
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
              {showVibe ? 'The Vibe:' : 'Traditional Reading:'}
            </h4>
            <p className="reading-text">
              {showVibe && originalModern?.modern.vibe_zh
                ? originalModern.modern.vibe_zh
                : originalModern?.modern.zh}
            </p>
          </div>
        </div>

        {/* Changed Gua */}
        {changedGua && (
          <div className="gua-card">
            <div className="gua-header">
              <div className="gua-info">
                <h3 className="gua-title">Your Path</h3>
                <div className="gua-name">{changedGua.name}</div>
                <span className="gua-number">#{changedGua.id}</span>
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
                {showVibe ? 'Where You\'re Headed:' : 'Future Reading:'}
              </h4>
              <p className="reading-text">
                {showVibe && changedModern?.modern.vibe_zh
                  ? changedModern.modern.vibe_zh
                  : changedModern?.modern.zh}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="result-footer">
        {changingPositions.length > 0 ? (
          <div className="change-info">
            <div className="change-badge">
              <span className="change-icon">⚡</span>
              <span>Energy Shift Detected</span>
            </div>
            <p className="change-text">
              {showVibe 
                ? `Your energy is shifting! Focus on the "Where You're Headed" reading.`
                : `变爻位置: 第 ${changingPositions.join('、')} 爻 - 以变卦卦辞为主参考`
              }
            </p>
          </div>
        ) : (
          <div className="stable-info">
            <div className="stable-badge">
              <span className="stable-icon">🎯</span>
              <span>Stable Energy</span>
            </div>
            <p className="stable-text">
              {showVibe 
                ? "Your energy is stable. Focus on your current vibe reading."
                : "无变爻，直接参考本卦卦辞"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
