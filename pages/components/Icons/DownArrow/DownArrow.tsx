import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import styles from './DownArrow.module.css';

const DownArrow = ({ href }: { href: string }) => {
  return (
    <a href={href} className={styles.container}>
      <IoChevronDown className={styles.downArrow} />
    </a>
  );
};

export default DownArrow;
