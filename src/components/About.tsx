"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading with Navy Accent */}
        <div className="border-l-2 border-[#1B365D] pl-3.5 mb-6">
          <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1B365D]">
            Biography & Research Overview
          </h2>
          <p className="font-serif italic text-[15px] sm:text-[16px] text-[#5A6B7C] tracking-wide mt-1">
            Academic background, research vision, and engineering foundations.
          </p>
        </div>

        <div className="space-y-4 text-[15px] text-[#2C3E50] leading-relaxed">
          <p>{personal.bioP1}</p>
          <p>{personal.bioP2}</p>
          <p>{personal.bioP3}</p>
        </div>
      </div>
    </section>
  );
}
