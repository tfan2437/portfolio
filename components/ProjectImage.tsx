import Image from "next/image";
import { motion } from "motion/react";
import { duration, ease } from "@/constants/animation";
import { useProject, useTranslations } from "@/lib/store/useGlobal";

const ProjectImage = () => {
  const { label } = useTranslations();
  const project = useProject("sonicfi");

  const images: string[] = [
    "/projects/sonicfi-1.jpg",
    "/projects/sonicfi-2.jpg",
    "/projects/sonicfi-3.jpg",
    "/projects/sonicfi-4.jpg",
  ];

  return (
    <div id="project" className="w-full flex flex-col items-center gap-10">
      <div className="w-full bg-black flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration,
            ease: ease,
          }}
          className="w-full max-w-7xl grid grid-cols-5 py-12"
        >
          <div className="text-sm flex flex-col gap-1">
            <span className="text-neutral-500">{label.type}</span>
            <span className="text-neutral-200">{project.type}</span>
          </div>
          <div className="text-sm flex flex-col gap-1">
            <span className="text-neutral-500">{label.webDev}</span>
            <span className="text-neutral-200">{project.webDev}</span>
          </div>
          <div className="text-sm flex flex-col gap-1">
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
        className="w-full flex flex-row gap-2 max-w-7xl"
      >
        <div className="w-2/3 aspect-5/3 overflow-hidden rounded-lg">
          <Image
            src={images[0]}
            alt="placeholder"
            width={2000}
            height={2000}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            draggable={false}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-2">
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
          <div className="w-full aspect-5/3 overflow-hidden rounded-lg">
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
