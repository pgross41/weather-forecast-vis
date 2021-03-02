import React from 'react';
import { Divider, Header, Segment } from 'semantic-ui-react';
import styles from './ChartPanel.module.css';

const ChartPanel = ({ title, Chart }) => {
  console.log(Chart);
  return (
    <Segment className={styles.ChartPanel} id={title}>
      <Header as="h3" content={title} />
      <Divider />
      <div style={{ height: '400px' }}>{Chart && <Chart />}</div>
    </Segment>
  );
};

export default ChartPanel;
