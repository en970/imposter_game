import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "KelimeCasusu / WordImposter - Find the Spy",
  description: "KelimeCasusu (TR) ve WordImposter (EN) ile arkadaşlarınızla eğlenin. İçinizdeki casusu bulun! Create a room and start playing the ultimate word imposter game!",
  keywords: ["KelimeCasusu", "WordImposter", "imposter", "word game", "spy game", "party game online", "find the spy", "who is the spy", "kelime oyunu", "casus bulmaca"],
  authors: [{ name: "KelimeCasusu" }],
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
        {/* Google AdSense Meta Etiketi - Site Doğrulama */}
        <meta name="google-adsense-account" content="ca-pub-8793006985867588" />

        {/* Google AdSense Script - Normal script tag kullanıyoruz */}
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
