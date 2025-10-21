import { Card, CardContent } from "@/components/ui/card";
import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import { Phone } from "lucide-react";

const DirectorsPage = async () => {
  const t = await getTranslations();
  const directors = [
    {
      name: "MR. JOSSEY SEQUIERA ",
      position: "President",
      mobile: "9343342012",
      image: "/bod/jossey-sequiera.jpg",
    },
    {
      name: "MR. ROBERT LANCY PAIS",
      position: "Vice President",
      mobile: "9845184284",
      image: "/bod/robert-pais.jpg",
    },
    {
      name: "MR. ROMANS BASIL LOBO",
      position: "Director",
      mobile: "9448300593",
      image: "/bod/romans-lobo.jpg",
    },
    {
      name: "MR. JOCKIEM STANY ALVARES",
      position: "Director",
      mobile: "9845044983",
      image: "/bod/jockiem-alvares.jpg",
    },
    {
      name: "MR. NAVEEN NELSON PINTO",
      position: "Director",
      mobile: "9740200777",
      image: "/bod/naveen-pinto.png",
    },
    {
      name: "MR. ROHAN JOHN DSILVA",
      position: "Director",
      mobile: "9900814746",
      image: "/bod/rohan-dsilva.png",
    },
    {
      name: "MR. BENET DSILVA",
      position: "Director",
      mobile: "9845170171",
      image: "/bod/benet-dsilva.jpg",
    },
    {
      name: "MR. FRANCIS PRAVEEN CRASTA",
      position: "CEO",
      mobile: "8197827858",
      image: "/bod/francis-crasta.jpg",
    },
    {
      name: "MRS. ALICE LOBO",
      position: "Director",
      mobile: "9343766086",
      image: "/bod/alice-lobo.jpg",
    },
    {
      name: "MRS. LILLY DSOUZA",
      position: "Director",
      mobile: "9880076962",
      image: "/bod/lilly-dsouza.jpg",
    },
    {
      name: "MR. DONY DCUNHA",
      position: "Director",
      mobile: "9343560592",
      image: "/bod/dony-dcunha.jpg",
    },
    {
      name: "MR. NOEL JOSEPH DSOUZA",
      position: "Director",
      mobile: "9448857337",
      image: "/bod/noel-dsouza.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">
            {t('navigation.boardOfDirectors')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Meet the dedicated leaders guiding our cooperative towards
            excellence and community service
          </p>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-7xl">
          <Card className="animate-fade-in border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                A Message from Our Leadership
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                At Pragathi Co-operative Society, we believe that true success
                is measured not in numbers alone, but in the lives we touch and
                the dreams we help fulfill. Our board is committed to upholding
                the highest standards of transparency, integrity, and service.
                Together, we work to ensure that every member of our community
                has access to fair, reliable, and compassionate financial
                support.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 lg:gap-12">
          {directors.map((director, index) => (
            <Card
              key={director.name}
              className="group animate-fade-in w-full max-w-64 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 flex flex-col">
                {/* Large Portrait Photo with Fixed Aspect Ratio */}
                <div className="relative h-60 md:h-70 w-full bg-white overflow-hidden shrink-0">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover object-top scale-102 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" />
                </div>

                {/* Content Section */}
                <div className="p-2 md:p-4 text-center h-24 md:h-32 flex flex-col justify-between">
                  <div>
                    <h3 className="mb-1 text-sm md:text-base font-bold text-primary leading-tight">
                      {director.name}
                    </h3>
                    <div className="mb-1 md:mb-2 inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      {director.position}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span className="font-medium text-xs">
                      {director.mobile}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
