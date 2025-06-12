"use client";

import { InfiniteProjectCards } from "./InfiniteProjectCards";
import { motion } from "motion/react";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";
import YoutubeIcon from "./icons/YoutubeIcon";

const AnimationSeperator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn", delay: 0.1 }}
      className="w-full flex flex-col"
    >
      <div className="w-full h-64 md:h-[400px] border-t-4 border-black bg-black relative select-none">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className="responsive h-full py-6 justify-end items-end flex">
            <Link
              href="https://www.youtube.com/watch?v=frIReieagTQ"
              target="_blank"
              className="bg-black items-center hover:scale-105 transition-all duration-300 flex flex-row gap-1.5 px-4 py-2 w-fit rounded-full cursor-pointer"
            >
              <div className="flex items-center justify-center size-6">
                <YoutubeIcon />
              </div>
              <span className="font-semibold text-white">B.Arch Thesis</span>
            </Link>
          </div>
        </div>
        <OptimizedImage
          src="/projects/mining-house.webp"
          alt="Mining House"
          width={3840}
          height={1258}
          priority={true}
          quality={75}
          className="w-full h-full"
        />
      </div>
      <InfiniteProjectCards />
    </motion.div>
  );
};
export default AnimationSeperator;
