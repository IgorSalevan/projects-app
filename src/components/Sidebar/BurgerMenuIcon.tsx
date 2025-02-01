import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

interface IProps {
  onClick: () => void;
  isOpen: boolean;
}

export const BurgerMenuIcon: FC<IProps> = ({ onClick, isOpen }) => (
  <IconButton
    sx={{
      display: { xs: 'flex', sm: 'none' },
      alignItems: 'flex-start',
      color: 'black',
      width: 40,
      height: 40,
      m: 1,
      zIndex: 'modal',
    }}
    onClick={onClick}
  >
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </IconButton>
);
