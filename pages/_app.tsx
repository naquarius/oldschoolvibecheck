import { LanguageProvider } from '@/lib/context/LanguageContext';
import type { AppProps } from 'next/app';
import { Cormorant_Garamond } from 'next/font/google';
import '../styles/globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={display.variable}>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}
