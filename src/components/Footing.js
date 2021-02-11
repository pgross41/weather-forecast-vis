import React from 'react';
import { Segment } from 'semantic-ui-react';
import styles from './Footing.module.css';

const Footing = () => {
  return (
      <Segment padded color="black" inverted className={styles.footing}></Segment>
  );
};

Footing.propTypes = {};

export default Footing;
