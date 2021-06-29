import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Chart.module.css';
import { Bar } from 'react-chartjs-2';
import selectChartData from '../redux/selectors/selectChartData';
import selectChartMetadata from '../redux/selectors/selectChartMetadata';

const Chart = ({ chartName }) => {

  const chartMetadata = useSelector(selectChartMetadata(chartName));
  const chartData = useSelector(selectChartData(chartName));

  const options = {
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        enabled: () => false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: chartMetadata.min,
            max: chartMetadata.max,
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
        data: chartData.values,
      },
      {
        label: 'Absolute Temperature °F',
        barPercentage: 1.25,
        borderWidth: 1,
        backgroundColor: chartData.colors,
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
     {chartData.values &&  <Bar data={data} width={100} options={options} />}
    </div>
  );
};

export default Chart;
