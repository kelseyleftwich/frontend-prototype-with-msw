type ExperienceFormat = 'Cooking Class' | 'Walking Tour';

type Guide = {
  name: string;
  biography: string;
};

export type Experience = {
  id: number;
  name: string;
  description: string;
  format: ExperienceFormat;
  length: number;
  guide: Guide;
};
