import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import type { LocaleParms } from "~/app/[locale]/types";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

import { Montserrat, Noto_Sans_Kannada } from "next/font/google";

// Fonts
const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const notoSans = Noto_Sans_Kannada({
  subsets: ["kannada"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: LocaleParms;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const fontClass = locale === "kn" ? notoSans.className : montserrat.className;

  return (
    <div className={`${fontClass} flex min-h-screen flex-col`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
