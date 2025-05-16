"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnimationSeperator from "@/components/AnimationSeperator";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const home = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Navbar />
      <HeroSection />
      <AnimationSeperator />
      <AboutSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};
export default home;
