import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Meta tags */}
        <meta name="description" content="Get instant wisdom from ancient I Ching coins. Modern divination with ethereal vibes - no BS, just cosmic guidance for your spiritual journey." />
        <meta name="keywords" content="I Ching, divination, spiritual guidance, cosmic wisdom, vibe check, modern spirituality" />
        <meta name="author" content="Vibe Check" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vibe Check - Ancient Wisdom, Modern Vibes" />
        <meta property="og:description" content="Get instant wisdom from ancient I Ching coins. No BS, just vibes ✨" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibe Check - Ancient Wisdom, Modern Vibes" />
        <meta name="twitter:description" content="Get instant wisdom from ancient I Ching coins. No BS, just vibes ✨" />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
