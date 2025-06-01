import Image from "next/image";
import { motion } from "motion/react";
import { duration, ease } from "@/constants/animation";
import { useProject, useTranslations } from "@/lib/store/useGlobal";
import { PROJECTS_IMAGES } from "@/constants";

const ProjectImage = ({ name }: { name: string }) => {
  const { label } = useTranslations();
  const project = useProject(name);

  const { images } = PROJECTS_IMAGES[name];

  return (
    <div
      id="project"
      className="w-full flex flex-col items-center gap-6 md:gap-10"
    >
      <div className="w-full bg-black flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration,
            ease: ease,
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration,
          ease: ease,
        }}
        className="responsive flex flex-col sm:flex-row gap-2"
      >
        <div className="w-full sm:w-2/3 aspect-5/3 overflow-hidden rounded-lg">
          <Image
            src={images[0]}
            alt="placeholder"
            width={2000}
            height={2000}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            draggable={false}
          />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col gap-2">
          <div className="w-full aspect-5/3 overflow-hidden rounded-lg">
            <Image
              src={images[1]}
              alt="placeholder"
              width={2000}
              height={2000}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              draggable={false}
            />
          </div>
          <div className="w-full aspect-5/3 overflow-hidden rounded-lg hidden sm:block">
            <Image
              src={images[2]}
              alt="placeholder"
              width={2000}
              height={2000}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              draggable={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectImage;
