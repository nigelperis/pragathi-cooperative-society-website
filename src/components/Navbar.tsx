"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [desktopDropdowns, setDesktopDropdowns] = useState<string[]>([]);

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

  const handleDesktopDropdown = (name: string, action: "open" | "close") => {
    setDesktopDropdowns((prev) => {
      if (action === "open") {
        return prev.includes(name) ? prev : [...prev, name];
      } else {
        return prev.filter((item) => item !== name);
      }
    });
  };

  const closeAllDropdowns = () => {
    setDesktopDropdowns([]);
  };

  const navLinks = [
    { name: t("navigation.home"), path: `/${locale}` },
    { name: t("navigation.about"), path: `/about`, hasDropdown: true },
    { name: t("navigation.services"), path: `/${locale}/services` },
    { name: t("navigation.branches"), path: `/${locale}/branches` },
    { name: t("navigation.gallery"), path: `/${locale}/gallery` },
    { name: t("navigation.careers"), path: `/${locale}/careers` },
    { name: t("navigation.contact"), path: `/${locale}/contact` },
  ];

  const aboutDropdown = [
    { name: t("navigation.history"), path: `/${locale}/history` },
    {
      name: t("navigation.boardOfDirectors"),
      path: `/${locale}/board-of-directors`,
    },
  ];

  // Commented out services dropdown - no longer needed
  // const servicesDropdown = [
  //   { name: "Loans", path: "/loans" },
  //   { name: "Deposits", path: "/deposits" },
  //   { name: "Facilities", path: "/facilities" },
  // ];

  return (
    <div className="relative">
      {/* Main Header - Always visible at top */}
      <div className="bg-linear-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-center py-6">
            <Link href={`/${locale}`} className="group flex items-center">
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
        className={`${isScrolled
          ? "fixed top-0 left-0 right-0 shadow-xl"
          : "relative shadow-lg"
          } z-50 bg-linear-to-r from-accent via-accent to-accent transition-all duration-300`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center h-16 relative">
            {/* Desktop Logo - Only show when scrolled */}
            {isScrolled && (
              <div className="hidden lg:flex items-center absolute left-0 z-10">
                <Link href={`/${locale}`} className="flex items-center group">
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
              className={`hidden lg:flex items-center w-full transition-all duration-300 ${isScrolled ? "justify-end pr-4" : "justify-center"
                }`}
            >
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <div key={link.path} className="relative">
                    {link.hasDropdown ? (
                      <div
                        onMouseEnter={() =>
                          handleDesktopDropdown(link.name, "open")
                        }
                        onMouseLeave={() =>
                          handleDesktopDropdown(link.name, "close")
                        }
                      >
                        <div className="px-6 py-3 text-accent-foreground font-bold text-sm uppercase tracking-wide hover:text-primary transition-all duration-200 flex items-center gap-1 rounded-sm border-r border-accent/60 last:border-r-0 cursor-pointer">
                          {link.name}
                          <ChevronDown className="h-3 w-3" />
                        </div>
                      </div>
                    ) : (
                      <Link href={link.path}>
                        <div className="px-6 py-3 text-accent-foreground font-bold text-sm uppercase tracking-wide hover:text-primary transition-all duration-200 flex items-center gap-1 rounded-sm border-r border-accent/60 last:border-r-0">
                          {link.name}
                        </div>
                      </Link>
                    )}

                    {/* Enhanced Dropdown Menus */}
                    {link.name === t("navigation.about") && (
                      <div
                        className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-primary transition-all duration-300 z-50 ${desktopDropdowns.includes(t("navigation.about"))
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                          }`}
                        onMouseEnter={() =>
                          handleDesktopDropdown(t("navigation.about"), "open")
                        }
                        onMouseLeave={() =>
                          handleDesktopDropdown(t("navigation.about"), "close")
                        }
                      >
                        <div>
                          {aboutDropdown.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={closeAllDropdowns}
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

                    {/* Commented out Services dropdown */}
                    {/* {link.name === "Services" && (
                      <div
                        className={`absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-primary transition-all duration-300 z-50 ${desktopDropdowns.includes("Services")
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                          }`}
                        onMouseEnter={() => handleDesktopDropdown("Services", 'open')}
                        onMouseLeave={() => handleDesktopDropdown("Services", 'close')}
                      >
                        <div>
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={closeAllDropdowns}
                              className="block px-6 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-b border-gray-100 last:border-b-0 font-medium"
                            >
                              <div className="flex items-center">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <LanguageSwitcher />
              </div>
            </div>
            <div className="lg:hidden flex items-center justify-between w-full absolute inset-0">
              {/* Left side - Logo when scrolled */}
              {isScrolled && (
                <Link href={`/${locale}`} className="flex items-center">
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

              {/* Right side - Language Switcher and Hamburger Menu */}
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
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
                        className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${openDropdowns.includes(link.name) ? "rotate-180" : ""
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
                  {link.name === t("navigation.about") &&
                    openDropdowns.includes(t("navigation.about")) && (
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

                  {/* {link.name === "Services" &&
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
                    )} */}
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
