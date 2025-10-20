import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone } from "lucide-react";

const DirectorsPage = () => {
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
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">
            Board of Directors
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Meet the dedicated leaders guiding our cooperative towards
            excellence and community service
          </p>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-7xl">
          <Card className="animate-fade-in border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
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

        <div
          className={`grid gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-${
            directors.length === 3 ? 3 : 4
          }`}
        >
          {directors.map((director, index) => (
            <Card
              key={director.name}
              className="group animate-fade-in max-w-80 mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Large Portrait Photo with Fixed 60:80 Aspect Ratio */}
                <div className="relative h-90 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6 text-center flex-1 flex flex-col">
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-primary leading-tight">
                      {director.name}
                    </h3>
                    <div className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      {director.position}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground self-center mt-auto">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">
                      Phone: {director.mobile}
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
