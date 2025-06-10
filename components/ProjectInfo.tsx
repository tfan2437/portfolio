"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { duration, ease } from "@/constants/animation";
import { useProject, useTranslations } from "@/lib/store/useGlobal";
import { Detail } from "@/types";
import { twMerge } from "tailwind-merge";

const ProjectInfo = ({ name }: { name: string }) => {
  const { label } = useTranslations();
  const project = useProject(name);

  return (
    <div className="w-full flex flex-col items-center px-8 lg:px-0 max-w-4xl select-none mt-6 sm:mt-10 mb-48">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration,
          ease: ease,
        }}
        className="w-full flex flex-col gap-16"
      >
        <Intro
          title={project.title}
          href={"https://www.orbits-ai.com"}
          descriptions={project.summary}
          buttonText={label.viewWebsite}
        />
        {project.topic.map((topic, index) => {
          if (topic.type === "bullet-point") {
            return (
              <BulletPoints
                key={index}
                topic={topic.name}
                details={topic.details}
              />
            );
          } else if (topic.type === "breakdown") {
            return (
              <Breakdown
                key={index}
                topic={topic.name}
                details={topic.details}
              />
            );
          } else if (
            topic.type === "image" &&
            "images" in topic &&
            "details" in topic &&
            "paragraphs" in topic
          ) {
            return (
              <Images
                key={index}
                topic={topic.name}
                images={topic.images}
                paragraphs={topic.paragraphs}
                details={topic.details}
              />
            );
          } else if (topic.type === "paragraph" && "paragraphs" in topic) {
            return (
              <Paragraph
                key={index}
                topic={topic.name}
                paragraphs={topic.paragraphs}
              />
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default ProjectInfo;

const Intro = ({
  title,
  href,
  descriptions,
  buttonText,
}: {
  title: string;
  href: string;
  descriptions: string[];
  buttonText: string;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <div className="flex flex-row gap-2 items-center">
          <Link
            href={href}
            target="_blank"
            className="text-white bg-black py-2 border-2 border-black hover:text-black hover:bg-green transition-colors duration-300 px-5 rounded-full flex flex-row gap-2 items-center"
          >
            <span className="font-semibold">{buttonText}</span>
            <Image
              src={"/icons/link.png"}
              alt="link"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {descriptions.map((description, index) => (
          <p key={index} className="text-neutral-700 text-base">
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

const BulletPoints = ({
  topic,
  details,
}: {
  topic: string;
  details: Detail[];
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">{topic}</h2>
      <ul className="list-disc list-inside flex flex-col gap-2 pl-1">
        {details.map((detail, index) => (
          <li key={index}>
            <span className="font-semibold">{detail.title}</span>
            <span className="text-neutral-700">{detail.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Breakdown = ({
  topic,
  details,
}: {
  topic: string;
  details: Detail[];
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">{topic}</h2>
      <div className="flex flex-col gap-4">
        {details.map((detail, index) => (
          <p key={index} className="text-base text-neutral-700">
            <span className="font-semibold text-black">{detail.title}</span>
            {detail.description}
          </p>
        ))}
      </div>
    </div>
  );
};

const Paragraph = ({
  topic,
  paragraphs,
}: {
  topic: string;
  paragraphs: string[];
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">{topic}</h2>
      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base text-neutral-700">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const Images = ({
  topic,
  images,
  paragraphs,
  details,
}: {
  topic: string;
  images: string[];
  paragraphs: string[];
  details: Detail[];
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div
        className={twMerge(
          "w-full",
          images.length >= 4
            ? "grid grid-cols-2 gap-2 mt-4"
            : "flex flex-col gap-4"
        )}
      >
        {images.map((path, index) => (
          <Image
            key={index}
            src={path}
            alt={"project image"}
            width={1200}
            height={703}
            className="w-full h-auto rounded-lg"
            draggable={false}
          />
        ))}
      </div>
      {details.length > 0 && <Breakdown topic={topic} details={details} />}
      {paragraphs.length > 0 && (
        <Paragraph topic={topic} paragraphs={paragraphs} />
      )}
    </div>
  );
};
