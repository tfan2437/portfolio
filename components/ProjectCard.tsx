"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRightIcon } from "lucide-react";

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(project.link)}
      className="w-full flex flex-col cursor-pointer group"
    >
      <div className="w-full aspect-5/3 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          draggable={false}
        />
      </div>
      <div className="w-full flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <h1 className="text-black font-semibold">{project.title}</h1>
          <div className="flex items-center justify-center p-[2px] bg-green rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRightIcon className="size-4 text-black" />
          </div>
        </div>
        <p className="text-sm text-neutral-500 font-light">2025</p>
      </div>
      <p className="text-sm text-neutral-500 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
};
export default ProjectCard;
