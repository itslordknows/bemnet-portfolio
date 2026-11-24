"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="mt-12 fade-in-section">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Education
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Academic degrees, postgraduate qualifications, and university credentials.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md border border-gray-100">
        <ul className="space-y-5">
          {education.map((item) => (
            <li
              key={item.id}
              className="flex items-start p-4 rounded-lg transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-50/80 border border-transparent hover:border-gray-100"
            >
              {/* Comment 6: Use academic degree icon consistent with other qualifications (not ribbon) */}
              <div className="mt-1 mr-4 flex-shrink-0 p-2.5 rounded-lg bg-navy-lightest text-navy">
                <GraduationCap className="w-5 h-5 text-navy" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-navy-lightest text-navy border border-navy/20 self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mt-0.5">
                  <span className="text-navy font-semibold">
                    {item.institution}
                  </span>
                  {" · "}
                  <span className="text-gray-500">{item.location}</span>
                </p>

                {item.description && (
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
