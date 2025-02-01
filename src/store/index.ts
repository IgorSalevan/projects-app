import { FavouriteProjects, IProject } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IStoreState {
  projects: {
    data: IProject[];
    loaded: boolean;
  };
  favourites: {
    data: FavouriteProjects;
    loaded: boolean;
  };
  error: string;
}

interface IStoreAction {
  setProjects: (projects: IProject[]) => void;
  setFavourites: (favourites: FavouriteProjects) => void;
  toggleFavourite: (projectId: string) => void;
  setError: (error: string) => void;
}

export type StoreType = IStoreState & IStoreAction;

export const useStore = create<StoreType>()(
  devtools((set, get) => ({
    projects: {
      data: [],
      loaded: false,
    },
    favourites: {
      data: [],
      loaded: false,
    },
    setProjects: (data: IProject[], loaded = true) =>
      set({ projects: { data, loaded } }),
    setFavourites: (data: FavouriteProjects, loaded = true) =>
      set({ favourites: { data, loaded } }),
    toggleFavourite: async (projectId: string) => {
      const favouritesProjects = get().favourites.data;
      if (projectId in favouritesProjects) {
        delete favouritesProjects[projectId];
        return set({favourites: {
          data: favouritesProjects,
          loaded: true,
        }})
      }
      console.log(favouritesProjects)
    },

      // set(() => {
      //   console.log(projectId);
      //   console.log(store.favourites);
      //   return ({favourites: {}})
      // }),
    error: '',
    setError: (error: string) => set({ error }),
  }))
);
