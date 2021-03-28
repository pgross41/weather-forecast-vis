import * as types from './actionTypes';

export function nextDate() {
  return { type: types.NEXT_DATE };
}

export function prevDate() {
  return { type: types.PREV_DATE };
}

export function setChartName(chartName) {
  return { type: types.SET_CHART_NAME, chartName };
}

export function setScrollToChart(chartName) {
  return { type: types.SET_SCROLL_TO_CHART, chartName };
}

export function loadWeatherData() {
  return { type: types.LOAD_WEATHER_DATA };
}

export function loadWeatherDataSuccess(allWeatherData) {
  return { type: types.LOAD_WEATHER_DATA_SUCCESS, allWeatherData };
}
