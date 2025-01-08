import { useMemo } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';

import { drawerWidth } from './../../../config';
import { handlerDrawerOpen, useGetMenuMaster } from './../../../api/menu';
import { Theme } from '@mui/material';

interface MainDrawerProps {
  window?: () => Window | null; // Optional function type for window prop
}

const MainDrawer: React.FC<MainDrawerProps> = ({ window }) => {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster && menuMaster.isDashboardDrawerOpened;
  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  // responsive drawer container
  const container = window !== undefined && window ? () => window()?.document.body : undefined;

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={!!drawerOpen} />, [drawerOpen]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container as any}
          variant="temporary"
          open={drawerOpen}
          onClose={() => handlerDrawerOpen(!drawerOpen)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: '1px solid',
              borderRightColor: 'divider',
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

export default MainDrawer;
