"use client";

import type { Education } from "@/constants/about";
import Image from "next/image";

const AboutEduCard = ({ school, degree, date, image }: Education) => {
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row items-center gap-1.5">
        <Image src={image} alt="school" width={16} height={16} />
        <h2 className="font-medium text-base">{school}</h2>
      </div>
      <span className="text-sm font-light text-neutral-700 mt-1">{degree}</span>
      <span className="mt-1 text-sm font-light text-neutral-700">{date}</span>
    </div>
  );
};

export default AboutEduCard;
