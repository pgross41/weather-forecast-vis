import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Icon, Menu, Segment, Visibility } from 'semantic-ui-react';
import { nextDate, prevDate, setScrollToChart } from '../redux/actions';
import * as weatherTypes from '../redux/weatherTypes';
import styles from './ControlPanel.module.css';

const ControlPanel = () => {
  const [fixed, setFixed] = useState(false);
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const selectedChartName = useSelector((state) => state.chartName);
  const onSelectChart = (e) => dispatch(setScrollToChart(e.target.text));

  const ChartMenuItem = ({ chartName }) => (
    <Menu.Item active={chartName === selectedChartName} link onClick={onSelectChart}>
      {chartName}
    </Menu.Item>
  );

  return (
    <Visibility once={false} onTopPassed={() => setFixed(true)} onTopPassedReverse={() => setFixed(false)}>
      <Segment className={`${styles.controlPanel} ${fixed && styles.fixed}`}>
        <Grid>
          {/* Date selector */}
          <Grid.Row className={styles.row}>
            <Grid.Column width={6} textAlign="right">
              <Menu.Item onClick={() => dispatch(prevDate())}>
                <Icon link circular size="large" name="angle left" />
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign="middle">
              <Menu.Item header as="h2">
                {new Date(date).toLocaleDateString()}
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={6} textAlign="left">
              <Menu.Item onClick={() => dispatch(nextDate())}>
                <Icon link circular size="large" name="angle right" />
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
          {/* Chart selector */}
          <Grid.Row className={styles.row}>
            <Container>
              <Menu compact pointing secondary size="large">
                <ChartMenuItem chartName={weatherTypes.TEMPERATURE} />
                <ChartMenuItem chartName={weatherTypes.PRECIPITATION} />
                <ChartMenuItem chartName={weatherTypes.WIND} />
              </Menu>
            </Container>
          </Grid.Row>
        </Grid>
      </Segment>
    </Visibility>
  );
};

ControlPanel.propTypes = {};

export default ControlPanel;
