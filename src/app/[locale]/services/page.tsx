import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesPage() {
  const t = useTranslations("Services");

  return (
    <div className="min-h-screen py-14">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in text-center">
            <h1 className="mb-4 text-5xl font-bold text-primary">
              {t("title")}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden inline-block">
              <div className="relative">
                <Image
                  src="/services/services.jpeg"
                  alt="Pragathi Co-operative Society Services"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain md:max-h-[600px] block"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
