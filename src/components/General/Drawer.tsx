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
          <a
            href="#intro"
            className={styles.link}
            aria-label="Ir a la seccion Introduccion"
          >
            Introduccion
          </a>
        </li>
        <li onClick={onClose}>
          <a
            href="#about-me"
            className={styles.link}
            aria-label="Ir a la seccion Sobre Mi"
          >
            Sobre mi
          </a>
        </li>
        <li onClick={onClose}>
          <a
            href="#techs"
            className={styles.link}
            aria-label="Ir a la seccion Tecnologias"
          >
            Tecnologias
          </a>
        </li>
        <li onClick={onClose}>
          <a
            href="#projects"
            className={styles.link}
            aria-label="Ir a la seccion Proyectos"
          >
            Proyectos
          </a>
          <ul className={styles.links}>
            <li onClick={onClose}>
              <a
                href="#twitter-clone"
                aria-label="Ir a la seccion Proyectos: Twitter Clone"
              >
                Twitter Clone
              </a>
            </li>
            <li onClick={onClose}>
              <a
                href="#calculator"
                aria-label="Ir a la seccion Proyectos: Calculadora"
              >
                Calculadora
              </a>
            </li>
          </ul>
        </li>
        <li onClick={onClose}>
          <a href="#contact" aria-label="Ir a la seccion Contacto">
            Contacto
          </a>
        </li>
      </ul>
      <div className={styles.divider} />
      <div className={styles.icons}>
        <a
          href="mailto: tomas.birbe@gmail.com"
          aria-label="Enviar un correo a tomas.birbe@gmail.com"
          rel="noreferrer noopener"
        >
          <img className={styles.email} src="icons/email.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/tomas-birbe/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Ir al perfil de LinkedIn de Tomas Birbe"
        >
          <img
            className={styles.linkedin}
            src="icons/white-linkedin.svg"
            alt=""
          />
        </a>
        <a
          href="https://github.com/tomasbirbe"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Ir al perfil de GitHub de Tomas Birbe"
        >
          <img
            className={styles.github}
            src="icons/github.svg"
            alt="Logo de GitHub"
          />
        </a>
      </div>
      <button
        className={styles.backButton}
        onClick={onClose}
        aria-label="Cerrar menu de navegacion"
      >
        <img src="icons/back.svg" alt="" className={styles.back} />
      </button>
    </div>
  );
};

export default Drawer;
