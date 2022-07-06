import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import styles from './CarouselHomePage.module.scss';

const CarouselHomePage = ({ image_1, image_2}) => (
  <div className={styles.carouselContainer}>
    <Carousel interval={7000} showThumbs={false} showStatus={false} autoPlay={true} autoFocus={true} infiniteLoop={true} >
      <div className={styles.slide}>
        <img src={image_1} alt='' />
      </div>
      <div className={styles.slide}>
        <img src={image_2} alt='' />
      </div>
    </Carousel>
  </div>

);

CarouselHomePage.propTypes = {
  image_1: PropTypes.string,
  image_2: PropTypes.string,
};

export default CarouselHomePage;