import { useLang } from 'context/langContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { api } from 'services/api';

import { UpArrow } from './Icons';

interface Data {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
}

const INITIAL_DATA: Data = {
  title: '',
  firstParagraph: '',
  secondParagraph: '',
};

const Contact = () => {
  const [lang] = useLang();
  const [data, setData] = useState<Data>(INITIAL_DATA);

  useEffect(() => {
    setData(api.get.contact(lang));
  }, [lang]);

  return (
    <section className="page gap-8 pb-8" id="contact">
      <h2>{data.title}</h2>
      <article className="flex flex-col text-center min-w-[270px] max-w-[500px] gap-8 px-[2em]">
        <span>{data.firstParagraph}</span>
        <span>{data.secondParagraph}</span>
      </article>
      <article className="flex items-center gap-8 pl-2">
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
