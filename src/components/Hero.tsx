"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="pt-14 pb-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Circular Portrait Image Above Name */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#1B365D]/25 ring-4 ring-[#1B365D]/10 shadow-sm">
            <img
              src="/bemnet.jpg"
              alt="Dr. Bemnet Wondimagegnehu Mersha"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Subtle Institutional Affiliation Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-[#1B365D]/[0.08] text-[#1B365D] border border-[#1B365D]/20 mb-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B365D]"></span>
          <span>School of Automation · Beijing Institute of Technology</span>
        </div>

        {/* Main Title - Centered, Bold Oxford Academic Navy (#1B365D) */}
        <h1 className="font-serif text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-tight text-[#1B365D] leading-tight mb-2 sm:whitespace-nowrap">
          {personal.fullName}
        </h1>

        {/* Subtitle - Slick Italic with Distinct Look */}
        <p className="font-serif italic text-[16px] sm:text-[18px] md:text-[19px] text-[#5A6B7C] tracking-wide mb-5">
          {personal.title}
        </p>

        {/* Distinctive Credo Callout */}
        <div className="max-w-xl mx-auto my-5 py-2.5 px-6 border-y border-[#1B365D]/20 bg-[#1B365D]/[0.03] rounded">
          <p className="font-serif italic text-[16px] sm:text-[17.5px] text-[#1B365D] font-medium tracking-wide">
            &ldquo;{personal.credo}&rdquo;
          </p>
        </div>

        {/* First-Person Introduction */}
        <p className="text-[15px] sm:text-[15.5px] text-[#2C3E50] leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
          {personal.intro}
        </p>

        {/* Editorial Profile Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13.5px] text-[#5A6B7C]">
          <a
            href={personal.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Google Scholar
          </a>
          <span className="text-[#5A6B7C]/30">•</span>
          <a
            href={personal.links.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link font-mono"
          >
            ORCID: {personal.links.orcidId}
          </a>
          <span className="text-[#5A6B7C]/30">•</span>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
