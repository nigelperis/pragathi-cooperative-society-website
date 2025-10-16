import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import branchPhoto from '@/assets/branch-photo.jpg';

const Branches = () => {
  const branches = [
    {
      name: 'Kulshekar (Head Office)',
      address: 'Kulshekar, Mangalore - 575016',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
      isHeadOffice: true,
    },
    {
      name: 'Shaktinagar Branch',
      address: 'Shaktinagar, Mangalore',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Neermarga Branch',
      address: 'Neermarga, Mangalore',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Vamanjoor Branch',
      address: 'Vamanjoor, Mangalore',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Padil Branch',
      address: 'Padil, Mangalore',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Kaikamba Branch',
      address: 'Kaikamba, Mangalore',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
    {
      name: 'Gurpur Branch',
      address: 'Gurpur, Mangalore',
      phone: '+91 824 XXXXXXX',
      timings: 'Mon-Sat: 9:00 AM - 5:00 PM',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Branches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find us at seven convenient locations across Mangalore, always ready to serve you
          </p>
        </div>

        {/* Branch Image */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={branchPhoto} 
              alt="Pragathi Branch" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 animate-fade-in ${
                branch.isHeadOffice ? 'border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {branch.isHeadOffice && (
                  <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                    Head Office
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {branch.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{branch.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-foreground text-sm">{branch.phone}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-foreground text-sm">{branch.timings}</p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="text-sm text-primary hover:text-accent transition-colors font-medium">
                    View on Map →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Visit Us Today</h2>
              <p className="text-foreground leading-relaxed">
                Our friendly staff at each branch is ready to assist you with all your banking needs. 
                Drop by during working hours or call ahead to schedule an appointment with our financial advisors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Branches;
