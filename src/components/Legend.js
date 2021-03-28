import React from 'react';
import { Segment } from 'semantic-ui-react';
import styles from './Legend.module.css';
import PropTypes from 'prop-types';

const Legend = ({ values }) => {
  return (
    <div className={styles.Legend}>
      {values && values.map((value, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.color} style={{ backgroundColor: value.color }} />
          <div className={styles.label}>{value.label || '\u00A0'}</div>
        </div>
      ))}
    </div>
  );
};

Legend.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default Legend;
