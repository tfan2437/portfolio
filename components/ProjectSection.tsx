"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div id="projects" className="w-full flex flex-col items-center">
      <div className="responsive flex flex-col mb-[200px]">
        <div className="flex gap-2 items-center mb-4 w-full justify-between">
          <div className="flex items-center gap-2">
            <div className="size-4 bg-neutral-300 rounded-full flex items-center justify-center">
              <div className="size-[6px] bg-neutral-600 rounded-full" />
            </div>
            <h1 className="text-base font-semibold">Selected Projects</h1>
          </div>
          <div className="items-center gap-10 hidden sm:flex">
            <span className="text-sm text-neutral-700 font-semibold">{`(2024 - 2025)`}</span>
            <span className="text-sm text-neutral-700">Fullstack Web</span>
          </div>
        </div>
        <div
          ref={ref}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-6 lg:gap-y-8 select-none"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger the animations
                ease: "easeOut",
              }}
              className="w-full h-auto"
            >
              <ProjectCard index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
