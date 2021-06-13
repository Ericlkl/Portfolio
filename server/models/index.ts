export interface Project {
  id: number;
  name: string;
  type: String;
  repo: string;
  logo: string;
  intro: string;
  stacks: string[];
  language: string;
  coverUrl: string;
  platforms: string[];
  description: string;
  dockerHubUrl: string;
  downloadUrl: object;
  screenshots: string[];
  tags: object;
}
