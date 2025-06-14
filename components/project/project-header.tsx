"use client";

import { motion } from "motion/react";
import { duration, ease, delay } from "@/lib/constants";
import { useProject, useTranslations } from "@/hooks/useGlobal";

const ProjectHeader = ({ name }: { name: string }) => {
  const { label } = useTranslations();
  const project = useProject(name);

  return (
    <div className="w-full bg-black flex flex-col items-center mb-6 lg:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration,
          ease: ease,
          delay: delay,
        }}
        className="responsive flex gap-6 sm:grid sm:grid-cols-4 lg:grid-cols-5 py-6 sm:py-12"
      >
        <div className="text-sm flex flex-col gap-1">
          <span className="text-neutral-500">{label.type}</span>
          <span className="text-neutral-200">{project.type}</span>
        </div>
        <div className="text-sm flex-col gap-1 hidden sm:flex">
          <span className="text-neutral-500">{label.webDev}</span>
          <span className="text-neutral-200">{project.webDev}</span>
        </div>
        <div className="text-sm flex-col gap-1 hidden sm:flex">
          <span className="text-neutral-500">{label.year}</span>
          <span className="text-neutral-200">{project.year}</span>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <span className="text-neutral-500">{label.service}</span>
          <span className="text-neutral-200">{project.service}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectHeader;
