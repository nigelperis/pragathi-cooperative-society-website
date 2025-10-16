import { Calendar, Award, Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const History = () => {
  const milestones = [
    {
      year: '2013',
      title: 'First Branch Opening',
      description: 'Expanded our reach by opening the Neermarga branch, bringing our services closer to more families.',
    },
    {
      year: 'Earlier',
      title: 'Foundation',
      description: 'Pragathi Co-operative Society was established in Kulshekar with a vision to serve the local community.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">Our History</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of trust, growth, and community empowerment
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-12 shadow-lg animate-fade-in">
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Pragathi Co-operative Society Ltd was founded with a simple yet powerful vision: to create a financial institution that truly belongs to the people it serves. Headquartered in Kulshekar, Mangalore, we have been a pillar of support for countless families and small businesses in our community.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  What started as a small cooperative has grown into a trusted network of seven branches across Mangalore, each one a testament to the faith and support of our members. We have always believed that banking should be personal, accessible, and driven by the needs of the community.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Through the years, we have helped families build their homes, supported entrepreneurs in growing their businesses, and provided a safe haven for savings and investments. Every milestone we achieve is shared with our members, because we are not just a financial institution—we are your neighbors, your partners in progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Key Milestones</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 hover:shadow-lg transition-shadow animate-fade-in">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be the most trusted and accessible cooperative society in the region, empowering every member of our community to achieve financial security and prosperity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To provide transparent, reliable, and compassionate financial services that strengthen families, support local businesses, and foster community development through mutual cooperation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;
