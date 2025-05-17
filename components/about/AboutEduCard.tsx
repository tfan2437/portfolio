"use client";

import type { Education } from "@/constants/about";

const AboutEduCard = ({ school, degree, date }: Education) => {
  return (
    <div className="flex flex-col relative">
      <h2 className="font-medium text-base">{school}</h2>
      <span className="text-sm font-light text-neutral-700 mt-1">{degree}</span>
      <span className="mt-1 text-sm font-light text-neutral-700">{date}</span>
    </div>
  );
};

export default AboutEduCard;
