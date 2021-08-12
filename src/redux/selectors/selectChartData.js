import { useSelector } from 'react-redux';
import calculateColor from '../../util/calculateColor';
import selectWeatherData from './selectWeatherData';
import selectChartMetadata from './selectChartMetadata';

/**
 * Calculate the colors and values for a chart
 */
export default (chartName) => (state) => {
  const weatherData = useSelector(selectWeatherData);
  const chartMetadata = useSelector(selectChartMetadata(chartName));

  const calculateDiff = (forecast) => Math.round((forecast[chartName] - weatherData[chartName]) * 10) / 10;
  const wrongnessValues = weatherData && weatherData.forecasts.map(calculateDiff);

  const absoluteValues = weatherData && weatherData.forecasts.map((forecast) => forecast[chartName]);
  const colors = calculateColor(chartMetadata.legendValues, absoluteValues);

  return { colors, absoluteValues, wrongnessValues };
};
