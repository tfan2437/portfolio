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
    greeting: string;
    driveLink: string;
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
  projects: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
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
    devOps: string;
    uiux: string;
    achievements: string;
    impact: string;
    liveDemo: string;
  };
};

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
