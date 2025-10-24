"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "~/i18n/routing";

interface LanguageSwitcherProps {
    className?: string;
}

const languageNames = {
    en: "English",
    kn: "ಕನ್ನಡ",
} as const;

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        // Remove the current locale from the pathname
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

        // Navigate to the new locale
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        router.push(newPath);
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-label="Select language"
            >
                {routing.locales.map((loc) => (
                    <option key={loc} value={loc}>
                        {languageNames[loc as keyof typeof languageNames]}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>
    );
}