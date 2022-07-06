import React from 'react';
import HeroProduct from '../../common/HeroProduct/HeroProduct';
import Container from '../../common/Container/Container';
import AboutForm from './AboutForm/AboutForm';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.root}>
      <HeroProduct />
      <Container>   
        <AboutForm />
      </Container>
    </div>
  );
};

export default About;