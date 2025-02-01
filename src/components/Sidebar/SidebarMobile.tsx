import { FC, useState } from 'react';
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';
import { BurgerMenuIcon } from './BurgerMenuIcon';

const SidebarMobile: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const toggleSidebar = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <BurgerMenuIcon onClick={toggleSidebar} isOpen={mobileOpen} />
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleSidebar}
        sx={{
          display: { xs: 'block', sm: 'none' },
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
