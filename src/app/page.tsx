"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import AcademicJourney from "@/components/AcademicJourney";
import Distinctions from "@/components/Distinctions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B365D]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <ResearchAreas />
        <Publications />
        <Projects />
        <AcademicJourney />
        <Distinctions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
