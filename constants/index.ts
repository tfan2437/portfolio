export const LINKEDIN_URL: string[] = [
  "https://www.linkedin.com/company/architechtw",
  "https://www.linkedin.com/company/architechtw",
  "https://www.linkedin.com/company/architechtw",
];

export type ProjectInfo = {
  year: number;
  name: string;
  href: string;
  link: string;
  previews: string[];
};

const PREVIEW_PREFIX: string =
  "https://r2.tfan2437.workers.dev/projects/preview-";

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    year: 2025,
    name: "SonicFi Music",
    href: "sonic-fi.com",
    link: "/project/sonicfi",
    previews: [
      `${PREVIEW_PREFIX}orbit-0.webp`,
      `${PREVIEW_PREFIX}orbit-1.webp`,
      `${PREVIEW_PREFIX}orbit-2.webp`,
    ],
  },
  {
    year: 2025,
    name: "Orbit AI",
    href: "https://www.orbits-ai.com",
    link: "/project/orbit",
    previews: [
      `${PREVIEW_PREFIX}orbit-0.webp`,
      `${PREVIEW_PREFIX}orbit-1.webp`,
      `${PREVIEW_PREFIX}orbit-2.webp`,
    ],
  },
  {
    year: 2025,
    name: "Portfolio",
    href: "https://www.orbits-ai.com",
    link: "/project/portfolio",
    previews: [
      `${PREVIEW_PREFIX}orbit-0.webp`,
      `${PREVIEW_PREFIX}orbit-1.webp`,
      `${PREVIEW_PREFIX}orbit-2.webp`,
    ],
  },
  {
    year: 2024,
    name: "ReRender AI",
    href: "rerenderai.com",
    link: "/project/rerender-ai",
    previews: [
      `${PREVIEW_PREFIX}rerender-0.webp`,
      `${PREVIEW_PREFIX}rerender-1.webp`,
      `${PREVIEW_PREFIX}rerender-2.webp`,
    ],
  },
  {
    year: 2024,
    name: "Tovier Trailer",
    href: "tovier-trailer.vercel.app",
    link: "/project/tovier-trailer",
    previews: [
      `${PREVIEW_PREFIX}tovier-0.webp`,
      `${PREVIEW_PREFIX}tovier-1.webp`,
      `${PREVIEW_PREFIX}tovier-2.webp`,
    ],
  },
  {
    year: 2024,
    name: "Orbit AI v1",
    href: "orbit-ai-chatbot.vercel.app",
    link: "/project/orbit-ai-v1",
    previews: [
      `${PREVIEW_PREFIX}orbit-v1-0.webp`,
      `${PREVIEW_PREFIX}orbit-v1-1.webp`,
      `${PREVIEW_PREFIX}orbit-v1-2.webp`,
    ],
  },
];

export const PROJECTS_IMAGES: Record<string, string[]> = {
  sonicfi: ["/sonicfi-0.jpg", "/sonicfi-1.jpg", "/sonicfi-2.jpg"],
  orbit: ["/orbit-0.jpg", "/orbit-1.jpg", "/orbit-2.jpg"],
  "orbit-v1": ["/orbit-v1-0.jpg", "/orbit-v1-1.jpg", "/orbit-v1-2.jpg"],
  tovier: [
    "/tovier-0.jpg",
    "https://r2.tfan2437.workers.dev/projects/tovier-1.webp",
    "https://r2.tfan2437.workers.dev/projects/tovier-2.webp",
  ],
  portfolio: ["/portfolio-0.jpg", "/portfolio-1.jpg", "/portfolio-2.jpg"],
  rerender: ["/rerender-0.jpg", "/rerender-1.jpg", "/rerender-2.jpg"],
};
