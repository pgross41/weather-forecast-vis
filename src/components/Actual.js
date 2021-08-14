import React from 'react';
import { useSelector } from 'react-redux';
import calculateColor from '../util/calculateColor';
import selectChartMetadata from '../redux/selectors/selectChartMetadata';
import selectWeatherData from '../redux/selectors/selectWeatherData';
import styles from './Actual.module.css';

/**
 * TODO: Make this look better... Flex box it to show a vertical little square instead of the tall forecast rectangle
 */

const Actual = ({ chartName }) => {
  const chartMetadata = useSelector(selectChartMetadata(chartName));
  const weatherData = useSelector(selectWeatherData);
  const actualValue = weatherData && weatherData[chartMetadata.weatherType];
  const color = calculateColor(chartMetadata.legendValues, [actualValue])[0]

  return (
    <div className={styles.Actual}>
      {actualValue}
      <div className={styles.color} style={{backgroundColor: color}} />
    </div>
  );
};

export default Actual;
