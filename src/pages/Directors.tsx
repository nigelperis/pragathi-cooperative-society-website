import { Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Directors = () => {
  const directors = [
    {
      name: 'Shri Rajesh Kumar',
      position: 'President',
      message: 'Leading with dedication to serve our community and uphold the cooperative spirit that defines us.',
    },
    {
      name: 'Smt. Lakshmi Bai',
      position: 'Vice President',
      message: 'Committed to ensuring transparent and member-focused financial services for all.',
    },
    {
      name: 'Shri Mohan Das',
      position: 'Secretary',
      message: 'Working tirelessly to maintain the highest standards of governance and service.',
    },
    {
      name: 'Shri Suresh Nayak',
      position: 'Treasurer',
      message: 'Safeguarding the financial integrity and growth of our cooperative society.',
    },
    {
      name: 'Smt. Prema Shetty',
      position: 'Director',
      message: 'Dedicated to empowering women and promoting financial inclusion.',
    },
    {
      name: 'Shri Vinod Rao',
      position: 'Director',
      message: 'Bringing business acumen and community focus to our board.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Board of Directors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated leaders guiding our cooperative towards excellence and community service
          </p>
        </div>

        {/* Message from Leadership */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-primary mb-4">A Message from Our Leadership</h2>
              <p className="text-lg leading-relaxed text-foreground">
                At Pragathi Co-operative Society, we believe that true success is measured not in numbers alone, but in the lives we touch and the dreams we help fulfill. Our board is committed to upholding the highest standards of transparency, integrity, and service. Together, we work to ensure that every member of our community has access to fair, reliable, and compassionate financial support.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Directors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="p-8 text-center">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="w-16 h-16 text-primary/60" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">{director.name}</h3>
                <div className="text-accent font-semibold mb-4">{director.position}</div>
                <p className="text-muted-foreground leading-relaxed italic">"{director.message}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Guiding Principles</h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-xl font-semibold text-primary mb-2">Transparency</div>
                  <p className="text-muted-foreground">Open and honest communication with all stakeholders</p>
                </div>
                <div>
                  <div className="text-xl font-semibold text-primary mb-2">Integrity</div>
                  <p className="text-muted-foreground">Upholding the highest ethical standards in all we do</p>
                </div>
                <div>
                  <div className="text-xl font-semibold text-primary mb-2">Service</div>
                  <p className="text-muted-foreground">Putting our members' needs at the heart of every decision</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Directors;
