"use client";

import { Card, CardContent } from "~/components/ui/card";
import { useLocale, useTranslations } from "next-intl";
import { historyRowsEn, historyRowsKn } from "~/constants/history";

export default function HistoryPage() {
  const t = useTranslations("HistoryPage");
  const locale = useLocale();
  const rows = locale === "kn" ? historyRowsKn : historyRowsEn;

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 md:mb-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:mb-12 md:text-3xl">
            {t("title")}
          </h2>
          <Card className="animate-fade-in mx-auto max-w-7xl shadow-lg">
            <CardContent className="p-4 md:p-8">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                  {t("societyName")}
                </h3>
                <p className="text-base text-muted-foreground md:text-lg">
                  {t("societyAddress")}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="p-2 text-left font-bold text-primary md:p-4">
                        {t("table.slNo")}
                      </th>
                      <th className="p-2 text-left font-bold text-primary md:p-4">
                        {t("table.tenure")}
                      </th>
                      <th className="p-2 text-left font-bold text-primary md:p-4">
                        {t("table.name")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr
                        key={row.sl}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="p-2 font-medium md:p-4">{row.sl}</td>
                        <td className="p-2 md:p-4">{row.tenure}</td>
                        <td className="p-2 font-medium md:p-4">{row.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
