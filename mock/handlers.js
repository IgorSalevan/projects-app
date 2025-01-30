import { http, HttpResponse } from 'msw';

import projectsJson from './data/projects';

const apiProjectsPath = `${process.env.API_MOCK_URL}/projects`;

const projects = new Map([
  ...projectsJson.projects.map((project) => [project.id, project]),
]);

export const handlers = [
  http.get(apiProjectsPath, () => {
    return HttpResponse.json(projects);
  }),

  http.get(`${apiProjectsPath}/:id`, async ({ _, params }) => {
    const { id } = params;

    const project = projects.get(id);

    if (!project) {
      return new HttpResponse(null, {
        status: 404,
        statusText: `Project does not exist, id: ${projectId}`,
      });
    }
    return HttpResponse.json(project);
  }),

  http.post(apiProjectsPath, async ({ request }) => {
    const project = await request.json();
    projects.set(project.id, project)
    return HttpResponse.json(project);
  }),
];
