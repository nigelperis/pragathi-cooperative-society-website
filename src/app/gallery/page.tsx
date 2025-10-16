import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import branchPhoto from "@/assets/branch-photo.jpg";
import heroImage from "@/assets/hero-community.jpg";

const GalleryPage = () => {
  const galleryItems = [
    { id: 1, title: "Community Gathering", image: heroImage },
    { id: 2, title: "Branch Opening", image: branchPhoto },
    { id: 3, title: "Member Service", image: heroImage },
    { id: 4, title: "Staff Team", image: branchPhoto },
    { id: 5, title: "Annual Meeting", image: heroImage },
    { id: 6, title: "Community Event", image: branchPhoto },
    { id: 7, title: "Financial Workshop", image: heroImage },
    { id: 8, title: "Branch Interior", image: branchPhoto },
    { id: 9, title: "Customer Service", image: heroImage },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in text-center">
          <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Camera className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-primary">Photo Gallery</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Capturing moments of service, growth, and community connection
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Our Story in Pictures
              </h2>
              <p className="leading-relaxed text-foreground">
                These photos tell the story of Pragathi Co-operative Society—of
                dedication, trust, and community spirit. Each image represents the
                relationships we have built and the lives we have touched. We are
                proud to share these moments with you, our extended family.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
