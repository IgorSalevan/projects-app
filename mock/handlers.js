import { http, HttpResponse } from 'msw';
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const data = await readFile(new URL('./data.json', import.meta.url), 'utf-8');
const dataJson = JSON.parse(data);

const apiProjectsPath = `${process.env.NEXT_PUBLIC_API_MOCK_URL}/projects`;
const apiFavouritesPath = `${process.env.NEXT_PUBLIC_API_MOCK_URL}/favourites`;

const projects = new Map([
  ...dataJson.projects.map((project) => [project.id, project]),
]);

const favourites = new Map([
  ...dataJson.favourites.map((item) => [
    item.projectId,
    projects.get(item.projectId),
  ]),
]);

export const handlers = [
  http.get(apiProjectsPath, () => {
    return HttpResponse.json(Array.from(projects.values()));
  }),

  http.get(`${apiProjectsPath}/:id`, ({ _, params }) => {
    const { id } = params;

    const project = projects.get(id);

    if (!project) {
      return HttpResponse.json(
        {
          error: 'Project not found',
        },
        {
          status: 404,
        }
      );
    }
    return HttpResponse.json(project);
  }),

  http.post(apiProjectsPath, async ({ request }) => {
    const project = await request.json();
    projects.set(project.id, project);
    return HttpResponse.json(project, {status: 201});
  }),

  http.put(`${apiProjectsPath}/:id`, async ({ request, params }) => {
    const {id} = params;
    const project = await request.json();
    projects.set(id, project);
    return HttpResponse.json(project, {status: 204});
  }),

  // Favourites
  http.get(apiFavouritesPath, () => {
    return HttpResponse.json(Array.from(favourites.values()));
  }),

  http.post(apiFavouritesPath, async ({ request }) => {
    const { projectId } = await request.json();

    if (!projectId) {
      return res(
        ctx.status(400),
        ctx.json({ error: 'Project ID is required' })
      );
    }

    const project = projects.get(projectId);
    favourites.set(projectId, project);

    return HttpResponse.json(project, {status: 201});
  }),

  http.delete(`${apiFavouritesPath}:projectId`, ({ params }) => {
    const { projectId } = params;

    if (favourites.delete(projectId)) {
    }

    return HttpResponse.json({message: 'Project removed from favourites'}, {status: 204});
  }),
];
