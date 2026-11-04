import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Dr. Bemnet Wondimagegnehu Mersha | AI & Control Engineering Researcher",
  description:
    "Official academic portfolio of Dr. Bemnet Wondimagegnehu Mersha, Postdoctoral Researcher at Beijing Institute of Technology (BIT). Specializing in physics-informed machine learning, sensor fault detection, isolation & accommodation (FDIA), and resilient autonomous control systems.",
  keywords: [
    "Bemnet Wondimagegnehu Mersha",
    "Dr. Bemnet Mersha",
    "Beijing Institute of Technology",
    "Physics-Informed Neural Networks",
    "Sensor Fault Detection and Accommodation",
    "Angle of Attack Sensor Faults",
    "Kalman Filtering",
    "Reinforcement Learning Multi-UAV",
    "School of Automation BIT",
    "Control Science and Engineering",
  ],
  authors: [{ name: "Dr. Bemnet Wondimagegnehu Mersha" }],
  creator: "Dr. Bemnet Wondimagegnehu Mersha",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://orcid.org/0000-0002-1000-8984",
    title: "Dr. Bemnet Wondimagegnehu Mersha — Engineering Trustworthy Intelligence",
    description:
      "Postdoctoral Researcher in AI & Control Science at Beijing Institute of Technology. Advancing physics-informed deep learning and flight sensor analytical redundancy.",
    siteName: "Dr. Bemnet Wondimagegnehu Mersha Academic Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Dr. Bemnet Wondimagegnehu Mersha | AI & Control Engineering",
    description: "Postdoctoral Researcher in AI & Control Science at Beijing Institute of Technology.",
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
    jobTitle: "Postdoctoral Researcher",
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
      "Physics-Informed Machine Learning",
      "Sensor Fault Detection, Isolation and Accommodation",
      "Adaptive Kalman Filtering",
      "Aerodynamic Flight Control Dynamics",
      "Reinforcement Learning for Autonomous Systems",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#00455e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
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
