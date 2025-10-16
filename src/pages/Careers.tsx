import { Briefcase, Heart, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Make a real difference in your community by helping families and businesses thrive.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement in a supportive environment.',
    },
    {
      icon: Users,
      title: 'Great Team Culture',
      description: 'Work with dedicated professionals who share your values and commitment to service.',
    },
  ];

  const openPositions = [
    {
      title: 'Branch Manager',
      location: 'Vamanjoor Branch',
      type: 'Full-time',
      description: 'Lead branch operations and provide exceptional service to our members.',
    },
    {
      title: 'Customer Service Officer',
      location: 'Multiple Branches',
      type: 'Full-time',
      description: 'Be the friendly face of our cooperative, assisting members with their banking needs.',
    },
    {
      title: 'Accounts Assistant',
      location: 'Head Office, Kulshekar',
      type: 'Full-time',
      description: 'Support financial operations and maintain accurate records.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build a meaningful career while making a positive impact in your community
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Join Pragathi?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">{position.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-3">
                            <span className="text-sm text-muted-foreground">{position.location}</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-accent font-medium">{position.type}</span>
                          </div>
                          <p className="text-muted-foreground">{position.description}</p>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Don't See the Right Fit?</h2>
              <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
                We're always looking for talented individuals who share our values. Send us your resume, 
                and we'll keep you in mind for future opportunities.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Send Your Resume
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">What We Value</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Integrity</h4>
                  <p className="text-muted-foreground text-sm">Honest and ethical conduct in all we do</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Service</h4>
                  <p className="text-muted-foreground text-sm">Putting our members' needs first, always</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Teamwork</h4>
                  <p className="text-muted-foreground text-sm">Collaborating to achieve our shared goals</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                  <p className="text-muted-foreground text-sm">Striving for the highest standards in everything</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers;
