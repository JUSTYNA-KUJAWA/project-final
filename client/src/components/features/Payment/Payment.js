import React from 'react';
import styles from './Payment.module.scss';
import Container from '../../common/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, getCartTotal, clearCart } from '../../../redux/cartRedux';
import { addOrderRequest } from '../../../redux/ordersRedux';
import { Navigate, Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Payement = () => {
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const cart = useSelector(state => getCart(state));
  const cartTotal = useSelector(state => getCartTotal(state));

  const cartSummary = cart.map(product => {
    return {_id: product._id, amount: product.amount, price: product.price};
  });

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    const order = {
      products: cartSummary,
      productTotal: cartTotal,
      shippingFee: 25,
      comment,
      firstName,
      lastName,
      address,
      postalCode,
      city,
      phone,
    };
    dispatch(addOrderRequest(order));
    dispatch(clearCart());
  };

  const calculateTotal = () => cartTotal + 25;

  if(cart.length === 0) return <Navigate to='/'/>;
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.orderSummary}>
          {cart.map(product =>
            <div key={product._id} className={styles.itemContainer}>
              <div className={styles.itemImg}>
                <img alt={product.name} src={product.img[0]}/>
              </div>
              <div className={styles.itemDetails}>
                <p>{product.name}</p>
                <p>Size: {product.selectedSize}</p>
                <p>Quantity: {product.amount}</p>
                <p>Item total: {product.totalPrice} EUR</p>
              </div>
            </div>
          )}
          <div className={styles.priceSummary}>
            <p>Subtotal: <span>{cartTotal} EUR</span></p>
            <p>Shipping: <span>25 USD</span></p>
            <p className={styles.grandTotal}>Total: <span>{calculateTotal()} EUR </span></p>
          </div>
        </div>
        <form onSubmit={validate(handleSubmit)} className={styles.form}>
          <label htmlFor="email-input">Contact </label>
          <input
            {...register('email', { required: true })}
            autoComplete="off"
            type="text"
            id="email-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error}>Email is required.</span>}
          <label htmlFor="comment-input">Shipping address</label>
          <div className={styles.doubleInput}>
            <input
              {...register('firstName', { required: true })}
              type="text"
              id="first-name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              {...register('lastName', { required: true })}
              type="text"
              id="last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {errors.firstName && <span className={styles.error}>First name is required.</span>}
          {errors.lastName && <span className={styles.error}>Last name is required.</span>}
          <input
            {...register('address', { required: true })}
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span className={styles.error}>Address is required.</span>}
          <div className={styles.doubleInput}>
            <input
              {...register('postalCode', { required: true})}
              type="text"
              id="postal-code"
              placeholder="Postal code: xx-xxx"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}/>
            <input
              {...register('city', { required: true })}
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          {errors.postalCode && <span className={styles.error}>Postal code is required.</span>}
          {errors.city && <span className={styles.error}>City is required.</span>}
          <input
            {...register('phone', { required: true })}
            type="text"
            id="phone"
            placeholder="Phone: xxx-xxx-xxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className={styles.error}>Phone number is required.</span>}
          <label htmlFor="comment-input">Add comments:</label>
          <textarea
            rows="5"
            cols="60"
            id="comment-input"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className={styles.formInput}
            placeholder="Write your questions or comments"
          />
          <div className={styles.buttons}>
            <Button type="submit">
              <Link to="/thankYou">Confirm order</Link></Button>
            <Link to="/cart">Back to Cart</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Payement;