import { useSelector } from 'react-redux';
import selectWeatherData from './selectWeatherData';

/**
 * Calculate the colors and values for a chart
 */
export default (weatherType) => (state) => {
  const weatherData = useSelector(selectWeatherData);
  
  // TODO: calculate
  const values = weatherData && weatherData.forecasts.map(forecast => forecast[weatherType]);
  console.log(weatherType, values);

  // TODO: calculate
  const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];

  return { colors, values };
};
