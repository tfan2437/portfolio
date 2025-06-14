"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PROJECTS_IMAGES, duration, ease, delay } from "@/lib/constants";

const ProjectImage = ({ name }: { name: string }) => {
  const images = PROJECTS_IMAGES[name];

  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration,
          ease: ease,
          delay: delay,
        }}
        className="responsive flex flex-col sm:flex-row gap-2"
      >
        <div className="w-full sm:w-2/3 aspect-5/3 overflow-hidden rounded-lg bg-black">
          <Image
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={images[0]}
            alt={"Project Preview"}
            width={850}
            height={550}
            draggable={false}
            quality={90}
            priority={true}
          />
        </div>

        <div className="w-full sm:w-1/3 flex flex-col gap-2">
          <div className="w-full aspect-5/3 overflow-hidden rounded-lg bg-black">
            <Image
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src={images[1]}
              alt={"Project Preview"}
              width={430}
              height={278}
              draggable={false}
              quality={85}
              priority={false}
            />
          </div>

          <div className="w-full aspect-5/3 overflow-hidden rounded-lg hidden sm:block bg-black">
            <Image
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src={images[2]}
              alt={"Project Preview"}
              width={430}
              height={278}
              draggable={false}
              quality={85}
              priority={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectImage;
