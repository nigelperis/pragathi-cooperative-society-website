import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import { BASE_URL } from "@/constants/config";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragathi Co-operative Society",
  description: "Your trusted co-operative partner.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Pragathi Co-operative Society",
    description: "Your trusted co-operative partner.",
    url: BASE_URL,
    siteName: "Pragathi Co-operative Society",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${BASE_URL}/pragathi-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Pragathi Co-operative Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragathi Co-operative Society",
    description: "Your trusted co-operative partner.",
    images: [`${BASE_URL}/pragathi-hero.jpg`],
  },
  keywords: [
    "Pragathi Co-operative Society",
    "Co-operative Society Mangalore",
    "Community Empowerment",
    "Sustainable Societies",
    "Co-operative Banking",
    "Mangalore",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body className={montserrat.className}>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
