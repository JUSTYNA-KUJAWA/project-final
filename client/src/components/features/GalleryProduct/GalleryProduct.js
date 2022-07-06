import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './GalleryProduct.module.scss';

const GalleryProduct = (props) => {
  return (
    <div className={styles.element}>
      <Link to={`/category/${props.category}`}>
        <img alt={props.alt} src={props.img}/>
        <div className={clsx(props.banner === 'small' ? styles.bannerSmall : styles.bannerLarge)}>
          <p>{props.line}</p>
        </div>
      </Link>
    </div>
  );
};

GalleryProduct.propTypes = {
  category: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  line: PropTypes.string.isRequired,
};

export default GalleryProduct;