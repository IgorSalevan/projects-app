import { FC, useState } from 'react';
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';
import { BurgerMenu } from './BurgerMenu';

const SidebarMobile: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const toggleSidebar = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <BurgerMenu onClick={toggleSidebar} isOpen={mobileOpen} />
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={toggleSidebar}
        sx={{
          display: { md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: '240px',
          },
        }}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};

export default SidebarMobile;
