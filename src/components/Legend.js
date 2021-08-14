import React from 'react';
import styles from './Legend.module.css';
import PropTypes from 'prop-types';

const Legend = ({ values }) => {
  return (
    <div className={styles.Legend}>
      {values && values.map((value, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.label}>{value.label || '\u00A0'}</div>
          <div className={styles.color} style={{ backgroundColor: value.color }} />
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
