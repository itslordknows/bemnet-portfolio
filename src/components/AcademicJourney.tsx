"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AcademicJourney() {
  const { timeline } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="py-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading with Navy Accent */}
        <div className="border-l-2 border-[#1B365D] pl-3.5 mb-8">
          <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1B365D]">
            Academic Journey
          </h2>
          <p className="font-serif italic text-[15px] sm:text-[16px] text-[#5A6B7C] tracking-wide mt-1">
            Chronological appointments, academic leadership, and higher education qualifications.
          </p>
        </div>

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 text-[14px] pb-4 border-b border-[#5A6B7C]/15 last:border-b-0 last:pb-0">
              <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-[#1B365D]/[0.08] text-[#1B365D] border border-[#1B365D]/20 sm:w-32 shrink-0 self-start text-center">
                {item.year}
              </span>
              <div>
                <h3 className="font-serif text-[17px] font-bold text-[#1B365D]">
                  {item.title}
                </h3>
                <p className="font-serif italic text-[14px] text-[#5A6B7C] tracking-wide mt-0.5">
                  {item.institution}, {item.location}
                </p>
                <p className="text-[13.5px] text-[#2C3E50] mt-1 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
