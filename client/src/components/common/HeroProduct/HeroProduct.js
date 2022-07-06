import React from 'react';
import styles from './HeroProduct.module.scss';
import CarouselProductPage from '../CarouselProductPage/CarouselProductPage';

const HeroProduct = () => {

  return (
    <div className={styles.root}>
      <CarouselProductPage
        image_1={`${process.env.PUBLIC_URL}/images/mainPage/home_logo.png`}
        image_2={`${process.env.PUBLIC_URL}/images/mainPage/home_logo1.png`}
      />
      <div className={styles.banner}>
        <p>
          ....Color this clumsiness
        </p>
      </div>
    </div>
  );
};

export default HeroProduct;