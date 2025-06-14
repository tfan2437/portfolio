"use client";

import HeroSection from "@/components/sections/hero-section";
import AnimationSection from "@/components/sections/animation-section";
import ProjectSection from "@/components/sections/project-section";
import AboutSection from "@/components/sections/about-section";
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
      <AnimationSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
