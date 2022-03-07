import Image from 'next/image';

import { DownArrow } from '../Icons';

export default function Intro() {
  return (
    <section className="page flex-row justify-around" id="intro">
      <div className="flex flex-col items-center gap-6">
        <h2>Hola!</h2>
        <p className="text-center w-[300px]">
          Mi nombre es Tomás.&nbsp;
          <strong className="font-bold">Soy Desarrollador Front End React&nbsp;</strong>y espero
          poder mostrarte un poco lo que hago (que por cierto, me gusta mucho) y quien soy.
        </p>
        <div className="hidden lg:flex lg:gap-8">
          <a
            aria-label="Enviar un correo a tomas.birbe@gmail.com"
            href="mailto: tomas.birbe@gmail.com"
            rel="noreferrer noopener"
          >
            <Image
              alt="A letter icon"
              height={40}
              loading="lazy"
              src="/icons/email.svg"
              width={40}
            />
          </a>
          <a
            aria-label="Ir al perfil de LinkedIn de Tomas Birbe"
            href="https://www.linkedin.com/in/tomas-birbe/"
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
          <a
            aria-label="Ir al perfil de GitHub de Tomas Birbe"
            href="https://github.com/tomasbirbe"
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
        </div>
      </div>
      <div className="w-[250px] lg:w-[400px]">
        <Image
          priority
          alt="A profile pic of me!"
          className="rounded-full"
          height={300}
          layout="responsive"
          src="/profilepic.webp"
          width={300}
        />
      </div>
      <DownArrow href="#about-me" />
    </section>
  );
}
