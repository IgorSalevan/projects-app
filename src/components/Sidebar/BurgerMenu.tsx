import { FC } from 'react';
import { IconButton, SxProps } from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  AddCircle as AddIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';

interface IProps {
  onClick: () => void;
  isOpen: boolean;
}

const sx: SxProps = {
  display: { xs: 'flex', sm: 'none' },
  alignItems: 'flex-start',
  color: 'black',
  width: 40,
  height: 40,
  m: 1,
  my: 2,
  zIndex: 'modal',
};

export const BurgerMenu: FC<IProps> = ({ onClick, isOpen }) => {
  const router = useRouter();
  const handleAddNewProject = () => router.push(ROUTES.newProject)
  
  return (
    <div className="flex-col border-r-2">
      <IconButton sx={sx} onClick={onClick}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      {!isOpen && router.route === ROUTES.projects && (
        <IconButton sx={sx} onClick={handleAddNewProject}>
          <AddIcon />
        </IconButton>
      )}
    </div>
  );
};
