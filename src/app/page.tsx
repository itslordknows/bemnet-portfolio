"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Appointments from "@/components/Appointments";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import CoursesTaught from "@/components/CoursesTaught";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Intersection Observer for on-scroll fade-in animations matching Swiss Editorial style
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans selection:bg-navy/20 selection:text-navy">
      <Navbar />

      {/* Main Content Area matching max-w-5xl layout */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-12">
        {/* Section 1: About Me & Personal Hero */}
        <Hero />

        {/* Section 2: Academic Appointments */}
        <Appointments />

        {/* Section 3: Education */}
        <Education />

        {/* Section 4: Research & Engineering Projects */}
        <Projects />

        {/* Section 5: Recent Publications and Preprints (Research Themes removed per Comment 13) */}
        <Publications />

        {/* Section 6: Courses Taught */}
        <CoursesTaught />

        {/* Section 7: Contact Me */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
