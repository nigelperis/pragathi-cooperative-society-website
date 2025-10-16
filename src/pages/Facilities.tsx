import { Wallet, FileText, PiggyBank, Receipt, TrendingUp, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Facilities = () => {
  const facilities = [
    {
      icon: Wallet,
      title: 'Savings Bank Account',
      description: 'Secure and convenient savings account with competitive interest rates. Build your future with us.',
      features: ['Easy account opening', 'Passbook facility', 'Nomination facility', 'Competitive interest rates'],
    },
    {
      icon: Receipt,
      title: 'Current Account',
      description: 'Ideal for businesses and frequent transactions. Manage your finances with flexibility.',
      features: ['Unlimited transactions', 'Cheque book facility', 'Online statements', 'Business-friendly'],
    },
    {
      icon: TrendingUp,
      title: 'Fixed Deposits',
      description: 'Guaranteed returns with flexible tenure options. Let your money grow safely.',
      features: ['Attractive interest rates', 'Flexible tenure', 'Premature withdrawal', 'Loan against deposit'],
    },
    {
      icon: FileText,
      title: 'Recurring Deposits',
      description: 'Cultivate a saving habit with monthly deposits. Small amounts, big returns.',
      features: ['Monthly deposit scheme', 'Disciplined saving', 'Good returns', 'Easy to start'],
    },
    {
      icon: Coins,
      title: 'Certificates of Deposit',
      description: 'Time-bound certificates with assured returns for your financial planning.',
      features: ['Fixed maturity period', 'Assured returns', 'Safe investment', 'Transparent terms'],
    },
    {
      icon: PiggyBank,
      title: 'Pigmy Deposit Scheme',
      description: 'Daily collection scheme perfect for small savers. Save a little every day.',
      features: ['Daily collection service', 'Doorstep service', 'Convenient for all', 'Habit building'],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Facilities & Schemes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive banking solutions designed to help you save, grow, and secure your financial future
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <facility.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {facility.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Our Schemes?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Transparent Terms</h4>
                      <p className="text-muted-foreground text-sm">No hidden charges or complicated clauses. Everything is clear and straightforward.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Competitive Rates</h4>
                      <p className="text-muted-foreground text-sm">Attractive interest rates that help your savings grow faster.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Personalized Service</h4>
                      <p className="text-muted-foreground text-sm">Our staff knows you by name and understands your financial goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Local & Trusted</h4>
                      <p className="text-muted-foreground text-sm">A cooperative that truly belongs to and serves the community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
