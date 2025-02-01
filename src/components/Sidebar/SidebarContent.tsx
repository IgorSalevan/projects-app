import { FC } from 'react';
import {
  CircularProgress,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { useStore } from '@/store';

const SidebarContent: FC = () => {
  const { favourites } = useStore();

  if (!favourites.loaded) {
    return <CircularProgress className='m-auto' />;
  }

  const favouriteProjects = Object.values(favourites.data)
  return (
    <>
      <Typography variant='h6' className='pt-16 text-center'>
        Favourite Projects
      </Typography>
      <List sx={{listStyleType: 'disc'}}>
        {favouriteProjects.map(({ id, name }) => (
          <ListItemButton key={id} component='a' sx={{pl: 8}}>
            <ListItemText primary={name} sx={{ display: 'list-item', pl: 0 }}/>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default SidebarContent;
