"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading with Navy Accent */}
        <div className="border-l-2 border-[#1B365D] pl-3.5 mb-8">
          <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1B365D]">
            Research Projects
          </h2>
          <p className="font-serif italic text-[15px] sm:text-[16px] text-[#5A6B7C] tracking-wide mt-1">
            Key scientific initiatives addressing flight sensor integrity and multi-agent coordination.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={project.id} className="pb-8 border-b border-[#5A6B7C]/15 last:border-b-0 last:pb-0">
              <h3 className="font-serif text-[18px] font-bold text-[#1B365D] mb-1">
                {idx + 1}. {project.title}
              </h3>
              <p className="font-serif italic text-[14px] text-[#5A6B7C] tracking-wide mb-3">
                {project.subtitle}
              </p>

              <div className="space-y-2 text-[14px] text-[#2C3E50] leading-relaxed mb-3">
                <p>
                  <strong className="font-semibold text-[#1B365D]">Challenge:</strong> {project.challenge}
                </p>
                <p>
                  <strong className="font-semibold text-[#1B365D]">Approach:</strong> {project.approach}
                </p>
                <p>
                  <strong className="font-semibold text-[#1B365D]">Contribution:</strong> {project.contribution}
                </p>
              </div>

              <div className="text-[12.5px] text-[#5A6B7C]">
                <span className="font-medium text-[#1B365D]">Output: </span>
                <a
                  href={`https://doi.org/${project.relevantPaperDoi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Published in {project.venueName}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
