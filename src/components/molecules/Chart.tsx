import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const state: any = {
    series: [30, 20, 15, 15, 20],

    options: {
      colors: ['#FF8B00', '#0019F8', '#D00BF0', '#FFFFFF', '#00B6FF'],
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '90%',
          },
        },
      },
      stroke: {
        width: 1,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['BTC', 'USDT', 'Others', 'BNB', 'Undefined'],
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default Chart;
