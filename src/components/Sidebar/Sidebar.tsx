'use client';

import { FC, useEffect } from 'react';

import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';
import { useStore } from '@/store';
import { getRequestData } from '@/utils/api';
import { useDetectMobile } from '@/hooks/useDetectMobile';

const Sidebar: FC = () => {
  const { setFavourites } = useStore((state) => state);
  const isMobile = useDetectMobile();

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
