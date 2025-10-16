import { Calendar, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HistoryPage = () => {
  const milestones = [
    {
      year: "2013",
      title: "First Branch Opening",
      description:
        "Expanded our reach by opening the Neermarga branch, bringing our services closer to more families.",
    },
    {
      year: "Earlier",
      title: "Foundation",
      description:
        "Pragathi Co-operative Society was established in Kulshekar with a vision to serve the local community.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">Our History</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            A journey of trust, growth, and community empowerment
          </p>
        </div>

        <div className="mx-auto mb-20 mt-16 max-w-4xl">
          <Card className="animate-fade-in p-8 shadow-lg md:p-12">
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-foreground">
                  Pragathi Co-operative Society Ltd was founded with a simple yet
                  powerful vision: to create a financial institution that truly
                  belongs to the people it serves. Headquartered in Kulshekar,
                  Mangalore, we have been a pillar of support for countless families
                  and small businesses in our community.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-foreground">
                  What started as a small cooperative has grown into a trusted
                  network of seven branches across Mangalore, each one a testament
                  to the faith and support of our members. We have always believed
                  that banking should be personal, accessible, and driven by the
                  needs of the community.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Through the years, we have helped families build their homes,
                  supported entrepreneurs in growing their businesses, and provided
                  a safe haven for savings and investments. Every milestone we
                  achieve is shared with our members, because we are not just a
                  financial institution—we are your neighbors, your partners in
                  progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Key Milestones
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {milestones.map((milestone, index) => (
              <Card
                key={milestone.title}
                className="animate-fade-in transition-shadow hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="mb-2 text-2xl font-bold text-accent">
                        {milestone.year}
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-primary">
                        {milestone.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card className="animate-fade-in border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 transition-shadow hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Vision</h3>
              <p className="leading-relaxed text-foreground">
                To be the most trusted and accessible cooperative society in the
                region, empowering every member of our community to achieve
                financial security and prosperity.
              </p>
            </CardContent>
          </Card>

          <Card
            className="animate-fade-in border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 transition-shadow hover:shadow-lg"
            style={{ animationDelay: "100ms" }}
          >
            <CardContent className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Mission</h3>
              <p className="leading-relaxed text-foreground">
                To provide transparent, reliable, and compassionate financial
                services that strengthen families, support local businesses, and
                foster community development through mutual cooperation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
