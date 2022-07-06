import React from 'react';
import styles from './Description.module.scss';

const Description = () => {

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <p>COLOR THIS CLUMSINESS</p>
        <p>Coloring book for the highly creative clumsy...</p>
      </div>
    </div>
  );
};

export default Description;