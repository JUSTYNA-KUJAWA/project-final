import React from 'react';

import Container from '../../common/Container/Container';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <Container>
      <div className={styles.root}>
        <p>© 2022 MarianaRivasMall</p>
      </div>
    </Container>
  );
};

export default Footer;