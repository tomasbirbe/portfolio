import { useState } from 'react';
import styles from './Drawer.module.css';

const Drawer = ({ isOpen, onClose }: { isOpen: any; onClose: any }) => {
  return (
    <div
      className={`${styles.drawer}  ${
        isOpen() ? styles.drawerOpen : styles.drawerClose
      }`}
    >
      <ul className={styles.links}>
        <li onClick={onClose}>
          <a href="#intro" className={styles.link}>
            Introduccion
          </a>
        </li>
        <li onClick={onClose}>
          <a href="#about-me" className={styles.link}>
            Sobre mi
          </a>
        </li>
        <li onClick={onClose}>
          <a href="#techs" className={styles.link}>
            Tecnologias
          </a>
        </li>
        <li onClick={onClose}>
          <a href="" className={styles.link}>
            Proyectos
          </a>
          <ul className={styles.links}>
            <li onClick={onClose}>
              <a href="#twitter-clone">Twitter Clone</a>
            </li>
            <li onClick={onClose}>
              <a href="#calculator">Calculadora</a>
            </li>
          </ul>
        </li>
        <li onClick={onClose}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className={styles.divider} />
      <div className={styles.icons}>
        <a href="mailto: tomas.birbe@gmail.com">
          <img className={styles.email} src="icons/email.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/tomas-birbe/" target="_blank">
          <img
            className={styles.linkedin}
            src="icons/white-linkedin.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/tomasbirbe" target="_blank">
          <img className={styles.github} src="icons/github.svg" alt="" />
        </a>
      </div>
      <button className={styles.backButton} onClick={onClose}>
        <img src="icons/back.svg" alt="" className={styles.back} />
      </button>
    </div>
  );
};

export default Drawer;
