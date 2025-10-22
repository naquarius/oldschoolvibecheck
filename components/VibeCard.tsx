import { useLanguage } from '@/lib/context/LanguageContext';
import {
  vibeJudgmentsEn,
  vibeJudgmentsZh,
} from '@/lib/data/vibes';
import { GuaHeader } from './GuaHeader';

interface VibeCardProps {
  guaData: { id: number };
  binary: string;
  title: string;
  subtitle: string;
  colorTheme: 'pink' | 'blue';
}

export const VibeCard = ({
  guaData,
  binary,
  title,
  subtitle,
  colorTheme,
}: VibeCardProps) => {
  const { language } = useLanguage();
  const vibeJudgments = language === 'zh' ? vibeJudgmentsZh : vibeJudgmentsEn;
  const vibeInfo = vibeJudgments.find((v) => v.id === guaData.id);

  if (!vibeInfo) return null;

  return (
    <div className="gua-card">
      <GuaHeader
        guaData={guaData}
        title={title}
        binary={binary}
        colorTheme={colorTheme}
      />
      <div className="gua-reading vibe-mode">
        <div className="vibe-content">

          {/* VIBE */}
          <div className="vibe-section">
            <div className="section-header">
              <span className="section-emoji">🎯</span>
              <h5 className="section-title">
                {language === 'zh' ? '这波什么情况' : 'THE VIBE'}
              </h5>
            </div>
            <p className="reading-text vibe-text">{vibeInfo.vibe}</p>
          </div>

          {/* REAL TALK - The situation explained */}
          <div className="vibe-section">
            <div className="section-header">
              <span className="section-emoji">💬</span>
              <h5 className="section-title">
                {language === 'zh' ? '真实情况' : 'REAL TALK'}
              </h5>
            </div>
            <p className="reading-text vibe-text">{vibeInfo.realTalk}</p>
          </div>

          {/* THE MOVE - What to do */}
          <div className="vibe-section">
            <div className="section-header">
              <span className="section-emoji">✨</span>
              <h5 className="section-title">
                {language === 'zh' ? '行动指南' : 'THE MOVE'}
              </h5>
            </div>
            <p className="reading-text vibe-text">{vibeInfo.theMove}</p>
          </div>
        </div>
      </div>
    </div>
  );
};