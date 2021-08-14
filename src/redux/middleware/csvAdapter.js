import { LOAD_WEATHER_DATA } from '../actionTypes';
import { loadWeatherDataSuccess } from '../actions';
import csvUrl from '../../weatherdata.csv';

/**
 * Read weather data from CSV and transform it into something useful
 * Would like to swap this file out with an API call in the future?
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
 * Read the flat CSV and group it by day with forecast info in an array
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
      temperature: parseFloat(row[`temperature${dayNumber}`]),
      windBearing: row[`windBearing${dayNumber}`],
      windSpeed: parseFloat(row[`windSpeed${dayNumber}`]),
    };
  };

  // Format the input data into the main "actuals" data with 8 forecast slots
  data.forEach((row) => {
    // Remove the time portion and key off yyyy-mm-dd
    const dateKey = row.date.slice(0, 10);
    parsed[dateKey] = {
      time: new Date(row.date),
      condition: row.condition,
      precipitation: row.precipitation,
      temperature: parseFloat(row.temperature),
      windBearing: row.windBearing,
      windSpeed: parseFloat(row.windSpeed),
      forecasts: [
        getForecast(7, dateKey),
        getForecast(6, dateKey),
        getForecast(5, dateKey),
        getForecast(4, dateKey),
        getForecast(3, dateKey),
        getForecast(2, dateKey),
        getForecast(1, dateKey),
        getForecast(0, dateKey),
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
