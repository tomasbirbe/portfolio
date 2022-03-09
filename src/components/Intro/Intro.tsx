import Image from 'next/image';
import Link from 'next/link';

import { DownArrow } from '../Icons';

export default function Intro() {
  return (
    <section
      className="page gap-12 pb-[2em] lg:gap-14 lg:flex-row-reverse lg:justify-around"
      id="intro"
    >
      <div className="w-[150px] lg:w-[300px]">
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
      <div className="flex flex-col items-center gap-4 lg:gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1>Tomás Birbe</h1>
          <p className="text-center text-xl">Desarrollador Front-End React</p>
        </div>
        <div className="hidden lg:flex lg:gap-8">
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
        </div>
      </div>
      <div className="flex flex-row gap-8 lg:hidden">
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
      </div>
      <DownArrow href="#about-me" />
    </section>
  );
}
