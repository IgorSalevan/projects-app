export interface IProject {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  manager: string;
}

export type FavouriteProjects = Record<string, IProject>;
