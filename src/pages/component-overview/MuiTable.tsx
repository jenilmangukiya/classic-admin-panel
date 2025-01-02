import ComponentSkeleton from './ComponentSkeleton';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function MuiTable() {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100
  });

  return (
    <ComponentSkeleton>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid {...data} loading={loading} />
      </Box>
    </ComponentSkeleton>
  );
}
