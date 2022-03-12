import Image from 'next/image';
import Link from 'next/link';

import { DownArrow } from '../Icons';

const Blommy = () => {
  return (
    <section className="page px-8" id="blommy">
      <article className="flex flex-row text-center md:gap-12 xl:gap-[8em] items-center justify-between">
        <div className="flex h-full flex-col gap-8 items-center justify-between">
          <h3>
            <Link href="https://tb-blog.vercel.app/">
              <a
                aria-label="Ir al proyecto Blommy"
                className="hover:bg-white hover:text-black p-2 rounded transition-all"
                rel="noreferrer noopener"
                target="_blank"
              >
                Blommy
              </a>
            </Link>
          </h3>
          <div className="max-w-[370px] min-w-[250px]">
            Este proyecto es mi blog personal en donde voy publicando mi aprendizaje, herramientas y
            recursos. Pude poner en practica NextJS y ChakraUI con todas sus funcionalidades
          </div>
          <div className="flex gap-3 flex-wrap w-[150px]">
            <Image
              alt="Logo de ChakraUI"
              height={40}
              loading="lazy"
              src="/icons/chakra.svg"
              width={40}
            />
            <Image
              alt="Logo de NextJS"
              height={40}
              loading="lazy"
              src="/icons/nextjs.svg"
              width={40}
            />
            <Image
              alt="Logo de GitHub"
              height={40}
              loading="lazy"
              src="/icons/github.svg"
              width={40}
            />
            <Image alt="Logo de CSS" height={40} loading="lazy" src="/icons/css.svg" width={40} />
            <Image alt="Logo de HTML" height={40} loading="lazy" src="/icons/html.svg" width={40} />
            <Image
              alt="Logo de TypeScript"
              height={40}
              loading="lazy"
              src="/icons/ts.svg"
              width={40}
            />
          </div>
        </div>
        <Link href="https://tb-blog.vercel.app/">
          <a
            className="hidden hover:scale-110 transition-all hover:shadow-xl hover: md:block md:w-[350px] md:h-[350px] lg:w-[500px] xl:w-[600px] relative"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              alt="Vista previa del proyecto Blommy"
              className="object-cover rounded-2xl w-[200px]"
              layout="fill"
              loading="lazy"
              src="/blommy.webp"
            />
          </a>
        </Link>
      </article>
      <DownArrow href="#small-keeper" />
    </section>
  );
};

export default Blommy;
