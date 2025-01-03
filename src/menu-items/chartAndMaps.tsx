// assets
import { PushpinOutlined, DotChartOutlined } from '@ant-design/icons';

const chartAndMaps = {
  id: 'Chart and Maps',
  title: 'Chart and Maps',
  type: 'group',
  children: [
    {
      id: 'ApexCharts',
      title: 'ApexCharts',
      type: 'item',
      url: '/charts',
      icon: DotChartOutlined
    },
    {
      id: 'Maps',
      title: 'Google maps',
      type: 'item',
      url: '/maps',
      icon: PushpinOutlined
    }
  ]
};

export default chartAndMaps;
