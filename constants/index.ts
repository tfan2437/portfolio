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
};

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    year: 2025,
    name: "SonicFi Music",
    href: "sonic-fi.com",
    link: "/project/sonicfi",
  },
  {
    year: 2025,
    name: "Orbit AI",
    href: "orbits-ai.com",
    link: "/project/orbit-ai",
  },
  {
    year: 2024,
    name: "ReRender AI",
    href: "rerenderai.com",
    link: "/project/rerender-ai",
  },
  {
    year: 2024,
    name: "Tovier Trailer",
    href: "tovier-trailer.vercel.app",
    link: "/project/tovier-trailer",
  },
  {
    year: 2024,
    name: "Orbit AI v1",
    href: "orbit-ai-chatbot.vercel.app",
    link: "/project/orbit-ai-v1",
  },
];

export const PROJECTS_IMAGES: Record<
  string,
  {
    card: string;
    images: string[];
    details: string[];
  }
> = {
  sonicfi: {
    card: "/projects/sonicfi-1.jpg",
    images: [
      "/projects/sonicfi-1.jpg",
      "/projects/sonicfi-2.jpg",
      "/projects/sonicfi-3.jpg",
    ],
    details: ["/projects/sonicfi-4.jpg", "/projects/sonicfi-2.jpg"],
  },
  orbit: {
    card: "/projects/orbit-3.jpg",
    images: [
      "/projects/orbit-1.jpg",
      "/projects/orbit-2.jpg",
      "/projects/orbit-3.jpg",
    ],
    details: [
      "/projects/orbit-6.jpg",
      "/projects/orbit-5.jpg",
      "/projects/orbit-4.jpg",
    ],
  },
};
