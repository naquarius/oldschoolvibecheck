import { AppProvider } from '@/lib/context/AppContext';
import { QuestionProvider } from '@/lib/context/QuestionContext';
import type { AppProps } from 'next/app';
import { Schibsted_Grotesk } from 'next/font/google';
import '../styles/globals.css';

import './index.css';

const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <QuestionProvider>
        <div className={sans.variable}>
          <Component {...pageProps} />
        </div>
      </QuestionProvider>
    </AppProvider>
  );
}
