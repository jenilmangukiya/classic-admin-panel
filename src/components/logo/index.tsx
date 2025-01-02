import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import config from './../../config';

interface LogoSectionProps {
  sx?: object;
  to?: string;
}

const LogoSection: FC<LogoSectionProps> = ({ sx, to }) => {
  return (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center">
        {/* <Logo /> */}
        <img src="/logo.png" alt="classic" width="140" />
        {/* <Chip
          label={import.meta.env.VITE_APP_VERSION}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{
            mt: 0.5,
            ml: 1,
            fontSize: '0.725rem',
            height: 20,
            '& .MuiChip-label': { px: 0.5 }
          }}
        /> */}
      </Stack>
    </ButtonBase>
  );
};

export default LogoSection;
