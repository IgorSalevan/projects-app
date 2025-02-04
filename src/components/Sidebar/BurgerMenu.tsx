import { FC } from 'react';
import { IconButton, SxProps } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';
import { CreateButton } from '../Buttons/CreateButton';
import FavouriteButton from '../Buttons/FavouriteButton';

interface IProps {
  onClick: () => void;
  isOpen: boolean;
}

const sx: SxProps = {
  display: { xs: 'flex', lg: 'none' },
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
  const { projectId = '' } = router.query;

  return (
    <div className="flex flex-col border-r-2">
      <IconButton sx={sx} onClick={onClick}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {!isOpen && router.route === ROUTES.projects && <CreateButton sx={sx} />}

      {!isOpen && router.asPath === ROUTES.project(projectId as string) && (
        <FavouriteButton projectId={projectId as string} />
      )}
    </div>
  );
};
