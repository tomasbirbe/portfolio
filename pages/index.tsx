import styles from './styles/Home.module.css';

import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Techs from './components/Techs/Techs';
import Projects from './components/Projects/Projects';
import TwitterClone from './components/Projects/TwitterClone/TwitterClone';
import Calculator from './components/Projects/Calculator/Calculator';
import Contact from './components/Contact/Contact';

export default function Home() {
  return (
    <main className={styles.container}>
      <button type="button" className={styles.menuButton}>
        <span className={styles.menu} />
      </button>
      <Intro />
      <About />
      <Techs />
      <Projects>
        <TwitterClone />
        <Calculator />
      </Projects>
      <Contact />
      <div className=''></div>
    </main>
  );
}
