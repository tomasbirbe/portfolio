import styles from './Projects.module.css';
import { DownArrow } from '../Icons';

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <article className={styles.copy}>
        <span>
          Ahora que le diste un vistazo a algunas de las tecnologias con las que
          me siento comodo, me gustaria que veas algunas cosas que hice con
          estas herramientas
        </span>
        <span>
          Todos los proyectos que encuentres estan en produccion y podes acceder
          a cada uno de ellos haciendo click en el titulo del proyecto
        </span>
        <span>¡Espero los disfrutes tanto como yo!</span>
      </article>
      <DownArrow href="#twitter-clone" />
    </section>
  );
}

export default Projects;
