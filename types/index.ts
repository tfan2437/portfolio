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
  intro: {
    name: string;
    occupation: string;
    greeting: string;
  };
  about: {
    me: {
      name: string;
      title: string;
      intro: string;
    };
    jobs: {
      title: string;
      company: string;
      date: string;
      description: string;
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
    email: string;
    copyright: string;
    projects: {
      name: string;
      href: string;
    }[];
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
    viewWebsite: string;
  };
};

export type BulletPoint = {
  title: string;
  description: string;
};

export type Project = {
  type: string;
  webDev: string;
  year: string;
  service: string;
  title: string;
  summary: string;
  techStack: BulletPoint[];
  backend: BulletPoint[];
  frontend: BulletPoint[];
  devOps: BulletPoint[];
  uiux: BulletPoint[];
  achievements: string[];
  impact: string[];
};
