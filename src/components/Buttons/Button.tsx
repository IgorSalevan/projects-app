import { FC, PropsWithChildren } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'contained',
  sx = {},
  ...props
}) => (
  <MuiButton variant={variant} sx={{ ...sx, borderRadius: 0 }} {...props}>
    {children}
  </MuiButton>
);
