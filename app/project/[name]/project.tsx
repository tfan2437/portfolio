"use client";

import ProjectImage from "@/components/projects/ProjectImage";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectsDisplay from "@/components/ProjectsDisplay";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { validateName } from "@/lib/validate";

const Project = () => {
  const params = useParams();
  const name = params.name as string;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !validateName(name)) return <ProjectLoading />;

  return (
    <div className="w-full flex flex-col items-center">
      <ProjectHeader name={name} />
      <ProjectImage name={name} />
      <ProjectInfo name={name} />
      <ProjectsDisplay />
    </div>
  );
};

export default Project;

const ProjectLoading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full bg-black h-[140px]" />
    </div>
  );
};
