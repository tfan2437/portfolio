import ProjectImage from "@/components/ProjectImage";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectsDisplay from "@/components/ProjectsDisplay";

const Project = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <ProjectImage name={name} />
      <ProjectInfo name={name} />
      <ProjectsDisplay />
    </div>
  );
};

export default Project;
