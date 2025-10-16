import { Home, Car, Gem, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Loans = () => {
  const loans = [
    {
      icon: Home,
      title: 'Property Loans',
      description: 'Make your dream home a reality with our flexible property loans. Transparent terms, competitive rates.',
      features: [
        'Competitive interest rates',
        'Flexible repayment tenure',
        'Quick approval process',
        'Minimal documentation',
        'Construction and purchase',
      ],
      color: 'from-primary/20 to-primary/10',
    },
    {
      icon: Car,
      title: 'Vehicle Loans',
      description: 'Drive your dream vehicle today. We offer loans for two-wheelers, cars, and commercial vehicles.',
      features: [
        'Up to 90% financing',
        'Fast processing',
        'Flexible EMI options',
        'New and used vehicles',
        'Hassle-free documentation',
      ],
      color: 'from-accent/20 to-accent/10',
    },
    {
      icon: Gem,
      title: 'Gold (Jewel) Loans',
      description: 'Unlock the value of your gold jewelry. Quick, secure, and transparent gold loans for emergencies.',
      features: [
        'Instant approval',
        'Competitive gold valuation',
        'Flexible repayment',
        'Safe custody of gold',
        'Minimal paperwork',
      ],
      color: 'from-primary/20 to-accent/20',
    },
  ];

  const benefits = [
    'Simple and transparent loan process',
    'Competitive interest rates',
    'Flexible repayment options',
    'Quick disbursement',
    'Personalized service',
    'No hidden charges',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">Loan Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering your dreams with trusted, transparent, and flexible loan solutions
          </p>
        </div>

        {/* Loans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {loans.map((loan, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${loan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <loan.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {loan.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {loan.description}
                </p>

                <div className="space-y-3 mb-6">
                  {loan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Our Loans?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Message */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Built on Trust, Driven by Transparency</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Every loan we offer comes with clear terms, honest communication, and the commitment to help you succeed. 
                We're not just a lender—we're your financial partner in the community.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Loans;
