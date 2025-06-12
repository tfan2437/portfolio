import ProjectImage from "@/components/projects/ProjectImage";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectsDisplay from "@/components/ProjectsDisplay";

const Project = ({ name }: { name: string }) => {
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
