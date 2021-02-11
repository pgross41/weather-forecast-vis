import React from 'react';
import { Divider, Header, Segment } from 'semantic-ui-react';
import styles from './Chart.module.css';

const Chart = ({ title }) => {
  return (
    <Segment className={styles.Chart} id={title}>
      <Header as="h3" content={title} />
      <Divider />
      <div style={{ height: '400px' }} />
    </Segment>
  );
};

export default Chart;
