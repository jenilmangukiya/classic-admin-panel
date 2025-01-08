import { lazy } from 'react';

import Loadable from '../components/Loadable';
import Dashboard from '../layout/Dashboard';
import Charts from '../pages/ChartAndMaps/Charts';
import Maps from '../pages/ChartAndMaps/Maps';

const Color = Loadable(lazy(() => import('../pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('../pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('../pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));
const SamplePage = Loadable(lazy(() => import('../pages/extra-pages/sample-page')));
const MuiTable = Loadable(lazy(() => import('../pages/component-overview/MuiTable')));

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'mui-table',
      element: <MuiTable />
    },
    {
      path: 'charts',
      element: <Charts />
    },
    {
      path: 'maps',
      element: <Maps />
    }
  ]
};

export default MainRoutes;
