import React from 'react';
import { useSelector } from 'react-redux';
import { Divider, Grid, Header, Segment } from 'semantic-ui-react';
import styles from './ChartPanel.module.css';
import Legend from './Legend';
import Chart from './Chart';
import selectChartMetadata from '../redux/selectors/selectChartMetadata';
import Actual from './Actual';

const ChartPanel = ({ chartName }) => {
  const chartMetadata = useSelector(selectChartMetadata(chartName));
  return (
    <Segment className={styles.chartPanel} id={chartName}>
      <Header as="h3" content={chartName} textAlign="left" />
      <Divider />
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header as="h4" content={'Legend'} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h4" content={'Forecast'} />
          </Grid.Column>
          <Grid.Column width={2}>
            <Header as="h4" content={'Actual'} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} textAlign="right">
            <Legend values={chartMetadata.legendValues} />
          </Grid.Column>
          <Grid.Column width={12} textAlign="right">
            <Chart chartName={chartName} />
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Actual chartName={chartName} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ChartPanel;
