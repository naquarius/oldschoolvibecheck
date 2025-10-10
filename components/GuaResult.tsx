'use client';

import { GuaResultType } from '@/lib/core/types';
import { formatBinary } from '@/lib/utils/helpers';

interface Props {
  result: GuaResultType;
}

export const GuaResult = ({ result }: Props) => {
  const { originalGua, changedGua, changingPositions, yaos } = result;

  return (
    <div className="border p-4 rounded">
      {/* 本卦 */}
      <div className="mb-4">
        <h3 className="text-xl font-bold">本卦: {originalGua.name}</h3>
        <p className="text-2xl my-2">{originalGua.symbol}</p>
        <p className="text-lg">{formatBinary(result.originalBinary)}</p>
        <p className="mt-2 text-gray-700">{originalGua.judgment}</p>
      </div>

      {/* 变爻信息 */}
      {changingPositions.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-50 rounded">
          <h4 className="font-semibold">变爻位置:</h4>
          <p>第 {changingPositions.join('、')} 爻变动</p>
          <div className="mt-2 text-sm">
            {yaos.map(
              (yao) =>
                yao.throwResult.isChanging && (
                  <div key={yao.position}>
                    第{yao.position}爻:
                    {yao.throwResult.yaoType === 'old_yang'
                      ? '老阳 → 阴'
                      : '老阴 → 阳'}
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* 变卦 */}
      {changedGua && (
        <div className="mt-4 p-3 bg-blue-50 rounded">
          <h4 className="font-semibold">变卦: {changedGua.name}</h4>
          <p className="text-2xl my-2">{changedGua.symbol}</p>
          <p className="text-lg">{formatBinary(result.changedBinary!)}</p>
          <p className="mt-2 text-gray-700">{changedGua.judgment}</p>
        </div>
      )}

      {/* 卦象解读提示 */}
      <div className="mt-4 text-sm text-gray-500">
        {changingPositions.length > 0 ? (
          <p>有变爻时，以变卦卦辞为主参考</p>
        ) : (
          <p>无变爻，直接参考本卦卦辞</p>
        )}
      </div>
    </div>
  );
};
