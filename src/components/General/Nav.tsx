import { useState } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const [subnav, setSubnav] = useState(`${styles.subnav}`);

  return (
    <ul className={styles.nav}>
      <li>
        <a
          className={styles.navlink}
          href="#intro"
          aria-label="Ir a la seccion Introduccion"
        >
          Introduccion
        </a>
      </li>
      <li>
        <a
          className={styles.navlink}
          href="#about-me"
          aria-label="Ir a la seccion Sobre Mi"
        >
          Sobre mi
        </a>
      </li>
      <li>
        <a
          className={styles.navlink}
          href="#techs"
          aria-label="Ir a la seccion Tecnologias"
        >
          Tecnologias
        </a>
      </li>
      <li>
        <a
          className={styles.navlink}
          href="#projects"
          aria-label="Ir a la seccion Proyectos"
        >
          Proyectos
        </a>
        <div className={styles.container_subnav}>
          <ul className={styles.subnav}>
            <li>
              <a
                className={styles.navlink}
                href="#twitter-clone"
                aria-label="Ir a la seccion Proyectos: Twitter Clone"
              >
                Twitter Clone
              </a>
            </li>
            <li>
              <a
                className={styles.navlink}
                href="#calculator"
                aria-label="Ir a la seccion Proyectos: Calculadora"
              >
                Calculadora
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a
          className={styles.navlink}
          href="#contact"
          aria-label="Ir a la seccion Contacto"
        >
          Contacto
        </a>
      </li>
    </ul>
  );
};

export default Nav;
