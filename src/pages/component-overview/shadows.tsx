import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComponentWrapper from './ComponentWrapper';
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from '../../components/MainCard';

interface ShadowBoxProps {
  shadow: string;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({ shadow }) => (
  <MainCard border={false} shadow={shadow} boxShadow>
    <Stack spacing={1} justifyContent="center" alignItems="center">
      <Typography variant="h6">boxShadow</Typography>
      <Typography variant="subtitle1">{shadow}</Typography>
    </Stack>
  </MainCard>
);

interface CustomShadowBoxProps {
  shadow: string;
  label: string;
  color: string;
  bgcolor?: string;
}

const CustomShadowBox: React.FC<CustomShadowBoxProps> = ({ shadow, label, color, bgcolor }) => (
  <MainCard border={false} shadow={shadow} boxShadow sx={{ bgcolor: bgcolor || 'inherit' }}>
    <Stack spacing={1} justifyContent="center" alignItems="center">
      <Typography variant="subtitle1" color={color}>
        {label}
      </Typography>
    </Stack>
  </MainCard>
);

const ComponentShadow: React.FC = () => {
  const theme: any = useTheme();

  return (
    <ComponentSkeleton>
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Basic Shadow">
              <Grid container spacing={3}>
                {[...Array(24)].map((_, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                    <ShadowBox shadow={`${index}`} />
                  </Grid>
                ))}
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Custom Shadow">
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox shadow={theme.customShadows.z1} label="z1" color="inherit" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Color Shadow">
              <Grid container spacing={3}>
                {['primary', 'secondary', 'success', 'warning', 'info', 'error'].map((label) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={label}>
                    <CustomShadowBox
                      color={theme.palette[label as keyof typeof theme.palette].contrastText}
                      bgcolor={theme.palette[label as keyof typeof theme.palette].main}
                      shadow={theme.customShadows[`${label}Button` as keyof typeof theme.customShadows]}
                      label={label}
                    />
                  </Grid>
                ))}
                {['primary', 'secondary', 'success', 'warning', 'info', 'error'].map((label) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={label + '2'}>
                    <CustomShadowBox
                      color={theme.palette[label as keyof typeof theme.palette].main}
                      shadow={theme.customShadows[label as keyof typeof theme.customShadows]}
                      label={label}
                    />
                  </Grid>
                ))}
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
};

export default ComponentShadow;
