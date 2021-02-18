import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import initialState from './initialState';
import csvAdapter from './middleware/csvAdapter';

export default () => createStore(reducer, initialState, applyMiddleware(csvAdapter));
