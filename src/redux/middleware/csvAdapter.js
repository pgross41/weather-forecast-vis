import { LOAD_WEATHER_DATA } from '../actionTypes';
import { loadWeatherDataSuccess } from '../actions';
import csvUrl from '../../weatherdata.csv';

/**
 * Read weather data from CSV and transform it into something useful
 * This could be swapped out for a server call if needed
 */
export default (store) => (next) => async (action) => {
  if (action.type === LOAD_WEATHER_DATA) {
    const response = await fetch(csvUrl);
    const csvData = await response.text();
    const weatherData = parseCsvData(csvData);
    store.dispatch(loadWeatherDataSuccess(weatherData));
    return;
  }
  return next(action);
};

/**
 * Read the CSV and format it for the app
 */
const parseCsvData = (csvData) => {
  const data = csvToJson(csvData);
  const parsed = {};

  // Lookup the predicted forecast for a given date and forecast day number
  const getForecast = (dayNumber, dateKey) => {
    const row = data.find((row) => row[`date${dayNumber}`].slice(0, 10) === dateKey);
    if (!row) return null;
    return {
      time: new Date(row[`date${dayNumber}`]),
      condition: row[`condition${dayNumber}`],
      precipitation: row[`precipitation${dayNumber}`],
      temperature: row[`temperature${dayNumber}`],
      windBearing: row[`windBearing${dayNumber}`],
      windSpeed: row[`windSpeed${dayNumber}`],
    };
  };

  // Format the input data into the main "actuals" data with 8 empty forecast slots
  data.forEach((row) => {
    // Remove the time portion and key off yyyy-mm-dd
    const dateKey = row.date.slice(0, 10);
    parsed[dateKey] = {
      time: new Date(row.date),
      condition: row.condition,
      precipitation: row.precipitation,
      temperature: row.temperature,
      windBearing: row.windBearing,
      windSpeed: row.windSpeed,
      forecasts: [
        getForecast(0, dateKey),
        getForecast(1, dateKey),
        getForecast(2, dateKey),
        getForecast(3, dateKey),
        getForecast(4, dateKey),
        getForecast(5, dateKey),
        getForecast(6, dateKey),
        getForecast(7, dateKey),
      ],
    };
  });
  return parsed;
};

/**
 * Simple CSV parser
 */
const csvToJson = (csvData) => {
  const rows = csvData
    .split('\n')
    .filter((row) => !!row)
    .map((row) => row.split(','));
  const headers = rows.shift();
  const obj = rows.map((row) => {
    const fields = {};
    headers.forEach((header, idx) => (fields[header] = row[idx]));
    return fields;
  });
  return obj;
};
