"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, ArrowRight } from "lucide-react";

export default function Appointments() {
  const { appointments } = PORTFOLIO_DATA;

  return (
    <section id="appointments" className="mt-12 fade-in-section">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Academic Appointments
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Professional appointments, research leadership, and academic responsibilities.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md border border-gray-100">
        <ul className="space-y-6">
          {appointments.map((item) => (
            <li
              key={item.id}
              className="flex items-start p-4 rounded-lg transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-50/80 border border-transparent hover:border-gray-100"
            >
              <div className="mt-1 mr-4 flex-shrink-0 p-2.5 rounded-lg bg-navy-lightest text-navy">
                <Briefcase className="w-5 h-5 text-navy" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug">
                    {item.title}
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

                <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

                {item.projectHighlights && item.projectHighlights.length > 0 && (
                  <div className="mt-3 bg-gray-50 p-3 rounded-lg border border-gray-100 space-y-1.5">
                    <p className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Primary Research Projects Led / Contributed:
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                      {item.projectHighlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-navy flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
