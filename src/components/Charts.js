import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visibility } from 'semantic-ui-react';
import { setChartName, setScrollToChart } from '../redux/actions';
import * as chartNames from '../redux/chartNames';
import Chart from './Chart';
import styles from './Charts.module.css';

const offset = 140;

const Charts = () => {
  const dispatch = useDispatch();
  const ref = createRef();
  const refs = {
    [chartNames.TEMPERATURE]: createRef(),
    [chartNames.PRECIPITATION]: createRef(),
    [chartNames.WIND]: createRef(),
  };

  const scrollToChart = useSelector((state) => state.scrollToChart);

  useEffect(() => {
    if (scrollToChart) {
      window.scrollTo({ top: refs[scrollToChart].current.getBoundingClientRect().top + window.pageYOffset - offset });
      dispatch(setScrollToChart(null));
    }
  }, [scrollToChart]);

  const ChartRef = ({ chartName }) => (
    <div ref={refs[chartName]}>
      <Visibility once={false} onPassing={() => dispatch(setChartName(chartName))} offset={offset + 10}>
        <Chart title={chartName} />
      </Visibility>
    </div>
  );

  return (
    <div ref={ref} className={styles.charts}>
      <ChartRef chartName={chartNames.TEMPERATURE} />
      <ChartRef chartName={chartNames.PRECIPITATION} />
      <ChartRef chartName={chartNames.WIND} />
    </div>
  );
};

Charts.propTypes = {};

export default Charts;
