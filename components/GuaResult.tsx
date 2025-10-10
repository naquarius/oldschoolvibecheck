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
  const [showVibe, setShowVibe] = useState(false);
  const [colorTheme, setColorTheme] = useState<'pink' | 'blue'>('pink');
  const { originalGua, changedGua, changingPositions } = result;
  const originalModern = findModernJudgment(originalGua.id);
  const changedModern = changedGua ? findModernJudgment(changedGua.id) : null;

  const svgGenerator =
    colorTheme === 'pink'
      ? generateCrystalPinkGuaSVG
      : generateCrystalBlueGuaSVG;

  return (
    <div className="crystal-card p-4">
      {/* 控制按钮 */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setColorTheme(colorTheme === 'pink' ? 'blue' : 'pink')}
          className="crystal-button text-sm px-3 py-1 rounded"
        >
          {colorTheme === 'pink' ? '💙 蓝色主题' : '💗 粉色主题'}
        </button>
        <button
          onClick={() => setShowVibe(!showVibe)}
          className="crystal-button text-sm px-3 py-1 rounded"
        >
          {showVibe ? '看正经版' : '看Vibe版'}
        </button>
      </div>

      {/* 水平并排布局 */}
      <div className="horizontal-layout">
        {/* 本卦 */}
        <div className="gua-container">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold crystal-title">
              本卦: {originalGua.name}
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              #{originalGua.id}
            </span>
          </div>
          <div
            className="my-4 flex justify-center"
            dangerouslySetInnerHTML={{
              __html: svgGenerator(result.originalBinary),
            }}
          />

          <div className="mt-4">
            <h4 className="font-semibold text-sm text-gray-600">卦辞解读:</h4>
            <p className="text-sm">
              {showVibe && originalModern?.modern.vibe_zh
                ? originalModern.modern.vibe_zh
                : originalModern?.modern.zh}
            </p>
          </div>
        </div>

        {/* 变卦 */}
        {changedGua && (
          <div className="gua-container">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold crystal-title">
                变卦: {changedGua.name}
              </h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                #{changedGua.id}
              </span>
            </div>
            <div
              className="my-4 flex justify-center"
              dangerouslySetInnerHTML={{
                __html: svgGenerator(result.changedBinary!),
              }}
            />

            <div className="mt-4">
              <h4 className="font-semibold text-sm text-gray-600">卦辞解读:</h4>
              <p className="text-sm">
                {showVibe && changedModern?.modern.vibe_zh
                  ? changedModern.modern.vibe_zh
                  : changedModern?.modern.zh}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 解读提示 */}
      <div className="mt-4 text-sm text-gray-500 border-t pt-2">
        {changingPositions.length > 0 ? (
          <div>
            <p>有变爻时，以变卦卦辞为主参考</p>
            <p className="text-xs mt-1">
              变爻位置: 第 {changingPositions.join('、')} 爻
            </p>
          </div>
        ) : (
          <p>无变爻，直接参考本卦卦辞</p>
        )}
      </div>
    </div>
  );
};
