import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import branchPhoto from "~/assets/branch-photo.jpg";

export default async function Branches() {
  const t = await getTranslations("Branches");
  const branches = t.raw("list") as {
    name: string;
    address: string;
    phone: string;
  }[];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">{t("title")}</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-7xl animate-fade-in">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={branchPhoto}
              alt="Pragathi branch exterior"
              className="h-[400px] w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <Card
              key={branch.name}
              className={`group animate-fade-in transition-all duration-300 hover:shadow-lg ${
                index === 0
                  ? "border-2 border-accent bg-linear-to-br from-accent/5 to-accent/10"
                  : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {index === 0 && (
                  <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {t("headOffice")}
                  </div>
                )}

                <h3 className="mb-4 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                  {branch.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{branch.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{branch.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
