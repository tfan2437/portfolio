"use client";

import Image from "next/image";
import Link from "next/link";
import type { Job } from "@/constants/about";

const AboutJobCard = ({ company, title, date, description, href }: Job) => {
  return (
    <div className="flex flex-col relative">
      <Link
        target="_blank"
        href={href}
        className="absolute top-0 right-0 cursor-pointer p-1"
      >
        <Image
          src="/linkedin.png"
          alt="linkedin"
          width={16}
          height={16}
          className="size-5"
        />
      </Link>
      <h2 className="font-medium text-base">{title}</h2>
      <span className="text-sm font-light text-neutral-700 mt-1">
        {company}
      </span>
      <span className="mt-1 text-sm font-light text-neutral-700">{date}</span>
      <p className="mt-3 text-sm">{description}</p>
    </div>
  );
};

export default AboutJobCard;
