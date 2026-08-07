export const profile = {
  name: "Pallavi Soldey",
  role: "Senior Full Stack Developer",
  location: "Raipur, India",
  status: "Available for select opportunities",
  tagline:
    "I build scalable enterprise applications with React, Next.js, Node.js and the Frappe Framework — from architecture and APIs to the last pixel.",
  email: "pallavisolday12@gmail.com",
  linkedin: "https://www.linkedin.com/in/pallavi-soldey-1b3888211/",
  linkedinLabel: "in/pallavi-soldey-1b3888211",
  github: "https://github.com/pallavi0112",
  githubLabel: "@pallavi0112",
  resumeUrl: "#", // TODO: replace with your hosted resume PDF URL
};

export const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 15, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export const aboutPillars = [
  {
    title: "Architecture",
    body: "Modern frontend architecture and clean, typed backend APIs.",
  },
  {
    title: "Ownership",
    body: "End-to-end delivery from requirements to production release.",
  },
  {
    title: "Communication",
    body: "Direct client communication, requirement gathering, team leadership.",
  },
];

export const skillGroups = [
  {
    index: "01",
    name: "Frontend",
    tag: "Interfaces & experience",
    categoryIcon: "layout",
    skills: [
      { name: "React.js", icon: "atom" },
      { name: "Next.js", icon: "layers" },
      { name: "TypeScript", icon: "filecode" },
      { name: "Redux / Toolkit", icon: "blocks" },
      { name: "Tailwind CSS", icon: "paintbrush" },
      { name: "JavaScript", icon: "braces" },
    ],
  },
  {
    index: "02",
    name: "Backend",
    tag: "APIs & business logic",
    categoryIcon: "server",
    skills: [
      { name: "Node.js", icon: "leaf" },
      { name: "Express.js", icon: "server" },
      { name: "NestJS", icon: "cpu" },
      { name: "Frappe / ERPNext", icon: "sparkles" },
    ],
  },
  {
    index: "03",
    name: "Database",
    tag: "Data & persistence",
    categoryIcon: "database",
    skills: [
      { name: "MongoDB", icon: "database" },
      { name: "MySQL", icon: "database" },
      { name: "PostgreSQL", icon: "database" },
    ],
  },
  {
    index: "04",
    name: "Tools",
    tag: "Build, ship & collaborate",
    categoryIcon: "wrench",
    skills: [
      { name: "Git / GitHub", icon: "gitbranch" },
      { name: "AWS", icon: "cloud" },
      { name: "Figma", icon: "figma" },
      { name: "Jest", icon: "flask" },
    ],
  },
];

export const experience = [
  {
    milestone: "01",
    status: "Present",
    icon: "rocket",
    role: "SDE-2",
    org: "Klaimify",
    body: "Building enterprise ERP applications end to end — from requirement gathering and client communication to architecture, delivery and team leadership.",
    points: [
      "Enterprise ERP applications",
      "Client communication & requirement gathering",
      "Team leadership and project ownership",
      "End-to-end delivery",
    ],
    tags: ["React.js", "Next.js", "Node.js", "Frappe Framework", "Frontend Architecture", "Backend APIs"],
  },
  {
    milestone: "02",
    status: null,
    icon: "briefcase",
    role: "Full Stack Developer",
    org: "EVD Technologies",
    body: "Delivered full stack products with realtime features, REST APIs and relational + document data models.",
    points: ["Realtime features with Socket.IO", "REST API design", "Full stack product delivery"],
    tags: ["React", "Next.js", "Node", "MongoDB", "MySQL", "Socket.IO"],
  },
  {
    milestone: "03",
    status: null,
    icon: "code",
    role: "Frontend Developer Intern",
    org: "CredoHire",
    body: "Built responsive product interfaces with a scalable state layer.",
    points: ["Responsive UI development", "State management with Redux Toolkit"],
    tags: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    milestone: "04",
    status: null,
    icon: "sparkles2",
    role: "Senior Web Development Intern",
    org: "Nable Invent Solution",
    body: "Developed component-driven interfaces and reusable UI systems.",
    points: ["Component-driven development", "Reusable UI patterns"],
    tags: ["React.js", "Redux"],
  },
];

export const projects = [
  {
    name: "Koradi Temple",
    tagline: "Complete temple booking & donation system",
    body: "An end-to-end booking platform handling pooja bookings, donations and payments with multiple gateway integrations and WhatsApp notifications.",
    outcome: "", // TODO: e.g. "Processed ₹__ in donations across __ bookings"
    points: ["CC Avenue integration", "Paytm payments", "WhatsApp API", "Manager POS"],
    tags: ["Next.js", "Node.js", "MySQL", "Frappe"],
    gradient: "from-[#3B5F86] to-[#425573]",
  },
  {
    name: "CG Tourism",
    tagline: "Tourism booking platform",
    body: "A state tourism booking platform for properties and packages, built on a Frappe backend with a modern Next.js storefront.",
    outcome: "", // TODO: e.g. "__ properties listed, __ bookings processed"
    points: ["Property & package booking", "Admin dashboard", "Payment workflow"],
    tags: ["Next.js", "Frappe Framework"],
    gradient: "from-[#2F7568] to-[#1F5C56]",
  },
  {
    name: "E-Pension",
    tagline: "Pension bill automation",
    body: "Automated pension bill generation and disbursal with ACH integration, reducing manual processing across departments.",
    outcome: "", // TODO: e.g. "Cut manual processing time by __%"
    points: ["ACH integration", "Bill automation", "Role-based access"],
    tags: ["React.js", "Node.js", "PostgreSQL"],
    gradient: "from-[#3B6A86] to-[#1F6E63]",
  },
  {
    name: "SellerPundit",
    tagline: "Multi-marketplace seller toolkit",
    body: "A seller operations platform syncing catalogs and orders across marketplaces with secure token-based auth.",
    outcome: "", // TODO: e.g. "Synced __ SKUs across __ marketplaces"
    points: ["eBay integration", "Walmart integration", "JWT auth", "Inventory sync"],
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-[#2F7A5C] to-[#3B5F86]",
  },
  {
    name: "Major Kalshi Classes",
    tagline: "Microservice learning platform",
    body: "A scalable education platform built on a microservice architecture with independent services for content, users and billing.",
    outcome: "", // TODO: e.g. "Supported __ concurrent learners"
    points: ["Microservices", "Service-to-service auth", "Scalable content delivery"],
    tags: ["NestJS", "MongoDB", "Next.js"],
    gradient: "from-[#2F8066] to-[#2C6B4F]",
  },
  {
    name: "Taksheela",
    tagline: "Enterprise dashboard suite",
    body: "A data-dense dashboard product with a themed Material UI system and a predictable Redux Toolkit state layer.",
    outcome: "", // TODO: e.g. "Consolidated __ reports into one dashboard"
    points: ["Material UI design system", "Redux Toolkit store", "Responsive dashboards"],
    tags: ["React.js", "Material UI", "Redux Toolkit"],
    gradient: "from-[#3B5F86] to-[#2F7568]",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
