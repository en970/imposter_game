import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "WordImposter privacy policy. Learn how we handle your data, cookies, and third-party services like Google AdSense.",
  alternates: { canonical: "https://wordimposter.fun/privacy/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
