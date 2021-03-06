export type Project = {
  _id: string;
  name: string;
  language: string;
  cover: string;
  stacks: string[];
  // Description Page Properties
  logo: string;
  desc: string;
  platforms: string[];
  repo: string;
  docker?: string;
  download?: {
    ios?: string;
    android?: string;
    website?: string;
  };
  intro: string;
  screenshots?: string[];
  information: any;
};

export type ContactFormFields = {
  name: string;
  email: string;
  content: string;
};

export type Award = {
  organization: string;
  name: string;
};
