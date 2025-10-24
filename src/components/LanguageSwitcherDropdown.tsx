"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "~/i18n/routing";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageSwitcherDropdownProps {
  className?: string;
}

export default function LanguageSwitcherDropdown({ className = "" }: LanguageSwitcherDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navbar.languageSwitcher");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languageNames = {
    en: t("english"),
    kn: t("kannada"),
  } as const;

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    
    // Navigate to the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    router.refresh();
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-accent-foreground bg-transparent border border-accent-foreground/30 rounded-md hover:bg-white/20 transition-colors cursor-pointer"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span>{languageNames[locale as keyof typeof languageNames]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-xl border-t-4 border-t-primary z-50">
          <div className="py-1">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLanguageChange(loc)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  locale === loc
                    ? "bg-primary/5 text-primary font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer"
                }`}
              >
                {languageNames[loc as keyof typeof languageNames]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}