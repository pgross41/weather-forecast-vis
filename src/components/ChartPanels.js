import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visibility } from 'semantic-ui-react';
import { setChartName, setScrollToChart } from '../redux/actions';
import * as chartNames from '../redux/chartNames';
import ChartPanel from './ChartPanel';
import styles from './ChartPanels.module.css';
import TemperatureChart from './charts/TemperatureChart';

const offset = 140;
const refs = {};

const ChartPanels = () => {
  const dispatch = useDispatch();
  const ref = createRef();
  refs[chartNames.TEMPERATURE] = createRef();
  refs[chartNames.PRECIPITATION] = createRef();
  refs[chartNames.WIND] = createRef();

  const scrollToChart = useSelector((state) => state.scrollToChart);

  useEffect(() => {
    if (scrollToChart) {
      window.scrollTo({ top: refs[scrollToChart].current.getBoundingClientRect().top + window.pageYOffset - offset });
      dispatch(setScrollToChart(null));
    }
  }, [scrollToChart, dispatch]);

  const ChartRef = ({ chartName, Chart }) => (
    <div ref={refs[chartName]}>
      <Visibility once={false} onPassing={() => dispatch(setChartName(chartName))} offset={offset + 10}>
        <ChartPanel title={chartName} Chart={Chart} />
      </Visibility>
    </div>
  );

  return (
    <div ref={ref} className={styles.chartPanels}>
      <ChartRef chartName={chartNames.TEMPERATURE} Chart={TemperatureChart} />
      <ChartRef chartName={chartNames.PRECIPITATION} />
      <ChartRef chartName={chartNames.WIND} />
    </div>
  );
};

ChartPanels.propTypes = {};

export default ChartPanels;
