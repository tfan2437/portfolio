"use client";

import { InfiniteProjectCards } from "./InfiniteProjectCards";
import Image from "next/image";
import { motion } from "motion/react";
const AnimationSeperator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full flex flex-col"
    >
      <div className="w-full mt-60 h-[400px] border-t-3 border-black bg-black relative">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className="w-full max-w-7xl h-full py-6 justify-end items-end flex">
            <button className="bg-white items-center flex flex-row gap-2 text-black px-4 py-1.5 w-fit rounded-full cursor-pointer hover:text-red-600 hover:border-red-600 border-2 border-black transition-colors duration-500">
              <div className="size-5 rounded-full aspect-square">
                <Image
                  src="/icons/cornell-red.png"
                  alt="cornell"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  draggable={false}
                  priority
                />
              </div>
              <span className="font-semibold">B.Arch Thesis</span>
            </button>
          </div>
        </div>
        <Image
          src="/mining-house.jpg"
          alt="footer"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          draggable={false}
          priority
        />
      </div>
      <InfiniteProjectCards />
    </motion.div>
  );
};
export default AnimationSeperator;
