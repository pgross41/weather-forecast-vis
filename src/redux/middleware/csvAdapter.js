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
  const actuals = {};
  const forecasts = new Array(8).fill({});
  data.forEach((row) => {
    actuals[row.date.slice(0, 10)] = {
      time: new Date(row.date),
      condition: row.condition,
      precipitation: row.precipitation,
      temperature: row.temperature,
      windBearing: row.windBearing,
      windSpeed: row.windSpeed,
    };
    forecasts.forEach((_, dayNumber) => {
      forecasts[dayNumber][row.date.slice(0, 10)] = {
        time: new Date(row[`date${dayNumber}`]),
        condition: row[`condition${dayNumber}`],
        precipitation: row[`precipitation${dayNumber}`],
        temperature: row[`temperature${dayNumber}`],
        windBearing: row[`windBearing${dayNumber}`],
        windSpeed: row[`windSpeed${dayNumber}`],
      };
    });
  });
  const parsedtmp = {
    conditoin: 'rain',
    temperature: '3',
    forecast: [
      {
        condition: 'rain',
        temperature: '3.1',
      },
      {
        condition: 'sprinkle',
        temperature: '3.2',
      },
    ],
  };
  console.log({ actuals, forecasts });
  return actuals;
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
