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

export const PROJECT_CARDS: Record<string, string> = {
  sonicfi: "/projects/sonicfi-1.jpg",
  orbit: "/projects/orbit-3.jpg",
  "orbit-v1": "/projects/orbit-3.jpg",
  tovier: "/projects/orbit-3.jpg",
  portfolio: "/projects/orbit-3.jpg",
};

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
    "https://r2.tfan2437.workers.dev/projects/orbit-0.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-1.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-2.webp",
  ],
  tovier: [
    "https://r2.tfan2437.workers.dev/projects/tovier-0.webp",
    "https://r2.tfan2437.workers.dev/projects/tovier-1.webp",
    "https://r2.tfan2437.workers.dev/projects/tovier-2.webp",
  ],
  portfolio: [
    "https://r2.tfan2437.workers.dev/projects/orbit-0.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-1.webp",
    "https://r2.tfan2437.workers.dev/projects/orbit-2.webp",
  ],
  rerender: ["/rerender-0.jpg", "/rerender-1.jpg", "/rerender-2.jpg"],
};
