export type Project = {
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
  download?: string;
  intro: string;
  screenshots: string[];
  information: any;
};
