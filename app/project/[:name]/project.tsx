"use client";

import ProjectImage from "@/components/ProjectImage";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectsDisplay from "@/components/ProjectsDisplay";

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectImage />
      <ProjectInfo />
      <ProjectsDisplay />
    </div>
  );
};
export default Project;
