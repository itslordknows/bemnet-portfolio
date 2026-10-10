"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-white text-[#5A6B7C] text-[13px] border-t border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-serif font-bold text-[#1B365D] text-[15.5px] whitespace-nowrap">
            {personal.fullName}
          </p>
          <p className="font-serif italic text-[#5A6B7C] text-[12.5px] mt-0.5">
            © {new Date().getFullYear()} · Beijing Institute of Technology · All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-4 text-[12px]">
          <span className="font-mono text-[#5A6B7C]">
            ORCID: {personal.links.orcidId}
          </span>
          <span className="text-[#5A6B7C]/40">•</span>
          <button
            onClick={scrollToTop}
            className="text-[#1B365D] hover:underline cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
