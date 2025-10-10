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
    <main>
      <div className="ethereal-container">
        <h1 className="text-3xl font-bold mb-8 crystal-title text-center">
          Old School Vibe Check
        </h1>

        <button
          onClick={handleQigua}
          disabled={isThrowing}
          className="w-full crystal-button p-4 rounded-lg disabled:bg-gray-400 mb-6"
        >
          {isThrowing ? '投掷中...' : '开始起卦'}
        </button>

        <div className="content-area">
          {isThrowing ? (
            <CoinThrow />
          ) : result ? (
            <GuaResult result={result} />
          ) : (
            <div className="empty-state">
              <p className="text-center text-gray-500">点击上方按钮开始起卦</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
