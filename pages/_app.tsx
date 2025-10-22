import { LanguageProvider } from '@/lib/context/LanguageContext';
import { QuestionProvider } from '@/lib/context/QuestionContext';
import type { AppProps } from 'next/app';
import { Cormorant_Garamond } from 'next/font/google';
import '../styles/globals.css';

// Import all component CSS files
import '../components/GuaHeader.css';
import '../components/GuaCard.css';
import '../components/TraditionalCard.css';
import '../components/VibeCard.css';
import '../components/CoinThrow.css';
import '../components/GuaResult.css';
import '../components/TexturedButton.css';
import '../components/ModeSegment.css';
import './index.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <QuestionProvider>
        <div className={display.variable}>
          <Component {...pageProps} />
        </div>
      </QuestionProvider>
    </LanguageProvider>
  );
}
