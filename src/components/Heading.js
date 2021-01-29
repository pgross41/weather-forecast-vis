import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const Heading = () => {
  return (
    <Container text>
      <Header as="h1" content="Weather (or not)" />
      <Header as="h2" content="Visualize weather forecast inaccuracies" />
    </Container>
  );
};

Heading.propTypes = {};

export default Heading;
