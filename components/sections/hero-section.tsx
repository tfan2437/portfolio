"use client";

import { useDevice } from "@/hooks/useDevice";
import { useTranslations } from "@/hooks/useGlobal";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const HeroSection = () => {
  const wording = useTranslations();
  const [isHovering, setIsHovering] = useState(false);

  const device = useDevice();

  return (
    <div id="hero" className="flex flex-col responsive my-40 md:my-60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <p className="text-2xl lg:text-4xl font-semibold lg:leading-12 whitespace-pre-line select-none">
          {device === "desktop"
            ? wording.hero.intro[0]
            : device === "tablet"
            ? wording.hero.intro[1]
            : wording.hero.intro[2]}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-row gap-4"
      >
        <Link href={"mailto:tfan2437@gmail.com"} target="_blank">
          <button className="bg-black mt-6 text-white px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-green hover:text-black border-2 border-black transition-colors duration-500">
            <span className="font-semibold">{wording.nav.contactMe}</span>
          </button>
        </Link>
        <Link href={wording.hero.driveLink} target="_blank">
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex flex-row items-center gap-2 bg-white mt-6 text-black px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-green border-2 border-black transition-colors duration-500"
          >
            <span className="font-semibold">{wording.nav.resume}</span>

            <div className={twMerge(isHovering && "animate-wave")}>
              <Image
                src="/images/icons/emoji-resume.png"
                alt="resume"
                width={16}
                height={16}
              />
            </div>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
