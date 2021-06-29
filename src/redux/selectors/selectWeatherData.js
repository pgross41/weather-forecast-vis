/**
 * Return the weather data for the current selected date
 */
export default (state) => {
  const date = state.date;
  return state.allWeatherData[new Date(date).toISOString().split('T')[0]];
};
