export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "book-chapter";
  doi: string;
  doiUrl: string;
  highlight?: boolean;
  abstractSnippet?: string;
  citationsCount?: number;
}

export interface ResearchProject {
  id: string;
  title: string;
  role: string;
  researchType?: string;
  institution: string;
  period: string;
  challenge: string;
  methodology: string;
  contributionAndImpact: string;
  relevantPaperDoi?: string;
}

export interface AppointmentItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  projectHighlights?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  description: string;
}

export interface Distinction {
  year: string;
  title: string;
  organization: string;
  detail: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Dr. Bemnet Wondimagegnehu Mersha",
    shortName: "Dr. Bemnet W. Mersha",
    title: "Multisensory Fusion Researcher",
    subtitle: "Control Engineer and AI Researcher",
    affiliation: "School of Automation, Beijing Institute of Technology (BIT)",
    location: "Beijing, China",
    credo: "Engineering Trustworthy Intelligence.",
    headline:
      "Unifying physics-based dynamic modeling, adaptive state estimation, and deep neural architectures for mission-critical engineering reliability.",
    introP1:
      "I am a Control Engineer and AI Researcher with a PhD and postdoctoral experience from the School of Automation at Beijing Institute of Technology (BIT), specializing in multisensory fusion, industrial automation, fault diagnosis, and condition monitoring.",
    introP2:
      "My research focuses on developing trustworthy and physically consistent artificial intelligence for safety-critical systems in aerospace and industrial applications, integrating principles from physics, control theory, and machine learning.",
    links: {
      scholar: "https://scholar.google.com/citations?user=0djAtWkAAAAJ",
      orcid: "https://orcid.org/0000-0002-1000-8984",
      linkedin: "https://www.linkedin.com/in/bemnet-mersha-501745155/",
      orcidId: "0000-0002-1000-8984",
      email: "bemnet.mersha@bit.edu.cn",
    },
  },

  appointments: [
    {
      id: "postdoc-bit",
      title: "Postdoctoral Researcher",
      institution: "School of Automation, Beijing Institute of Technology (BIT)",
      location: "Beijing, China",
      period: "2024 – 2026",
      description:
        "I led research on multisensory fusion. The primary objective was to combine multimodal data, physics-based models, and reasoning frameworks.",
      projectHighlights: [
        "Project 1: Hybrid AI and physics-based fault diagnosis for aircraft health monitoring (project lead)",
        "Project 2: Multimodal classroom behavior evaluation using large language model (LLM) agents",
      ],
    },
    {
      id: "lecturer-aastu",
      title: "Lecturer in Electrical & Control Engineering",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      location: "Addis Ababa, Ethiopia",
      period: "2016 – 2019",
      description:
        "I taught undergraduate courses in Modern control systems and digital control and supervised engineering capstone projects. I also led the fully funded research project \"Design and development of a battery-free, solar-powered flour-milling system.\"",
    },
    {
      id: "lecturer-dbu",
      title: "Lecturer in Electrical Engineering",
      institution: "Debre Berhan University (DBU)",
      location: "Debre Berhan, Ethiopia",
      period: "2013 – 2016",
      description:
        "I taught modern control systems, process control, robotics, electrical machines, and power electronics, and contributed to academic curriculum development.",
    },
  ] as AppointmentItem[],

  education: [
    {
      id: "emba",
      degree: "Executive Master of Business Administration (EMBA)",
      institution: "Quantic School of Business and Technology",
      location: "Washington D.C., United States",
      period: "Online 2024 – 2026",
      description:
        "EMBA program in strategy, data and decisions, supply chain and operations, AI for business, entrepreneurship, and other courses.",
    },
    {
      id: "phd",
      degree: "Doctor of Philosophy (PhD) in Control Science and Engineering",
      institution: "School of Automation, Beijing Institute of Technology (BIT)",
      location: "Beijing, China",
      period: "2019 – 2023",
      description:
        "In my doctoral dissertation, I developed data-driven models for fault detection, isolation, and accommodation in fixed-wing aircraft flight control systems.",
    },
    {
      id: "msc",
      degree: "Master of Science (MSc) in Electrical Engineering (Control Engineering)",
      institution: "Addis Ababa University (AAU)",
      location: "Addis Ababa, Ethiopia",
      period: "2010 – 2013",
      description: "",
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (BSc) in Electrical Engineering",
      institution: "Mekelle University",
      location: "Mekelle, Ethiopia",
      period: "2005 – 2009",
      description: "",
    },
  ] as EducationItem[],

  projects: [
    {
      id: "hybrid-sensor-fusion",
      title: "Hybrid Physics-Informed and Data-Driven Sensor Fusion for Fault Detection",
      role: "Project Lead",
      researchType: "Postdoctoral Research",
      institution: "Beijing Institute of Technology",
      period: "Mar 2024 – Sep 2026",
      challenge:
        "I address the critical vulnerability of Angle-of-Attack sensors in flight control, stall prevention, and fly-by-wire envelope limiters, where physical hardware redundancy can suffer common-mode failures such as icing, bird strikes, electrical failure or mechanical jams.",
      methodology:
        "I proposed several methods that use both physics-based modeling and data-driven machine learning methods (Physics-Informed Transformers and Hybrid Kalman-LSTM networks). It fuses angle-of-attack, inertial, airspeed, altitude and attitude data to isolate faulty signals and reconstruct the sensor value in real time.",
      contributionAndImpact:
        "I validated this methodology on real flight dataset, demonstrating that my proposed method mitigates sudden sensor bias and gain drift with sub-degree accuracy. My framework eliminates single-point-of-fault vulnerabilities in safety-critical flight control without adding physical airframe weight or hardware complexity. The work resulted in three first-author SCI Q1 journal articles (2026).",
      relevantPaperDoi: "10.1016/j.ast.2026.112390",
    },
    {
      id: "classroom-rag-agent",
      title: "Multimodal Classroom Behaviour Evaluation with Fuzzy Logic, LLM Agents and Agentic RAG",
      role: "Main Contributor",
      researchType: "Postdoctoral Research",
      institution: "Beijing Institute of Technology",
      period: "Mar 2024 – Sep 2026",
      challenge:
        "I address the difficulty of evaluating teaching and learning quality consistently from the raw, unstructured signals of a live classroom (video, audio and text), where perception outputs alone do not explain what is happening.",
      methodology:
        "I designed an agentic layer on top of a video, audio and text perception pipeline with fuzzy-logic fusion. A large language model agent (Qwen2.5-Max) with retrieval-augmented generation (RAG) and a ReAct-style reasoning loop interprets the perception outputs and produces automated evaluations of teaching and learning.",
      contributionAndImpact:
        "I delivered a practical implementation and piloted it in a live classroom setting. The work produced one journal article and several conference papers as corresponding author, and I guided student researchers to their own publications on the platform.",
      relevantPaperDoi: "10.1007/978-981-95-6730-0_10",
    },
    {
      id: "aoa-fdia-doctoral",
      title: "Data-Driven Fault Detection, Isolation and Accommodation for Aircraft Angle-of-Attack Sensors",
      role: "Project Lead",
      researchType: "Doctoral Research",
      institution: "Beijing Institute of Technology",
      period: "Sep 2020 – Jun 2023",
      challenge:
        "I address the loss of reliable angle-of-attack measurements in fixed-wing aircraft when a sensor fails, which threatens flight control and stall protection and cannot always be covered by duplicated hardware.",
      methodology:
        "I developed data-driven models, based on recurrent neural networks, that detect and isolate a faulty angle-of-attack sensor and accommodate it by predicting the correct measurement from the remaining flight data, so that flight continues on a reconstructed signal.",
      contributionAndImpact:
        "I validated the approach on F-16 flight conditions with faulty sensors, delivering a software-based accommodation scheme that needs no extra hardware. It resulted in two first-author SCI Q1 journal articles and one EI conference paper, and it formed the foundation for my later hybrid physics-informed work.",
      relevantPaperDoi: "10.1016/j.engappai.2022.104799",
    },
    {
      id: "solar-flour-mill",
      title: "Battery-Free, Solar-Powered Flour-Milling System",
      role: "Project Lead",
      institution: "Addis Ababa Science and Technology University",
      period: "Sep 2017 – Sep 2019",
      challenge:
        "I address the need for affordable milling in rural communities, where grid electricity is unreliable or unavailable and the cost and upkeep of batteries make conventional solar systems hard to sustain.",
      methodology:
        "I designed a battery-free, solar-powered milling system that drives the mill directly from solar energy, working from concept through design to a functioning prototype.",
      contributionAndImpact:
        "I delivered an economically viable and sustainable solution for rural communities, demonstrated as a working prototype.",
    },
    {
      id: "oxygen-unit-feasibility",
      title: "Feasibility Study: Oxygen Production Unit, Debre Berhan Hospital",
      role: "Project Developer",
      institution: "Rotary Club of Debre Berhan",
      period: "Oct 2015 – Oct 2017",
      challenge:
        "I address the medical need for a dependable oxygen supply at Debre Berhan Hospital.",
      methodology:
        "I carried out a feasibility study of an on-site oxygen production facility, assessing whether such a unit could be established and operated to serve the hospital.",
      contributionAndImpact:
        "I provided the evidence base for deciding whether to invest in on-site oxygen production for the hospital.",
    },
    {
      id: "waste-management-sanitation",
      title: "Pre-Feasibility Study: Solid Waste Management and Sanitation, Debre Berhan City",
      role: "Project Developer",
      institution: "Rotary Club of Debre Berhan",
      period: "Oct 2015 – Oct 2017",
      challenge:
        "I address the sanitation and solid waste challenges of a growing city, which are central to sustainable urban development.",
      methodology:
        "I evaluated the existing situation and options for waste management and sanitation in Debre Berhan city through a pre-feasibility study.",
      contributionAndImpact:
        "I proposed an effective waste management and sanitation system to support sustainable urban development.",
    },
  ] as ResearchProject[],

  publications: [
    {
      id: "ast-2026",
      title: "Physics-informed transformer with residual analysis and adaptive threshold Kalman filter for angle-of-attack sensor fault detection",
      authors: ["Bemnet Wondimagegnehu Mersha", "Yaping Dai"],
      venue: "Aerospace Science and Technology (Elsevier)",
      year: 2026,
      type: "journal",
      doi: "10.1016/j.ast.2026.112390",
      doiUrl: "https://doi.org/10.1016/j.ast.2026.112390",
      highlight: true,
      abstractSnippet:
        "Proposes a novel physics-informed transformer framework coupled with adaptive threshold Kalman filtering to achieve ultra-reliable fault detection for flight-critical angle-of-attack sensors under complex aerodynamic conditions.",
    },
    {
      id: "mssp-2026",
      title: "Hybrid Kalman filter and physics-informed long short-term memory network for enhanced fault diagnosis of aircraft angle-of-attack sensors",
      authors: ["Bemnet Wondimagegnehu Mersha", "Yaping Dai", "Kaoru Hirota"],
      venue: "Mechanical Systems and Signal Processing (Elsevier)",
      year: 2026,
      type: "journal",
      doi: "10.1016/j.ymssp.2026.114620",
      doiUrl: "https://doi.org/10.1016/j.ymssp.2026.114620",
      highlight: true,
      abstractSnippet:
        "Synthesizes classical model-based Kalman filtering with physics-informed LSTM networks, providing robust analytical redundancy and fault diagnosis under aerodynamic noise.",
    },
    {
      id: "measurement-2026",
      title: "Physics-based fault detection for aircraft angle of attack sensors: Bias–gain tracking and covariance-regularized innovation monitoring evaluated against recurrent neural network-based fault detection methods",
      authors: ["Bemnet Wondimagegnehu Mersha", "Yaping Dai", "Kaoru Hirota"],
      venue: "Measurement (Elsevier)",
      year: 2026,
      type: "journal",
      doi: "10.1016/j.measurement.2026.120416",
      doiUrl: "https://doi.org/10.1016/j.measurement.2026.120416",
      highlight: true,
      abstractSnippet:
        "Presents a rigorous comparative study between covariance-regularized innovation monitoring and recurrent deep learning approaches for identifying subtle bias and gain degradation in avionics.",
    },
    {
      id: "jaciii-2026",
      title: "Practical Application of Fuzzy Atmosfield with Machine Learning for Group Learning Assessment in Smart Classrooms",
      authors: ["Linyao Yang", "Ting Zhang", "Bemnet Wondimagegnehu Mersha", "Yaping Dai", "Kaoru Hirota", "Wei Dai", "Yumin Lin"],
      venue: "Journal of Advanced Computational Intelligence and Intelligent Informatics",
      year: 2026,
      type: "journal",
      doi: "10.20965/jaciii.2026.p0205",
      doiUrl: "https://doi.org/10.20965/jaciii.2026.p0205",
      highlight: false,
      abstractSnippet:
        "Applies fuzzy atmosphere estimation combined with computer vision to quantify collective student engagement in smart educational settings.",
    },
    {
      id: "springer-rag-2026",
      title: "Evaluating Learning States in Synchronous Remote Classes via Qwen2.5-Max with RAG and ReAct Agent",
      authors: ["Haoyuan He", "Bemnet Wondimagegnehu Mersha", "Yaping Dai", "Kaoru Hirota", "Wei Dai", "Yumin Lin"],
      venue: "Communications in Computer and Information Science (Springer)",
      year: 2026,
      type: "book-chapter",
      doi: "10.1007/978-981-95-6730-0_10",
      doiUrl: "https://doi.org/10.1007/978-981-95-6730-0_10",
      highlight: false,
      abstractSnippet:
        "Explores agentic reasoning frameworks using large foundation models, RAG, and ReAct paradigms to assess remote student engagement dynamics.",
    },
    {
      id: "kbs-2025",
      title: "PAFusion: A general image fusion network with adversarial representation learning",
      authors: ["Xingwang Liu", "Kaoru Hirota", "Yaping Dai", "Bemnet Wondimagegnehu Mersha", "Shuai Shao", "Jing Wang"],
      venue: "Knowledge-Based Systems (Elsevier)",
      year: 2025,
      type: "journal",
      doi: "10.1016/j.knosys.2025.113815",
      doiUrl: "https://doi.org/10.1016/j.knosys.2025.113815",
      highlight: true,
      abstractSnippet:
        "Introduces a generalized image and sensor fusion architecture utilizing adversarial representation learning for enhanced multimodal perception.",
    },
    {
      id: "ccis-head-2025",
      title: "Fuzzy-Based Head Attitude Estimation for Improved Students' Concentration Evaluation",
      authors: ["Zheng Zhou", "Kaoru Hirota", "Yaping Dai", "Md Shariful Islam", "Bemnet Wondimagegnehu Mersha", "Wei Dai", "Yumin Lin"],
      venue: "Communications in Computer and Information Science (Springer), Vol. 2124",
      year: 2025,
      type: "book-chapter",
      doi: "10.1007/978-981-96-4753-8_2",
      doiUrl: "https://doi.org/10.1007/978-981-96-4753-8_2",
      highlight: false,
      abstractSnippet:
        "Corresponding Author. Formulates a fuzzy attitude estimation pipeline to track head orientation metrics under unconstrained ambient lighting.",
    },
    {
      id: "ccis-noise-2025",
      title: "Gaussian and Non-Gaussian Noise Effects on Data-Driven Modeling: A Comparative Investigation",
      authors: ["Bemnet Wondimagegnehu Mersha", "Yaping Dai", "Kaoru Hirota"],
      venue: "Communications in Computer and Information Science (Springer), Vol. 2124",
      year: 2025,
      type: "book-chapter",
      doi: "10.1007/978-981-96-4753-8_1",
      doiUrl: "https://doi.org/10.1007/978-981-96-4753-8_1",
      highlight: false,
      abstractSnippet:
        "Investigates the robustness vulnerabilities of purely empirical neural network models when subjected to heavy-tailed, non-Gaussian sensor noise.",
    },
    {
      id: "asoc-drl-2024",
      title: "An efficient and lightweight off-policy actor–critic reinforcement learning framework",
      authors: ["Huaqing Zhang", "Hongbin Ma", "Xiaofei Zhang", "Bemnet Wondimagegnehu Mersha", "Ling Wang", "Ying Jin"],
      venue: "Applied Soft Computing (Elsevier), Vol. 163, 111814",
      year: 2024,
      type: "journal",
      doi: "10.1016/j.asoc.2024.111814",
      doiUrl: "https://doi.org/10.1016/j.asoc.2024.111814",
      highlight: true,
      abstractSnippet:
        "Formulates a computationally lightweight actor-critic reinforcement learning structure designed for edge execution in resource-constrained robotic systems.",
    },
    {
      id: "asoc-uav-2023",
      title: "Distributed cooperative search method for multi-UAV with unstable communications",
      authors: ["Huaqing Zhang", "Hongbin Ma", "Bemnet Wondimagegnehu Mersha", "Xiaofei Zhang", "Ying Jin"],
      venue: "Applied Soft Computing (Elsevier), Vol. 148, 110592",
      year: 2023,
      type: "journal",
      doi: "10.1016/j.asoc.2023.110592",
      doiUrl: "https://doi.org/10.1016/j.asoc.2023.110592",
      highlight: true,
      abstractSnippet:
        "Proposes an autonomous decentralized cooperative search algorithm for drone swarms experiencing high communication dropout and channel unreliability.",
    },
    {
      id: "cis-f16-2023",
      title: "Angle of attack prediction using recurrent neural networks in flight conditions with faulty sensors in the case of F-16 fighter jet",
      authors: ["Bemnet Wondimagegnehu Mersha", "David N. Jansen", "Hongbin Ma"],
      venue: "Complex & Intelligent Systems (Springer), 9, 2769–2782",
      year: 2023,
      type: "journal",
      doi: "10.1007/s40747-021-00612-6",
      doiUrl: "https://doi.org/10.1007/s40747-021-00612-6",
      highlight: true,
      abstractSnippet:
        "Demonstrates high-accuracy analytical redundancy on high-fidelity F-16 aerodynamic flight models, enabling real-time flight envelope protection despite total AoA hardware failure.",
    },
    {
      id: "eaai-2022",
      title: "Data-driven model for accommodation of faulty angle of attack sensor measurements in fixed winged aircraft",
      authors: ["Bemnet Wondimagegnehu Mersha", "Hongbin Ma"],
      venue: "Engineering Applications of Artificial Intelligence (Elsevier), Vol. 111, 104799",
      year: 2022,
      type: "journal",
      doi: "10.1016/j.engappai.2022.104799",
      doiUrl: "https://doi.org/10.1016/j.engappai.2022.104799",
      highlight: true,
      abstractSnippet:
        "Develops an end-to-end data-driven accommodation framework that seamlessly synthesizes virtual sensor signals during physical transducer failure.",
    },
    {
      id: "ccdc-2022",
      title: "Data-Driven Model for Detection, Isolation and Accommodation of Faulty Angle of Attack Sensor Measurements in Fixed Winged Aircraft",
      authors: ["Bemnet Wondimagegnehu Mersha", "Hongbin Ma"],
      venue: "34th Chinese Control and Decision Conference (CCDC), IEEE",
      year: 2022,
      type: "conference",
      doi: "10.1109/ccdc55256.2022.10033981",
      doiUrl: "https://doi.org/10.1109/ccdc55256.2022.10033981",
      highlight: false,
      abstractSnippet:
        "Conference presentation of the core triple-stage (Detection, Isolation, Accommodation) architecture for fixed-wing flight control safety.",
    },
    {
      id: "africon-2017",
      title: "Short time traffic flow identification and prediction at road junctions using Recurrent Multilayer Perceptron",
      authors: ["Bemnet Wondimagegnehu Mersha", "Getachew Alemu"],
      venue: "IEEE AFRICON 2017, IEEE",
      year: 2017,
      type: "conference",
      doi: "10.1109/afrcon.2017.8095448",
      doiUrl: "https://doi.org/10.1109/afrcon.2017.8095448",
      highlight: false,
      abstractSnippet:
        "Early pioneering investigation into recurrent neural architectures for dynamic state prediction in nonlinear transportation networks.",
    },
  ] as Publication[],

  distinctions: [
    {
      year: "2025",
      title: "Corresponding Author Distinction",
      organization: "Communications in Computer and Information Science (Springer)",
      detail:
        "I was selected as Corresponding Author for peer-reviewed research on fuzzy attitude estimation published in Springer.",
    },
    {
      year: "2023 – 2026",
      title: "Author in Tier-1 Elsevier & Springer Aerospace Journals",
      organization: "Aerospace Science and Technology, MSSP, Measurement, KBS, EAAI",
      detail:
        "I have published first-author breakthroughs in leading international journals indexed in SCI / Scopus with high impact factors.",
    },
    {
      year: "2019 – 2023",
      title: "Doctoral Fellowship Award",
      organization: "Beijing Institute of Technology",
      detail:
        "I was awarded a competitive doctoral research scholarship to pursue doctoral studies in Control Science and Engineering at BIT.",
    },
  ] as Distinction[],

  courses: [
    {
      id: "digital-control",
      title: "Digital Control",
      description:
        "Analysis and design of discrete-time control systems using Z-transform, state-space methods, and digital controller implementation.",
    },
    {
      id: "intro-control",
      title: "Introduction to Control",
      description:
        "Fundamentals of feedback control, transfer functions, time and frequency response, and stability analysis.",
    },
    {
      id: "modern-control",
      title: "Modern Control Engineering",
      description:
        "State-space modeling, controllability, observability, state feedback, observers, and optimal control fundamentals.",
    },
    {
      id: "electrical-machines-drives",
      title: "Electrical Machines and Drives",
      description:
        "Principles, operation, modeling, and control of DC and AC electrical machines and drive systems.",
    },
    {
      id: "power-electronics-drives",
      title: "Power Electronics and Electric Drives",
      description:
        "Power electronic converters, motor drive systems, PWM techniques, and speed control of electric machines.",
    },
    {
      id: "intro-robotics",
      title: "Introduction to Robotics",
      description:
        "Modeling, kinematics, Jacobian analysis, dynamics, trajectory planning, and feedback control of industrial robotic manipulators.",
    },
    {
      id: "digital-signal-processing",
      title: "Digital Signal Processing",
      description:
        "Discrete-time signals and systems, digital filter design, Z-transform, DFT, and FFT for signal analysis.",
    },
  ] as CourseItem[],
};
