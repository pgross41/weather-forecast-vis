import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Container, Grid, Icon, Menu, Segment, Visibility } from 'semantic-ui-react';
import styles from './ControlPanel.module.css';

const ControlPanel = () => {
  const [fixed, setFixed] = useState(false);
  return (
    <Visibility once={false} onTopPassed={() => setFixed(true)} onTopPassedReverse={() => setFixed(false)}>
      <Segment className={`${styles.controlPanel} ${fixed && styles.fixed}`}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6} textAlign="right">
              <Menu.Item>
                <Icon link size="large" name="angle left" />
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={4}>
              <Menu.Item header as="h2">
                January 26, 2021
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={6} textAlign="left">
              <Menu.Item>
                <Icon link size="large" name="angle right" />
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Container>
              <Menu compact pointing secondary size="large">
                <Menu.Item link active>
                  Temperature
                </Menu.Item>
                <Menu.Item link>Precipitation</Menu.Item>
                <Menu.Item link>Wind</Menu.Item>
              </Menu>
            </Container>
          </Grid.Row>
        </Grid>
      </Segment>
    </Visibility>
  );
};

ControlPanel.propTypes = {};

export default ControlPanel;
