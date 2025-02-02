'use client';

import { ReactNode, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import { useStore } from '@/store';
import { useDetectMobile } from '@/hooks/useDetectMobile';
import { Box } from '@mui/material';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const { message, setMessage } = useStore((store) => store);
  const isMobile = useDetectMobile();

  useEffect(() => {
    if (message) {
      setMessage('');
    }
  }, [message]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <Box
        component="main"
        className="flex-1 pl-0 md:p-5 box-border"
        sx={{ ml: isMobile ? 0 : 30 }}
      >
        {children}
      </Box>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
