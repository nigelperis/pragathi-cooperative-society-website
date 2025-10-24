import {
  Wallet,
  FileText,
  PiggyBank,
  Receipt,
  TrendingUp,
  Coins,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

const FacilitiesPage = () => {
  const facilities = [
    {
      icon: Wallet,
      title: "Savings Bank Account",
      description:
        "Secure and convenient savings account with competitive interest rates. Build your future with us.",
      features: [
        "Easy account opening",
        "Passbook facility",
        "Nomination facility",
        "Competitive interest rates",
      ],
    },
    {
      icon: Receipt,
      title: "Current Account",
      description:
        "Ideal for businesses and frequent transactions. Manage your finances with flexibility.",
      features: [
        "Unlimited transactions",
        "Cheque book facility",
        "Online statements",
        "Business-friendly",
      ],
    },
    {
      icon: TrendingUp,
      title: "Fixed Deposits",
      description:
        "Guaranteed returns with flexible tenure options. Let your money grow safely.",
      features: [
        "Attractive interest rates",
        "Flexible tenure",
        "Premature withdrawal",
        "Loan against deposit",
      ],
    },
    {
      icon: FileText,
      title: "Recurring Deposits",
      description:
        "Cultivate a saving habit with monthly deposits. Small amounts, big returns.",
      features: [
        "Monthly deposit scheme",
        "Disciplined saving",
        "Good returns",
        "Easy to start",
      ],
    },
    {
      icon: Coins,
      title: "Certificates of Deposit",
      description:
        "Time-bound certificates with assured returns for your financial planning.",
      features: [
        "Fixed maturity period",
        "Assured returns",
        "Safe investment",
        "Transparent terms",
      ],
    },
    {
      icon: PiggyBank,
      title: "Pigmy Deposit Scheme",
      description:
        "Daily collection scheme perfect for small savers. Save a little every day.",
      features: [
        "Daily collection service",
        "Doorstep service",
        "Convenient for all",
        "Habit building",
      ],
    },
  ];

  const benefits = [
    {
      title: "Transparent Terms",
      description:
        "No hidden charges or complicated clauses. Everything is clear and straightforward.",
    },
    {
      title: "Competitive Rates",
      description:
        "Attractive interest rates that help your savings grow faster.",
    },
    {
      title: "Personalized Service",
      description:
        "Our staff knows you by name and understands your financial goals.",
    },
    {
      title: "Local & Trusted",
      description:
        "A cooperative that truly belongs to and serves the community.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">
            Our Facilities &amp; Schemes
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Comprehensive banking solutions designed to help you save, grow, and
            secure your financial future
          </p>
        </div>

        <div className="mb-16 mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <Card
              key={facility.title}
              className="group animate-fade-in transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-110">
                  <facility.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-primary transition-colors group-hover:text-accent">
                  {facility.title}
                </h3>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  {facility.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-7xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-8 text-center text-3xl font-bold text-primary">
                Why Choose Our Schemes?
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-primary">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
