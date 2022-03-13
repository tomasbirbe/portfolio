import { useLang } from 'context/langContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { api } from 'services/api';

import DrawerLink from './DrawerLink';

interface Data {
  intro: string;
  aboutMe: string;
  technologies: string;
  projects: {
    title: string;
    blommy: string;
    smallKeeper: string;
    twitterClone: string;
  };
  contact: string;
}

const INITIAL_DATA: Data = {
  intro: '',
  aboutMe: '',
  technologies: '',
  projects: {
    title: '',
    blommy: '',
    smallKeeper: '',
    twitterClone: '',
  },
  contact: '',
};

const Drawer = ({ isOpen, onClose }: { isOpen: any; onClose: any }) => {
  const [lang] = useLang();
  const [data, setData] = useState<Data>(INITIAL_DATA);

  useEffect(() => {
    setData(api.get.nav(lang));
  }, [lang]);

  return (
    <div
      className={`flex w-full max-w-[500px] left-[-500px] shadow-xl h-full flex-col bg-raisin-black gap-4 pt-10 absolute z-[2] top-[0] transition-all duration-300 ${
        isOpen ? 'visible translate-x-[500px] opacity-100' : 'invisible opacity-0'
      }`}
    >
      <ul className="flex flex-col gap-6 pl-8">
        <DrawerLink aria-label="Ir a la seccion Introduccion" href="#intro" onClick={onClose}>
          {data.intro}
        </DrawerLink>
        <DrawerLink aria-label="Ir a la seccion Sobre Mi" href="#about-me" onClick={onClose}>
          {data.aboutMe}
        </DrawerLink>
        <DrawerLink aria-label="Ir a la seccion Tecnologias" href="#techs" onClick={onClose}>
          {data.technologies}
        </DrawerLink>
        <DrawerLink aria-label="Ir a la seccion Proyectos" href="#projects" onClick={onClose}>
          {data.projects.title}
        </DrawerLink>
        <ul className="flex flex-col gap-6 pl-8">
          <DrawerLink
            aria-label="Ir a la seccion Proyectos: Blommy"
            href="#blommy"
            onClick={onClose}
          >
            {data.projects.blommy}
          </DrawerLink>
          <DrawerLink
            aria-label="Ir a la seccion Proyectos: Small Keeper"
            href="#small-keeper"
            onClick={onClose}
          >
            {data.projects.smallKeeper}
          </DrawerLink>
          <DrawerLink
            aria-label="Ir a la seccion Proyectos: Twitter Clone"
            href="#twitter-clone"
            onClick={onClose}
          >
            {data.projects.twitterClone}
          </DrawerLink>
        </ul>
        <DrawerLink aria-label="Ir a la seccion Contacto" href="#contact" onClick={onClose}>
          {data.contact}
        </DrawerLink>
      </ul>
      <div />
      <div className="flex gap-16 w-full justify-center items-center">
        <Link href="mailto: tomas.birbe@gmail.com">
          <a aria-label="Enviar un correo a tomas.birbe@gmail.com" rel="noreferrer noopener">
            <Image
              alt="A letter icon"
              height={50}
              loading="lazy"
              src="/icons/email.svg"
              width={50}
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
              height={50}
              loading="lazy"
              src="/icons/white-linkedin.svg"
              width={50}
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
              height={55}
              loading="lazy"
              src="/icons/github.svg"
              width={55}
            />
          </a>
        </Link>
      </div>
      <button
        aria-label="Cerrar menu de navegacion"
        className="absolute top-[30px] right-[30px] hover:cursor-pointer"
        onClick={onClose}
      >
        <div className="w-[30px] h-[30px] relative">
          <Image alt="" layout="fill" src="/icons/back.svg" />
        </div>
      </button>
    </div>
  );
};

export default Drawer;
