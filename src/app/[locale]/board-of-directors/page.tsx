"use client";

import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

type Director = {
  name: string;
  position: string;
  mobile: string;
  image: string;
};

const DirectorsPage = () => {
  const t = useTranslations("DirectorsPage");

  const directors: Director[] = t.raw("directors") as Director[];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Page Header */}
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">{t("title")}</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Leadership Message */}
        <div className="mx-auto mb-16 mt-16 max-w-7xl">
          <Card className="animate-fade-in border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                {t("leadershipMessage.title")}
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                {t("leadershipMessage.content")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 lg:gap-12">
          {directors.map((director: any, index: number) => (
            <Card
              key={director.name}
              className="group animate-fade-in w-full max-w-64 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 flex flex-col">
                {/* Portrait */}
                <div className="relative h-50 md:h-70 w-full bg-white overflow-hidden shrink-0">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover object-top scale-102 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" />
                </div>

                {/* Info */}
                <div className="p-4 md:p-4 text-center h-32 md:h-34 flex flex-col justify-between">
                  <div>
                    <h3 className="mb-1 text-sm md:text-base font-bold text-primary leading-tight">
                      {director.name}
                    </h3>
                    <div className="my-3 md:mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
                      {director.position}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span className="font-medium text-xs">
                      {director.mobile}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
