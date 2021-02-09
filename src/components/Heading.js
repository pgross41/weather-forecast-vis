import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';
import icon from '../images/icon.svg';
import cloud1 from '../images/cloud1.svg';
import cloud2 from '../images/cloud2.svg';
import styles from './Heading.module.css';

const clouds = [cloud1, cloud2];

const Heading = () => {
  const Cloud = ({ delay }) => (
    <Image
      src={clouds[Math.round(Math.random()) % clouds.length]}
      style={{ top: `${Math.random() * 100}px`, animationDelay: `${delay + Math.random() * 2}s` }}
      className={styles.cloud}
    />
  );
  return (
    <Segment padded color="blue" inverted className={styles.heading}>
      <div>
        <Cloud delay={0} />
        <Cloud delay={8} />
        <Cloud delay={16} />
        <Cloud delay={24} />
      </div>
      <Segment circular className={styles.innerHeading}>
        <Header as="h1">
          <Image src={icon} height="70px" />
          <Header.Content>Weather Wrongness</Header.Content>
        </Header>
      </Segment>
    </Segment>
  );
};

Heading.propTypes = {};

export default Heading;
