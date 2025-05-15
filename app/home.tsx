"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const home = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};
export default home;
