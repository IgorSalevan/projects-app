import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { useStore } from '@/store';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import ProjectsTableComponent from './ProjectsTableComponent';

const ProjectsTable: FC = () => {
  const isMobile = useDetectMobile();
  const { projects } = useStore((state) => state);

  if (!projects.loaded) {
    return <CircularProgress className='m-auto' />;
  }

  return <ProjectsTableComponent projects={projects} isMobile={isMobile} />;
};

export default ProjectsTable;
