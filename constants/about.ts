export type Education = {
  school: string;
  degree: string;
  date: string;
};

export type Job = {
  title: string;
  company: string;
  date: string;
  description: string;
  href: string;
};

export const EDUCATION: Education[] = [
  {
    school: "Georgia Institute of Technology",
    degree: "Online Master of Science in Computer Science",
    date: "Jan 2025 - Present",
  },
  {
    school: "Empire State University",
    degree: "Master Prerequisite - Computer Science",
    date: "Jan 2024 - May 2024",
  },
  {
    school: "Cornell University",
    degree: "Bachelor of Architecture",
    date: "June 2016 - Dec 2021",
  },
];

export const JOBS: Job[] = [
  {
    title: "Software Engineer",
    company: "Architech AI",
    date: "Oct 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi, quaerat a atque eaque quasi porro doloremque doloribus consectetur corporis accusamus architecto similique facilis at soluta ex facere fugiat rem.",
    href: "https://www.linkedin.com/company/architechtw",
  },
  {
    title: "Junior Architect",
    company: "Robert A.M. Stern Architects",
    date: "April 2022 - Aug 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi, quaerat a atque eaque quasi porro doloremque doloribus consectetur corporis accusamus architecto similique facilis at soluta ex facere fugiat rem.",
    href: "https://www.linkedin.com/company/architechtw",
  },
  {
    title: "Intern Architect",
    company: "Bio Architecture Formosana",
    date: "May 2019 - Aug 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi, quaerat a atque eaque quasi porro doloremque doloribus consectetur corporis accusamus architecto similique facilis at soluta ex facere fugiat rem.",
    href: "https://www.linkedin.com/company/architechtw",
  },
];
