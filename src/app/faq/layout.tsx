import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Got questions about WordImposter? Find answers about gameplay, room codes, player limits, categories, and troubleshooting. Get help playing the online spy word game.",
  alternates: { canonical: "https://wordimposter.fun/faq/" },
  openGraph: {
    title: "WordImposter FAQ - Your Questions Answered",
    description: "Find answers about gameplay, room codes, player limits, and more.",
    url: "https://wordimposter.fun/faq/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
