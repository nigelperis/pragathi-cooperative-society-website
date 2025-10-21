import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import {
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareersPage = async () => {
  const t = await getTranslations();

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful Work",
      description:
        "Make a real difference in your community by helping families and businesses thrive.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Continuous learning and career advancement in a supportive environment.",
    },
    {
      icon: Users,
      title: "Great Team Culture",
      description:
        "Work with dedicated professionals who share your values and commitment to service.",
    },
  ];

  const openPositions = [
    {
      title: "Branch Manager",
      location: "Vamanjoor Branch",
      type: "Full-time",
      description:
        "Lead branch operations and provide exceptional service to our members.",
    },
    {
      title: "Customer Service Officer",
      location: "Multiple Branches",
      type: "Full-time",
      description:
        "Be the friendly face of our cooperative, assisting members with their banking needs.",
    },
    {
      title: "Accounts Assistant",
      location: "Head Office, Kulshekar",
      type: "Full-time",
      description:
        "Support financial operations and maintain accurate records.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">Join Our Team</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Build a meaningful career while making a positive impact in your
            community
          </p>
        </div>

        <div className="mb-16 mt-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Why Join Pragathi?
          </h2>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="animate-fade-in transition-shadow hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-16 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Current Openings
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card
                key={position.title}
                className="animate-fade-in transition-all hover:border-primary/30 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-2 text-2xl font-bold text-primary">
                            {position.title}
                          </h3>
                          <div className="mb-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span>{position.location}</span>
                            <span>|</span>
                            <span className="font-medium text-accent">
                              {position.type}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            {position.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="whitespace-nowrap bg-primary hover:bg-primary/90 cursor-pointer">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Don&apos;t See the Right Fit?</h2>
              <p className="mb-6 text-lg leading-relaxed text-primary-foreground/90">
                We are always looking for talented individuals who share our
                values. Send us your resume, and we will keep you in mind for
                future opportunities.
              </p>
              <Link href="/contact">
                <Button className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90 cursor-pointer" size="lg">
                  Send Your Resume
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-primary">
                What We Value
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Integrity</h4>
                  <p className="text-sm text-muted-foreground">
                    Honest and ethical conduct in all we do
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Putting our members&apos; needs first, always
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Teamwork</h4>
                  <p className="text-sm text-muted-foreground">
                    Collaborating to achieve our shared goals
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Striving for the highest standards in everything
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;