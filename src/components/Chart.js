import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Chart.module.css';
import { Chart as ChartJs, Bar } from 'react-chartjs-2';
import selectChartData from '../redux/selectors/selectChartData';
import selectChartMetadata from '../redux/selectors/selectChartMetadata';

ChartJs.Tooltip.positioners.custom = (elements, eventPosition) => {
  return {
    x: elements[0]._view.x,
    y: eventPosition.y,
  };
};

const Chart = ({ chartName }) => {
  const chartMetadata = useSelector(selectChartMetadata(chartName));
  const chartData = useSelector(selectChartData(chartName));

  const tooltipDatasetNames = ['wrongnessValues', 'absoluteValues'];

  const options = {
    maintainAspectRatio: false,
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
    plugins: {
      tooltips: {
        yAlign: 'center',
      },
    },
    tooltips: {
      position: 'custom',
      callbacks: {
        title: (context) => {
          return context[0].datasetIndex ? chartMetadata.colorLabel : chartMetadata.wrongnessLabel;
        },
        afterTitle: (context) => {
          return context[0].label;
        },
        label: (context) => {
          const datasetname = tooltipDatasetNames[context.datasetIndex];
          const value = chartData[datasetname][context.index];
          return `${value} ${chartMetadata.units}`;
        },
      },
    },
  };

  const data = {
    labels: [
      '7 days prior',
      '6 days prior',
      '5 days prior',
      '4 days prior',
      '3 days prior',
      '2 days prior',
      '1 day prior',
      'Day of',
    ],
    datasets: [
      {
        label: chartMetadata.wrongnessLabel,
        hoverBackgroundColor: 'rgba(255,255,255,0.5)',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderWidth: 2,
        borderColor: '#fff',
        data: chartData.wrongnessValues,
      },
      {
        label: chartMetadata.colorLabel,
        barPercentage: 1.25,
        borderWidth: 0,
        hoverBackgroundColor: chartData.colors,
        backgroundColor: chartData.colors,
        data: Array(8).fill([chartMetadata.min, chartMetadata.max]),
      },
    ],
  };

  return <div className={styles.Chart}>{chartData.wrongnessValues && <Bar data={data} options={options} />}</div>;
};

export default Chart;
