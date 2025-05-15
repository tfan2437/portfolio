const HeroSection = () => {
  return (
    <div className="w-full flex flex-col max-w-7xl">
      <div className="w-full h-[88px]" />
      <p className="text-4xl font-semibold leading-12 whitespace-pre-line mt-28">
        {`Hey there! I'm Ting Wei. \nI build high-quality websites with \nmodern tech expertise.`}
      </p>
      <button className="bg-white mt-6 text-black px-4 py-1.5 w-fit rounded-lg cursor-pointer hover:bg-black hover:text-white border-2 border-black transition-colors duration-500">
        <span className="font-semibold">Contact Me</span>
      </button>
    </div>
  );
};
export default HeroSection;
