import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import branchPhoto from "@/assets/branch-photo.jpg";

const BranchesPage = () => {
  const branches = [
    {
      name: "Kulshekar (Head Office)",
      address: "Kulshekar, Mangalore - 575016",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
      isHeadOffice: true,
    },
    {
      name: "Shaktinagar Branch",
      address: "Shaktinagar, Mangalore",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      name: "Neermarga Branch",
      address: "Neermarga, Mangalore",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      name: "Vamanjoor Branch",
      address: "Vamanjoor, Mangalore",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      name: "Padil Branch",
      address: "Padil, Mangalore",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      name: "Kaikamba Branch",
      address: "Kaikamba, Mangalore",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
    {
      name: "Gurpur Branch",
      address: "Gurpur, Mangalore",
      phone: "+91 824 XXXXXXX",
      timings: "Mon-Sat: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">Our Branches</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Find us at seven convenient locations across Mangalore, always ready
            to serve you
          </p>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-7xl animate-fade-in">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={branchPhoto}
              alt="Pragathi branch exterior"
              className="h-[400px] w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <Card
              key={branch.name}
              className={`group animate-fade-in transition-all duration-300 hover:shadow-lg ${
                branch.isHeadOffice
                  ? "border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10"
                  : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {branch.isHeadOffice ? (
                  <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Head Office
                  </div>
                ) : null}

                <h3 className="mb-4 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                  {branch.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{branch.address}</p>
                  </div>

                    <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{branch.phone}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm text-foreground">{branch.timings}</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-border pt-4">
                  <button className="text-sm font-medium text-primary transition-colors hover:text-accent cursor-pointer">
                    View on Map &rarr;
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Visit Us Today
              </h2>
              <p className="leading-relaxed text-foreground">
                Our friendly staff at each branch is ready to assist you with all
                your banking needs. Drop by during working hours or call ahead to
                schedule an appointment with our financial advisors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
