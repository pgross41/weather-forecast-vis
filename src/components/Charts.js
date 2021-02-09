import React from 'react';
import { Container } from 'semantic-ui-react';
import Chart from './Chart';
import styles from './Charts.module.css';

const Charts = () => {
  return (
    <Container fluid className={styles.charts}>
      <Chart title="Temperature" />
      <Chart title="Precipitation" />
      <Chart title="Wind" />
    </Container>
  );
};

Charts.propTypes = {};

export default Charts;
