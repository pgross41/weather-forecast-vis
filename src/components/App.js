import { Segment } from 'semantic-ui-react';
import styles from './App.module.css';
import Charts from './Charts';
import ControlPanel from './ControlPanel';
import Heading from './Heading';

function App() {
  return (
    <div className={styles.App}>
      <Heading />
      <ControlPanel />
      <Charts />
    </div>
  );
}

export default App;
