import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "WORDSPY - Who is the Imposter?",
  description: "Play WORDSPY with friends. Can you find the spy among you? Create a room and start playing the ultimate word imposter game!",
  keywords: ["WORDSPY", "imposter", "word game", "spy game", "party game online", "find the spy", "who is the spy"],
  authors: [{ name: "WORDSPY" }],
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
      <body className={`${outfit.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
