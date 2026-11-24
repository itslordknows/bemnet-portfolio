"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ResearchProject } from "@/data/portfolioData";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  Plane,
  Network,
  Sun,
  HeartPulse,
  Trash2,
} from "lucide-react";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    // Keep top project expanded by default for immediate visual impact
    "hybrid-sensor-fusion": true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const projectIcons: Record<string, React.ReactNode> = {
    "hybrid-sensor-fusion": <Plane className="w-6 h-6 text-navy" />,
    "classroom-rag-agent": <Network className="w-6 h-6 text-navy" />,
    "aoa-fdia-doctoral": <Cpu className="w-6 h-6 text-navy" />,
    "solar-flour-mill": <Sun className="w-6 h-6 text-navy" />,
    "oxygen-unit-feasibility": <HeartPulse className="w-6 h-6 text-navy" />,
    "waste-management-sanitation": <Trash2 className="w-6 h-6 text-navy" />,
  };

  return (
    <section id="projects" className="mt-12 fade-in-section">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 font-serif">
            Research & Engineering Projects
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Major research initiatives, doctoral breakthroughs, and applied engineering systems.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project: ResearchProject, idx: number) => {
          const isExpanded = !!expandedIds[project.id];
          const icon = projectIcons[project.id] || <Cpu className="w-6 h-6 text-navy" />;

          return (
            <article
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex p-3 rounded-lg bg-navy-lightest flex-shrink-0 mt-1">
                  {icon}
                </div>

                <div className="flex-1">
                  {/* Category & Index Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="uppercase tracking-wider text-xs font-semibold text-navy bg-navy-lightest px-2.5 py-0.5 rounded border border-navy/15">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-gray-500">
                      Project {idx + 1} of {projects.length}
                    </span>
                  </div>

                  {/* Title & Role Metadata */}
                  <h3 className="font-bold text-xl sm:text-[22px] text-gray-900 mb-1 leading-snug font-serif">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-600 mb-3.5">
                    <span className="font-semibold text-navy">
                      {project.role}
                    </span>
                    {project.researchType && (
                      <>
                        <span>•</span>
                        <span className="text-gray-600 font-medium">
                          {project.researchType}
                        </span>
                      </>
                    )}
                    <span>•</span>
                    <span className="text-gray-600">{project.institution}</span>
                    <span>•</span>
                    <span className="font-mono text-gray-500">{project.period}</span>
                  </div>

                  {/* Concise Summary Paragraph */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Expandable Detailed Research Architecture (Challenge, Methodology, Impact) */}
                  {isExpanded && (
                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed bg-gray-50/80 p-5 rounded-lg border border-gray-200/70 mb-4 animate-fadeIn">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-navy mb-1">
                          Challenge
                        </h4>
                        <p className="text-gray-700">{project.challenge}</p>
                      </div>

                      <div className="pt-2 border-t border-gray-200/60">
                        <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-navy mb-1">
                          Methodology & Approach
                        </h4>
                        <p className="text-gray-700">{project.methodology}</p>
                      </div>

                      <div className="pt-2 border-t border-gray-200/60">
                        <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider text-navy mb-1">
                          Contribution & Impact
                        </h4>
                        <p className="text-gray-700">
                          {project.contribution} {project.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Footer Action Bar */}
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy hover:text-navy-dark transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? "Collapse Detailed Methodology"
                          : "View Challenge, Methodology & Impact"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {project.relevantPaperDoi && (
                      <a
                        href={`https://doi.org/${project.relevantPaperDoi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy hover:underline font-semibold text-xs sm:text-sm group ml-auto"
                      >
                        <span>
                          {project.venueName
                            ? `Published in ${project.venueName}`
                            : "Read Scientific Publication"}
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
