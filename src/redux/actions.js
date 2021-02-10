import * as types from './actionTypes';

export function nextDate() {
  return { type: types.NEXT_DATE };
}

export function prevDate() {
  return { type: types.PREV_DATE };
}

export function selectChart(chartName) {
  return { type: types.SET_CHART_NAME, chartName };
}
