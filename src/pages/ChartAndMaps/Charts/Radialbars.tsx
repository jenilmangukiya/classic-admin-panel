import ReactApexChart from 'react-apexcharts';

export const Radialbars = () => {
  const state = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries']
    }
  };

  return (
    <div>
      <ReactApexChart options={state.options as any} series={state.series} type="radialBar" height={350} />
    </div>
  );
};
