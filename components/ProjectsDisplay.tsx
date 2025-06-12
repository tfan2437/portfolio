"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import type { ProjectItem } from "@/constants";
import { PROJECTS_LIST } from "@/constants";
import { useTranslations } from "@/lib/store/useGlobal";
import Image from "next/image";

const ProjectsDisplay = () => {
  const { label } = useTranslations();
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center bg-green py-20"
    >
      <div className="responsive flex flex-col">
        <div className="flex gap-2 items-center mb-4 w-full">
          <div className="flex items-center gap-2">
            <div className="size-4 bg-neutral-300 rounded-full flex items-center justify-center">
              <div className="size-[6px] bg-neutral-600 rounded-full" />
            </div>
            <h1 className="text-base font-semibold">{label.selectedWorks}</h1>
          </div>
        </div>
        <div className="w-full flex flex-col select-none">
          {PROJECTS_LIST.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectsDisplay;

const ProjectItem = ({ project }: { project: ProjectItem }) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onClick={() => router.push(project.link)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full flex justify-between items-center cursor-pointer group border-t-2 border-black py-5 group"
    >
      <div className="w-full flex items-center gap-20 text-black">
        <span className="">[{project.year}]</span>
        <span className="font-medium text-2xl">{project.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-[160px] w-px" />

        {isHovering ? (
          <AnimatedSquares previews={project.previews} />
        ) : (
          <div className="h-[160px] w-auto flex items-center text-black font-medium whitespace-nowrap">
            {project.href}
          </div>
        )}
      </div>
    </div>
  );
};

const AnimatedSquares = ({ previews }: { previews: string[] }) => {
  const squares = [{ delay: 0 }, { delay: 0.15 }, { delay: 0.3 }];

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-6">
        {squares.map((square, index) => (
          <motion.div
            key={index}
            className="w-40 h-40 bg-black shadow-2xl rounded-lg"
            initial={{
              y: 150,
              opacity: 0,
              rotateZ: -15,
              scale: 0.8,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateZ: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 100,
              bounce: 0.6,
              duration: 2,
              delay: square.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.05,
              rotateZ: 3,
              y: -10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            <Image
              src={previews[index]}
              alt={"preview"}
              width={160}
              height={160}
              priority={false}
              quality={80}
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
