"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Cpu, Plane, Network, ShieldCheck } from "lucide-react";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  const projectIcons = [
    <Plane key="plane" className="w-6 h-6 text-navy" />,
    <Network key="network" className="w-6 h-6 text-navy" />,
    <Cpu key="cpu" className="w-6 h-6 text-navy" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-navy" />,
  ];

  const projectCategories = [
    "AEROSPACE AVIONICS & FAULT ACCOMMODATION",
    "AUTONOMOUS ROBOTICS & SWARM DRONES",
    "MULTIMODAL PERCEPTION & COMPUTER VISION",
    "PHYSICS-INFORMED AI & KALMAN FILTERING",
  ];

  return (
    <section id="projects" className="mt-12 fade-in-section">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-600 mt-1">
            Core scientific systems and applied engineering architectures.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project, idx) => {
          const icon = projectIcons[idx % projectIcons.length];
          const category =
            projectCategories[idx] || "ENGINEERING RESEARCH & SYSTEMS";

          return (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-[1.01] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex p-3 rounded-lg bg-navy-lightest flex-shrink-0 mt-1">
                  {icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="uppercase tracking-wider text-xs font-semibold text-navy bg-navy-lightest px-2.5 py-0.5 rounded">
                      {category}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      Project #{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-navy mb-4">
                    {project.subtitle}
                  </p>

                  <div className="space-y-2.5 text-sm text-gray-700 leading-relaxed bg-gray-50/70 p-4 rounded-lg border border-gray-100 mb-4">
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Challenge:{" "}
                      </strong>
                      {project.challenge}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Methodology & Approach:{" "}
                      </strong>
                      {project.approach}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">
                        Contribution & Impact:{" "}
                      </strong>
                      {project.contribution} {project.impact}
                    </p>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <a
                      href={`https://doi.org/${project.relevantPaperDoi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-navy hover:text-navy-light font-semibold text-sm group"
                    >
                      <span>Read Publication in {project.venueName}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <span className="text-xs text-gray-400 font-mono">
                      DOI: {project.relevantPaperDoi}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
