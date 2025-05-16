"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({ index }: { index: number }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="w-full flex flex-col cursor-pointer group"
    >
      <div className="w-full aspect-5/3 overflow-hidden rounded-lg">
        <Image
          src={`/placeholder/placeholder_${index + 1}.jpg`}
          alt="placeholder"
          width={2000}
          height={2000}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          draggable={false}
        />
      </div>
      <div className="w-full flex items-center justify-between mt-3">
        <h1 className="text-black font-semibold">Project Name</h1>
        <p className="text-sm text-neutral-500 font-light">2025</p>
      </div>
      <p className="text-sm text-neutral-500 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
};
export default ProjectCard;
