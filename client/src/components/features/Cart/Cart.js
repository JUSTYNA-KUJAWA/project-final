import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import CartProduct from '../CartProduct/CartProduct';
import Container from '../../common/Container/Container';
import HeroProduct from '../../common/HeroProduct/HeroProduct';

import styles from './Cart.module.scss';

const Cart = () => {
  const cart = useSelector(state => getCart(state));
  const cartTotal = useSelector(state => getCartTotal(state));

  const calculateTotal = () => cartTotal + 25;

  const navigate = useNavigate();

  const handlePayement = () => {
    navigate('/payment');
  };

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <HeroProduct />
      <Container>
        <h2>Your shopping basket</h2>
        {cart.length === 0 ? <div className={styles.cartEmpty}>
          <p>Your cart is empty</p>
          <NavLink to="/"><img alt="logo" src="/images/home/logo.png" /></NavLink>
        </div> :
          (<div className={styles.cartContainer}>
            <div className={styles.cartDetailsCol}>
              {cart.map(product => <CartProduct
                key={product._id}
                {...product}
              />)}
            </div>
            <div className={styles.cartSummaryCol}>
              <div className={styles.summaryDetails}>
                <h3>Summary</h3>
                <p>Subtotal: <span>{cartTotal} EUR </span></p>
                <p>Shipping: <span>25 EUR </span></p>
                <p className={styles.summaryLine}>Total with shipping: <span>{calculateTotal()} EUR</span></p>
                <Button onClick={handlePayement}>Confirmation order</Button>
                <Button onClick={handleContinue}>Continue Shopping</Button>
              </div>
            </div>
          </div>)}
      </Container>
      
    </div>
  );
};

export default Cart;