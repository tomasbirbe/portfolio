import styles from './Intro.module.css';
import Image from 'next/image';
import { DownArrow } from '../Icons';

export default function Intro() {
  function handleClick() {
    console.log('Go to About me');
  }

  return (
    <section className={styles.container} id="intro">
      <div className="w-[250px] lg:w-[300px]">
        <Image
          src="/profilepic.webp"
          alt="A profile pic of me!"
          layout="responsive"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <h2>Hola!</h2>
        <p className="text-center w-[300px]">
          Mi nombre es Tomás.&nbsp;
          <strong className="font-bold">
            Soy Desarrollador Front End React&nbsp;
          </strong>
          y espero poder mostrarte un poco lo que hago (que por cierto, me gusta
          mucho) y quien soy.
        </p>
        <div className="hidden lg:flex lg:gap-8">
          <a
            href="mailto: tomas.birbe@gmail.com"
            aria-label="Enviar un correo a tomas.birbe@gmail.com"
            rel="noreferrer noopener"
          >
            <Image
              src="/icons/email.svg"
              alt="A letter icon"
              loading="lazy"
              width={40}
              height={40}
            />
            <span></span>
          </a>
          <a
            href="https://www.linkedin.com/in/tomas-birbe/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ir al perfil de LinkedIn de Tomas Birbe"
          >
            <Image
              src="/icons/white-linkedin.svg"
              alt="A LinkedIn icon"
              loading="lazy"
              width={40}
              height={40}
            />
            <span></span>
          </a>
          <a
            href="https://github.com/tomasbirbe"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ir al perfil de GitHub de Tomas Birbe"
          >
            <Image
              src="/icons/github.svg"
              alt="A letter icon"
              loading="lazy"
              width={45}
              height={45}
            />
            <span></span>
          </a>
        </div>
      </div>
      <DownArrow href="#about-me" />
    </section>
  );
}
