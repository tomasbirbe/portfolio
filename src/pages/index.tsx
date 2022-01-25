import { useState } from 'react';
import styles from './Home.module.css';

import Intro from '../../src/components/Intro/Intro';
import About from '../../src/components/About/About';
import Techs from '../../src/components/Techs/Techs';
import Projects from '../../src/components/Projects/Projects';
import TwitterClone from '../../src/components/Projects/TwitterClone/TwitterClone';
import Calculator from '../../src/components/Projects/Calculator/Calculator';
import Contact from '../../src/components/Contact/Contact';
import Drawer from '../../src/components/General/Drawer';
import Nav from '../../src/components/General/Nav';
import useToggle from 'hooks/useToggle';

export default function Home() {
  const { onOpen, onClose, isOpen } = useToggle();

  return (
    <main className={styles.container}>
      <Nav />
      <Intro />
      <About />
      <Techs />
      <Projects />
      <TwitterClone />
      <Calculator />
      <Contact />
      <Drawer isOpen={isOpen} onClose={onClose} />
      <button type="button" className={styles.menuButton} onClick={onOpen}>
        <span className={styles.menu} />
      </button>
    </main>
  );
}
