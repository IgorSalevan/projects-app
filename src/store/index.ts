import { IProject } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IStoreState {
  projects: IProject[];
  favourites: {
    data: IProject[];
    loaded: boolean;
  }
}

interface IStoreAction {
  setProjects: (projects: IProject[]) => void;
  setFavourites: (favourites: IProject[]) => void;
  addFavourite: (projectId: string) => void;
  removeFavourite: (projectId: string) => void;
}

type StoreType = IStoreState & IStoreAction;

export const useStore = create<StoreType>()(
  devtools((set) => ({
    projects: [],
    favourites: {
      data: [],
      loaded: false,
    },
    setProjects: (projects: IProject[]) => set({ projects }),
    setFavourites: (data: IProject[]) => set({ favourites: { data, loaded: true } }),
    // addFavourite: (projectId: string) =>
    //   set((state: IStoreState) => ({
    //     favourites: [...state.favourites, projectId],
    //   })),
    // removeFavourite: (projectId: string) =>
    //   set((state: IStoreState) => ({
    //     favourites: state.favourites.filter((id) => id !== projectId),
    //   })),
  }))
);
