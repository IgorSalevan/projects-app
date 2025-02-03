import { FC } from 'react';
import {
  CircularProgress,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useStore } from '@/store';

import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';

const SidebarContent: FC = () => {
  const { favourites } = useStore();
  const router = useRouter();

  if (!favourites.loaded) {
    return <CircularProgress className="m-auto" />;
  }

  const favouriteProjects = Object.values(favourites.data);

  const handleViewProgect = (id: string) => () =>
    router.push(ROUTES.project(id));

  return (
    <>
      <Typography variant="h6" className="pt-16 text-center">
        Favourite Projects
      </Typography>
      {favouriteProjects.length > 0 ? (
        <List dense sx={{ listStyleType: 'disc' }}>
          {favouriteProjects.map(({ id, name }) => (
            <ListItemButton key={id} component="a" sx={{ pl: 8 }}>
              <ListItemText
                primary={name}
                onClick={handleViewProgect(id)}
                sx={{ display: 'list-item', pl: 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      ) : (
        <Typography className="pt-12 text-gray-400 text-center">
          Add to some...
        </Typography>
      )}
    </>
  );
};

export default SidebarContent;
