import { FC, PropsWithChildren } from 'react';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { Box, Typography } from '@mui/material';

interface IProps {
  label: string;
}

const FormField: FC<PropsWithChildren<IProps>> = ({ label, children }) => {
  const isMobile = useDetectMobile();

  return (
    <Box className="flex w-full mb-2 px-5">
      {!isMobile && (
        <Typography
          className="text-gray-600 flex justify-end pr-5 pt-3"
          sx={{ width: '10rem', flexShrink: 0 }}
        >
          {label}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default FormField;
