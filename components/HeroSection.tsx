"use client";
import { useTranslations } from "@/lib/store/useTranslations";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const HeroSection = () => {
  const wording = useTranslations();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div id="hero" className="w-full flex flex-col max-w-7xl">
      <div className="w-full h-[88px] mb-40" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <p className="text-4xl font-semibold leading-12 whitespace-pre-line">
          {wording.intro.greeting}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
        className="flex flex-row gap-4"
      >
        <button className="bg-black mt-6 text-white px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-green hover:text-black border-2 border-black transition-colors duration-500">
          <span className="font-semibold">{wording.nav.contactMe}</span>
        </button>
        <Link
          href={
            "https://drive.google.com/file/d/1n9QQK_M0fy6nKjCSRvyHGkV32jCkQSam/view"
          }
          target="_blank"
        >
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex flex-row items-center gap-2 bg-white mt-6 text-black px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-green border-2 border-black transition-colors duration-500"
          >
            <span className="font-semibold">{wording.nav.resume}</span>

            <div className={twMerge(isHovering && "animate-wave")}>
              <Image src="/resume.png" alt="resume" width={16} height={16} />
            </div>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
export default HeroSection;
