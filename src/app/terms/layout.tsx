import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "WordSpy terms of service. Read our terms and conditions for using the online multiplayer word game.",
  alternates: { canonical: "https://wordimposter.fun/terms/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
