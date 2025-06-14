import { ProjectItemType, ProjectCardType } from "@/types";

export const { duration, ease, delay } = {
  duration: 1,
  ease: "easeOut",
  delay: 0.2,
};

export const PROJECTS_LIST: ProjectItemType[] = [
  {
    year: 2025,
    name: "Sonicfi",
    href: "sonic-fi.com",
    link: "/project/sonicfi",
    previews: [
      "https://r2.tfan2437.workers.dev/projects/preview-sonicfi-0.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-sonicfi-1.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-sonicfi-2.webp",
    ],
  },
  {
    year: 2025,
    name: "Orbit AI",
    href: "orbits-ai.com",
    link: "/project/orbit",
    previews: [
      "https://r2.tfan2437.workers.dev/projects/preview-orbit-0.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-orbit-1.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-orbit-2.webp",
    ],
  },
  // todo
  {
    year: 2025,
    name: "Portfolio",
    href: "tingweifan.com",
    link: "/project/portfolio",
    previews: [
      "https://r2.tfan2437.workers.dev/projects/preview-portfolio-0.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-portfolio-1.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-portfolio-2.webp",
    ],
  },
  // todo
  {
    year: 2024,
    name: "ReRender",
    href: "rerenderai.com",
    link: "/project/rerender",
    previews: [
      "https://r2.tfan2437.workers.dev/projects/preview-rerender-0.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-rerender-1.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-rerender-2.webp",
    ],
  },
  {
    year: 2024,
    name: "Tovier",
    href: "tovier-trailer.vercel.app",
    link: "/project/tovier",
    previews: [
      "https://r2.tfan2437.workers.dev/projects/preview-tovier-0.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-tovier-1.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-tovier-2.webp",
    ],
  },
  {
    year: 2024,
    name: "Orbit v1",
    href: "orbit-ai-chatbot.vercel.app",
    link: "/project/orbit-v1",
    previews: [
      "https://r2.tfan2437.workers.dev/projects/preview-orbit-v1-0.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-orbit-v1-1.webp",
      "https://r2.tfan2437.workers.dev/projects/preview-orbit-v1-2.webp",
    ],
  },
];

export const PROJECTS_IMAGES: Record<string, string[]> = {
  sonicfi: [
    "https://r2.tfan2437.workers.dev/projects/sonicfi-0.webp",
    "https://r2.tfan2437.workers.dev/projects/sonicfi-1.webp",
    "https://r2.tfan2437.workers.dev/projects/sonicfi-2.webp",
  ],
  orbit: [
    "https://r2.tfan2437.workers.dev/projects/orbit-0.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-1.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-2.webp",
  ],
  "orbit-v1": [
    "https://r2.tfan2437.workers.dev/projects/orbit-v1-0.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-v1-1.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-v1-2.webp",
  ],
  tovier: [
    "https://r2.tfan2437.workers.dev/projects/tovier-0.webp",
    "https://r2.tfan2437.workers.dev/projects/tovier-1.webp",
    "https://r2.tfan2437.workers.dev/projects/tovier-2.webp",
  ],
  portfolio: [
    "https://r2.tfan2437.workers.dev/projects/portfolio-0.webp",
    "https://r2.tfan2437.workers.dev/projects/portfolio-1.webp",
    "https://r2.tfan2437.workers.dev/projects/portfolio-2.webp",
  ],
  rerender: [
    "https://r2.tfan2437.workers.dev/products/rerender-0.webp",
    "https://r2.tfan2437.workers.dev/products/rerender-1.webp",
    "https://r2.tfan2437.workers.dev/products/rerender-2.webp",
  ],
};

export const PROJECTS_CARDS: ProjectCardType[] = [
  {
    title: "Sonicfi Music",
    name: "sonicfi",
    year: "2025",
    description:
      "React, Zustand, TypeScript, Node.js, Express.js, MongoDB, Docker, AWS S3, AWS EC2",
    image: "https://r2.tfan2437.workers.dev/projects/sonicfi-0.webp",
    link: "/project/sonicfi",
  },
  {
    title: "Orbit AI",
    name: "orbit",
    year: "2025",
    description:
      "React, Redux, TypeScript, Node.js, Express.js, MongoDB, Docker, AWS S3, AWS EC2",
    image: "https://r2.tfan2437.workers.dev/projects/orbit-0.webp",
    link: "/project/orbit",
  },
  {
    title: "Portfolio Website",
    name: "portfolio",
    year: "2025",
    description:
      "Next.js, Zustand, i18n, Tailwind CSS, Vercel, SEO, Cloudflare R2",
    image: "https://r2.tfan2437.workers.dev/projects/portfolio-0.webp",
    link: "/project/portfolio",
  },
  {
    title: "ReRender AI",
    name: "rerender",
    year: "2024 - 2025",
    description:
      "Next.js, React, Redux, Socket.io, Redis, Node.js, MongoDB, Qdrant DB, AWS S3, AWS Lambda",
    image: "https://r2.tfan2437.workers.dev/products/rerender-0.webp",
    link: "/project/rerender",
  },
  {
    title: "Tovier Trailer",
    name: "tovier",
    year: "2024",
    description:
      "React, Context API, Tailwind CSS, Firebase Auth, Firebase Database, Vite, Vercel",
    image: "https://r2.tfan2437.workers.dev/projects/tovier-0.webp",
    link: "/project/tovier",
  },
  {
    title: "Orbit AI - v1",
    name: "orbit-v1",
    year: "2024",
    description:
      "React, Context API, Gemini API, Tailwind CSS, Firebase Auth, Firebase Database, Vite, Vercel",
    image: "https://r2.tfan2437.workers.dev/projects/orbit-v1-0.webp",
    link: "/project/orbit-v1",
  },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
];
