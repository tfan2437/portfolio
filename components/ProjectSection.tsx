"use client";

import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col max-w-7xl mb-[200px]">
        <div className="flex gap-2 items-center mb-4 w-full justify-between">
          <div className="flex items-center gap-2">
            <div className="size-4 bg-neutral-300 rounded-full flex items-center justify-center">
              <div className="size-[6px] bg-neutral-600 rounded-full" />
            </div>
            <h1 className="text-base font-semibold">Selected Projects</h1>
          </div>
          <div className="flex items-center gap-10">
            <span className="text-sm text-neutral-700 font-semibold">{`(2024 - 2025)`}</span>
            <span className="text-sm text-neutral-700">Fullstack Web</span>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-8 select-none">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectCard key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
