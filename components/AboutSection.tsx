"use client";

import { useTranslations, useI18nStore } from "@/lib/store/useGlobal";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types";
import { twMerge } from "tailwind-merge";

const AboutSection = () => {
  const { locale } = useI18nStore();
  const about = useTranslations().about;

  const schoolImages = [
    "/icons/gatech.png",
    "/icons/empire-state.png",
    "/icons/cornell.png",
  ];

  return (
    <div
      id="about"
      className="w-full flex flex-col items-center lg:pb-[120px] pb-[100px] pt-[100px]"
    >
      <div className="responsive flex flex-col lg:flex-row justify-between lg:gap-32">
        <div className="flex flex-col w-full px-4 md:px-8 lg:px-0 lg:w-1/2">
          <Intro
            locale={locale}
            name={about.me.name}
            title={about.me.title}
            intro={about.me.intro}
          />
          <div className="flex flex-col mt-10 gap-8">
            {about.jobs.map((job, index) => (
              <Job
                key={index}
                locale={locale}
                title={job.title}
                company={job.company}
                date={job.date}
                description={job.description}
                href={job.linkedin}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col px-4 md:px-8 lg:px-0">
          <hr className="w-full border-t-1 border-neutral-200 block lg:hidden my-8" />
          <div className="flex w-full flex-col gap-8">
            {about.education.map((edu, index) => (
              <Education
                key={index}
                locale={locale}
                school={edu.school}
                degree={edu.degree}
                date={edu.date}
                image={schoolImages[index]}
              />
            ))}
          </div>
          <div className="flex flex-col w-full lg:w-fit gap-4 border-t-1 border-neutral-200 pt-8 mt-8">
            {about.techStacks.map((tech, index) => (
              <Skill key={index} title={tech.title} skills={tech.skills} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

const Intro = ({
  locale,
  name,
  title,
  intro,
}: {
  locale: Locale;
  name: string;
  title: string;
  intro: string[];
}) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold">{name}</h1>
      <p
        className={twMerge(
          "mt-1 text-sm",
          locale === "en" ? "font-light text-neutral-700" : "text-neutral-600"
        )}
      >
        {title}
      </p>
      <div className="text-neutral-700 mt-3 text-sm flex flex-col gap-2">
        {intro.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

const Job = ({
  locale,
  company,
  title,
  date,
  description,
  href,
}: {
  locale: Locale;
  company: string;
  title: string;
  date: string;
  description: string[];
  href: string;
}) => {
  const isEn = locale === "en";

  return (
    <div className="flex flex-col relative">
      <Link
        target="_blank"
        href={href}
        className="absolute top-0 right-0 cursor-pointer p-1 hover:scale-110 transition-all duration-300"
      >
        <Image
          src="/icons/linkedin-black.png"
          alt="linkedin"
          width={16}
          height={16}
          className="size-5"
        />
      </Link>
      <h2
        className={twMerge("text-base", isEn ? "font-medium" : "font-semibold")}
      >
        {title}
      </h2>
      <span
        className={twMerge(
          "mt-1 text-sm",
          isEn ? "font-light text-neutral-700" : "text-neutral-600"
        )}
      >
        {company}
      </span>
      <span
        className={twMerge(
          "mt-1 text-sm",
          isEn ? "font-light text-neutral-700" : "text-neutral-600"
        )}
      >
        {date}
      </span>
      <div className="mt-2 text-sm flex flex-col gap-2">
        {description.map((desc, index) => (
          <p className="text-neutral-900" key={index}>
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

const Education = ({
  degree,
  school,
  date,
  image,
  locale,
}: {
  degree: string;
  school: string;
  date: string;
  image: string;
  locale: Locale;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col relative",
        locale === "en" && "font-light"
      )}
    >
      <div className="flex flex-row items-center gap-1.5">
        <Image src={image} alt="school" width={16} height={16} />
        <h2
          className={twMerge(
            "text-base",
            locale === "en" ? "font-medium" : "font-semibold"
          )}
        >
          {school}
        </h2>
      </div>
      <span className="text-sm text-neutral-700 mt-1">{degree}</span>
      <span className="mt-1 text-sm text-neutral-700">{date}</span>
    </div>
  );
};

const Skill = ({ title, skills }: { title: string; skills: string }) => {
  return (
    <p className="text-neutral-700 text-sm">
      <span className="text-black font-semibold">{title}: </span>
      {skills}
    </p>
  );
};
