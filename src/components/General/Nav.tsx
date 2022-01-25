import { useState } from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  const [subnav, setSubnav] = useState(`${styles.subnav}`);

  return (
    <ul className={styles.nav}>
      <li>
        <a className={styles.navlink} href="#intro">
          Introduccion
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="#about-me">
          Sobre mi
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="#techs">
          Tecnologias
        </a>
      </li>
      <li>
        <a className={styles.navlink} href="#projects">
          Proyectos
        </a>
        <div className={styles.container_subnav}>
          <ul className={styles.subnav}>
            <li>
              <a className={styles.navlink} href="#twitter-clone">
                Twitter Clone
              </a>
            </li>
            <li>
              <a className={styles.navlink} href="#calculator">
                Calculadora
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a className={styles.navlink} href="#contact">
          Contacto
        </a>
      </li>
    </ul>
  );
};

export default Nav;
