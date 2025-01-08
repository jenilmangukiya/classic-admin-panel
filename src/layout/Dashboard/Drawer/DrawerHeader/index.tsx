import { useTheme } from '@mui/material/styles';

import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from './../../../../components/logo';

// TypeScript type for props
interface DrawerHeaderProps {
  open: boolean;
}

export default function DrawerHeader({ open }: DrawerHeaderProps) {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Logo sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
}
