import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { Home, Car, Gem, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoansPage = async () => {
  const t = await getTranslations();

  const loans = [
    {
      icon: Home,
      title: t('loans.homeLoan'),
      description:
        "Make your dream home a reality with our flexible property loans. Transparent terms, competitive rates.",
      features: [
        "Competitive interest rates",
        "Flexible repayment tenure",
        "Quick approval process",
        "Minimal documentation",
        "Construction and purchase",
      ],
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Car,
      title: t('loans.vehicleLoan'),
      description:
        "Drive your dream vehicle today. We offer loans for two-wheelers, cars, and commercial vehicles.",
      features: [
        "Up to 90% financing",
        "Fast processing",
        "Flexible EMI options",
        "New and used vehicles",
        "Hassle-free documentation",
      ],
      color: "from-accent/20 to-accent/10",
    },
    {
      icon: Gem,
      title: "Gold (Jewel) Loans",
      description:
        "Unlock the value of your gold jewelry. Quick, secure, and transparent gold loans for emergencies.",
      features: [
        "Instant approval",
        "Competitive gold valuation",
        "Flexible repayment",
        "Safe custody of gold",
        "Minimal paperwork",
      ],
      color: "from-primary/20 to-accent/20",
    },
  ];

  const benefits = [
    "Simple and transparent loan process",
    "Competitive interest rates",
    "Flexible repayment options",
    "Quick disbursement",
    "Personalized service",
    "No hidden charges",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="mb-4 text-5xl font-bold text-primary">{t('loans.title')}</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            {t('loans.description')}
          </p>
        </div>

        <div className="mb-16 grid gap-8 animate-fade-in lg:grid-cols-3">
          {loans.map((loan, index) => (
            <Card
              key={loan.title}
              className="group transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${loan.color} transition-transform group-hover:scale-110`}
                >
                  <loan.icon className="h-10 w-10 text-primary" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-primary transition-colors group-hover:text-accent">
                  {loan.title}
                </h3>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {loan.description}
                </p>

                <div className="mb-6 space-y-3">
                  {loan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mb-16 max-w-7xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-8 text-center text-3xl font-bold text-primary">
                Why Choose Our Loans?
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold">
                Built on Trust, Driven by Transparency
              </h3>
              <p className="mb-6 leading-relaxed text-primary-foreground/90">
                Every loan we offer comes with clear terms, honest communication,
                and the commitment to help you succeed. We&apos;re not just a
                lender—we&apos;re your financial partner in the community.
              </p>
              <Link href="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer" size="lg">
                  {t('common.contactUs')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoansPage;