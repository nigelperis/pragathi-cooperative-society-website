import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "~/constants/config";
import GoogleAnalyticsScript from "~/components/GoogleAnalyticsScript";
import MicrosoftClarity from "~/components/MicrosoftClarity";

import { NextIntlClientProvider } from "next-intl";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragathi Co-operative Society Ltd.",
  description: "Your trusted co-operative partner.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Pragathi Co-operative Society Ltd.",
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
        alt: "Pragathi Co-operative Society Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragathi Co-operative Society Ltd.",
    description: "Your trusted co-operative partner.",
    images: [`${BASE_URL}/pragathi-hero.jpg`],
  },
  keywords: [
    "Pragathi Co-operative Society Ltd.",
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
  <html lang="en">
    <body className={montserrat.className}>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </body>
    <GoogleAnalyticsScript />
    <MicrosoftClarity />
  </html>
);

export default RootLayout;
