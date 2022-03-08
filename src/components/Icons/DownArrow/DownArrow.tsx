import styles from './DownArrow.module.css';

const DownArrow = ({ href }: { href: string }) => {
  return (
    <a
      aria-keyshortcuts="Control+Shift+Alt+N"
      aria-label="Ir a la pagina siguiente"
      className={styles.container}
      href={href}
    >
      <img alt="" className={styles.arrow} src="icons/down-arrow.svg" />
    </a>
  );
};

export default DownArrow;
