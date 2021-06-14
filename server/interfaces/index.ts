export interface HashMap<DynamicType> {
  [key: string]: DynamicType;
}

export interface ProjectOptionalProps {
  devTools?: DevelopmentTool[];
  platforms?: SoftwarePlatform[];
  screenshots?: ProjectScreenshots[];
}

export interface ProjectIncludes {
  devTools?: boolean;
  platforms?: boolean;
  screenshots?: boolean;
}

export interface Project extends ProjectOptionalProps {
  id: number;
  name: string;
  type: string;
  repo: string;
  logo: string;
  intro: string;
  language: string;
  coverUrl: string;
  description: string;
  dockerHubUrl: string;
  downloadUrl: string;
  tags: string;
}

export interface DevelopmentField {
  id: number;
  name: string;
}

export interface DevelopmentTool {
  id: number;
  name: string;
  devField?: DevelopmentField;
}

export interface SoftwarePlatform {
  id: number;
  name: string;
}

export interface ProjectScreenshots {
  id: number;
  url: string;
}

export interface ContactFormFields {
  name: string;
  email: string;
  content: string;
}
