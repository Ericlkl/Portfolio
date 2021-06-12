import { Award } from '../../../types';

export interface FrameProps {
  url: string;
  description: string;
}

export interface HeroProps {
  img: string;
  title: string;
  subtitle?: string;
  desc?: string;
}

export interface SkillBoxProps {
  fieldName: string;
  skills: string[];
}

export interface AchievementBoxProps {
  title: string;
  items: Award[];
}
