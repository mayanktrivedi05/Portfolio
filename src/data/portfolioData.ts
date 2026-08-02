export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; icon: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badgeColor: string;
  link?: string;
}

export interface Achievement {
  title: string;
  highlight: string;
  description: string;
  metric: string;
  icon: string;
  link?: string;
}

export interface Stat {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  subtext: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mayank Trivedi",
    firstName: "Mayank",
    lastName: "Trivedi",
    title: "Agentic AI Developer & Full-Stack Engineer",
    shortBio:
      "Passionate Agentic AI Developer & Full-Stack Engineer specializing in autonomous multi-agent orchestration, RAG pipelines, distributed microservices, event-driven architectures, and high-concurrency systems.",
    aboutBio:
      "I build high-performance distributed web applications and intelligent Gen AI systems. Currently pursuing B.Tech in Computer Science and Engineering at BIET Jhansi, I bridge the gap between robust backend architectures (Node.js, Go, Redis, Microservices) and cutting-edge Gen AI orchestration (LangChain, LangGraph, Vector DBs, RAG). Dedicated to crafting seamless user experiences backed by fault-tolerant, scalable systems.",
    email: "trivedim115@gmail.com",
    phone: "+91-8318512734",
    location: "Chitrakoot, Uttar Pradesh, India",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com/mayanktrivedi05",
      githubUsername: "mayanktrivedi05",
      linkedin: "https://www.linkedin.com/in/mayank-trivedi-73909b292/",
      linkedinUsername: "Mayank Trivedi",
      email: "mailto:trivedim115@gmail.com",
      leetcode1: "https://leetcode.com/u/mayank83",
      leetcode2: "https://leetcode.com/u/mayank9794",
    },
  },

  stats: [
    {
      label: "CGPA",
      value: "8.83",
      numericValue: 8.83,
      subtext: "BIET Jhansi (2023–2027)",
      icon: "graduation",
    },
    {
      label: "DSA Solved",
      value: "350+",
      numericValue: 350,
      suffix: "+",
      subtext: "LeetCode (mayank83 / mayank9794)",
      icon: "code",
    },
    {
      label: "LeetCode Rank",
      value: "1098",
      numericValue: 1098,
      subtext: "Global Rank in Contest 427",
      icon: "trophy",
    },
    {
      label: "GATE CS Qualified",
      value: "420",
      numericValue: 420,
      subtext: "Score in GATE (CS)",
      icon: "award",
    },
  ] as Stat[],

  education: {
    institution: "Bundelkhand Institute of Engineering & Technology (BIET)",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 – 2027",
    grade: "CGPA 8.83",
    location: "Jhansi, Uttar Pradesh, India",
    highlights: [
      "Focused on Data Structures, Algorithms, Operating Systems, Database Management Systems, and Computer Networks.",
      "GATE CS Qualified (Score 420).",
      "Active participant in competitive programming and AI hackathons.",
    ],
  },

  skillCategories: [
    {
      title: "Languages",
      iconName: "code-2",
      skills: [
        { name: "Python", icon: "SiPython" },
        { name: "Go (Golang)", icon: "SiGo" },
        { name: "C", icon: "SiC" },
        { name: "C++", icon: "SiCplusplus" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "SQL", icon: "SiPostgresql" },
        { name: "NoSQL", icon: "SiMongodb" },
      ],
    },
    {
      title: "Backend & Cloud",
      iconName: "server",
      skills: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express.js", icon: "SiExpress" },
        { name: "Microservices", icon: "SiDocker" },
        { name: "Redis", icon: "SiRedis" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "Docker", icon: "SiDocker" },
        { name: "AWS S3", icon: "SiAmazonaws" },
      ],
    },
    {
      title: "Frontend",
      iconName: "layout",
      skills: [
        { name: "React.js", icon: "SiReact" },
        { name: "Redux Toolkit", icon: "SiRedux" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "Recharts", icon: "SiChartdotjs" },
        { name: "HTML5 / CSS3", icon: "SiHtml5" },
      ],
    },
    {
      title: "Gen AI & Tools",
      iconName: "brain",
      skills: [
        { name: "LLMs & RAG", icon: "SiOpenai" },
        { name: "LangChain", icon: "SiLangchain" },
        { name: "LangGraph", icon: "SiLangchain" },
        { name: "Qdrant Vector DB", icon: "SiDatabricks" },
        { name: "OpenAI API", icon: "SiOpenai" },
        { name: "Gemini API", icon: "SiGoogle" },
        { name: "Git", icon: "SiGit" },
        { name: "Postman", icon: "SiPostman" },
        { name: "Firebase", icon: "SiFirebase" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      role: "Freelance Software Development",
      company: "Full Stack & Systems Developer",
      period: "Jul 2025 – Sep 2025",
      location: "Remote, India",
      type: "Contract / Freelance",
      bullets: [
        "Architected and deployed custom web applications for clients, integrating Node.js, React.js, and PostgreSQL to deliver dynamic user dashboards and secure API gateways.",
        "Engineered distributed caching with Redis and database indexing, improving API response times by 30% across high-traffic data workflows.",
        "Designed resilient database schemas and optimized SQL queries to support seamless concurrent transactions under heavy read/write workloads.",
        "Integrated robust authentication pipelines and role-based access control (RBAC) ensuring enterprise-level security standards.",
      ],
      skills: [
        "Node.js",
        "React.js",
        "PostgreSQL",
        "Redis",
        "API Gateway",
        "Caching",
        "Tailwind CSS",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "multi-agent-ai",
      title: "Multi-Agent.AI",
      subtitle: "Autonomous Multi-Agent AI & RAG Orchestration Platform",
      description:
        "Event-driven microservices system powering an autonomous multi-agent AI pipeline capable of Multimodal Vision analysis, PDF RAG, Live Web Search, and automated PPT generation.",
      bullets: [
        "Engineered an event-driven microservices backend (API Gateway, Auth, Chat, AI Agent, Billing) using Node.js, Express, and Redis Pub/Sub for low-latency inter-service communication.",
        "Built an autonomous multi-agent AI pipeline (Vision, PDF RAG, Web Search, PPT Generation) utilizing Qdrant Vector DB, LangChain, and Groq/Gemini LLMs for real-time multimodal processing.",
        "Implemented Redis caching, MongoDB Atlas persistence, and AWS S3 object storage; containerized 5 microservices with Docker Compose and Nginx reverse proxy for production deployment.",
      ],
      techStack: [
        "Node.js",
        "React",
        "Docker",
        "Redis",
        "Qdrant",
        "LangGraph",
        "LangChain",
        "Groq",
        "AWS S3",
      ],
      liveUrl: "https://multi-a-gent-system.vercel.app/",
      githubUrl: "https://github.com/mayanktrivedi05/MultiAGent-System",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      featured: true,
      gradient: "from-purple-600 via-indigo-600 to-cyan-500",
    },
    {
      id: "interviewiq-ai",
      title: "InterViewIQ.Ai",
      subtitle: "AI-Powered Adaptive Mock Interview & Evaluation Platform",
      description:
        "Full-stack AI Mock Interview platform providing instant real-time evaluation with adaptive role-specific questioning and comprehensive performance analytics.",
      bullets: [
        "Built a full-stack AI-powered Mock Interview Platform with instant evaluation using OpenAI GPT-4o-mini via OpenRouter API for role-specific, adaptive-difficulty questions.",
        "Developed a secure resume parsing pipeline using Multer and PDF.js, converting uploaded PDF resumes into structured JSON payloads for AI processing.",
        "Integrated JWT authentication and Razorpay Payment Gateway for a credit-based subscription model, featuring an analytics dashboard built with Redux Toolkit and Recharts.",
      ],
      techStack: [
        "React 19",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GPT-4o-mini",
        "JWT",
        "Razorpay",
        "Redux Toolkit",
        "Recharts",
      ],
      liveUrl: "https://ai-interview-frontend-wlvd.onrender.com",
      githubUrl: "https://github.com/mayanktrivedi05/AI_INTERVIEW",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      featured: true,
      gradient: "from-cyan-500 via-blue-600 to-purple-600",
    },
    {
      id: "hotel-booking",
      title: "Hotel Booking Platform",
      subtitle: "Distributed Microservices Booking Engine with Redlock Concurrency",
      description:
        "High-concurrency distributed booking system in Go & Node.js featuring Redis Redlock distributed locking to guarantee zero double-bookings under peak traffic.",
      bullets: [
        "Architected a microservices-driven hotel booking platform with Golang and Node.js, enabling scalable, fault-tolerant, and independently deployable services.",
        "Implemented distributed locking using Redis Redlock and idempotency mechanisms, effectively eliminating race conditions and preventing duplicate bookings under high concurrency.",
        "Developed a JWT authentication service and reverse proxy gateway with asynchronous background tasks via Redis queues for notification dispatches.",
      ],
      techStack: [
        "Golang",
        "Node.js",
        "Express.js",
        "TypeScript",
        "Redis",
        "MySQL",
        "JWT",
        "REST APIs",
      ],
      liveUrl: "https://github.com/mayanktrivedi05/AirBnB",
      githubUrl: "https://github.com/mayanktrivedi05/AirBnB",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      featured: true,
      gradient: "from-emerald-500 via-teal-600 to-cyan-500",
    },
  ] as Project[],

  certifications: [
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      badgeColor: "from-blue-500 to-cyan-500",
      link: "https://simpli-web.app.link/e/nfgzN6pvd5b",
    },
    {
      title: "AWS Services Fundamentals",
      issuer: "Simplilearn",
      badgeColor: "from-amber-500 to-orange-600",
      link: "https://simpli-web.app.link/e/ttP5KRBNd5b",
    },
    {
      title: "Full Stack Developer Certification",
      issuer: "Simplilearn",
      badgeColor: "from-purple-500 to-indigo-600",
      link: "https://simpli-web.app.link/e/C3iwclTge5b",
    },
  ] as Certification[],

  achievements: [
    {
      title: "350+ DSA Problems Solved",
      highlight: "Algorithms & CP",
      description: "Solved across LeetCode Profiles: Profile 1 (mayank83) & CP Profile (mayank9794).",
      metric: "350+",
      icon: "code",
      link: "https://leetcode.com/u/mayank83",
    },
    {
      title: "Global Rank 1098",
      highlight: "LeetCode Contest 427",
      description: "Achieved top global ranking among thousands of international competitive programmers.",
      metric: "#1098",
      icon: "trophy",
      link: "https://leetcode.com/u/mayank83",
    },
    {
      title: "GATE (CS) Qualified",
      highlight: "Score 420",
      description: "Qualified Graduate Aptitude Test in Engineering (Computer Science) Examination.",
      metric: "Score 420",
      icon: "award",
    },
  ] as Achievement[],
};
