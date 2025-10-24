import type { Metadata } from "next";
import { BASE_URL } from "~/constants/config";
import GoogleAnalyticsScript from "~/components/GoogleAnalyticsScript";
import MicrosoftClarity from "~/components/MicrosoftClarity";

import "./globals.css";

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
        url: `${BASE_URL}/pragathi-hero.webp`,
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
    images: [`${BASE_URL}/pragathi-hero.webp`],
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body>
        {children}
        <GoogleAnalyticsScript />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
