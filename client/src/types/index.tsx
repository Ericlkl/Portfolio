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
  download?: string[];
  intro: string;
  screenshots?: string[];
  information: any;
};

export type ContactFormFields = {
  name: string;
  email: string;
  content: string;
};
