import React from 'react';
import styles from './Chart.module.css';
import { Bar } from 'react-chartjs-2';

const Chart = ({ chart }) => {
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
        label: 'Wrongness °F',
        minBarLength: '1',
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        backgroundColor: '#888',
        data: chart.data,
      },
      {
        label: 'Absolute Temperature °F',
        barPercentage: 1.25,
        borderWidth: 1,
        backgroundColor: chart.colors,
        data: [
          [-10, 10],
          [-10, 10],
          [-10, 10],
          [-10, 10],
          [-10, 10],
          [-10, 10],
          [-10, 10],
          [-10, 10],
        ],
      },
    ],
  };
  return (
    <div className={styles.Chart}>
      <Bar data={data} width={100} options={options} />
    </div>
  );
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

export default Chart;
