import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DirectorsPage = () => {
  const directors = [
    {
      name: "Shri Rajesh Kumar",
      position: "President",
      message:
        "Leading with dedication to serve our community and uphold the cooperative spirit that defines us.",
    },
    {
      name: "Smt. Lakshmi Bai",
      position: "Vice President",
      message:
        "Committed to ensuring transparent and member-focused financial services for all.",
    },
    {
      name: "Shri Mohan Das",
      position: "Secretary",
      message:
        "Working tirelessly to maintain the highest standards of governance and service.",
    },
    {
      name: "Shri Suresh Nayak",
      position: "Treasurer",
      message:
        "Safeguarding the financial integrity and growth of our cooperative society.",
    },
    {
      name: "Smt. Prema Shetty",
      position: "Director",
      message:
        "Dedicated to empowering women and promoting financial inclusion.",
    },
    {
      name: "Shri Vinod Rao",
      position: "Director",
      message:
        "Bringing business acumen and community focus to our board.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in text-center">
          <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-primary">
            Board of Directors
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Meet the dedicated leaders guiding our cooperative towards excellence
            and community service
          </p>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-4xl">
          <Card className="animate-fade-in border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                A Message from Our Leadership
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                At Pragathi Co-operative Society, we believe that true success is
                measured not in numbers alone, but in the lives we touch and the
                dreams we help fulfill. Our board is committed to upholding the
                highest standards of transparency, integrity, and service.
                Together, we work to ensure that every member of our community has
                access to fair, reliable, and compassionate financial support.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {directors.map((director, index) => (
            <Card
              key={director.name}
              className="group animate-fade-in transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-105">
                  <Users className="h-16 w-16 text-primary/60" />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-primary">
                  {director.name}
                </h3>
                <div className="mb-4 font-semibold text-accent">
                  {director.position}
                </div>
                <p className="italic leading-relaxed text-muted-foreground">
                  &quot;{director.message}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">
                Our Guiding Principles
              </h2>
              <div className="grid gap-8 text-left md:grid-cols-3">
                <div>
                  <div className="mb-2 text-xl font-semibold text-primary">
                    Transparency
                  </div>
                  <p className="text-muted-foreground">
                    Open and honest communication with all stakeholders
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-xl font-semibold text-primary">
                    Integrity
                  </div>
                  <p className="text-muted-foreground">
                    Upholding the highest ethical standards in all we do
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-xl font-semibold text-primary">
                    Service
                  </div>
                  <p className="text-muted-foreground">
                    Putting our members&apos; needs at the heart of every decision
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

export default DirectorsPage;
