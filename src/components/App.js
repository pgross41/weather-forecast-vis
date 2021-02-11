import styles from './App.module.css';
import Charts from './Charts';
import ControlPanel from './ControlPanel';
import Heading from './Heading';
import Footing from './Footing';

function App() {
  return (
    <div className={styles.App}>
      <Heading />
      <ControlPanel />
      <Charts />
      <Footing />
    </div>
  );
}

export default App;
