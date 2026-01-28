import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "WordImposter (KelimeCasusu) - Find the Spy Among You!",
  description: "KelimeCasusu (TR) and WordImposter (EN) is the ultimate online multiplayer word party game. Find the spy among you by giving one-word clues! Completely free, no registration required.",
  keywords: ["KelimeCasusu", "WordImposter", "imposter game", "spy game", "party game online", "social deduction game", "word games with friends", "find the spy", "who is the spy", "kelime oyunu", "casus bulmaca", "ev partisi oyunu"],
  authors: [{ name: "WordImposter" }],
  alternates: {
    canonical: "https://wordimposter.fun",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
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
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Google AdSense Meta Etiketi - Site Doğrulama */}
        <meta name="google-adsense-account" content="ca-pub-8793006985867588" />

        {/* Google AdSense Script - Script tag for adsbygoogle.js */}
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

