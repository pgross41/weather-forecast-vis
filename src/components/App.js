import styles from './App.module.css';
import Charts from './Charts';
import ControlPanel from './ControlPanel';
import Heading from './Heading';
import Footing from './Footing';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadWeatherData } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadWeatherData()), [dispatch]);
  return (
    <div className={styles.App}>
      <Heading />
      <ControlPanel />
      <Charts />
      <Footing />
    </div>
  );
};

export default App;
