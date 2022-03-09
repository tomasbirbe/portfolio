import Image from 'next/image';

import styles from './UpArrow.module.css';

const UpArrow = ({ href }: { href: string }) => {
  return (
    <a
      aria-label="Go to first page"
      className="absolute bottom-[1em] block p-3 hover:bg-independence transition-all duration-200 rounded-full"
      href={href}
    >
      <div className="w-[25px] relative h-[25px] bottom-[2px]">
        <Image alt="" layout="fill" src="/icons/up-arrow.svg" />
      </div>
    </a>
  );
};

export default UpArrow;
