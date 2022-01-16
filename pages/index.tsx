import styles from './styles/Home.module.css';

import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Techs from './components/Techs/Techs';

export default function Home() {
  return (
    <main className={styles.container}>
      <button type="button" className={styles.menuButton}>
        <span className={styles.menu} />
      </button>
      <Intro />
      <About />
      <Techs />
    </main>
  );
}
