import {
  TurnedIn,
  TurnedInNotSharp,
  Star,
  StarOutline,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { FC } from 'react';

interface IProps {
  isFavourite: boolean;
}

const FavouriteIcon: FC<IProps> = ({ isFavourite = true }) => {
  const Favourite = isFavourite ? TurnedIn : TurnedInNotSharp;
  const StarIcon = isFavourite ? Star : StarOutline;

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Favourite
        sx={{
          fontSize: 40,
          color: isFavourite ? 'red' : undefined,
        }}
      />
      <StarIcon
        sx={{
          position: 'absolute',
          ...(isFavourite
            ? {
                fontSize: 20,
                color: 'white',
                mt: 1,
              }
            : {
                fontSize: 16,
                '&.MuiSvgIcon-root': {
                  fill: 'rgba(0, 0, 0, 0.8);',
                },
                mt: 1.1,
              }),
        }}
      />
    </Box>
  );
};

export default FavouriteIcon;
