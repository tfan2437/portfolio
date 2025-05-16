"use client";
import { motion } from "motion/react";
import { InfiniteProjectCards } from "./InfiniteProjectCards";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col max-w-7xl">
        <div className="w-full h-[88px] mb-40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <p className="text-4xl font-semibold leading-12 whitespace-pre-line ">
            {`Hey there! I'm Ting Wei. \nI build high-quality websites with \nmodern tech expertise.`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
          className="flex flex-row gap-4"
        >
          <button className="bg-black mt-6 text-white px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-green hover:text-black border-2 border-black transition-colors duration-500">
            <span className="font-semibold">Contact Me</span>
          </button>
          <button className="flex flex-row items-center gap-2 bg-white mt-6 text-black px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-black hover:text-white border-2 border-black transition-colors duration-500">
            <span className="font-semibold">Resume</span>
            <Image src="/resume.png" alt="resume" width={16} height={16} />
          </button>
        </motion.div>
      </div>
      <div className="w-full mt-60 h-[400px] border-y-2 border-black bg-black">
        <Image
          src="/mining-house.jpg"
          alt="footer"
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-80 blur-xs"
        />
      </div>
    </div>
  );
};
export default HeroSection;
