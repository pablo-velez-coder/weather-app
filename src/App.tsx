import AppRouter from 'routers/AppRouter';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}

export default App;
