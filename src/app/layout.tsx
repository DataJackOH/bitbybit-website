import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "bit by bit — Personalized Calisthenics Training",
    template: "%s | bit by bit",
  },
  description:
    "Master calisthenics with personalized workout plans that adapt to your progress. Pull-ups, push-ups, squats, and more — no trainer needed.",
  keywords: [
    "calisthenics",
    "bodyweight training",
    "workout app",
    "pull-ups",
    "push-ups",
    "personalized training",
    "fitness app",
    "bodyweight exercises",
    "calisthenics app",
    "workout tracker",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitbybit.fit",
    siteName: "bit by bit",
    title: "bit by bit — Personalized Calisthenics Training",
    description:
      "Master calisthenics with personalized workout plans that adapt to your progress. No trainer needed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "bit by bit — Personalized Calisthenics Training",
    description:
      "Master calisthenics with personalized workout plans that adapt to your progress.",
  },
  metadataBase: new URL("https://bitbybit.fit"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
