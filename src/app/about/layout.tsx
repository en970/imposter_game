import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WordImposter - The Online Spy Word Game",
  description: "WordImposter is a free online multiplayer social deduction word game. Learn about our mission, features, technology, and the team behind the game.",
  alternates: { canonical: "https://wordimposter.fun/about/" },
  openGraph: {
    title: "About WordImposter - Free Online Spy Word Game",
    description: "Learn about the team and technology behind WordImposter.",
    url: "https://wordimposter.fun/about/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
