import type { GetStaticProps } from 'next';
import { getRequestData } from '@/utils/api';
import { IProject } from '@/types';
import { toast } from 'react-toastify';
import { FC, useEffect } from 'react';
import { useStore } from '@/store';
import ProjectsTable from '@/modules/Projects/ProjectsTable';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { CreateButton } from '@/components/Buttons/CreateButton';
import { Box } from '@mui/material';

interface IProps {
  projects: IProject[];
  error?: string;
}

const ProjectsPage: FC<IProps> = ({ projects: initProjects, error }) => {
  const isMobile = useDetectMobile();
  const { setProjects, setMessage } = useStore((state) => state);

  useEffect(() => {
    setProjects(initProjects);

    if (error) {
      toast.error(error);
      setMessage(error);
    }
  }, [initProjects, error]);

  return (
    <>
      {!isMobile && (
        <Box className='flex justify-end mb-8'>
          <CreateButton />
        </Box>
      )}
      <ProjectsTable />;
    </>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  try {
    const response = await getRequestData('projects');
    if (!response.ok) {
      throw new Error(`Code: ${response.status} - ${response.statusText}`);
    }

    const projects = await response.json();
    return {
      props: {
        projects,
      },
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

export default ProjectsPage;
