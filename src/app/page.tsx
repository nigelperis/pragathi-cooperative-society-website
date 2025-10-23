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

const HomePage = () => {
  const t = useTranslations("HomePage");

  const services = [
    {
      icon: PiggyBank,
      title: "Pragathi Share Certificates",
      description:
        "Invest smartly with us and enjoy dividends of up to 18%! Each share is valued at just ₹100, making it an accessible and rewarding opportunity. With safe investments and transparent terms, your trust and growth are always our priority.",
      link: "/facilities",
    },
    {
      icon: CreditCard,
      title: "Loan Services",
      description:
        "Property, vehicle, and gold loans with transparent terms and competitive rates.",
      link: "/loans",
    },
    {
      icon: Vault,
      title: "Special Schemes",
      description:
        "Pigmy deposits and recurring schemes designed for your convenience.",
      link: "/facilities",
    },
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "Happy Members" },
    { icon: Building2, value: "7", label: "Branches" },
    { icon: Heart, value: "35", label: "Years of Service" },
    { icon: TrendingUp, value: "100%", label: "Trust & Growth" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative flex h-[600px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pragathi-hero.jpg')" }}
        >
          {/* <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary/70" /> */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/75 via-primary/70 to-primary/65" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-2xl animate-fade-in text-primary-foreground">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-7xl">
              {t("title")}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-primary-foreground/90">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/history">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 cursor-pointer"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary">
              Our Facilities and Schemes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive financial solutions designed with your needs in mind
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
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Join Our Growing Family</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-foreground/90">
            Experience the warmth of community banking. Let us help you achieve
            your financial goals.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 cursor-pointer"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
