import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import './index.css';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import initialState from './redux/initialState';
import { Provider as ReduxProvider } from 'react-redux';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
