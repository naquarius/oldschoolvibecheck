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
    <main
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '16px',
        background: 'transparent',
      }}
    >
      <h1 className="text-2xl font-bold mb-4 crystal-title text-center">
        Old School Vibe Check
      </h1>

      <button
        onClick={handleQigua}
        disabled={isThrowing}
        className="w-full crystal-button p-3 rounded-lg disabled:bg-gray-400"
      >
        {isThrowing ? '投掷中...' : '开始起卦'}
      </button>

      <div style={{ marginTop: '16px', background: 'transparent' }}>
        {isThrowing ? (
          <CoinThrow />
        ) : result ? (
          <GuaResult result={result} />
        ) : (
          <p className="text-center text-gray-500">点击上方按钮开始起卦</p>
        )}
      </div>
    </main>
  );
}
