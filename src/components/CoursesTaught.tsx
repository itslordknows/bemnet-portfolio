"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { BookOpen, GraduationCap, School, CheckCircle2 } from "lucide-react";

export default function CoursesTaught() {
  const { courses } = PORTFOLIO_DATA;

  return (
    <section id="courses" className="mt-12 fade-in-section">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Courses Taught</h2>
        <p className="text-sm text-gray-600 mt-1">
          University lectures, laboratory instruction, and engineering capstone advisorship across academic appointments.
        </p>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-[1.01] flex flex-col justify-between"
          >
            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  {course.code || "COURSE"}
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                    course.level.includes("Graduate")
                      ? "bg-purple-50 text-purple-700 border border-purple-200"
                      : "bg-navy-lightest text-navy border border-navy/20"
                  }`}
                >
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-1 leading-snug">
                {course.title}
              </h3>

              {/* Role & Institution */}
              <div className="text-xs text-gray-600 font-medium mb-3 flex items-center gap-1.5 flex-wrap">
                <span className="text-navy font-semibold">{course.role}</span>
                <span>•</span>
                <span className="text-gray-500">{course.institution}</span>
                <span>•</span>
                <span className="text-gray-400 font-mono">{course.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {course.description}
              </p>
            </div>

            {/* Syllabus Topics */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-700 mb-2">
                Core Topics Covered:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {course.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Teaching Philosophy Callout Box */}
      <div className="mt-8 bg-gradient-to-r from-navy-lightest via-white to-navy-lightest p-6 rounded-xl border border-navy/15 text-gray-800">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-white shadow-sm flex-shrink-0 text-navy mt-0.5">
            <School className="w-6 h-6 text-navy" />
          </div>
          <div>
            <h4 className="font-bold text-base text-gray-900 mb-1">
              Instructional Philosophy & Mentorship
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              My teaching integrates physical mathematical rigor (differential equations, state-space models, Lyapunov stability) with hands-on computational modeling (MATLAB/Simulink, PyTorch) and physical hardware validation. I emphasize engineering intuition, enabling students to formulate resilient models that accommodate real-world noise, uncertainties, and hardware sensor failures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
