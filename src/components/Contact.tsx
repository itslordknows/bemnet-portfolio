"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading with Navy Accent */}
        <div className="border-l-2 border-[#1B365D] pl-3.5 mb-6">
          <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1B365D]">
            Research Collaboration & Correspondence
          </h2>
          <p className="font-serif italic text-[15px] sm:text-[16px] text-[#5A6B7C] tracking-wide mt-1">
            Advancing Intelligent Systems Through Research and Collaboration.
          </p>
        </div>

        <p className="text-[15px] text-[#2C3E50] leading-relaxed mb-6 font-normal">
          I welcome scientific dialogue, joint grant initiatives, lab visits, and inquiries regarding preprints or research code from academic laboratories and industrial R&D teams.
        </p>

        <div className="space-y-2.5 text-[14px] text-[#2C3E50] border-t border-b border-[#5A6B7C]/15 py-4 mb-6">
          <p>
            <span className="font-medium text-[#1B365D]">Institution:</span>{" "}
            School of Automation, Beijing Institute of Technology (BIT)
          </p>
          <p>
            <span className="font-medium text-[#1B365D]">Address:</span>{" "}
            5 South Zhongguancun Street, Haidian District, Beijing 100081, China
          </p>
          <p>
            <span className="font-medium text-[#1B365D]">Correspondence:</span>{" "}
            <a
              href="mailto:bemnet.mersha@bit.edu.cn"
              className="text-link font-mono font-medium"
            >
              bemnet.mersha@bit.edu.cn
            </a>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
          <a
            href={personal.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link font-medium"
          >
            Google Scholar
          </a>
          <span className="text-[#5A6B7C]/40">•</span>
          <a
            href={personal.links.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link font-mono font-medium"
          >
            ORCID: {personal.links.orcidId}
          </a>
          <span className="text-[#5A6B7C]/40">•</span>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
