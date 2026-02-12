import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Have questions, feedback, or suggestions about WordImposter? Contact our team. We typically respond within 24 hours.",
  alternates: { canonical: "https://wordimposter.fun/contact/" },
  openGraph: {
    title: "Contact WordImposter Team",
    description: "Get in touch with the WordImposter team for questions, feedback, or support.",
    url: "https://wordimposter.fun/contact/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
