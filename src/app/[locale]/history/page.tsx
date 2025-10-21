import { getTranslations } from 'next-intl/server';
import { Calendar, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HistoryPage = async () => {
  const t = await getTranslations();

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
        <div className="mb-16 md:mb-20">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:mb-12 md:text-3xl">
            {t('navigation.history')}
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
      </div>
    </div>
  );
};

export default HistoryPage;