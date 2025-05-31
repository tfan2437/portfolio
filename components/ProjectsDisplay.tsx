"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

const ProjectsDisplay = () => {
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center bg-green py-20"
    >
      <div className="w-full flex flex-col max-w-7xl">
        <div className="flex gap-2 items-center mb-4 w-full">
          <div className="flex items-center gap-2">
            <div className="size-4 bg-neutral-300 rounded-full flex items-center justify-center">
              <div className="size-[6px] bg-neutral-600 rounded-full" />
            </div>
            <h1 className="text-base font-semibold">Selected Projects</h1>
          </div>
        </div>
        <div className="w-full flex flex-col select-none">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectItem key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectsDisplay;

const ProjectItem = ({ index }: { index: number }) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onClick={() => router.push("/")}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full flex justify-between items-center cursor-pointer group border-t-2 border-black py-5 group"
    >
      <div className="w-full flex items-center gap-20 text-black">
        <span className="">[2025]</span>
        <span className="font-medium text-2xl">Project Name</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-[160px] w-px" />
        {isHovering ? (
          Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 10 }}
              animate={
                isHovering ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }
              }
              transition={{ duration: 0.2, ease: "easeIn", delay: i * 0.05 }}
              className="aspect-[4/3] h-[160px] hidden group-hover:block"
            >
              <Image
                src={`/placeholder/placeholder_${index}.jpg`}
                alt="placeholder"
                width={2000}
                height={2000}
                className="h-full w-auto object-cover"
                draggable={false}
              />
            </motion.div>
          ))
        ) : (
          <div className="h-[160px] w-auto flex items-center text-black font-medium whitespace-nowrap">
            www.orbits-ai.com
          </div>
        )}
      </div>
    </div>
  );
};
