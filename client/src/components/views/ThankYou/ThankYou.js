import React from 'react';
import CarouselProductPage from '../../common/CarouselProductPage/CarouselProductPage';
import { NavLink } from 'react-router-dom';
import styles from './ThankYou.module.scss';

const ThankYou = () => {

  return (
    <div className={styles.root}>
      <div>
        <CarouselProductPage
          image_1={`${process.env.PUBLIC_URL}/images/mainPage/home_logo.png`}
          image_2={`${process.env.PUBLIC_URL}/images/mainPage/home_logo1.png`}
          title={'Mariana Rivas Maal Art'}
        />
      </div>
      <div>
        <p>Thank You for your Order.</p>
        <NavLink to="/"><img alt="logo" src="/images/home/logo.png" /></NavLink>
      </div>
    </div>
  );
};

export default ThankYou;