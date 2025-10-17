'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStickyLogo, setShowStickyLogo] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show sticky logo when scrolled past the main header (approximately 150px)
      setShowStickyLogo(scrollY > 150);
      // Make navbar sticky when scrolled past the blue header
      setIsSticky(scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: "Board of Directors", path: "/directors" },
    { name: "Vision & Mission", path: "/vision-mission" },
  ];

  const servicesDropdown = [
    { name: "Loans", path: "/loans" },
    { name: "Deposits", path: "/deposits" },
    { name: "Facilities", path: "/facilities" },
  ];

  return (
    <nav className="bg-white shadow-xl">

      {/* Main Header with Left-aligned Logo */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-6">
            {/* Left-aligned Logo Section */}
            <Link href="/" className="group flex items-center">
              <div className="relative mr-4">
                <div className="flex h-30 w-30 items-center justify-center rounded-full transition-all group-hover:scale-105">
                  <Image
                    src="/Pragathi-LOGO.png"
                    alt="Pragathi Co-operative Society Emblem"
                    width={72}
                    height={72}
                    className="h-28 w-28 rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-2xl font-bold text-primary-foreground leading-tight tracking-wide">
                  PRAGATHI CO-OPERATIVE SOCIETY
                </h1>
                <p className="text-accent font-semibold text-lg mt-1 tracking-widest">
                  TRUST • INVEST • PROSPER
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isSticky && <div className="h-14"></div>}

      {/* Sticky Navigation Bar */}
      <div className={`${isSticky ? 'fixed top-0 left-0 right-0' : 'relative'} z-50 bg-gradient-to-r from-accent via-accent/90 to-accent shadow-lg transition-all duration-300`}>
        {/* Logo positioned on top of yellow navbar on the left - only visible when scrolled */}
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center justify-center w-full transition-all duration-300 ${showStickyLogo ? 'pl-20' : 'pl-0'}`}>
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <div key={link.path} className="relative group">
                    <Link href={link.path}>
                      <div className="px-6 py-3 text-accent-foreground font-bold text-sm uppercase tracking-wide hover:bg-white/20 hover:text-primary transition-all duration-200 flex items-center gap-1 rounded-sm border-r border-accent/60 last:border-r-0">
                        {link.name}
                        {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
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
                              <span className="text-primary mr-2">▶</span>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {link.name === "Services" && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-3">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-6 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent-foreground transition-colors border-b border-gray-100 last:border-b-0 font-medium"
                            >
                              <span className="text-accent mr-2">▶</span>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-accent-foreground hover:bg-white/20 transition-colors ml-auto"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t-4 border-accent shadow-xl">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-accent-foreground hover:bg-primary/5 hover:text-primary transition-colors font-bold border-b border-gray-100"
                  >
                    {link.name}
                  </Link>

                  {/* Mobile Dropdown Items */}
                  {link.name === "About" && (
                    <div className="bg-gray-50 border-l-4 border-primary">
                      {aboutDropdown.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-10 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary border-b border-gray-200 last:border-b-0"
                        >
                          <span className="text-primary mr-2">▶</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {link.name === "Services" && (
                    <div className="bg-gray-50 border-l-4 border-accent">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-10 py-3 text-sm text-gray-700 hover:bg-accent/5 hover:text-accent-foreground border-b border-gray-200 last:border-b-0"
                        >
                          <span className="text-accent mr-2">▶</span>
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
      </div>
    </nav>
  );
};

export default Navbar;
