"use client";

import ProjectImage from "@/components/ProjectImage";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectsDisplay from "@/components/ProjectsDisplay";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const Project = () => {
  const router = useRouter();
  const { name } = useParams<{ name: string }>();
  const valid = [
    "sonicfi",
    "orbit",
    "portfolio",
    "rerender",
    "tovier",
    "orbit-v1",
  ];

  useEffect(() => {
    if (!valid.includes(name)) {
      router.push("/");
    }
  }, []);

  if (!valid.includes(name)) return null;
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectImage name={name} />
      <ProjectInfo name={name} />
      <ProjectsDisplay />
    </div>
  );
};
export default Project;
