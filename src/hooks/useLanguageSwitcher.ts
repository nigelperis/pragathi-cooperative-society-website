import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "~/i18n/routing";

export function useLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    if (!routing.locales.includes(newLocale as any)) {
      console.warn(`Locale ${newLocale} is not supported`);
      return;
    }

    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    
    // Navigate to the new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    router.refresh();
  };

  const getAvailableLocales = () => routing.locales;
  
  const getCurrentLocale = () => locale;

  return {
    currentLocale: locale,
    availableLocales: routing.locales,
    switchLanguage,
    getAvailableLocales,
    getCurrentLocale,
  };
}