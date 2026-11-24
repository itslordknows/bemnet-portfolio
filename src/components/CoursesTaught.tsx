"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { BookOpen } from "lucide-react";

export default function CoursesTaught() {
  const { courses } = PORTFOLIO_DATA;

  return (
    <section id="courses" className="mt-12 fade-in-section">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-serif">
          Courses Taught
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Undergraduate and graduate course instruction, dynamic systems engineering, and control theory fundamentals.
        </p>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course, idx) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="p-2 rounded-lg bg-navy-lightest text-navy">
                  <BookOpen className="w-4 h-4 text-navy" />
                </div>
                <span className="font-mono text-xs font-semibold text-navy">
                  Course {idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug font-serif">
                {course.title}
              </h3>

              {/* Description directly from source document */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
