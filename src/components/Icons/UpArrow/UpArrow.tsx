import styles from './UpArrow.module.css';

const UpArrow = ({ href }: { href: string }) => {
  return (
    <a href={href} className={styles.container} aria-label="Go to first page">
      <img src="icons/up-arrow.svg" alt="" className={styles.arrow} />
    </a>
  );
};

export default UpArrow;
