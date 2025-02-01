import { IProject } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IStoreState {
  projects: {
    data: IProject[];
    loaded: boolean;
  };
  favourites: {
    data: IProject[];
    loaded: boolean;
  };
  error: string;
}

interface IStoreAction {
  setProjects: (projects: IProject[]) => void;
  setFavourites: (favourites: IProject[]) => void;
  addFavourite: (projectId: string) => void;
  removeFavourite: (projectId: string) => void;
  setError: (error: string) => void;
}

export type StoreType = IStoreState & IStoreAction;

export const useStore = create<StoreType>()(
  devtools((set) => ({
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
    setFavourites: (data: IProject[], loaded = true) =>
      set({ favourites: { data, loaded } }),
    // addFavourite: (projectId: string) =>
    //   set((state: IStoreState) => ({
    //     favourites: [...state.favourites, projectId],
    //   })),
    // removeFavourite: (projectId: string) =>
    //   set((state: IStoreState) => ({
    //     favourites: state.favourites.filter((id) => id !== projectId),
    //   })),
    error: '',
    setError: (error: string) => set({ error }),
  }))
);
