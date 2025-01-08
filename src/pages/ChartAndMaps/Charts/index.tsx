import { Grid } from '@mui/material';
import { LineChart } from './LineChart';
import MainCard from '../../../components/MainCard';
import { SplineArea } from './SplineArea';
import { Candlestick } from './Candlestick';
import { Radialbars } from './Radialbars';
import { LineColumnArea } from './LineColumnArea';
import { RadarMultipleSeries } from './RadarMultipleSeries';
import { MultiGroup } from './MultiGroup';

const Charts = () => {
  return (
    <div>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} md={5} lg={5}>
          <MainCard title="Spline Area Chart">
            <SplineArea />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <MainCard title="Line Chart">
            <LineChart />
          </MainCard>
        </Grid>
      </Grid>

      <Grid container rowSpacing={4.5} columnSpacing={2.75} mt={1}>
        <Grid item xs={12} md={12} lg={12}>
          <MainCard title="Candlestick Chart">
            <Candlestick />
          </MainCard>
        </Grid>
      </Grid>

      <Grid container rowSpacing={4.5} columnSpacing={2.75} mt={1}>
        <Grid item xs={12} md={7} lg={7}>
          <MainCard title="Line Chart">
            <LineColumnArea />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <MainCard title="Radial Bars">
            <Radialbars />
          </MainCard>
        </Grid>
      </Grid>

      <Grid container rowSpacing={4.5} columnSpacing={2.75} mt={1}>
        <Grid item xs={12} md={5} lg={5}>
          <MainCard title="Radar Chart">
            <RadarMultipleSeries />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <MainCard title="Multi Group Chart">
            <MultiGroup />
          </MainCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Charts;
