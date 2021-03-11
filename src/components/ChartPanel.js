import React from 'react';
import { Divider, Grid, Header, Segment } from 'semantic-ui-react';
import styles from './ChartPanel.module.css';
import Legend from './Legend';
import { Bar } from 'react-chartjs-2';

const ChartPanel = ({ title, chart }) => {
  console.log(chart);
  return (
    <Segment className={styles.ChartPanel} id={title}>
      <Header as="h3" content={title} textAlign="left" />
      <Divider />
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header as="h4" content={'Actual'} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h4" content={'Forecast'} />
          </Grid.Column>
          <Grid.Column width={2}>
            <Header as="h4" content={'Legend'} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} textAlign="right"></Grid.Column>
          <Grid.Column width={12} textAlign="right">
            <div className={styles.chart}>
              <Bar data={chart.data} width={100} options={chart.options} />
            </div>
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Legend values={chart.legendValues} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ChartPanel;
