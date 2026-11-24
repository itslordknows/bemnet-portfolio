"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white mt-14 border-t border-gray-200">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm space-y-4">
        <p className="font-medium text-gray-700">
          &copy; {new Date().getFullYear()} {personal.fullName}
        </p>

        <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
          Multisensory Fusion Researcher · School of Automation · Beijing Institute of Technology (BIT)
          <br />
          Engineering Trustworthy Intelligence · Physics-Informed ML · Sensor Fault Accommodation
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs pt-1">
          <a
            href={personal.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy hover:underline transition-colors"
          >
            Google Scholar
          </a>
          <span className="text-gray-300">|</span>
          <a
            href={personal.links.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy hover:underline transition-colors font-mono"
          >
            ORCID: {personal.links.orcidId}
          </a>
          <span className="text-gray-300">|</span>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-300">|</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-navy hover:underline transition-colors font-medium text-gray-600"
          >
            <ArrowUp className="w-3.5 h-3.5 text-navy" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
