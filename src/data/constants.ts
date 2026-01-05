type Template = "PAR" | "WCO";

export type Project = {
  title: string;
  note: string;
  desc: string;
  tags: string[];
  template: Template;
  details: {
    aTitle: string; // Problem OR What I built
    aBody: string;
    bTitle: string; // Approach OR Challenges
    bBody: string;
    cTitle: string; // Result OR Outcome
    cBody: string;
    stack: string[];
    links?: { github?: string; demo?: string };
  };
};

export const ACCENT = "text-sky-300";

export const projects: Project[] = [
  {
    title: "Fintech Backoffice Modules",
    note: "Work • SaaS",
    desc: "Production features across payouts, competitions, certificate generation, and admin dashboards.",
    tags: ["Next.js", "NestJS", "MongoDB", "AntD"],
    template: "PAR",
    details: {
      aTitle: "Problem",
      aBody:
        "Ops-critical flows need to be reliable, auditable, and fast—small edge cases can break real payouts and support operations.",
      bTitle: "Approach",
      bBody:
        "Built modular services and UI flows with strict validation, clear state transitions, and careful date/time handling for competitions and payouts.",
      cTitle: "Result",
      cBody:
        "Shipped multiple modules used daily by ops; improved maintainability and reduced regressions with consistent patterns and cleaner boundaries.",
      stack: ["Next.js", "NestJS", "MongoDB", "Ant Design", "TypeScript"],
      links: { github: "", demo: "" },
    },
  },
  {
    title: "GaugeVision",
    note: "FYP • AI + systems",
    desc: "Analog gauge reading system using YOLO for dial detection and OCR for scale extraction.",
    tags: ["Computer Vision", "YOLO", "OCR", "API"],
    template: "PAR",
    details: {
      aTitle: "Problem",
      aBody:
        "Manual gauge reading is slow and error-prone in industrial settings, especially with glare, tilt, and noisy dials.",
      bTitle: "Approach",
      bBody:
        "Detected the dial with YOLO, normalized the crop, extracted scale text via OCR, and mapped needle angle → value with a robust pipeline.",
      cTitle: "Result",
      cBody:
        "A modular CV pipeline that tolerates real-world noise and is easy to evaluate and improve step-by-step.",
      stack: ["Python", "YOLO", "OpenCV", "OCR", "API"],
      links: { github: "https://github.com/", demo: "" },
    },
  },
  {
    title: "Web3 Portfolio Auth",
    note: "Side • infra-minded",
    desc: "Auth + DB design with Prisma/Postgres and a clean Dockerized local setup.",
    tags: ["Next.js", "Prisma", "Postgres", "Docker"],
    template: "WCO",
    details: {
      aTitle: "What I built",
      aBody:
        "A clean auth + database baseline with Prisma/Postgres, designed to be easy to run locally and deploy confidently.",
      bTitle: "Challenges",
      bBody:
        "Keeping environment parity (local vs deploy), handling schema evolution, and making the setup ‘one command to run’ without surprises.",
      cTitle: "Outcome",
      cBody:
        "A dependable starter architecture I can reuse for future products—predictable setup, clear schema changes, and scalable foundations.",
      stack: ["Next.js", "Prisma", "Postgres", "Docker"],
      links: { github: "https://github.com/", demo: "" },
    },
  },
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "MongoDB",
  "Postgres",
  "Prisma",
  "Docker",
  "AWS",
  "REST APIs",
  "System Design",
];
