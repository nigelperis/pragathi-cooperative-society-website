import { Calendar, Target, Eye } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

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
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        {/* <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary md:text-5xl">
            Our History
          </h1>
          <p className="mx-auto text-lg text-muted-foreground md:max-w-3xl md:text-xl">
            A journey of trust, growth, and community empowerment
          </p>
        </div>

        <div className="mx-auto mb-16 mt-12 max-w-7xl md:mb-20 md:mt-16">
          <Card className="animate-fade-in p-6 shadow-lg md:p-12">
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">
                  Pragathi Co-operative Society Ltd was founded with a simple
                  yet powerful vision: to create a financial institution that
                  truly belongs to the people it serves. Headquartered in
                  Kulshekar, Mangalore, we have been a pillar of support for
                  countless families and small businesses in our community.
                </p>
                <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">
                  What started as a small cooperative has grown into a trusted
                  network of seven branches across Mangalore, each one a
                  testament to the faith and support of our members. We have
                  always believed that banking should be personal, accessible,
                  and driven by the needs of the community.
                </p>
                <p className="text-base leading-relaxed text-foreground md:text-lg">
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
        </div> */}

        <div className="mb-16 md:mb-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:mb-12 md:text-3xl">
            Leadership History
          </h2>
          <Card className="animate-fade-in mx-auto max-w-7xl shadow-lg">
            <CardContent className="p-4 md:p-8">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                  PRAGATHI CO-OPERATIVE SOCIETY
                </h3>
                <p className="text-base text-muted-foreground md:text-lg">
                  L.NO-400, KULSHEKAR, MANGALORE
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="p-2 text-left font-bold text-primary md:p-4">
                        Sl No
                      </th>
                      <th className="p-2 text-left font-bold text-primary md:p-4">
                        TENURE
                      </th>
                      <th className="p-2 text-left font-bold text-primary md:p-4">
                        NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">1</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">1991 to</span>
                        <span className="block md:inline">17-12-1998</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. P.M. CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">2</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">18-12-1998 to</span>
                        <span className="block md:inline">14-02-1999</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. KIRAN CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">3</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">06-03-1999 to</span>
                        <span className="block md:inline">31-08-2001</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. P.M. CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">4</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">26-09-2001 to</span>
                        <span className="block md:inline">31-08-2003</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. RONALD CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">5</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">01-09-2003 to</span>
                        <span className="block md:inline">01-09-2008</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. RONALD CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">6</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">02-09-2008 to</span>
                        <span className="block md:inline">02-09-2013</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. RONALD CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">7</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">03-09-2013 to</span>
                        <span className="block md:inline">03-09-2018</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. RONALD CASTELINO
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">8</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">04-09-2018 to</span>
                        <span className="block md:inline">27-11-2019</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">MR. JEEVAN VAS</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">9</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">30-12-2019 to</span>
                        <span className="block md:inline">18-08-2023</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. BENET D&apos;SILVA
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2 font-medium md:p-4">10</td>
                      <td className="p-2 md:p-4">
                        <span className="block md:inline">26-08-2023 to</span>
                        <span className="block md:inline">Present</span>
                      </td>
                      <td className="p-2 font-medium md:p-4">
                        MR. JOSSY SEQUEIRA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* 
        <div className="mb-16 md:mb-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:mb-12 md:text-3xl">
            Key Milestones
          </h2>
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={milestone.title}
                className="animate-fade-in transition-shadow hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 md:h-12 md:w-12">
                      <Calendar className="h-5 w-5 text-accent md:h-6 md:w-6" />
                    </div>
                    <div>
                      <div className="mb-1 text-xl font-bold text-accent md:mb-2 md:text-2xl">
                        {milestone.year}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-primary md:mb-3 md:text-xl">
                        {milestone.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-8">
          <Card className="animate-fade-in border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 transition-shadow hover:shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 md:mb-6 md:h-16 md:w-16">
                <Eye className="h-6 w-6 text-primary md:h-8 md:w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-foreground md:text-base">
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
            <CardContent className="p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 md:mb-6 md:h-16 md:w-16">
                <Target className="h-6 w-6 text-accent md:h-8 md:w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-foreground md:text-base">
                To provide transparent, reliable, and compassionate financial
                services that strengthen families, support local businesses, and
                foster community development through mutual cooperation.
              </p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default HistoryPage;
