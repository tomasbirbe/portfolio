import Image from 'next/image';

import styles from './DownArrow.module.css';

const DownArrow = ({ href }: { href: string }) => {
  return (
    <a
      aria-label="Ir a la pagina siguiente"
      className="absolute bottom-[1em] block p-3 hover:bg-independence transition-all duration-200 rounded-full"
      href={href}
    >
      <div className="w-[25px] relative h-[25px] top-[2px]">
        <Image alt="" layout="fill" src="/icons/down-arrow.svg" />
      </div>
    </a>
  );
};

export default DownArrow;
