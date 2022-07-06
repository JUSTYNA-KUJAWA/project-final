import React from 'react';
import styles from './Hero.module.scss';
import CarouselHomePage from '../../common/CarouselHomePage/CarouselHomePage';

const Hero = () => {

  return (
    <div className={styles.root}>
      <CarouselHomePage
        image_1={`${process.env.PUBLIC_URL}/images/mainPage/home_logo.png`}
        image_2={`${process.env.PUBLIC_URL}/images/mainPage/home_logo1.png`}
        title={'Mariana Rivas Maal Art'}
      />
      <div className={styles.banner}>
        <p>
          ....Color this clumsiness
        </p>
      </div>
    </div>
  );
};

export default Hero;