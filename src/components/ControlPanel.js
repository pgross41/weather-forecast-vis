import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Container, Icon, Menu, Segment, Visibility } from 'semantic-ui-react';
import styles from './ControlPanel.module.css';

const ControlPanel = () => {
  const [fixed, setFixed] = useState(false);
  return (
    <Visibility once={false} onTopPassed={() => setFixed(true)} onTopPassedReverse={() => setFixed(false)}>
      <Segment className={`${styles.ControlPanel} ${fixed && styles.fixed}`}> 
        <Container>
          <Menu compact secondary>
            <Menu.Item>
              <Icon link circular size="large" name="angle left" />
            </Menu.Item>
            <Menu.Item header as="h3">
              January 26, 2021
            </Menu.Item>
            <Menu.Item>
              <Icon link circular size="large" name="angle right" />
            </Menu.Item>
          </Menu>
        </Container>
        <Container>
          <Menu compact pointing secondary size="large">
            <Menu.Item link active>
              Temperature
            </Menu.Item>
            <Menu.Item link>Precipitation</Menu.Item>
            <Menu.Item link>Wind</Menu.Item>
          </Menu>
        </Container>
      </Segment>
    </Visibility>
  );
};

ControlPanel.propTypes = {};

export default ControlPanel;
