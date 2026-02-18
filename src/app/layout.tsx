import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WordSpy - Free Online Spy Word Game | Play Now",
    template: "%s | WordSpy",
  },
  description: "Play WordSpy free with 3-10 friends! The #1 online spy word game. Give one-word clues, find the imposter, and win. No download, no signup. Play instantly on any device.",
  keywords: ["word game online", "spy game online free", "imposter game", "who is the spy", "party game online", "social deduction game", "multiplayer word game", "find the imposter", "word guessing game", "play with friends online", "free online games", "among us word game", "KelimeCasusu", "WordSpy"],
  authors: [{ name: "WordSpy" }],
  creator: "WordSpy",
  publisher: "WordSpy",
  alternates: {
    canonical: "https://wordimposter.fun",
  },
  openGraph: {
    title: "WordSpy - Free Online Spy Word Game | Play with Friends",
    description: "The #1 free online spy word game! Give clues, find the imposter, win. No download needed. Play instantly with 3-10 friends.",
    url: "https://wordimposter.fun",
    siteName: "WordSpy",
    locale: "en_US",
    alternateLocale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://wordimposter.fun/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordSpy - Free Online Spy Word Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordSpy - Free Online Spy Word Game",
    description: "Give clues, find the imposter, win! Free multiplayer word game. No download needed.",
    images: ["https://wordimposter.fun/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "WordSpy",
  "alternateName": "KelimeCasusu",
  "url": "https://wordimposter.fun",
  "description": "Free online multiplayer spy word game. Give one-word clues, find the imposter among your friends. No download, no signup required.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "WordSpy"
  },
  "inLanguage": ["en", "tr"],
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "genre": "Social Deduction Game",
  "numberOfPlayers": {
    "@type": "QuantitativeValue",
    "minValue": 3,
    "maxValue": 10
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1200",
    "bestRating": "5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fundingchoicesmessages.google.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <meta name="google-adsense-account" content="ca-pub-8793006985867588" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8793006985867588"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${archivo.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
