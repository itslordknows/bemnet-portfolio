"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Publications() {
  const { publications, personal } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredPubs =
    selectedFilter === "all"
      ? publications
      : selectedFilter === "highlight"
      ? publications.filter((p) => p.highlight)
      : publications.filter((p) => p.type === selectedFilter);

  return (
    <section id="publications" className="mt-12 fade-in-section">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 font-serif">
            Recent Publications and Preprints
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Peer-reviewed journal articles, international conference proceedings, and book chapters.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-white p-1 rounded-lg border border-gray-200 text-xs font-medium">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedFilter === "all"
                ? "bg-navy text-white font-semibold"
                : "text-gray-600 hover:text-navy"
            }`}
          >
            All ({publications.length})
          </button>
          <button
            onClick={() => setSelectedFilter("highlight")}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedFilter === "highlight"
                ? "bg-navy text-white font-semibold"
                : "text-gray-600 hover:text-navy"
            }`}
          >
            Selected
          </button>
          <button
            onClick={() => setSelectedFilter("journal")}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedFilter === "journal"
                ? "bg-navy text-white font-semibold"
                : "text-gray-600 hover:text-navy"
            }`}
          >
            Journals
          </button>
        </div>
      </div>

      {/* Publication Cards List */}
      <div className="space-y-5">
        {filteredPubs.map((pub) => (
          <article
            key={pub.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border border-gray-100"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold text-lg text-navy hover:text-navy-light transition-colors leading-snug font-serif">
                {pub.title}
              </h3>
              <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded bg-navy-lightest text-navy border border-navy/20 font-mono">
                {pub.year}
              </span>
            </div>

            {/* Authors List */}
            <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">
              {pub.authors.map((author, aIdx) => {
                const isBemnet =
                  author.includes("Mersha") ||
                  author.includes("Bemnet Wondimagegnehu");
                return (
                  <span key={aIdx}>
                    {isBemnet ? (
                      <strong className="font-semibold text-navy underline decoration-navy/40 underline-offset-2">
                        {author}
                      </strong>
                    ) : (
                      <span>{author}</span>
                    )}
                    {aIdx < pub.authors.length - 1 && ", "}
                  </span>
                );
              })}
            </p>

            {/* Journal / Venue */}
            <p className="text-sm text-gray-500 mt-1 italic font-serif">
              {pub.venue}
            </p>

            {/* Abstract Snippet if available */}
            {pub.abstractSnippet && (
              <p className="text-xs text-gray-600 mt-2 bg-gray-50 p-2.5 rounded border border-gray-100 leading-relaxed">
                {pub.abstractSnippet}
              </p>
            )}

            {/* Link CTA */}
            <div className="mt-3.5 flex items-center gap-4 flex-wrap">
              <a
                href={pub.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:underline text-sm font-semibold inline-flex items-center gap-1 group"
              >
                <span>
                  {pub.type === "journal"
                    ? "Read Publication"
                    : pub.type === "conference"
                    ? "Read Conference Paper"
                    : "Read Book Chapter"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="text-xs text-gray-400 font-mono">
                DOI: {pub.doi}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* View All on Google Scholar Button */}
      <div className="text-center mt-9">
        <a
          href={personal.links.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-navy text-white font-semibold px-7 py-3 rounded-lg hover:bg-navy-light transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          View All on Google Scholar
        </a>
      </div>
    </section>
  );
}
