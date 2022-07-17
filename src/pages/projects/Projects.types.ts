export interface ILib {
  id: number;
  name: string;
}

export interface ILanguage {
  id: number;
  name: string;
  porcentage: number;
}

export interface IProject {
  id: number;
  category: string;
  building: boolean;
  live: string;
  code: string;
  doc: string;
  title: string;
  subTitle: string;
  thumbnail: string;
  languages: ILanguage[];
  description: string;
  libs: ILib[];
}

export interface IProjects {
  projects: IProject[];
  menu: string[];
  filterProjects: (category: string) => void;
}
