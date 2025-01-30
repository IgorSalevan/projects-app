import { getRequestData, postRequestData } from '@/utils/api';

export default async function Home() {
  await postRequestData('projects', { id: 'project_c', name: 'Project C' });

  const response = await getRequestData('projects/project_c');

  if (!response.ok) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {response?.statusText}
      </div>
    );
  }

  const project = await response.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="lg:text-4xl sm:text-sm font-bold mb-4 text-gray-500">
        {project?.name}
      </h1>
    </div>
  );
}
