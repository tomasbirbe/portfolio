import React from 'react';
import styles from './Projects.module.css';

const Projects = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};

export default Projects;
