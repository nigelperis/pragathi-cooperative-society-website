import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const DirectorsPage = () => {
  const directors = [
    {
      name: "MR. ROBERT LANCY PAIS",
      position: "Vice President",
      mobile: "9845184284",
      image: "/Board of Directors/IMG_2208.JPG",
    },
    {
      name: "MR. ROMANS BASIL LOBO",
      position: "Director",
      mobile: "9448300593",
      image: "/Board of Directors/IMG_2206.JPG",
    },
    {
      name: "MR. JOCKIEM STANY ALVARES",
      position: "Director",
      mobile: "9845044983",
      image: "/Board of Directors/IMG_2207.jpg",
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
            Meet the dedicated leaders guiding our cooperative towards
            excellence and community service
          </p>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-4xl">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {directors.map((director, index) => (
            <Card
              key={director.name}
              className="group animate-fade-in transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-105">
                  <Image
                    src={director.image}
                    alt={director.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-primary">
                  {director.name}
                </h3>
                <div className="mb-4 font-semibold text-accent">
                  {director.position}
                </div>
                <div className="text-muted-foreground">
                  Mobile: {director.mobile}
                </div>
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
                    Putting our members&apos; needs at the heart of every
                    decision
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
