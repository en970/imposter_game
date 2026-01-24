import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kelime Avı - Imposter Oyunu",
  description: "Arkadaşlarınla oyna, Imposter'ı bul! Tarayıcı tabanlı grup oyunu.",
  keywords: ["kelime avı", "imposter", "oyun", "grup oyunu", "party game"],
  authors: [{ name: "Kelime Avı" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${outfit.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
