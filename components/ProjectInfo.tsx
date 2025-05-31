import { SONICFI } from "@/constants/project-constants";
import Link from "next/link";
import Image from "next/image";

const ProjectInfo = () => {
  return (
    <div className="w-full flex flex-col items-center max-w-4xl select-none mt-10 mb-48">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-semibold text-3xl">{SONICFI.title}</h1>
          <Link
            href={"https://www.orbits-ai.com"}
            target="_blank"
            className="text-white bg-black py-2 border-2 border-black hover:text-black hover:bg-green transition-colors duration-300 px-5 rounded-full flex flex-row gap-2 items-center"
          >
            <span className="font-semibold">Visit Website</span>
            <Image
              src={"/icons/link.png"}
              alt="link"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Link>
        </div>
        <p className="text-neutral-700 mt-2 text-base">{SONICFI.summary}</p>

        <h2 className="font-semibold text-2xl mt-10">Technology Stack</h2>
        <ul className="list-disc list-inside flex flex-col gap-2 pl-1">
          {SONICFI.techStack.map((tech) => (
            <li key={tech.title}>
              <span className="font-semibold">{tech.title}</span>
              <span className="text-neutral-700">{tech.description}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-semibold text-2xl mt-10">Backend Development</h2>
        <div className="flex flex-col gap-4">
          {SONICFI.backend.map((backend, index) => (
            <p key={index} className="text-base text-neutral-700">
              <span className="font-semibold text-black">{backend.title}</span>
              {backend.description}
            </p>
          ))}
        </div>

        <h2 className="font-semibold text-2xl mt-10">Frontend Development</h2>
        <div className="flex flex-col gap-4">
          {SONICFI.frontend.map((frontend, index) => (
            <p key={index} className="text-base text-neutral-700">
              <span className="font-semibold text-black">{frontend.title}</span>
              {frontend.description}
            </p>
          ))}
        </div>

        <h2 className="font-semibold text-2xl mt-10">CI/CD & DevOps</h2>
        <div className="flex flex-col gap-4">
          {SONICFI.devOps.map((devOps, index) => (
            <p key={index} className="text-base text-neutral-700">
              <span className="font-semibold text-black">{devOps.title}</span>
              {devOps.description}
            </p>
          ))}
        </div>

        <div className="w-full flex flex-col gap-4 mt-10">
          <Image
            src={"/projects/sonicfi-1.jpg"}
            alt="sonicfi-backend"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src={"/projects/sonicfi-4.jpg"}
            alt="sonicfi-backend"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className="font-semibold text-2xl mt-4">UI/UX Design</h2>
        <div className="flex flex-col gap-4">
          {SONICFI.uiux.map((uiux, index) => (
            <p key={index} className="text-base text-neutral-700">
              <span className="font-semibold text-black">{uiux.title}</span>
              {uiux.description}
            </p>
          ))}
        </div>

        <h2 className="font-semibold text-2xl mt-10">Key Achievements</h2>
        <div className="flex flex-col gap-4">
          {SONICFI.achievements.map((achievement, index) => (
            <p key={index} className="text-base text-neutral-700">
              {achievement}
            </p>
          ))}
        </div>

        <h2 className="font-semibold text-2xl mt-10">Impact</h2>
        <div className="flex flex-col gap-4">
          {SONICFI.impact.map((impact, index) => (
            <p key={index} className="text-base text-neutral-700">
              {impact}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;

// <li>
//   <span className="font-semibold"></span>
//   <span className="text-neutral-700">
//     React, Next.js, Tailwind CSS
//   </span>
// </li>;
