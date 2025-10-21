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
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">Our History</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            A journey of trust, growth, and community empowerment
          </p>
        </div>

        <div className="mx-auto mb-20 mt-16 max-w-7xl">
          <Card className="animate-fade-in p-8 shadow-lg md:p-12">
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-foreground">
                  Pragathi Co-operative Society Ltd was founded with a simple
                  yet powerful vision: to create a financial institution that
                  truly belongs to the people it serves. Headquartered in
                  Kulshekar, Mangalore, we have been a pillar of support for
                  countless families and small businesses in our community.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-foreground">
                  What started as a small cooperative has grown into a trusted
                  network of seven branches across Mangalore, each one a
                  testament to the faith and support of our members. We have
                  always believed that banking should be personal, accessible,
                  and driven by the needs of the community.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Through the years, we have helped families build their homes,
                  supported entrepreneurs in growing their businesses, and
                  provided a safe haven for savings and investments. Every
                  milestone we achieve is shared with our members, because we
                  are not just a financial institution—we are your neighbors,
                  your partners in progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Leadership History
          </h2>
          <Card className="animate-fade-in mx-auto max-w-7xl shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  PRAGATHI CO-OPERATIVE SOCIETY
                </h3>
                <p className="text-lg text-muted-foreground">
                  L.NO-400, KULSHEKAR, MANGALORE
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="p-4 text-left font-bold text-primary">
                        SL No
                      </th>
                      <th className="p-4 text-left font-bold text-primary">
                        TENURE
                      </th>
                      <th className="p-4 text-left font-bold text-primary">
                        NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">1</td>
                      <td className="p-4">1991 to 17-12-1998</td>
                      <td className="p-4 font-medium">MR. P.M. CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">2</td>
                      <td className="p-4">18-12-1998 to 14-02-1999</td>
                      <td className="p-4 font-medium">MR. KIRAN CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">3</td>
                      <td className="p-4">06-03-1999 to 31-08-2001</td>
                      <td className="p-4 font-medium">MR. P.M. CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">4</td>
                      <td className="p-4">26-09-2001 to 31-08-2003</td>
                      <td className="p-4 font-medium">MR. RONALD CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">5</td>
                      <td className="p-4">01-09-2003 to 01-09-2008</td>
                      <td className="p-4 font-medium">MR. RONALD CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">6</td>
                      <td className="p-4">02-09-2008 to 02-09-2013</td>
                      <td className="p-4 font-medium">MR. RONALD CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">7</td>
                      <td className="p-4">03-09-2013 to 03-09-2018</td>
                      <td className="p-4 font-medium">MR. RONALD CASTELINO</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">8</td>
                      <td className="p-4">04-09-2018 to 27-11-2019</td>
                      <td className="p-4 font-medium">MR. JEEVAN VAS</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">9</td>
                      <td className="p-4">30-12-2019 to 18-08-2023</td>
                      <td className="p-4 font-medium">
                        MR. BENET D&apos;SILVA
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-medium">10</td>
                      <td className="p-4">26-08-2023 to Present</td>
                      <td className="p-4 font-medium">MR. JOSSY SEQUEIRA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Key Milestones
          </h2>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {milestones.map((milestone, index) => (
              <Card
                key={milestone.title}
                className="animate-fade-in transition-shadow hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
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

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <Card className="animate-fade-in border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 transition-shadow hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Our Vision
              </h3>
              <p className="leading-relaxed text-foreground">
                To be the most trusted and accessible cooperative society in the
                region, empowering every member of our community to achieve
                financial security and prosperity.
              </p>
            </CardContent>
          </Card>

          <Card
            className="animate-fade-in border-2 border-accent/20 bg-linear-to-br from-accent/5 to-accent/10 transition-shadow hover:shadow-lg"
            style={{ animationDelay: "100ms" }}
          >
            <CardContent className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Our Mission
              </h3>
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
