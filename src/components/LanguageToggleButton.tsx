"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Montserrat, Noto_Sans_Kannada } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const notoSansKannada = Noto_Sans_Kannada({ subsets: ["kannada"], display: "swap" });

interface LanguageToggleButtonProps {
    className?: string;
}

export default function LanguageToggleButton({ className = "" }: LanguageToggleButtonProps) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Navbar.languageSwitcher");

    const handleLanguageToggle = () => {
        // Toggle between English and Kannada
        const newLocale = locale === "en" ? "kn" : "en";

        // Remove the current locale from the pathname
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

        // Navigate to the new locale
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        router.push(newPath);
        router.refresh();
    };

    // Get the target language name (the one we're switching TO)
    const targetLanguage = locale === "en" ? t("kannada") : t("english");

    // Apply appropriate font class based on the target language
    const fontClass = locale === "en" ? `${notoSansKannada.className} mt-1` : montserrat.className;

    return (
        <button
            onClick={handleLanguageToggle}
            className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium text-accent-foreground bg-transparent border border-accent-foreground/30 rounded-md hover:bg-white/20 transition-colors cursor-pointer ${className}`}
            aria-label={`Switch to ${targetLanguage}`}
        >
            <Globe className="w-4 h-4" />
            <span className={fontClass}>{targetLanguage}</span>
        </button>
    );
}