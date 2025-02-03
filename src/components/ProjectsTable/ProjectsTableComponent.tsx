import { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  SxProps,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { formatDate } from '@/utils/date';
import FavouriteButton from '../Buttons/FavouriteButton';

const getCellSx = (minBreakpoint = 'sm', maxBreakpoint = 'md'): SxProps => ({
  display: {
    [minBreakpoint]: 'none',
    [maxBreakpoint]: 'table-cell',
  },
});

const sxCell = getCellSx('xs', 'md');
const sxCellId = getCellSx('xs', 'sm');
const sxRow: SxProps = { backgroundColor: grey[50] };

import { IProjectsStoreSlice } from '@/store/types';
import { ROUTES } from '@/utils/routes';
import { useRouter } from 'next/router';

export interface IProps {
  projects: IProjectsStoreSlice;
  isMobile: boolean;
}

const ProjectsTableMobile: FC<IProps> = ({ projects }) => {
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
            <TableCell sx={sxCellId}>Project ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell sx={sxCell}>Start Date</TableCell>
            <TableCell sx={sxCell}>End Date</TableCell>
            <TableCell>Project Manager</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.data.map((project) => (
            <TableRow key={project.id} sx={sxRow}>
              <TableCell
                sx={{ ...sxCellId, cursor: 'pointerś' }}
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
              <TableCell>{project.manager}</TableCell>
              <TableCell padding="none" align="center">
                <FavouriteButton projectId={project.id} />
              </TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTableMobile;
