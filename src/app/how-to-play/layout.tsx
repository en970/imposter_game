import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Play WordSpy - Rules & Game Guide",
  description: "Learn how to play WordSpy in 2 minutes. Simple rules: get a secret word, give one-word clues, find the spy. Step-by-step guide with examples for 3-10 players.",
  alternates: { canonical: "https://wordimposter.fun/how-to-play/" },
  openGraph: {
    title: "How to Play WordSpy - Rules & Game Guide",
    description: "Learn the rules of WordSpy in 2 minutes. Give clues, find the spy, win!",
    url: "https://wordimposter.fun/how-to-play/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
