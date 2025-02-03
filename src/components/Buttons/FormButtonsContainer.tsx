import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface IProps {
  gap?: number;
}

export const FormButtonsContainer: FC<PropsWithChildren<IProps>> = ({
  gap,
  children,
}) => (
  <Box
    sx={{
      display: 'flex',
      mt: 3,
      ml: { md: '11.2rem' },
      justifyContent: { xs: 'center', md: 'flex-start' },
      gap,
    }}
  >
    {children}
  </Box>
);
