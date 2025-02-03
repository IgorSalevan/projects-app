export const ROUTES = {
  projects: '/projects',
  newProject: '/projects/new',
  project: (id: string) => `/projects/${id}`,
  editProject: (id: string) => `/projects/${id}/edit`
} as const;
