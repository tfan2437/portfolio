"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteProjectCards() {
  return (
    <div className="h-auto mt-16 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    path: "/projects/gallery-sonicfi-1-DGb4Ybnd.jpg",
  },
  {
    path: "/projects/gallery-sonicfi-5-BKhkJLmz.jpg",
  },
  {
    path: "/projects/gallery-sonicfi-6-BGb9IO-7.jpg",
  },
  {
    path: "/projects/gallery-tovier-1-CmnjaqgE.jpg",
  },
  {
    path: "/projects/gallery-tovier-2-Dzl7gs31.jpg",
  },
  {
    path: "/projects/gallery-tovier-5-CmIzA3YV.jpg",
  },
];
