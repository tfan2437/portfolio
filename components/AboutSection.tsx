"use client";
import AboutEduCard from "./about/AboutEduCard";
import AboutIntro from "./about/AboutIntro";
import AboutJobCard from "./about/AboutJobCard";

import { EDUCATION, JOBS } from "@/constants/about";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center pb-[200px] pt-[150px]"
    >
      <div className="w-full flex flex-row justify-between max-w-7xl gap-32">
        <div className="flex flex-col w-1/2">
          <AboutIntro />
          <div className="flex flex-col mt-16 gap-10">
            {JOBS.map((job) => (
              <AboutJobCard key={job.company} {...job} />
            ))}
          </div>
        </div>

        <div className=" w-1/2 flex flex-col">
          <div className="flex w-full flex-col gap-8">
            {EDUCATION.map((edu) => (
              <AboutEduCard key={edu.school} {...edu} />
            ))}
          </div>
          <div className="flex flex-col w-fit gap-4 border-t-1 border-neutral-200 pt-8 mt-8">
            <SkillItem
              title="Languages"
              skills="TypeScript, Java, Python, JavaScript, C++"
            />
            <SkillItem
              title="Frontend"
              skills="Next.js, React, Redux, Tailwind CSS"
            />
            <SkillItem
              title="Backend"
              skills="Node.js, Express.js, Spring Boot"
            />
            <SkillItem
              title="Communication"
              skills="RESTful APIs, WebSockets"
            />
            <SkillItem
              title="Authentication"
              skills="JWT, OAuth, Firebase Auth"
            />
            <SkillItem title="Databases" skills="MongoDB, PostgreSQL, MySQL" />
            <SkillItem
              title="DevOps"
              skills="Git, Docker, AWS (S3, EC2, Lambda)"
            />
            <SkillItem title="Testing" skills="Jest, Unit Testing" />
            <SkillItem title="Concept" skills="Data Structures, Algorithms" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

const SkillItem = ({ title, skills }: { title: string; skills: string }) => {
  return (
    <div className="flex gap-3 items-center text-black text-sm">
      <span className="font-semibold">{title}:</span>
      <span className="text-neutral-700">{skills}</span>
    </div>
  );
};
