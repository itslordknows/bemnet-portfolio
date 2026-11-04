"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import CoursesTaught from "@/components/CoursesTaught";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Intersection Observer for on-scroll fade-in animations matching benjaminschiffer.com
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

      {/* Main Content Area matching max-w-5xl from benjaminschiffer.com */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-12">
        {/* Top Section: About Me & Appointments */}
        <Hero />

        {/* Project Section */}
        <Projects />

        {/* Research & Publications Section */}
        <Research />

        {/* Courses Taught Section */}
        <CoursesTaught />

        {/* Contact Me Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
