import { ReactNode } from 'react';

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
  title: string;
  brief: string;
  concluded: string;
  language: ILanguage[];
  description: string;
  stack: IStack[];
}

export interface IProjects {
  projects: IProject[];
  renderArrowNext: (clickHandler: () => void, hasNext: boolean) => ReactNode;
  renderArrowPrev: (clickHandler: () => void, hasPrev: boolean) => ReactNode;
}
