import React from 'react';
import { Container, Image, Header, Sticky } from 'semantic-ui-react';
import icon from '../images/icon.svg';
import cloud1 from '../images/cloud1.svg';
import cloud2 from '../images/cloud2.svg';

const Heading = () => {
  return (
    <Container fluid>
      <Image src={icon} height="70px" floated="left"/>
      <Container text className="inline">
        <h1>Weather (or not)</h1>
        <h2>Visualize weather forecast inaccuracies</h2>
      </Container>
    </Container>
  );
};

Heading.propTypes = {};

export default Heading;
