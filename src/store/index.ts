import { FavouriteProjects, IProject } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { postRequestData, putRequestData } from '@/utils/api';
import { StoreType } from './types';

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
    addProject: async (project: IProject & Record<string, unknown>) => {
      return await postRequestData('projects', project);
    },
    updateProject: async (project: IProject & Record<string, unknown>) => {
      const response = await putRequestData(`projects/${project.id}`, project);

      if (response.ok) {
        const favourites = get().favourites.data;
        set({
          favourites: {
            data: {
              ...favourites,
              [project.id]: project
            },
            loaded: true
          }
        })
      }
      return response;
    },
    setFavourites: (data: FavouriteProjects, loaded = true) =>
      set({ favourites: { data, loaded } }),
    toggleFavourite: async (projectId: string) => {
      const favouritesProjects = get().favourites.data;
      if (projectId in favouritesProjects) {
        delete favouritesProjects[projectId];
        return set({
          favourites: {
            data: favouritesProjects,
            loaded: true,
          },
        });
      }
      const projects = get().projects.data;
      const index = projects.findIndex(({ id }) => id === projectId);
      if (index !== -1) {
        return set({
          favourites: {
            data: {
              ...favouritesProjects,
              [projectId]: { ...projects[index] },
            },
            loaded: true,
          },
        });
      }
      return;
    },
    message: '',
    setMessage: (message: string) => set({ message }),
  }))
);
