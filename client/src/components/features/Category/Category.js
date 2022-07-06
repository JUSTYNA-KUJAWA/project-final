import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getProductsByCategory} from '../../../redux/productsRedux';
import Container from '../../common/Container/Container';
import CategoryProduct from '../CategoryProduct/CategoryProduct';
import CarouselProductPage from '../../common/CarouselProductPage/CarouselProductPage';

import styles from './Category.module.scss';

const Category = () => {
  window.scrollTo(0, 0);

  const { name } = useParams();

  const products = useSelector(state => getProductsByCategory(state, name));
  console.log(products);
  
  return (
    <div className={styles.root}>
      <CarouselProductPage
        image_1={`${process.env.PUBLIC_URL}/images/mainPage/home_logo.png`}
        image_2={`${process.env.PUBLIC_URL}/images/mainPage/home_logo1.png`}
        title={'Mariana Rivas Maal Art'}
      />
      <Container>
        <div className={styles.productContainer}>
          <h1> What I can propose You....</h1>
        </div>
        <div className={styles.productContainer}>
          {
            products.map(product =>
              <CategoryProduct 
                key={product._id} 
                id={product._id} 
                name={product.name} 
                img={product.img} 
                price={product.price}
              />
            )
          }
        </div>
      </Container>
    </div>
  );
};

export default Category;