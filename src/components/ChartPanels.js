import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visibility } from 'semantic-ui-react';
import { setChartName, setScrollToChart } from '../redux/actions';
import * as weatherTypes from '../redux/weatherTypes';
import ChartPanel from './ChartPanel';
import styles from './ChartPanels.module.css';

const offset = 140;
const refs = {};

const ChartPanels = () => {
  const dispatch = useDispatch();
  const ref = createRef();
  refs[weatherTypes.TEMPERATURE] = createRef();
  refs[weatherTypes.PRECIPITATION] = createRef();
  refs[weatherTypes.WIND] = createRef();

  const scrollToChart = useSelector((state) => state.scrollToChart);

  useEffect(() => {
    if (scrollToChart) {
      window.scrollTo({ top: refs[scrollToChart].current.getBoundingClientRect().top + window.pageYOffset - offset });
      dispatch(setScrollToChart(null));
    }
  }, [scrollToChart, dispatch]);

  const ChartRef = ({ chartName }) => (
    <div ref={refs[chartName]}>
      <Visibility once={false} onPassing={() => dispatch(setChartName(chartName))} offset={offset + 10}>
        <ChartPanel chartName={chartName} />
      </Visibility>
    </div>
  );

  return (
    <div ref={ref} className={styles.chartPanels}>
      <ChartRef chartName={weatherTypes.TEMPERATURE} />
      <ChartRef chartName={weatherTypes.PRECIPITATION} />
      <ChartRef chartName={weatherTypes.WIND} />
    </div>
  );
};

ChartPanels.propTypes = {};

export default ChartPanels;
