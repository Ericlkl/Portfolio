import React from 'react';
import styles from '../../styles/Layout/spinner.module.scss';
const Spinner: React.FC = () => {
  const dots = [...Array(6).keys()].map((value) => (
    <div key={`dot-${value}`} className={styles['sk-chase-dot']}></div>
  ));
  return (
    <div className={styles['spinner']}>
      <div className={styles['sk-chase']}>{dots}</div>
    </div>
  );
};

export default Spinner;
