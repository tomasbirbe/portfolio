import Image from 'next/image';
import Link from 'next/link';

import { UpArrow } from '../Icons';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className="page gap-8" id="contact">
      <h2>Contacto</h2>
      <article className="flex flex-col text-center min-w-[270px] max-w-[500px] gap-8 px-[2em]">
        <span>¡Llegamos al final del recorrido!</span>
        <span>
          Siempre estoy dispuesto a escuchar cualquier propuesta. Si pensas que puedo encajar en
          algun proyecto que tengas en mente, no dudes en ponerte en contacto conmigo. Te dejo
          algunos medios para que puedas contactarme
        </span>
      </article>
      <article className="hidden md:flex md:gap-8 pl-2">
        <Link href="mailto: tomas.birbe@gmail.com">
          <a aria-label="Enviar un correo a tomas.birbe@gmail.com" rel="noreferrer noopener">
            <Image
              alt="A letter icon"
              height={40}
              loading="lazy"
              src="/icons/email.svg"
              width={40}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/tomas-birbe/">
          <a
            aria-label="Ir al perfil de LinkedIn de Tomas Birbe"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              alt="A LinkedIn icon"
              height={40}
              loading="lazy"
              src="/icons/white-linkedin.svg"
              width={40}
            />
          </a>
        </Link>
        <Link href="https://github.com/tomasbirbe">
          <a
            aria-label="Ir al perfil de GitHub de Tomas Birbe"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              alt="A letter icon"
              height={45}
              loading="lazy"
              src="/icons/github.svg"
              width={45}
            />
          </a>
        </Link>
      </article>
      <UpArrow href="#intro" />
    </section>
  );
};

export default Contact;
