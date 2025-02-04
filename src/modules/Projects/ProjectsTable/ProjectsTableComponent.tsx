import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  SxProps,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { formatDate } from '@/utils/date';
import FavouriteButton from '@/components/Buttons/FavouriteButton';

const getCellSx = (minBreakpoint = 'sm', maxBreakpoint = 'md'): SxProps => ({
  display: {
    [minBreakpoint]: 'none',
    [maxBreakpoint]: 'table-cell',
  },
});

const sxCell = getCellSx('xs', 'md');
const sxCellManager = getCellSx('xs', 'sm');
const sxRow: SxProps = { backgroundColor: grey[50] };

import { IProjectsStoreSlice } from '@/store/types';
import { ROUTES } from '@/utils/routes';
import { useRouter } from 'next/router';
import { EditButton } from '@/components/Buttons/EditButton';

export interface IProps {
  projects: IProjectsStoreSlice;
  isMobile: boolean;
}

const ProjectsTableComponent: FC<IProps> = ({ projects }) => {
  const router = useRouter();

  const handleViewProject = (id: string) => () =>
    router.push(ROUTES.project(id));

  return (
    <TableContainer>
      <Table
        size="small"
        sx={{ 'td, th': { borderBottom: '3px solid white' } }}
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: grey[200] }}>
            <TableCell>Project ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell sx={sxCell}>Start Date</TableCell>
            <TableCell sx={sxCell}>End Date</TableCell>
            <TableCell sx={sxCellManager}>Project Manager</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.data.map((project) => (
            <TableRow key={project.id} sx={sxRow}>
              <TableCell
                sx={{ cursor: 'pointer' }}
                onClick={handleViewProject(project.id)}
              >
                {project.id}
              </TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell sx={{ ...sxCell, whiteSpace: 'nowrap' }}>
                {formatDate(project.startDate)}
              </TableCell>
              <TableCell sx={{ ...sxCell, whiteSpace: 'nowrap' }}>
                {formatDate(project.endDate)}
              </TableCell>
              <TableCell sx={sxCellManager}>{project.manager}</TableCell>
              <TableCell padding="none" align="center">
                <FavouriteButton projectId={project.id} />
              </TableCell>
              <TableCell>
                <EditButton id={project.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTableComponent;
