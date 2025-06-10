import HeroSection from "@/components/HeroSection";
import AnimationSeperator from "@/components/AnimationSeperator";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";

const Home = () => {
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
