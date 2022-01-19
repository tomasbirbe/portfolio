import styles from './Home.module.css';

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
      {/* <div className={styles.drawer}>
        <ul>
          <li>
            <a href="" className={styles.link}>
              Introduccion
            </a>
          </li>
          <li>
            <a href="" className={styles.link}>
              Sobre mi
            </a>
          </li>
          <li>
            <a href="" className={styles.link}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="" className={styles.link}>
              Proyectos
            </a>
            <ul>
              <li>
                <a href="">Twitter Clone</a>
              </li>
              <li>
                <a href="">Calculadora</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </div> */}
    </main>
  );
}
