import ReactApexChart from 'react-apexcharts';

export const MultiGroup = () => {
  const state = {
    series: [
      {
        name: 'Blue',
        data: [
          {
            x: 'Category 1',
            y: 503
          },
          {
            x: 'Category 2',
            y: 580
          },
          {
            x: 'Category 3',
            y: 135
          }
        ]
      },
      {
        name: 'Green',
        data: [
          {
            x: 'Category 1',
            y: 733
          },
          {
            x: 'Category 2',
            y: 385
          },
          {
            x: 'Category 3',
            y: 715
          }
        ]
      },
      {
        name: 'Orange',
        data: [
          {
            x: 'Category 1',
            y: 255
          },
          {
            x: 'Category 2',
            y: 211
          },
          {
            x: 'Category 3',
            y: 441
          }
        ]
      },
      {
        name: 'Red',
        data: [
          {
            x: 'Category 1',
            y: 428
          },
          {
            x: 'Category 2',
            y: 749
          },
          {
            x: 'Category 3',
            y: 559
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 350,
        width: 600,
        type: 'line'
      },
      plotOptions: {
        line: {
          isSlopeChart: true
        }
      },
      tooltip: {
        followCursor: true,
        intersect: false,
        shared: true
      },
      dataLabels: {
        background: {
          enabled: true
        },
        formatter(val: null, opts: { w: { config: { series: { [x: string]: { name: any } } } }; seriesIndex: string | number }) {
          const seriesName = opts.w.config.series[opts.seriesIndex].name;
          return val !== null ? seriesName : '';
        }
      },
      yaxis: {
        show: true,
        labels: {
          show: true
        }
      },
      xaxis: {
        position: 'bottom'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      stroke: {
        width: [2, 3, 4, 2],
        dashArray: [0, 0, 5, 2],
        curve: 'smooth'
      }
    }
  };

  return (
    <div>
      <ReactApexChart options={state.options as any} series={state.series} type="line" height={350} width={600} />
    </div>
  );
};
