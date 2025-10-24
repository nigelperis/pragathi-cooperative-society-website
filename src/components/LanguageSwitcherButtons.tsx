"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "~/i18n/routing";

interface LanguageSwitcherButtonsProps {
  className?: string;
}

const languageNames = {
  en: "EN",
  kn: "ಕನ್ನಡ",
} as const;

export default function LanguageSwitcherButtons({ className = "" }: LanguageSwitcherButtonsProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    
    // Navigate to the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLanguageChange(loc)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === loc
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
          aria-label={`Switch to ${languageNames[loc as keyof typeof languageNames]}`}
        >
          {languageNames[loc as keyof typeof languageNames]}
        </button>
      ))}
    </div>
  );
}