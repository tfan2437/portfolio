"use client";

import ProjectImage from "@/components/ProjectImage";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectSection from "@/components/ProjectSection";

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectImage />
      <ProjectInfo />
      <ProjectSection />
    </div>
  );
};
export default Project;
