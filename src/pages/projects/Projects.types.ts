export interface IStack {
  id: string;
  name: string;
}

export interface ILanguage {
  id: string;
  name: string;
  porcentage: string;
}

export interface IProject {
  id: string;
  name: string;
  category: string;
  title: string;
  brief: string;
  concluded: string;
  language: ILanguage[];
  description: string;
  stack: IStack[];
}

export interface IProjects {
  projects: IProject[];
  menu: string[];
  filterProjects: (category: string) => void;
}
