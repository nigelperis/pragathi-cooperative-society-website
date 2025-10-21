import { getRequestConfig } from "next-intl/server";

const locales = ["en", "kn"];

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = (locales as readonly string[]).includes(locale as string)
    ? (locale as string)
    : 'en';

  return {
    locale: finalLocale,
    messages: (await import(`./messages/${finalLocale}.json`)).default,
  };
});
