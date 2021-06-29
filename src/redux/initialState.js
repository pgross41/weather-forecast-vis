import * as weatherTypes from './weatherTypes';

export default {

  // Current selected date (time truncated to midnight)
  date: (new Date()).setHours(0,0,0,0),

  // Current selected chart name
  chartName: weatherTypes.TEMPERATURE,

  // Chart actively being scrolled to
  scrollToChart: null,

  // Every day of weather data
  allWeatherData: {},
};
