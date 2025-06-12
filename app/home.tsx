"use client";

import HeroSection from "@/components/HeroSection";
import AnimationSeperator from "@/components/AnimationSeperator";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const preloadProjects = setTimeout(() => {
      const projects = ["sonicfi", "orbit", "rerender", "portfolio"];

      projects.forEach((name) => {
        router.prefetch(`/project/${name}`);
      });
    }, 2000);

    return () => clearTimeout(preloadProjects);
  }, [router]);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <HeroSection />
      <AnimationSeperator />
      <AboutSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
