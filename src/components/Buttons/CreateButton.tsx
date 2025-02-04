import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { ROUTES } from '@/utils/routes';
import { IconButton, SxProps } from '@mui/material';
import { AddCircle as AddIcon } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { Button } from './Button';

interface IProps {
  sx?: SxProps;
}

export const CreateButton: FC<IProps> = ({ sx: sxMobile }) => {
  const isMobile = useDetectMobile();
  const router = useRouter();
  const handleAddNewProject = () => router.push(ROUTES.newProject);

  if (isMobile) {
    return (
      <IconButton sx={{...sxMobile, my: 0}} onClick={handleAddNewProject}>
        <AddIcon sx={{color: blue[700]}} />
      </IconButton>
    );
  }

  return (
    <Button onClick={handleAddNewProject}>
      Create Project
    </Button>
  );
};
