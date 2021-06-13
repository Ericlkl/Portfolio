export interface DevelopmentField {
  id: number;
  name: string;
  DevelopmentTool: DevelopmentTool[];
}

export interface DevelopmentTool {
  id: number;
  name: string;
}

export interface SoftwarePlatform {
  id: number;
  name: string;
}

export interface ProjectScreenshots {
  id: number;
  url: string;
}

export interface Project {
  id: number;
  name: string;
  type: String;
  repo: string;
  logo: string;
  intro: string;
  devTools?: DevelopmentTool[];
  language: string;
  coverUrl: string;
  platforms?: SoftwarePlatform[];
  description: string;
  dockerHubUrl: string;
  downloadUrl: string;
  screenshots?: ProjectScreenshots[];
  tags: string;
}
