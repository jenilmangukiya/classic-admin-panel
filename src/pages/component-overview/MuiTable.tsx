import ComponentSkeleton from './ComponentSkeleton';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import MainCard from '../../components/MainCard';

export default function MuiTable() {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100
  });

  return (
    <ComponentSkeleton>
      <MainCard>
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid {...data} loading={loading} />
        </Box>
      </MainCard>
    </ComponentSkeleton>
  );
}
