import { FC } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import ProjectsTableMobile from './ProjectsTableMobile';
import ProjectsTableDesktop from './ProjectsTableDesktop';

const ProjectsTable: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ProjectsComponent = isMobile
    ? ProjectsTableMobile
    : ProjectsTableDesktop;

  return <ProjectsComponent />;
};

export default ProjectsTable;
