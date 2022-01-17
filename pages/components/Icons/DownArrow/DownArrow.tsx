import styles from './DownArrow.module.css';

const DownArrow = ({ href }: { href: string }) => {
  return (
    <a href={href} className={styles.container}>
      <img src="icons/down-arrow.svg" alt="" className={styles.arrow} />
    </a>
  );
};

export default DownArrow;
