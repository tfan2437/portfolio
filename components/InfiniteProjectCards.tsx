"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteProjectCards() {
  return (
    <div className="h-auto w-full flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
    </div>
  );
}

const techStack = [
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
