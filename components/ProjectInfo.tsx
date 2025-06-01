import { SONICFI } from "@/constants/project-constants";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { duration, ease } from "@/constants/animation";
import { useProject, useTranslations } from "@/lib/store/useGlobal";

const ProjectInfo = () => {
  const { label } = useTranslations();
  const project = useProject("sonicfi");

  return (
    <div className="w-full flex flex-col items-center max-w-4xl select-none mt-10 mb-48">
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
          description={project.summary}
          buttonText={label.viewWebsite}
        />
        <BulletPoints title={label.techStack} points={project.techStack} />
        <Summary title={label.backend} techs={project.backend} />
        <Summary title={label.frontend} techs={project.frontend} />
        <Summary title={label.devOps} techs={project.devOps} />
        <div className="flex flex-col gap-8">
          <ImagesDisplay
            images={["/projects/sonicfi-1.jpg", "/projects/sonicfi-4.jpg"]}
          />
          <Summary title={label.uiux} techs={project.uiux} />
        </div>

        <Conclusion
          title={label.achievements}
          paragraphs={project.achievements}
        />
        <Conclusion title={label.impact} paragraphs={project.impact} />
      </motion.div>
    </div>
  );
};

export default ProjectInfo;

const Intro = ({
  title,
  href,
  description,
  buttonText,
}: {
  title: string;
  href: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
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
      <p className="text-neutral-700 text-base">{description}</p>
    </div>
  );
};

const BulletPoints = ({
  title,
  points,
}: {
  title: string;
  points: {
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <ul className="list-disc list-inside flex flex-col gap-2 pl-1">
        {points.map((point, index) => (
          <li key={index}>
            <span className="font-semibold">{point.title}</span>
            <span className="text-neutral-700">{point.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Summary = ({
  title,
  techs,
}: {
  title: string;
  techs: {
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div className="flex flex-col gap-4">
        {techs.map((tech, index) => (
          <p key={index} className="text-base text-neutral-700">
            <span className="font-semibold text-black">{tech.title}</span>
            {tech.description}
          </p>
        ))}
      </div>
    </div>
  );
};

const Conclusion = ({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="font-semibold text-2xl">{title}</h2>
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

const ImagesDisplay = ({ images }: { images: string[] }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {images.map((path, index) => (
        <Image
          key={index}
          src={path}
          alt={"project image"}
          width={900}
          height={900}
          className="w-full h-auto rounded-lg"
        />
      ))}
    </div>
  );
};
