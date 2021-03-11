import React from 'react';
import { Segment } from 'semantic-ui-react';
import styles from './Legend.module.css';

const Legend = ({ values }) => {
  return (
    <div className={styles.Legend}>
      {values.map((value, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.color} style={{ backgroundColor: value.color }} />
          <div className={styles.label}>{value.label || '\u00A0'}</div>
        </div>
      ))}
    </div>
  );
};

export default Legend;
