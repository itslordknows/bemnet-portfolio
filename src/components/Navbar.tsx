"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md py-3.5 border-b border-[#5A6B7C]/15 transition-all">
      <div className="max-w-3xl mx-auto px-6 flex items-baseline justify-between">
        <a
          href="#"
          className="font-serif text-[15px] sm:text-[16px] font-medium tracking-tight text-[#1B365D] hover:text-[#1B365D]/80 transition-colors whitespace-nowrap"
        >
          {PORTFOLIO_DATA.personal.shortName}
        </a>

        <nav className="flex items-center space-x-5 sm:space-x-6 text-[13px] text-[#5A6B7C]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1B365D] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
