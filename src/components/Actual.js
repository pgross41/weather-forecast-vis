import React from 'react';
import { useSelector } from 'react-redux';
import selectChartMetadata from '../redux/selectors/selectChartMetadata';
import selectWeatherData from '../redux/selectors/selectWeatherData';
import styles from './Actual.module.css';

/**
 * TODO: Make this look better
 */

const Actual = ({ chartName }) => {
  const chartMetadata = useSelector(selectChartMetadata(chartName));
  const weatherData = useSelector(selectWeatherData);

  return (
    <div className={styles.Actual}>
      {weatherData && weatherData[chartMetadata.weatherType]}
      <div className={styles.color} />
    </div>
  );
};

export default Actual;
