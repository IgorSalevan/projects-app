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
import { formatDate } from '@/utils/date';
import ToggleFavouriteIcon from '../ToggleFavouriteIcon';

const getCellSx = (minBreakpoint = 'sm', maxBreakpoint = 'md'): SxProps => ({
  display: {
    [minBreakpoint]: 'none',
    [maxBreakpoint]: 'table-cell',
  },
});

const sxCell = getCellSx('xs', 'md');
const sxCellId = getCellSx('xs', 'sm');
const sxRow: SxProps = { backgroundColor: '#f5f5f5' };

import { IProjectsStoreSlice } from '@/store/types';

export interface IProps {
  projects: IProjectsStoreSlice;
  isMobile: boolean;
}

const ProjectsTableMobile: FC<IProps> = ({ projects }) => (
  <TableContainer>
    <Table size="small" sx={{ td: { borderBottom: '3px solid white' } }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: '#e3e3e3' }}>
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
            <TableCell sx={sxCellId}>{project.id}</TableCell>
            <TableCell>{project.name}</TableCell>
            <TableCell sx={{ ...sxCell, whiteSpace: 'nowrap' }}>
              {formatDate(project.startDate)}
            </TableCell>
            <TableCell sx={{ ...sxCell, whiteSpace: 'nowrap' }}>
              {formatDate(project.endDate)}
            </TableCell>
            <TableCell>{project.manager}</TableCell>
            <TableCell padding="none" align="center">
              <ToggleFavouriteIcon projectId={project.id} />
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

export default ProjectsTableMobile;
