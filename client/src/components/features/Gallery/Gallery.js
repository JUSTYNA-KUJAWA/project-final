import React from 'react';
import Container from '../../common/Container/Container';
import GalleryProduct from '../GalleryProduct/GalleryProduct';
import styles from './Gallery.module.scss';

const Gallery = () => {

  const galleryItems = [
    {
      category: 'Ceramique',
      alt: 'tools',
      img: '/images/newArrivals/ceramique.png',
      banner: 'small',
      line: 'Ceramic',
    },
    {
      category: 'Paint',
      alt: 'handmade',
      img: '/images/newArrivals/peinture.png',
      banner: 'small',
      line: 'Paints',
    },
    {
      category: 'Arts',
      alt: 'artictic',
      img: '/images/newArrivals/peinture1.png',
      banner: 'small',
      line: 'Arts',
    },
  ];

  return (
    <Container>
      <p className={styles.arrivals}>My Products</p>
      <div className={styles.root}>
        {
          galleryItems.map(item=> (
            <GalleryProduct
              key={item.img}
              category={item.category}
              alt={item.alt}
              img={item.img}
              banner={item.banner}
              line={item.line}
            />))
        }
      </div>
    </Container>
  );
};

export default Gallery;