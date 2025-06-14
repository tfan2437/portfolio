// Project Data Types
export type ProjectItemType = {
  year: number;
  name: string;
  href: string;
  link: string;
  previews: string[];
};

export type ProjectCardType = {
  title: string;
  name: string;
  year: string;
  description: string;
  image: string;
  link: string;
};

// Translation Types
export type Locale = "en" | "zh-TW";

export type Translation = {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    letsTalk: string;
    contactMe: string;
    resume: string;
  };
  hero: {
    name: string;
    occupation: string;
    driveLink: string;
    intro: string[];
  };
  about: {
    me: {
      name: string;
      title: string;
      intro: string[];
    };
    jobs: {
      title: string;
      company: string;
      date: string;
      linkedin: string;
      description: string[];
    }[];
    education: {
      school: string;
      degree: string;
      date: string;
    }[];
    techStacks: {
      title: string;
      skills: string;
    }[];
  };
  footer: {
    title: string;
    intro: string;
    message: string;
    copyright: string;
  };
  label: {
    type: string;
    webDev: string;
    year: string;
    service: string;
    techStack: string;
    backend: string;
    frontend: string;
    fullstack: string;
    devOps: string;
    uiux: string;
    achievements: string;
    impact: string;
    liveDemo: string;
    selectedWorks: string;
  };
};

// Project Translation Types
export type Project = {
  href: string;
  type: string;
  webDev: string;
  year: string;
  service: string;
  title: string;
  summary: string[];
  topic: (Paragraph | Breakdown | BulletPoint | Image)[];
};

export type TopicType = "bullet-point" | "paragraph" | "breakdown" | "image";

export type Paragraph = {
  type: TopicType;
  name: string;
  paragraphs: string[];
  details: Detail[];
};

export type Breakdown = {
  type: TopicType;
  name: string;
  details: Detail[];
};

export type BulletPoint = {
  type: TopicType;
  name: string;
  details: Detail[];
};

export type Image = {
  type: TopicType;
  name: string;
  images: string[];
  paragraphs: string[];
  details: Detail[];
};

export type Detail = {
  title: string;
  description: string;
};
