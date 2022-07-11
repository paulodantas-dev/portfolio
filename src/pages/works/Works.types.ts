export interface IWork {
  id: string;
  name: string;
  level: string;
  company: string;
  from: string;
  to: string;
  description: string;
}

export interface IWorks {
  works: IWork[];
}
