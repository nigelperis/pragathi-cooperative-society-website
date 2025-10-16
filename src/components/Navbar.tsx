'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "History", path: "/history" },
    { name: "Board of Directors", path: "/directors" },
    { name: "Branches", path: "/branches" },
    { name: "Facilities", path: "/facilities" },
    { name: "Loans", path: "/loans" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full transition-all">
              <Image
                src="/pragathi-logo-1.jpg"
                alt="Pragathi Co-operative Society logo"
                width={48}
                height={48}
                className="h-auto w-auto"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-primary">
                Pragathi Co-operative Society
              </div>
              <div className="text-xs text-muted-foreground">Trust - Invest - Prosper</div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className="transition-all text-foreground hover:bg-secondary/50 hover:text-primary"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="animate-fade-in border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
