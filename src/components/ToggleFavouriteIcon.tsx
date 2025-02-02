'use client';

import { CircularProgress, IconButton } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useStore } from '@/store';
import FavouriteIcon from './Icons/Favourite';
import { deleteRequestData, postRequestData } from '@/utils/api';

interface IProps {
  projectId: string;
}

export const ToggleFavouriteIcon: FC<IProps> = ({ projectId }) => {
  const { favourites, toggleFavourite } = useStore((state) => state);
  const [loaded, setLoaded] = useState(favourites.loaded);

  const favouriteProjects = favourites.data;
  const isFavourite = projectId in favouriteProjects;

  useEffect(() => {
    if (favourites.loaded != loaded) {
      setLoaded(!loaded);
    }
  }, [favourites.loaded]);

  const handleToggle = () => {
    Promise.resolve()
      .then(() => {
        setLoaded(false);

        if (isFavourite) {
          return deleteRequestData(`favourites/${projectId}`);
        }

        return postRequestData('favourites', { projectId });
      })
      .then((response) => {
        if (response.ok) {
          return toggleFavourite(projectId);
        }
      })
      .then(() => {
        setLoaded(true);
      });
  };

  if (!loaded) {
    return (
      <CircularProgress
        size={20}
        sx={{ display: 'flex', justifySelf: 'center' }}
      />
    );
  }

  return (
    <IconButton onClick={handleToggle} disabled={!loaded}>
      <FavouriteIcon isFavourite={isFavourite} />
    </IconButton>
  );
};

export default ToggleFavouriteIcon;
