import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getRequestData } from '@/utils/api';

interface IProject {
  id: string;
  name: string;
}

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="lg:text-4xl sm:text-sm font-bold mb-4 text-gray-500">
        {projects.length}
      </h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: IProject[];
}> = async () => {
  const response = await getRequestData('projects');
  const projects = await response.json();

  return {
    props: {
      projects,
    },
  };
};
