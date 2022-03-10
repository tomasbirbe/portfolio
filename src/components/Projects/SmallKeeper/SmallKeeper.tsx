import Image from 'next/image';
import Link from 'next/link';

import { DownArrow } from '../../Icons';

const SmallKeeper = () => {
  return (
    <section className="page px-8" id="small-keeper">
      <article className="flex flex-row text-center md:gap-12 xl:gap-[8em] items-center justify-between">
        <Link href="https://tb-small-keeper.vercel.app/">
          <a
            className="hidden hover:scale-110 transition-all hover:shadow-xl hover: md:block md:w-[350px] md:h-[350px] lg:w-[500px] xl:w-[600px] relative"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              alt="Vista previa del proyecto Small Keeper"
              className="object-cover rounded-2xl w-[200px]"
              layout="fill"
              loading="lazy"
              src="/small-keeper.webp"
            />
          </a>
        </Link>
        <div className="flex h-full flex-col gap-8 items-center justify-between">
          <h3>
            <Link href="https://tb-small-keeper.vercel.app/">
              <a
                aria-label="Ir al proyecto Small-Keeper"
                className="hover:bg-white hover:text-black p-2 rounded transition-all"
                rel="noreferrer noopener"
                target="_blank"
              >
                Small Keeper
              </a>
            </Link>
          </h3>
          <div className="max-w-[370px] min-w-[250px]">
            Este proyecto es un gestor de claves en donde podes guardar todas las claves que
            quieras. Utiliza IndexDB a modo de demostracion.
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
              alt="Logo de React"
              height={40}
              loading="lazy"
              src="/icons/react.svg"
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
      </article>
      <DownArrow href="#twitter-clone" />
    </section>
  );
};

export default SmallKeeper;
