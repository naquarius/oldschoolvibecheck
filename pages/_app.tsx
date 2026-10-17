import { AppProvider } from '@/lib/context/AppContext';
import { QuestionProvider } from '@/lib/context/QuestionContext';
import type { AppProps } from 'next/app';
import { Noto_Sans_SC, Schibsted_Grotesk } from 'next/font/google';
import '../styles/globals.css';

import './index.css';

const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-sans',
});

// 中文 glyphs: Latin stays in Schibsted, CJK falls through to Noto Sans SC
const cjk = Noto_Sans_SC({
  weight: ['400', '500', '700', '800', '900'],
  preload: false,
  display: 'swap',
  variable: '--font-cjk',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <QuestionProvider>
        <div className={`${sans.variable} ${cjk.variable}`}>
          <Component {...pageProps} />
        </div>
      </QuestionProvider>
    </AppProvider>
  );
}
