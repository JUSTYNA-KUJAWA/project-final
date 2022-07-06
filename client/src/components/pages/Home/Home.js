import React from 'react';
import Hero from '../../views/Hero/Hero';
import Description from '../../views/Description/Description';
import Container from '../../common/Container/Container';
import Message from '../../views/Message/Message';
import NewArrivals from '../../pages/NewArrivals/NewArrivals';
import styles from './Home.module.scss';
import Gallery from '../../features/Gallery/Gallery';

const Home = () => {

  return (
    <div className={styles.root}>
      <Hero />
      <Container>        
        <Description />
        <Message />
        <Gallery />
        <NewArrivals />
      </Container>
    </div>
  );
};

export default Home;