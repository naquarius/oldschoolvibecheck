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
    <main className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Old School Vibe Check</h1>

      <button
        onClick={handleQigua}
        disabled={isThrowing}
        className="w-full bg-black text-white p-3 rounded disabled:bg-gray-400"
      >
        {isThrowing ? '投掷中...' : '开始起卦'}
      </button>

      <div className="mt-6">
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
