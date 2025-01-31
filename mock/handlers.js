import { http, HttpResponse } from 'msw';
import { readFile } from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const data = await readFile(new URL('./data/projects.json', import.meta.url), 'utf-8');
const projectsJson = JSON.parse(data);

const apiProjectsPath = `${process.env.NEXT_PUBLIC_API_MOCK_URL}/projects`;

const projects = new Map([
  ...projectsJson.projects.map((project) => [project.id, project]),
]);

export const handlers = [
  http.get(apiProjectsPath, async () => {
    return HttpResponse.json(Array.from(projects.values()));
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
    projects.set(project.id, project);
    return HttpResponse.json(project);
  }),
];
