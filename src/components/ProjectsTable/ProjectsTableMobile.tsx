import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { useStore } from '@/store';
import { FC } from 'react';
import ToggleFavouriteIcon from '../ToggleFavouriteIcon';

const ProjectsTableMobile: FC = () => {
  const { projects } = useStore((state) => state);

  if (!projects.loaded) {
    return <CircularProgress className="m-auto" />;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Project Manager</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.data.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.manager}</TableCell>
              <TableCell size='small' padding='none' align='center'>
                <ToggleFavouriteIcon projectId={project.id}/>
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
