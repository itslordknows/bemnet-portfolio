"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ResearchAreas() {
  const { researchThemes } = PORTFOLIO_DATA;

  return (
    <section id="research" className="py-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading with Navy Accent */}
        <div className="border-l-2 border-[#1B365D] pl-3.5 mb-8">
          <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1B365D]">
            Core Research Areas
          </h2>
          <p className="font-serif italic text-[15px] sm:text-[16px] text-[#5A6B7C] tracking-wide mt-1">
            Methodological domains bridging physical governing laws and artificial intelligence.
          </p>
        </div>

        <div className="space-y-7">
          {researchThemes.map((theme, idx) => (
            <div key={theme.id} className="pb-6 border-b border-[#5A6B7C]/15 last:border-b-0 last:pb-0">
              <h3 className="font-serif text-[18px] font-bold text-[#1B365D] mb-1">
                {idx + 1}. {theme.title}
              </h3>
              <p className="font-serif italic text-[14px] text-[#5A6B7C] tracking-wide mb-2.5">
                {theme.tagline}
              </p>
              <p className="text-[14.5px] text-[#2C3E50] leading-relaxed mb-2.5">
                {theme.description}
              </p>
              <div className="text-[12.5px] text-[#5A6B7C]">
                <span className="font-medium text-[#1B365D]">Methodology:</span> {theme.methodology}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
