import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/pragathi-logo-1.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt="Logo"
                width={8}
                height={8}
                className="w-8 h-8"
              ></img>{" "}
              <div className="font-bold text-lg">
                Pragathi Co-operative Society
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Serving the community since years, empowering lives through
              trusted financial services and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/history"
                  className="hover:text-accent transition-colors"
                >
                  Our History
                </Link>
              </li>
              <li>
                <Link
                  to="/directors"
                  className="hover:text-accent transition-colors"
                >
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="hover:text-accent transition-colors"
                >
                  Branches
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-accent transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/facilities"
                  className="hover:text-accent transition-colors"
                >
                  Savings Bank
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="hover:text-accent transition-colors"
                >
                  Fixed Deposits
                </Link>
              </li>
              <li>
                <Link
                  to="/loans"
                  className="hover:text-accent transition-colors"
                >
                  Property Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/loans"
                  className="hover:text-accent transition-colors"
                >
                  Vehicle & Gold Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Head Office</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Kulshekar, Mangalore</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 824 XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@pragathicoop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Pragathi Co-operative Society Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
