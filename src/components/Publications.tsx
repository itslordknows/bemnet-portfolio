"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Publications() {
  const { publications, personal } = PORTFOLIO_DATA;

  // Group publications by year
  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <section id="publications" className="py-14 border-b border-[#5A6B7C]/15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading with Navy Accent */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
          <div className="border-l-2 border-[#1B365D] pl-3.5">
            <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1B365D]">
              Selected Publications
            </h2>
            <p className="font-serif italic text-[15px] sm:text-[16px] text-[#5A6B7C] tracking-wide mt-1">
              Peer-reviewed journal articles, conference papers, and book chapters.
            </p>
          </div>

          <a
            href={personal.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-link self-start sm:self-auto"
          >
            Google Scholar Profile →
          </a>
        </div>

        {/* Bibliography grouped by Year */}
        <div className="space-y-10 mt-8">
          {years.map((year) => {
            const pubsInYear = publications.filter((p) => p.year === year);
            return (
              <div key={year} className="space-y-4">
                {/* Subtle Year Marker in Academic Navy */}
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-[#1B365D]/[0.08] text-[#1B365D] border border-[#1B365D]/20">
                    {year}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#5A6B7C]/15"></div>
                </div>

                <div className="space-y-5 pl-0 sm:pl-2">
                  {pubsInYear.map((pub) => (
                    <article key={pub.id} className="text-[14px] leading-relaxed">
                      {/* Title in Academic Navy - Bold */}
                      <h3 className="font-serif text-[16px] font-bold text-[#1B365D] leading-snug mb-1">
                        {pub.title}
                      </h3>

                      {/* Authors */}
                      <p className="text-[#2C3E50] text-[13px] mb-1">
                        {pub.authors.map((author, aIdx) => {
                          const isMersha =
                            author.includes("Mersha") ||
                            author.includes("Bemnet Wondimagegnehu");
                          return (
                            <span key={aIdx} className="inline-block">
                              {isMersha ? (
                                <strong className="font-medium text-[#1B365D] underline decoration-[#1B365D]/40 underline-offset-2 whitespace-nowrap">
                                  {author}
                                </strong>
                              ) : (
                                <span className="text-[#5A6B7C] whitespace-nowrap">{author}</span>
                              )}
                              {aIdx < pub.authors.length - 1 && <span className="mr-1">,</span>}
                            </span>
                          );
                        })}
                      </p>

                      {/* Venue in Scholarly Slate & DOI */}
                      <div className="text-[13px] text-[#5A6B7C] flex flex-wrap items-center gap-x-2">
                        <span className="italic font-serif text-[#1B365D]/85">
                          {pub.venue}
                        </span>
                        <span>•</span>
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link font-mono text-[12px]"
                        >
                          DOI: {pub.doi}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
