import * as types from './actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  // Make date object from state.date epoch
  const date = new Date(state.date);
  switch (action.type) {
    case types.NEXT_DATE:
      const nextDate = date.setDate(date.getDate() + 1);
      return {
        ...state,
        date: nextDate,
      };
    case types.PREV_DATE:
      const prevDate = date.setDate(date.getDate() - 1);
      return {
        ...state,
        date: prevDate,
      };
    case types.SET_CHART_NAME:
      return { ...state, chartName: action.chartName, scrollToChart: null };
    case types.SET_SCROLL_TO_CHART:
      return { ...state, scrollToChart: action.chartName };
    case types.LOAD_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        allWeatherData: action.allWeatherData,
      };
    default:
      return state;
  }
};
