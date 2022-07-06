import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { updateCartAmount, removefromCart } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import styles from './CartProduct.module.scss';

const CartProduct = ({ _id, name, img, price, totalPrice, amount, categories }) => {
 

  const [quantity, setQuantity] = useState(amount);
  const [itemTotalPrice, setItemTotalPrice] = useState(totalPrice);
  const [comment] = useState('');

  const dispatch = useDispatch();

  const handleAmountChange = (newAmount) => {
    setQuantity(newAmount);
    setItemTotalPrice(price * newAmount);
    dispatch(updateCartAmount({_id, amount: parseInt(newAmount), totalPrice: price * newAmount, comment}));
  };

  const removeItem = () => {
    dispatch(removefromCart(_id));
  };

  return (
    <div className={styles.cartProduct}>
      <div className={styles.imgContainer}>
        <Link to={`/category/${categories[1]}/item/${_id}`}><img alt={name} src={img[0]}/></Link>
      </div>
      <div className={styles.productDetails}>
        <Link to={`/category/${categories[1]}/item/${_id}`}><h4>{name}</h4></Link>
        <p>Price per item: <span>{price} EUR </span></p>
        <form>
          <label htmlFor="amount-input" className={styles.label}>Quantity: </label>
          <input type='number' id="amount-input" value={quantity} min="0" max="20" onChange={(e) => handleAmountChange(e.target.value)} className={styles.formInputSmall}/>
          <p>Item total: <span>{itemTotalPrice} EUR</span></p>
        </form>
        <Button onClick={removeItem}>Remove</Button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
};

export default CartProduct;