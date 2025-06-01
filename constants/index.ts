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

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    year: 2025,
    name: "SonicFi Music",
    href: "sonic-fi.com",
    link: "/project/sonicfi",
    previews: [
      "/previews/orbit-p1.jpg",
      "/previews/orbit-p2.jpg",
      "/previews/orbit-p3.jpg",
    ],
  },
  {
    year: 2025,
    name: "Orbit AI",
    href: "orbits-ai.com",
    link: "/project/orbit-ai",
    previews: [
      "/previews/orbit-p1.jpg",
      "/previews/orbit-p2.jpg",
      "/previews/orbit-p3.jpg",
    ],
  },
  {
    year: 2024,
    name: "ReRender AI",
    href: "rerenderai.com",
    link: "/project/rerender-ai",
    previews: [
      "/previews/rerender-p1.jpg",
      "/previews/rerender-p2.jpg",
      "/previews/rerender-p3.jpg",
    ],
  },
  {
    year: 2024,
    name: "Tovier Trailer",
    href: "tovier-trailer.vercel.app",
    link: "/project/tovier-trailer",
    previews: [
      "/previews/tovier-p1.jpg",
      "/previews/tovier-p2.jpg",
      "/previews/tovier-p3.jpg",
    ],
  },
  {
    year: 2024,
    name: "Orbit AI v1",
    href: "orbit-ai-chatbot.vercel.app",
    link: "/project/orbit-ai-v1",
    previews: [
      "/previews/orbit-v1-p1.jpg",
      "/previews/orbit-v1-p2.jpg",
      "/previews/orbit-v1-p3.jpg",
    ],
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
