import Link from "next/link";
import {
  ArrowRight,
  Users,
  Building2,
  Heart,
  TrendingUp,
  PiggyBank,
  CreditCard,
  Vault,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

function HomePage() {
  const t = useTranslations("HomePage");

  const services = [
    {
      icon: PiggyBank,
      title: t("services.items.shareCertificates.title"),
      description: t("services.items.shareCertificates.description"),
      link: "/facilities",
    },
    {
      icon: CreditCard,
      title: t("services.items.loans.title"),
      description: t("services.items.loans.description"),
      link: "/loans",
    },
    {
      icon: Vault,
      title: t("services.items.schemes.title"),
      description: t("services.items.schemes.description"),
      link: "/facilities",
    },
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: t("stats.happyMembers") },
    { icon: Building2, value: "7", label: t("stats.branches") },
    { icon: Heart, value: "35", label: t("stats.yearsOfService") },
    { icon: TrendingUp, value: "100%", label: t("stats.trustGrowth") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pragathi-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/75 via-primary/70 to-primary/65" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-2xl animate-fade-in text-primary-foreground">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-primary-foreground/90">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl cursor-pointer"
                >
                  {t("hero.getStarted")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/history">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 cursor-pointer"
                >
                  {t("hero.ourStory")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary">
              {t("services.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group animate-fade-in border-2 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button
                      variant="ghost"
                      className="group text-primary hover:bg-secondary/50 hover:text-accent cursor-pointer"
                    >
                      {t("services.learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Family Section */}
      <section className="bg-linear-to-br from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            {t("joinFamily.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-foreground/90">
            {t("joinFamily.subtitle")}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 cursor-pointer"
            >
              {t("joinFamily.contactUs")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
