import React, { ReactNode } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import AuthFooter from './../../components/cards/AuthFooter';
import Logo from './../../components/logo';
import AuthCard from './AuthCard';

// assets
import AuthBackground from './../../assets/images/auth/AuthBackground';

// Define props type
interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              minHeight: {
                xs: 'calc(100vh - 210px)',
                sm: 'calc(100vh - 134px)',
                md: 'calc(100vh - 112px)'
              }
            }}
          >
            <Grid item>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthWrapper;
