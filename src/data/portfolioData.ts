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

export interface ResearchTheme {
  id: string;
  title: string;
  tagline: string;
  description: string;
  methodology: string;
  applications: string[];
}

export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  contribution: string;
  impact: string;
  relevantPaperDoi: string;
  venueName: string;
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  category: "appointment" | "education";
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
    title: "Postdoctoral Researcher | Artificial Intelligence & Control Engineering",
    affiliation: "School of Automation, Beijing Institute of Technology (BIT)",
    location: "Beijing, China",
    credo: "Engineering Trustworthy Intelligence.",
    headline: "Unifying physics-based dynamic modeling, adaptive state estimation, and deep neural architectures for mission-critical engineering reliability.",
    intro: `I am an engineering researcher advancing the foundations of intelligent control, physics-informed machine learning, and multimodal sensor diagnostics. My research addresses fundamental safety, reliability, and analytical redundancy challenges in autonomous systems and aerospace engineering—formulating hybrid architectures that couple physical governing equations with deep neural models to achieve verifiable, fail-safe estimation and fault accommodation under extreme uncertainty.`,
    bioP1: `I hold a Ph.D. in Control Science and Engineering from the School of Automation at Beijing Institute of Technology (BIT), an Executive Master of Business Administration (EMBA) from Quantic School of Business and Technology, an M.Sc. in Electrical Engineering (Control Engineering) from Addis Ababa University, and a B.Sc. in Electrical Engineering from Mekelle University.`,
    bioP2: `Prior to my postdoctoral appointment at Beijing Institute of Technology, I served as a university lecturer in electrical and control engineering at Addis Ababa Science and Technology University (AASTU) and Debre Berhan University. My scientific work bridges classical systems engineering—including state estimation, Kalman filtering, Lyapunov stability, and non-linear control—with modern data-driven intelligence.`,
    bioP3: `My research investigates how to instill mathematical trust and physical consistency into machine learning systems operating in mission-critical environments. By synergizing physics-informed neural networks (PINNs), transformers, and adaptive Kalman filters, my models detect, isolate, and accommodate complex sensor degradation in real time, ensuring that autonomous vehicles and aerospace platforms maintain operational safety.`,
    links: {
      scholar: "https://scholar.google.com/citations?user=0djAtWkAAAAJ",
      orcid: "https://orcid.org/0000-0002-1000-8984",
      linkedin: "https://www.linkedin.com/in/bemnet-mersha-501745155/",
      orcidId: "0000-0002-1000-8984",
    },
  },

  researchThemes: [
    {
      id: "physics-informed-ml",
      title: "Physics-Informed Machine Learning & Hybrid Modeling",
      tagline: "Bridging governing physical equations and deep neural representations",
      description: "I integrate conservation principles, aerodynamic governing equations, and kinematic constraints directly into loss functions and transformer architectures to guarantee generalization and eliminate physically unviable outputs.",
      methodology: "PINNs, Physics-Informed Transformers, Residual Invariant Learning, Hybrid Recurrent Networks",
      applications: ["Flight Dynamics", "Aerodynamic State Estimation", "Predictive Diagnostics"],
    },
    {
      id: "sensor-fdia",
      title: "Sensor Fault Detection, Isolation & Accommodation (FDIA)",
      tagline: "Real-time analytical redundancy for safety-critical avionics",
      description: "I develop adaptive threshold Kalman filters and innovation covariance monitoring to detect subtle sensor drift, bias, and sudden telemetry failures in aircraft angle-of-attack (AoA) instrumentation.",
      methodology: "Adaptive Threshold Kalman Filtering, Bias-Gain Tracking, Innovation Regularization, Analytical Redundancy",
      applications: ["Fixed-Wing Aircraft", "F-16 Flight Control", "Avionic Sensor Integrity"],
    },
    {
      id: "sensor-fusion",
      title: "Multimodal Sensor Fusion & State Estimation",
      tagline: "Robust state reconstruction under non-Gaussian disturbances",
      description: "I formulate filtering frameworks that unify asynchronous, heterogeneous sensor feeds while insulating estimation against non-Gaussian noise perturbations and adversarial telemetry interference.",
      methodology: "Adversarial Representation Learning, Fuzzy State Estimation, Multimodal Feature Alignment",
      applications: ["Industrial Automation", "Robotic Perception", "Smart Classroom Diagnostics"],
    },
    {
      id: "autonomous-systems",
      title: "Autonomous Multi-Agent Robotics & Resilient Control",
      tagline: "Cooperative mission execution over degraded communication channels",
      description: "I design lightweight off-policy actor-critic reinforcement learning algorithms and distributed search paradigms capable of maintaining collective multi-UAV mission objectives despite packet loss and communication latency.",
      methodology: "Off-Policy Actor-Critic DRL, Distributed Consensus, Cooperative Area Search Algorithms",
      applications: ["Multi-UAV Swarms", "Search & Rescue Operations", "Distributed Robotic Systems"],
    },
  ] as ResearchTheme[],

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
      abstractSnippet: "Proposes a novel physics-informed transformer framework coupled with adaptive threshold Kalman filtering to achieve ultra-reliable fault detection for flight-critical angle-of-attack sensors under complex aerodynamic conditions.",
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
      abstractSnippet: "Synthesizes classical model-based Kalman filtering with physics-informed LSTM networks, providing robust analytical redundancy and fault diagnosis under aerodynamic noise.",
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
      abstractSnippet: "Presents a rigorous comparative study between covariance-regularized innovation monitoring and recurrent deep learning approaches for identifying subtle bias and gain degradation in avionics.",
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
      abstractSnippet: "Applies fuzzy atmosphere estimation combined with computer vision to quantify collective student engagement in smart educational settings.",
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
      abstractSnippet: "Explores agentic reasoning frameworks using large foundation models, RAG, and ReAct paradigms to assess remote student engagement dynamics.",
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
      abstractSnippet: "Introduces a generalized image and sensor fusion architecture utilizing adversarial representation learning for enhanced multimodal perception.",
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
      abstractSnippet: "Corresponding Author. Formulates a fuzzy attitude estimation pipeline to track head orientation metrics under unconstrained ambient lighting.",
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
      abstractSnippet: "Investigates the robustness vulnerabilities of purely empirical neural network models when subjected to heavy-tailed, non-Gaussian sensor noise.",
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
      abstractSnippet: "Formulates a computationally lightweight actor-critic reinforcement learning structure designed for edge execution in resource-constrained robotic systems.",
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
      abstractSnippet: "Proposes an autonomous decentralized cooperative search algorithm for drone swarms experiencing high communication dropout and channel unreliability.",
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
      abstractSnippet: "Demonstrates high-accuracy analytical redundancy on high-fidelity F-16 aerodynamic flight models, enabling real-time flight envelope protection despite total AoA hardware failure.",
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
      abstractSnippet: "Develops an end-to-end data-driven accommodation framework that seamlessly synthesizes virtual sensor signals during physical transducer failure.",
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
      abstractSnippet: "Conference presentation of the core triple-stage (Detection, Isolation, Accommodation) architecture for fixed-wing flight control safety.",
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
      abstractSnippet: "Early pioneering investigation into recurrent neural architectures for dynamic state prediction in nonlinear transportation networks.",
    },
  ] as Publication[],

  projects: [
    {
      id: "flight-sensor-integrity",
      title: "Analytical Redundancy & Fault Accommodation in Aircraft Flight Systems",
      subtitle: "Angle-of-Attack (AoA) Sensor Integrity & Envelope Protection",
      challenge: "I address the critical vulnerability of Angle-of-Attack sensors in flight control, stall prevention, and fly-by-wire envelope limiters, where physical hardware redundancy can suffer common-mode failures such as icing, bird strikes, or mechanical jams.",
      approach: "I formulated a hybrid analytical redundancy scheme coupling physical aerodynamic equations with deep temporal learning (Physics-Informed Transformers and Hybrid Kalman-LSTM networks) to isolate false signals and reconstruct synthetic telemetry in real time.",
      contribution: "I validated this methodology on high-fidelity aerodynamic simulations of the F-16 aircraft, demonstrating that my hybrid estimator tracks rapid pitch-rate transitions and mitigates sudden sensor bias and gain drift with sub-degree accuracy.",
      impact: "My framework eliminates single-point-of-failure vulnerabilities in safety-critical flight control computers without adding physical airframe weight or hardware complexity.",
      relevantPaperDoi: "10.1016/j.ast.2026.112390",
      venueName: "Aerospace Science and Technology & MSSP",
    },
    {
      id: "cooperative-uav-search",
      title: "Decentralized Cooperative Multi-UAV Search in Degraded Environments",
      subtitle: "Autonomous Consensus Under Packet Loss & Communication Latency",
      challenge: "Cooperative autonomous search by drone swarms traditionally relies on continuous, high-bandwidth communication links that fail in contested, remote, or disaster environments.",
      approach: "I engineered a distributed cooperative search methodology powered by a lightweight off-policy actor-critic reinforcement learning framework, enabling agents to maintain internal probabilistic environment maps and execute cooperative actions via consensus estimators.",
      contribution: "I demonstrated superior target discovery rates and coverage completeness under severe communication interruption, achieving significant reductions in required parameter counts compared to standard DRL baselines.",
      impact: "My approach enables robust deployment of autonomous robotic teams for search-and-rescue, environmental reconnaissance, and disaster monitoring in communications-denied environments.",
      relevantPaperDoi: "10.1016/j.asoc.2023.110592",
      venueName: "Applied Soft Computing",
    },
    {
      id: "multimodal-feature-fusion",
      title: "Adversarial Representation Learning for Multimodal Perception",
      subtitle: "Noise-Insulated Image & State Fusion for Edge Diagnostics",
      challenge: "Heterogeneous sensing streams (optical, infrared, kinematic) often display disparate noise profiles and environmental degradations that confound standard end-to-end neural networks.",
      approach: "I designed PAFusion, a generalized fusion network leveraging adversarial representation learning to separate invariant shared physical features from modality-specific noise artifacts, ensuring coherent state reconstruction.",
      contribution: "I benchmarked this architecture against state-of-the-art vision and multimodal perception datasets, achieving superior structural fidelity, edge sharpness, and minimal informational entropy loss.",
      impact: "My network provides a foundational perception pipeline for autonomous ground vehicles, intelligent robotics, and industrial digital twins.",
      relevantPaperDoi: "10.1016/j.knosys.2025.113815",
      venueName: "Knowledge-Based Systems",
    },
  ] as ResearchProject[],

  timeline: [
    {
      year: "2023 – Present",
      period: "Aug 2023 – Dec 2025",
      title: "Postdoctoral Researcher",
      institution: "School of Automation, Beijing Institute of Technology (BIT)",
      location: "Beijing, China",
      category: "appointment",
      description: "I lead research on physics-informed neural networks, sensor fault diagnosis, and hybrid state estimation in safety-critical systems in collaboration with international researchers.",
    },
    {
      year: "2024 – 2026",
      period: "Aug 2024 – Jan 2026",
      title: "Executive Master of Business Administration (EMBA)",
      institution: "Quantic School of Business and Technology",
      location: "Washington D.C., United States",
      category: "education",
      description: "I am completing an advanced program in technology strategy, organizational finance, and global executive leadership.",
    },
    {
      year: "2019 – 2023",
      period: "Sep 2019 – May 2023",
      title: "Doctor of Philosophy (Ph.D.) in Control Science & Engineering",
      institution: "School of Automation, Beijing Institute of Technology (BIT)",
      location: "Beijing, China",
      category: "education",
      description: "In my doctoral dissertation, I developed data-driven and physics-informed models for fault detection, isolation, and accommodation in fixed-wing aircraft flight control systems.",
    },
    {
      year: "2016 – 2019",
      period: "Oct 2016 – Sep 2019",
      title: "Lecturer in Electrical & Control Engineering",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      location: "Addis Ababa, Ethiopia",
      category: "appointment",
      description: "I delivered undergraduate and graduate coursework in control systems engineering, linear systems, and computational intelligence, and supervised engineering capstone projects.",
    },
    {
      year: "2013 – 2016",
      period: "Feb 2013 – Sep 2016",
      title: "Lecturer in Electrical Engineering",
      institution: "Debre Berhan University (DBU)",
      location: "Debre Berhan, Ethiopia",
      category: "appointment",
      description: "I taught electrical engineering, instrumentation, and control system design, while contributing to academic curriculum development.",
    },
    {
      year: "2010 – 2013",
      period: "Sep 2010 – Jul 2013",
      title: "Master of Science (M.Sc.) in Electrical Engineering (Control Engineering)",
      institution: "Addis Ababa University (AAU)",
      location: "Addis Ababa, Ethiopia",
      category: "education",
      description: "I specialized in advanced control theory, state estimation, and dynamic modeling of nonlinear systems.",
    },
    {
      year: "2005 – 2009",
      period: "Sep 2005 – Jul 2009",
      title: "Bachelor of Science (B.Sc.) in Electrical Engineering",
      institution: "Mekelle University",
      location: "Mekelle, Ethiopia",
      category: "education",
      description: "I completed my undergraduate engineering degree with foundational coursework in circuit theory, signals & systems, and applied electromagnetics.",
    },
  ] as TimelineItem[],

  distinctions: [
    {
      year: "2025",
      title: "Corresponding Author Distinction",
      organization: "Communications in Computer and Information Science (Springer)",
      detail: "I was selected as Corresponding Author for peer-reviewed research on fuzzy attitude estimation published in Springer.",
    },
    {
      year: "2023 – 2026",
      title: "Author in Tier-1 Elsevier & Springer Aerospace Journals",
      organization: "Aerospace Science and Technology, MSSP, Measurement, KBS, EAAI",
      detail: "I have published first-author breakthroughs in leading international journals indexed in SCI / Scopus with high impact factors.",
    },
    {
      year: "2019 – 2023",
      title: "Doctoral Fellowship Award",
      organization: "Beijing Institute of Technology",
      detail: "I was awarded a competitive doctoral research scholarship to pursue doctoral studies in Control Science and Engineering at BIT.",
    },
  ] as Distinction[],
};
