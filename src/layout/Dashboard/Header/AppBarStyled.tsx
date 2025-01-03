import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import { drawerWidth } from './../../../config';

// TypeScript type for component props
interface AppBarStyledProps {
  open?: boolean; // Optional boolean prop
}

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarStyledProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  left: 0,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(!open && {
    width: `calc(100%)`
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default AppBarStyled;
