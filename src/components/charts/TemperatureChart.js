import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    'Day of',
    '1 day prior',
    '2 days prior',
    '3 days prior',
    '4 days prior',
    '5 days prior',
    '6 days prior',
    '7 days prior',
  ],
  datasets: [
    {
      label: 'Wrongness',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1, 4, 2, 0, -3, -1, 1, 4],
    },
  ],
};

const TemperatureChart = () => {
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

TemperatureChart.propTypes = {};

export default TemperatureChart;
