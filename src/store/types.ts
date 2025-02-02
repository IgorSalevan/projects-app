import { FavouriteProjects, IProject } from '@/types';

export interface IProjectsStoreSlice {
  data: IProject[];
  loaded: boolean;
}

interface IFavouritesStoreSlice {
  data: FavouriteProjects;
  loaded: boolean;
}

interface IStoreState {
  projects: IProjectsStoreSlice;
  favourites: IFavouritesStoreSlice;
  message: string;
}

interface IStoreAction {
  setProjects: (projects: IProject[]) => void;
  setFavourites: (favourites: FavouriteProjects) => void;
  toggleFavourite: (projectId: string) => Promise<StoreType>;
  setMessage: (message: string) => void;
}

export type StoreType = IStoreState & IStoreAction;
