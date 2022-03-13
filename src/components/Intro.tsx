import { useLang } from 'context/langContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from 'services/api';

import { DownArrow } from './Icons';

interface Data {
  title: string;
  subtitle: string;
}

const INITIAL_DATA: Data = {
  title: 'Tomas Birbe',
  subtitle: 'Frontend React Developer',
};

export default function Intro() {
  const [lang, setLang] = useLang();
  const [data, setData] = useState<Data>(INITIAL_DATA);

  useEffect(() => {
    setData(api.get.intro(lang));
  }, [lang]);

  return (
    <section
      className="page gap-6 pb-[2em] lg:gap-14 lg:flex-row-reverse lg:justify-around"
      id="intro"
    >
      <select
        className="h-fit w-[150px] top-[30px] right-[15px] lg:hidden absolute px-2 text-left py-2 bg-transparent border-[1px] border-font-primary rounded-xl"
        defaultValue="en"
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
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
      <div className="flex flex-col items-center lg:items-start gap-4">
        <div className="flex flex-col items-center lg:items-start justify-center gap-2">
          <h1>{data.title}</h1>
          <p className="text-center text-xl">{data.subtitle}</p>
        </div>
        <div className="hidden lg:flex lg:gap-8 items-center">
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
