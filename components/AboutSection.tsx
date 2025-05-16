"use client";

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col items-center my-[200px]">
      <div className="w-full flex flex-row justify-between max-w-7xl h-full min-h-[500px]">
        <div className="w-full flex flex-col max-w-[650px]">
          <div className="w-full flex flex-col">
            <h1 className="text-2xl font-bold">Ting Wei Fan</h1>
            <p className="text-sm font-light text-neutral-700 mt-1">
              Fullstack Software Engineer
            </p>
            <p className="text-neutral-700 mt-6">
              Skilled in TypeScript, Java, and Python, with experience building
              scalable web apps using React, Next.js, Node.js, and Spring Boot.
              Proficient in AWS, Docker, and modern authentication methods.
              Strong in data structures, algorithms, and delivering performant,
              user-focused solutions.
            </p>
          </div>
          <div className="flex flex-col mt-16 gap-20">
            <div className="flex flex-col relative">
              <button className="absolute font-medium text-neutral-500 text-sm top-0 right-0 py-1 px-4 rounded-full border border-neutral-500 cursor-pointer">
                Company Linkedin
              </button>
              <h2 className="font-semibold text-lg">Software Engineer</h2>
              <span className="text-sm font-light text-neutral-700">
                Architech AI
              </span>
              <span className="mt-1 text-sm font-light text-neutral-700">
                Oct 2024 - Present
              </span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eligendi, quaerat a atque eaque quasi porro doloremque
                doloribus consectetur corporis accusamus architecto similique
                facilis at soluta ex facere fugiat rem.
              </p>
            </div>
            <div className="flex flex-col relative">
              <button className="absolute font-medium text-neutral-500 text-sm top-0 right-0 py-1 px-4 rounded-full border border-neutral-500 cursor-pointer">
                Company Linkedin
              </button>
              <h2 className="font-semibold text-lg">Software Engineer</h2>
              <span className="text-sm font-light text-neutral-700">
                Architech AI
              </span>
              <span className="mt-1 text-sm font-light text-neutral-700">
                Oct 2024 - Present
              </span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eligendi, quaerat a atque eaque quasi porro doloremque
                doloribus consectetur corporis accusamus architecto similique
                facilis at soluta ex facere fugiat rem.
              </p>
            </div>

            <div className="flex flex-col relative">
              <button className="absolute font-medium text-neutral-500 text-sm top-0 right-0 py-1 px-4 rounded-full border border-neutral-500 cursor-pointer">
                Linkedin
              </button>
              <h2 className="font-semibold text-lg">Software Engineer</h2>
              <span className="text-sm font-light text-neutral-700">
                Architech AI
              </span>
              <span className="mt-1 text-sm font-light text-neutral-700">
                Oct 2024 - Present
              </span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti eligendi, quaerat a atque eaque quasi porro doloremque
                doloribus consectetur corporis accusamus architecto similique
                facilis at soluta ex facere fugiat rem.
              </p>
            </div>
          </div>

          {/* pinging dot */}
          {/* <div className="flex flex-row gap-2 items-center">
            <div className="relative">
              <div className="size-3 bg-green animate-ping rounded-full" />
              <div className="size-3 flex items-center justify-center absolute top-0 left-0">
                <div className="size-2 bg-[#bafe27] rounded-full" />
              </div>
            </div>
            <span className="text-black font-medium text-xs">
              Available for work
            </span>
          </div> */}
        </div>

        <div className="w-full max-w-[450px] flex flex-col">
          <div className="flex flex-col w-fit gap-4">
            <SkillItem
              title="Languages"
              skills="TypeScript, Java, Python, JavaScript, C++"
            />
            <SkillItem
              title="Frontend"
              skills="Next.js, React, Redux, Tailwind CSS"
            />
            <SkillItem
              title="Backend"
              skills="Node.js, Express.js, Spring Boot"
            />
            <SkillItem
              title="Communication"
              skills="RESTful APIs, WebSockets"
            />
            <SkillItem
              title="Authentication"
              skills="JWT, OAuth, Firebase Auth"
            />
            <SkillItem title="Databases" skills="MongoDB, PostgreSQL, MySQL" />
            <SkillItem
              title="DevOps"
              skills="Git, Docker, AWS (S3, EC2, Lambda)"
            />
            <SkillItem title="Testing" skills="Jest, Unit Testing" />
            <SkillItem title="Concept" skills="Data Structures, Algorithms" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;

const SkillItem = ({ title, skills }: { title: string; skills: string }) => {
  return (
    <div className="flex gap-3 items-center text-black">
      <span className="font-semibold">{title}:</span>
      <span className="text-neutral-700">{skills}</span>
    </div>
  );
};
