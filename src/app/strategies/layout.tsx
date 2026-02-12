import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordImposter Strategies - Win as Civilian or Imposter",
  description: "Master WordImposter with pro strategies for both civilians and imposters. Beginner to advanced tips, common mistakes to avoid, and tactics to dominate every game.",
  alternates: { canonical: "https://wordimposter.fun/strategies/" },
  openGraph: {
    title: "WordImposter Strategies - Pro Tips to Win Every Game",
    description: "Master strategies for civilians and imposters. Win more games with these proven tips.",
    url: "https://wordimposter.fun/strategies/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
