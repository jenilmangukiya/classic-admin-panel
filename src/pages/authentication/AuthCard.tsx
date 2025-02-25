import React, { ReactNode } from 'react';

import Box from '@mui/material/Box';
import MainCard from '../../components/MainCard';

// Define props type
interface AuthCardProps {
  children: ReactNode;
  [key: string]: any; // For additional props passed to the component
}

const AuthCard: React.FC<AuthCardProps> = ({ children, ...other }) => {
  return (
    <MainCard
      sx={{
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        '& > *': { flexGrow: 1, flexBasis: '50%' }
      }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme: any) => theme.customShadows.z1}
    >
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
};

export default AuthCard;
