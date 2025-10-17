// pages/_app.tsx
import { LanguageProvider } from '@/lib/context/LanguageContext';
import type { AppProps } from 'next/app';
import '../styles/bmc.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
