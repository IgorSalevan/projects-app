import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';

const SidebarDesktop = () => (
  <Drawer
    variant='permanent'
    sx={{
      display: {xs: 'none',  md: 'block' },
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: '240px',
      },
    }}
    open
  >
    <SidebarContent />
  </Drawer>
);

export default SidebarDesktop;
