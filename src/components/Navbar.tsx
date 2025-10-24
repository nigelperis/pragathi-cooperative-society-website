"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageToggleButton from "./LanguageToggleButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleDropdownEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: t("links.home"), path: "/" },
    { name: t("links.about"), path: "/about", hasDropdown: true },
    { name: t("links.services"), path: "/services" },
    { name: t("links.branches"), path: "/branches" },
    { name: t("links.gallery"), path: "/gallery" },
    { name: t("links.careers"), path: "/careers" },
    { name: t("links.contact"), path: "/contact" },
  ];

  const aboutDropdown = [
    { name: t("links.aboutDropdown.history"), path: "/history" },
    {
      name: t("links.aboutDropdown.boardOfDirectors"),
      path: "/board-of-directors",
    },
  ];

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="bg-linear-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center py-6">
            <Link href="/" className="group flex items-center">
              <div className="relative mr-2">
                <div className="flex h-30 w-30 items-center justify-center rounded-full">
                  <Image
                    src="/pragathi-logo.webp"
                    alt="Pragathi Co-operative Society Emblem"
                    width={240}
                    height={240}
                    className="h-30 w-30 rounded-full object-cover"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 120px, 120px"
                  />
                </div>
              </div>
              <div className="text-center leading-relaxed">
                <h1 className="text-base sm:text-2xl md:text-3xl font-bold text-primary-foreground leading-tight tracking-wide break-words">
                  {t("header.name")}
                </h1>
                <div className="flex flex-col lg:items-center text-primary-foreground/90">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <h2 className="text-sm lg:text-base font-medium">
                      {t("header.license")}
                    </h2>
                  </div>
                  <p className="text-sm lg:text-base text-primary-foreground/80 leading-relaxed">
                    {t("header.address")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-xl"
            : "relative shadow-lg"
        } z-50 bg-linear-to-r from-accent via-accent to-accent transition-all duration-300`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center h-16 relative">
            {/* Scrolled Mini Header */}
            {isScrolled && (
              <div className="hidden lg:flex items-center absolute left-0 z-10 max-w-44">
                <Link href="/" className="flex items-center group">
                  <Image
                    src="/pragathi-logo.webp"
                    alt="Pragathi Logo"
                    width={112}
                    height={112}
                    className="h-14 w-14 rounded-full object-cover mr-2 flex-shrink-0"
                    priority
                    quality={100}
                    sizes="56px"
                  />
                </Link>
              </div>
            )}

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center w-full transition-all duration-300 ${
                isScrolled ? "justify-center" : "justify-center"
              }`}
            >
              <div
                className={`flex items-center space-x-1 ${
                  isScrolled ? "ml-48" : ""
                }`}
              >
                {navLinks.map((link) => (
                  <div key={link.path} className="relative">
                    {link.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter(link.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="px-6 py-3 text-accent-foreground font-bold text-sm uppercase tracking-wide hover:text-primary transition-all duration-200 flex items-center gap-1 rounded-sm border-r border-accent/60 last:border-r-0 cursor-pointer">
                          {link.name}
                          <ChevronDown className="h-3 w-3" />
                        </div>

                        {/* About Dropdown */}
                        {link.name === t("links.about") && (
                          <div
                            className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-primary transition-all duration-200 z-50 ${
                              activeDropdown === link.name
                                ? "opacity-100 visible translate-y-0"
                                : "opacity-0 invisible -translate-y-2"
                            }`}
                          >
                            {aboutDropdown.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                onClick={closeAllDropdowns}
                                className="block px-6 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-100 last:border-b-0 font-medium"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={link.path}>
                        <div className="px-6 py-3 text-accent-foreground font-bold text-sm uppercase tracking-wide hover:text-primary transition-all duration-200 flex items-center gap-1 rounded-sm border-r border-accent/60 last:border-r-0">
                          {link.name}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Language Switcher for Desktop*/}
                <div className="ml-4">
                  <LanguageToggleButton />
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center justify-between w-full absolute inset-0">
              {isScrolled && (
                <Link href="/" className="flex items-center max-w-65">
                  <Image
                    src="/pragathi-logo.webp"
                    alt="Pragathi Logo"
                    width={112}
                    height={112}
                    className="h-14 w-14 rounded-full object-cover mr-2 flex-shrink-0"
                    priority
                    quality={100}
                    sizes="56px"
                  />
                </Link>
              )}
              <div className="flex items-center space-x-2 ml-auto">
                {/* Language Switcher for Mobile*/}
                <LanguageToggleButton />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-accent-foreground hover:bg-white/20 transition-colors cursor-pointer"
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
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t-4 border-accent shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="py-2">
              {navLinks.map((link) => (
                <div key={link.path}>
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

                  {link.name === t("links.about") &&
                    openDropdowns.includes(link.name) && (
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
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
