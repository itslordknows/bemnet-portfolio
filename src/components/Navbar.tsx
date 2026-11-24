"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Appointments", href: "#appointments" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Teaching", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "appointments",
        "education",
        "projects",
        "publications",
        "courses",
        "contact",
      ];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const navHeight = 64; // height of sticky navbar
      const targetPos =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/60 transition-all duration-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Personal Brand */}
          <div className="flex items-center">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="font-bold text-xl text-gray-900 hover:text-navy transition-colors tracking-tight font-serif"
            >
              {PORTFOLIO_DATA.personal.shortName}
            </a>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-2.5 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "text-navy font-semibold bg-navy-lightest"
                        : "text-gray-600 hover:text-navy hover:bg-gray-100/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy/30"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fadeIn"
        >
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "");
            const isActive = activeSection === targetId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-navy font-semibold bg-navy-lightest"
                    : "text-gray-700 hover:text-navy hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
