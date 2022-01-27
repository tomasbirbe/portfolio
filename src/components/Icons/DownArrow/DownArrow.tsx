import styles from './DownArrow.module.css';

const DownArrow = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      className={styles.container}
      aria-keyshortcuts="Control+Shift+Alt+N"
      aria-label="Ir a la pagina siguiente"
    >
      <img src="icons/down-arrow.svg" alt="" className={styles.arrow} />
    </a>
  );
};

export default DownArrow;
