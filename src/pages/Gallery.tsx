import { Card } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import branchPhoto from '@/assets/branch-photo.jpg';
import heroImage from '@/assets/hero-community.jpg';

const Gallery = () => {
  // Placeholder gallery items - in a real implementation, these would be actual photos
  const galleryItems = [
    { id: 1, title: 'Community Gathering', image: heroImage },
    { id: 2, title: 'Branch Opening', image: branchPhoto },
    { id: 3, title: 'Member Service', image: heroImage },
    { id: 4, title: 'Staff Team', image: branchPhoto },
    { id: 5, title: 'Annual Meeting', image: heroImage },
    { id: 6, title: 'Community Event', image: branchPhoto },
    { id: 7, title: 'Financial Workshop', image: heroImage },
    { id: 8, title: 'Branch Interior', image: branchPhoto },
    { id: 9, title: 'Customer Service', image: heroImage },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Camera className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of service, growth, and community connection
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-primary-foreground font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Message Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Story in Pictures</h2>
              <p className="text-foreground leading-relaxed">
                These photos tell the story of Pragathi Co-operative Society—of dedication, trust, and community spirit. 
                Each image represents the relationships we've built and the lives we've touched. 
                We're proud to share these moments with you, our extended family.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
