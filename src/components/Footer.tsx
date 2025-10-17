import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/Pragathi-LOGO.png"
                alt="Pragathi logo"
                width={60}
                height={60}
                className="h-16 w-16"
              />
              <div className="text-lg font-bold">
                Pragathi Co-operative Society
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Serving the community since years, empowering lives through
              trusted financial services and support.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/history"
                  className="transition-colors hover:text-accent"
                >
                  Our History
                </Link>
              </li>
              <li>
                <Link
                  href="/directors"
                  className="transition-colors hover:text-accent"
                >
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link
                  href="/branches"
                  className="transition-colors hover:text-accent"
                >
                  Branches
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="transition-colors hover:text-accent"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/facilities"
                  className="transition-colors hover:text-accent"
                >
                  Savings Bank
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="transition-colors hover:text-accent"
                >
                  Fixed Deposits
                </Link>
              </li>
              <li>
                <Link
                  href="/loans"
                  className="transition-colors hover:text-accent"
                >
                  Property Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/loans"
                  className="transition-colors hover:text-accent"
                >
                  Vehicle & Gold Loans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Head Office</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>Kulshekar, Mangalore</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 824 XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@pragathicoop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {currentYear} Pragathi Co-operative Society Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
