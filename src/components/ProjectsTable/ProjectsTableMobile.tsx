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
import FavouriteIcon from '../Icons/Favourite';

const ProjectsTableMobile: FC = () => {
  const { favourites, projects, toggleFavourite } = useStore((state) => state);

  if (!favourites.loaded || !projects.loaded) {
    return <CircularProgress className="m-auto" />;
  }

  const favouriteProjects = favourites.data;

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
              <TableCell>
                <IconButton onClick={() => toggleFavourite(project.id)}>
                  <FavouriteIcon isFavourite={project.id in favouriteProjects} />
                </IconButton>
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
