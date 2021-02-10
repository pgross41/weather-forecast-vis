import * as types from './actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  const date = new Date(state.date);
  switch (action.type) {
    case types.NEXT_DATE:
      return { ...state, date: date.setDate(date.getDate() + 1) };
    case types.PREV_DATE:
      return { ...state, date: date.setDate(date.getDate() - 1) };
    case types.SET_CHART_NAME:
      return [...state, { ...action.chartName }];
    default:
      return state;
  }
};
