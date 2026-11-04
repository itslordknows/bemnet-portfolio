"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Briefcase,
  Mail,
  ExternalLink,
  Award,
} from "lucide-react";

export default function Hero() {
  const { personal, timeline } = PORTFOLIO_DATA;

  return (
    <div id="about" className="space-y-10 pt-2">
      {/* About Profile Card — Exact Benjamin Schiffer Style */}
      <section className="flex flex-col md:flex-row items-center bg-gradient-to-br from-white to-navy-lightest p-8 rounded-xl shadow-md border border-gray-100">
        <div className="md:w-1/4 text-center md:text-left mb-6 md:mb-0 flex-shrink-0">
          <div className="relative inline-block">
            <img
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full mx-auto md:mx-0 object-cover object-top border-2 border-navy shadow-lg"
              src="/bemnet.jpg"
              alt={personal.fullName}
              onError={(e) => {
                // Fallback avatar
                const target = e.currentTarget;
                target.src =
                  "https://ui-avatars.com/api/?name=Bemnet+Mersha&background=00455e&color=fff&size=200";
              }}
            />
            <p className="text-xs text-gray-500 mt-2.5 text-center">
              School of Automation (
              <a
                href="https://english.bit.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-navy font-medium"
              >
                BIT
              </a>
              )
            </p>
          </div>
        </div>

        <div className="md:w-3/4 md:pl-8 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 tracking-tight">
            {personal.fullName}
          </h1>
          <p className="text-base sm:text-lg font-medium text-navy mb-4">
            {personal.title}
          </p>

          <div className="space-y-3.5 text-gray-700 leading-relaxed text-left">
            <p>
              I am a Postdoctoral Researcher at the School of Automation,{" "}
              <a
                href="https://english.bit.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-semibold hover:underline"
              >
                Beijing Institute of Technology (BIT)
              </a>
              , working on physics-informed deep learning, adaptive Kalman filtering, and flight sensor analytical redundancy.
            </p>
            <p>
              My research is driven by the goal of engineering trustworthy, physically consistent intelligence for safety-critical aerospace systems and autonomous platforms, lying at the intersection of physics, control theory, and machine learning.
            </p>
          </div>

          {/* Social / Academic Icons */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-gray-600">
            <a
              href="mailto:bemnet.mersha@bit.edu.cn"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-navy transition-colors text-sm font-medium"
              aria-label="Email"
              title="Email: bemnet.mersha@bit.edu.cn"
            >
              <Mail className="w-5 h-5 text-navy" />
              <span>Email</span>
            </a>

            <a
              href={personal.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-navy transition-colors text-sm font-medium"
              aria-label="Google Scholar"
              title="Google Scholar Profile"
            >
              <GraduationCap className="w-5 h-5 text-navy" />
              <span>Google Scholar</span>
            </a>

            <a
              href={personal.links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-navy transition-colors text-sm font-medium"
              aria-label="ORCID"
              title="ORCID Profile"
            >
              <span className="w-5 h-5 rounded-full bg-[#A6CE39] text-white flex items-center justify-center text-xs font-bold font-serif">
                iD
              </span>
              <span>ORCID</span>
            </a>

            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-600 hover:text-navy transition-colors text-sm font-medium"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <svg
                className="w-4 h-4 fill-current text-navy"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Appointments & Education Section — Exact Benjamin Schiffer Style */}
      <section className="fade-in-section">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Appointments & Education
        </h2>
        <div className="bg-white p-6 sm:p-7 rounded-xl shadow-md border border-gray-100">
          <ul className="space-y-4">
            {timeline.map((item, index) => {
              const isAppointment = item.category === "appointment";
              return (
                <li
                  key={index}
                  className="flex items-start p-3 sm:p-3.5 rounded-lg transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-50 border border-transparent hover:border-gray-100"
                >
                  <div className="mt-1 mr-4 flex-shrink-0">
                    {isAppointment ? (
                      <Briefcase className="w-5 h-5 text-navy" />
                    ) : item.title.includes("EMBA") ? (
                      <Award className="w-5 h-5 text-navy" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-navy" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-base">
                      {item.title} ({item.year})
                    </p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      <span className="text-navy font-medium">
                        {item.institution}
                      </span>
                      {" · "}
                      <span className="text-gray-500">{item.location}</span>
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
