import type { GetStaticProps } from 'next';
import { getRequestData } from '@/utils/api';
import { IProject } from '@/types';
import { toast } from 'react-toastify';
import { FC, useEffect } from 'react';
import { useStore } from '@/store';
import ProjectsTable from '@/components/ProjectsTable';

interface IProps {
  projects: IProject[];
  error?: string;
}

const Projects: FC<IProps> = ({ projects: initProjects, error }) => {
  const {setProjects, setMessage} = useStore((state) => state);

  useEffect(() => {
    setProjects(initProjects);

    if (error) {
      toast.error(error);
      setMessage(error);
    }
  }, [initProjects, error]);

  return <ProjectsTable />;
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  try {
    const response = await getRequestData('projects');
    if (!response.ok) {
      console.log(response)
      throw new Error(`Code: ${response.status} - ${response.statusText}`);
    }

    const projects = await response.json();
    return {
      props: {
        projects,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        projects: [],
        error: (error as Error).message,
      },
    };
  }
};

export default Projects;
