import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "WordImposter (KelimeCasusu) - Find the Spy Among You!",
  description: "KelimeCasusu (TR) and WordImposter (EN) is the ultimate online multiplayer word party game. Find the spy among you by giving one-word clues! Completely free, no registration required. Play with 3-10 friends online.",
  keywords: ["KelimeCasusu", "WordImposter", "imposter game", "spy game", "party game online", "social deduction game", "word games with friends", "find the spy", "who is the spy", "kelime oyunu", "casus bulmaca", "ev partisi oyunu", "online party games", "multiplayer word game", "free online games"],
  authors: [{ name: "Enes Öz" }],
  creator: "Enes Öz",
  publisher: "WordImposter",
  alternates: {
    canonical: "https://wordimposter.fun",
  },
  openGraph: {
    title: "WordImposter (KelimeCasusu) - Find the Spy Among You!",
    description: "Play the ultimate online multiplayer word party game. Find the spy among you by giving one-word clues! Completely free, no registration required.",
    url: "https://wordimposter.fun",
    siteName: "WordImposter",
    locale: "tr_TR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wordimposter.fun/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordImposter - Online Multiplayer Word Party Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordImposter (KelimeCasusu) - Find the Spy Among You!",
    description: "Play the ultimate online multiplayer word party game. Find the spy among you by giving one-word clues!",
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
  "name": "WordImposter",
  "alternateName": "KelimeCasusu",
  "url": "https://wordimposter.fun",
  "description": "Online multiplayer word party game. Find the spy among you by giving one-word clues! Free, no registration required.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Enes Öz"
  },
  "inLanguage": ["tr", "en"],
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "genre": "Social Deduction Game",
  "numberOfPlayers": {
    "@type": "QuantitativeValue",
    "minValue": 3,
    "maxValue": 10
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-8793006985867588" />

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8793006985867588"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
