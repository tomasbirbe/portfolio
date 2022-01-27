import { UpArrow } from '../Icons';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contacto</h2>
      <article className={styles.text}>
        <span>¡Llegamos al final del recorrido!</span>
        <span>
          Siempre estoy dispuesto a escuchar cualquier propuesta. Si pensas que
          puedo encajar en algun proyecto que tengas en mente, no dudes en
          ponerte en contacto conmigo. Te dejo algunos medios para que puedas
          contactarme
        </span>
      </article>
      <article className={styles.icons}>
        <a
          href="mailto: tomas.birbe@gmail.com"
          aria-label="Enviar un correo a tomas.birbe@gmail.com"
          rel="noreferrer noopener"
        >
          <img className={styles.email} src="icons/email.svg" alt="" />
          <span></span>
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
          <span></span>
        </a>
        <a
          href="https://github.com/tomasbirbe"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Ir al perfil de GitHub de Tomas Birbe"
        >
          <img className={styles.github} src="icons/github.svg" alt="" />
          <span></span>
        </a>
      </article>
      <UpArrow href="#intro" />
    </section>
  );
};

export default Contact;
