'use client';

import { FC, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';
import { useStore } from '@/store';
import { getRequestData } from '@/utils/api';

const Sidebar: FC = () => {
  const { setFavourites } = useStore((state) => state);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    getRequestData('favourites')
      .then((data) => data.json())
      .then((data) => {
        setFavourites(data);
      });
  }, []);

  return <>{isMobile ? <SidebarMobile /> : <SidebarDesktop />}</>;
};

export default Sidebar;
