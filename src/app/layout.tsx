import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Dr. Bemnet Wondimagegnehu Mersha | Multisensory Fusion Researcher",
  description:
    "Official academic portfolio of Dr. Bemnet Wondimagegnehu Mersha, Multisensory Fusion Researcher, Control Engineer and AI Researcher. Specializing in multisensory fusion, industrial automation, fault diagnosis, and condition monitoring.",
  keywords: [
    "Bemnet Wondimagegnehu Mersha",
    "Dr. Bemnet Mersha",
    "Multisensory Fusion Researcher",
    "Control Engineer and AI Researcher",
    "Beijing Institute of Technology",
    "Physics-Informed Machine Learning",
    "Sensor Fault Detection and Accommodation",
    "Angle of Attack Sensor Faults",
    "Kalman Filtering",
    "Agentic RAG",
    "School of Automation BIT",
    "Control Science and Engineering",
  ],
  authors: [{ name: "Dr. Bemnet Wondimagegnehu Mersha" }],
  creator: "Dr. Bemnet Wondimagegnehu Mersha",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://orcid.org/0000-0002-1000-8984",
    title: "Dr. Bemnet Wondimagegnehu Mersha — Multisensory Fusion Researcher",
    description:
      "Multisensory Fusion Researcher, Control Engineer and AI Researcher. Specializing in multisensory fusion, industrial automation, fault diagnosis, and condition monitoring.",
    siteName: "Dr. Bemnet Wondimagegnehu Mersha Academic Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Dr. Bemnet Wondimagegnehu Mersha | Multisensory Fusion Researcher",
    description:
      "Control Engineer and AI Researcher specializing in multisensory fusion, industrial automation, and safety-critical aerospace diagnostics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Bemnet Wondimagegnehu Mersha",
    alternateName: ["Bemnet W. Mersha", "Bemnet Mersha"],
    jobTitle: "Multisensory Fusion Researcher",
    description:
      "Control Engineer and AI Researcher specializing in multisensory fusion, industrial automation, fault diagnosis, and condition monitoring.",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Beijing Institute of Technology",
      department: "School of Automation",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beijing",
        addressCountry: "CN",
      },
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Beijing Institute of Technology",
      },
      {
        "@type": "EducationalOrganization",
        name: "Quantic School of Business and Technology",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Addis Ababa University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Mekelle University",
      },
    ],
    sameAs: [
      "https://orcid.org/0000-0002-1000-8984",
      "https://scholar.google.com/citations?user=0djAtWkAAAAJ",
      "https://www.linkedin.com/in/bemnet-mersha-501745155/",
    ],
    knowsAbout: [
      "Multisensory Fusion",
      "Industrial Automation",
      "Fault Diagnosis and Condition Monitoring",
      "Physics-Informed Machine Learning",
      "Sensor Fault Detection, Isolation and Accommodation",
      "Adaptive Kalman Filtering",
      "Aerodynamic Flight Control Dynamics",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#00455e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-50 text-gray-800 antialiased selection:bg-[#00455e]/20 selection:text-[#00455e]">
        {children}
      </body>
    </html>
  );
}
