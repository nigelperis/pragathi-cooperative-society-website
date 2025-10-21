"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", hasDropdown: true },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Branches", path: "/branches" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutDropdown = [
    { name: "History", path: "/history" },
    { name: "Board of Directors", path: "/board-of-directors" },
  ];

  const servicesDropdown = [
    { name: "Loans", path: "/loans" },
    { name: "Deposits", path: "/deposits" },
    { name: "Facilities", path: "/facilities" },
  ];

  return (
    <div className="relative">
      {/* Main Header - Always visible at top */}
      <div className="bg-linear-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center py-6">
            <Link href="/" className="group flex items-center">
              <div className="relative mr-2">
                <div className="flex h-18 w-18 items-center justify-center rounded-full">
                  <Image
                    src="/pragathi_logo.png"
                    alt="Pragathi Co-operative Society Emblem"
                    width={72}
                    height={72}
                    className="h-18 w-18 rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-3xl font-bold text-primary-foreground leading-tight tracking-wide">
                  PRAGATHI CO-OPERATIVE SOCIETY
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Becomes sticky */}
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-xl"
            : "relative shadow-lg"
        } z-50 bg-linear-to-r from-accent via-accent to-accent transition-all duration-300`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center h-16 relative">
            {/* Desktop Logo - Only show when scrolled */}
            {isScrolled && (
              <div className="hidden lg:flex items-center absolute left-0 z-10">
                <Link href="/" className="flex items-center group">
                  <div className="relative mr-3">
                    <Image
                      src="/pragathi_logo.png"
                      alt="Pragathi Co-operative Society Emblem"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                      priority
                    />
                  </div>
                  <h2 className="text-accent-foreground font-bold text-sm tracking-wide">
                    PRAGATHI CO-OPERATIVE SOCIETY
                  </h2>
                </Link>
              </div>
            )}

            {/* Desktop Navigation - Shifts right when logo is visible */}
            <div
              className={`hidden lg:flex items-center w-full transition-all duration-300 ${
                isScrolled ? "justify-end pr-4" : "justify-center"
              }`}
            >
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <div key={link.path} className="relative group">
                    <Link href={link.path}>
                      <div className="px-6 py-3 text-accent-foreground font-bold text-sm uppercase tracking-wide hover:text-primary transition-all duration-200 flex items-center gap-1 rounded-sm border-r border-accent/60 last:border-r-0">
                        {link.name}
                        {link.hasDropdown && (
                          <ChevronDown className="h-3 w-3" />
                        )}
                      </div>
                    </Link>

                    {/* Enhanced Dropdown Menus */}
                    {link.name === "About" && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-3">
                          {aboutDropdown.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-100 last:border-b-0 font-medium"
                            >
                              <div className="flex items-center">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {link.name === "Services" && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-3">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-100 last:border-b-0 font-medium"
                            >
                              <div className="flex items-center">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:hidden flex items-center justify-between w-full absolute inset-0">
              {isScrolled && (
                <Link href="/" className="flex items-center">
                  <div className="relative mr-2">
                    <Image
                      src="/pragathi_logo.png"
                      alt="Pragathi Co-operative Society Emblem"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover transition-all duration-300"
                      priority
                    />
                  </div>
                  <h2 className="text-accent-foreground font-bold text-sm tracking-wide">
                    PRAGATHI CO-OPERATIVE SOCIETY
                  </h2>
                </Link>
              )}

              {/* Hamburger Menu on Right */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-accent-foreground hover:bg-white/20 transition-colors cursor-pointer ml-auto"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t-4 border-accent shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="py-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {/* Main Menu Item */}
                  {link.hasDropdown ? (
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100"
                    >
                      <span className="text-lg">{link.name}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
                          openDropdowns.includes(link.name) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-4 text-lg text-gray-900 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Items - Show when expanded */}
                  {link.name === "About" && openDropdowns.includes("About") && (
                    <div className="bg-gray-50 border-b border-gray-100">
                      {aboutDropdown.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-8 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {link.name === "Services" &&
                    openDropdowns.includes("Services") && (
                      <div className="bg-gray-50 border-b border-gray-100">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-8 py-3 text-gray-700 hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isScrolled && <div className=""></div>}
    </div>
  );
};

export default Navbar;
