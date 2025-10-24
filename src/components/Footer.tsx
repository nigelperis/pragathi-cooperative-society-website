import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Company info section - full width on mobile */}
        <div className="mb-8 md:hidden">
          <Link href="/" className="mb-4 flex items-center gap-2">
            <Image
              src="/pragathi-logo.png"
              alt="Pragathi Logo"
              width={60}
              height={60}
              className="h-16 w-16"
            />
            <div className="text-lg font-bold">{t("companyName")}</div>
          </Link>
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            {t("tagline")}
          </p>
        </div>

        {/* Mobile: 2 columns for Quick Links and Our Services */}
        <div className="mb-8 grid grid-cols-2 gap-6 md:hidden">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/history" className="hover:text-accent">
                  {t("links.history")}
                </Link>
              </li>
              <li>
                <Link href="/board-of-directors" className="hover:text-accent">
                  {t("links.board")}
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-accent">
                  {t("links.branches")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent">
                  {t("links.careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("ourServices")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/facilities" className="hover:text-accent">
                  {t("services.savings")}
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-accent">
                  {t("services.deposits")}
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-accent">
                  {t("services.propertyLoans")}
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-accent">
                  {t("services.vehicleGoldLoans")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Head Office section - full width on mobile */}
        <div className="md:hidden">
          <h3 className="mb-4 text-lg font-semibold">{t("headOffice")}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4" />
              <a
                href="https://maps.google.com/?q=Pragathi+Co-operative+Society+Ltd,+Mangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                {t("address")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+918242428422"
                className="hover:text-accent transition"
              >
                {t("phone")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:info@pragathisociety.com"
                className="hover:text-accent transition"
              >
                {t("email")}
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop layout */}
        <div className="hidden grid-cols-2 gap-8 md:grid lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/pragathi-logo.png"
                alt="Pragathi Logo"
                width={60}
                height={60}
                className="h-16 w-16"
              />
              <div className="text-lg font-bold">{t("companyName")}</div>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/history" className="hover:text-accent">
                  {t("links.history")}
                </Link>
              </li>
              <li>
                <Link href="/board-of-directors" className="hover:text-accent">
                  {t("links.board")}
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-accent">
                  {t("links.branches")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent">
                  {t("links.careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("ourServices")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/facilities" className="hover:text-accent">
                  {t("services.savings")}
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-accent">
                  {t("services.deposits")}
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-accent">
                  {t("services.propertyLoans")}
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-accent">
                  {t("services.vehicleGoldLoans")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("headOffice")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4" />
                <a
                  href="https://maps.google.com/?q=Pragathi+Co-operative+Society+Ltd,+Mangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  {t("address")}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div className="flex flex-col">
                  <a
                    href="tel:+918762308427"
                    className="hover:text-accent transition"
                  >
                    +91 8762308427
                  </a>
                  <a
                    href="tel:+917899470176"
                    className="hover:text-accent transition"
                  >
                    +91 7899470176
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:pragathikulshekar@gmail.com"
                  className="hover:text-accent transition"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {currentYear} {t("companyName")} {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
