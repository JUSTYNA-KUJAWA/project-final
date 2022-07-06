import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import Select from '../../common/Select/Select';
import styles from './Item.module.scss';

const Item = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const product = useSelector(state => getProductById(state, id));

  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(product.price);
  const [error, setError] = useState(false);
  const [selectedSize] = useState(product.size);
  const [cartData, setCartData] = useState({});
  

  const changeSize = newSize => {
    setCartData(values => ({ ...values, size: newSize }));
  };

  const handleAmountChange = (amount) => {
    if(cartData.size === 'small') {
      setAmount(amount);
      setError(false);
      setPrice(product.price * amount);
    }
    else {
      setAmount(amount);
      setError(false);
      setPrice(product.price * amount * 1.25);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount < 1) {
      setError(true);
    } else {
      dispatch(addToCart({...product, amount: parseInt(amount), totalPrice: price, selectedSize}));
      navigate('/cart');
    }
  };

  return (
    <Container>
      <div className={styles.root}>
        <img alt={product.name} src={product.img[0]}/>
        <div className={styles.description}>
          <h3>{product.name}</h3>
          <p>{product.price} EUR</p>
          <p>{product.description}</p>
          <form className={styles.box} onSubmit={handleSubmit}>
            <label htmlFor="amount-input">Choose amount:</label>
            <input type="number" id="amount-input" onChange={e => handleAmountChange(e.target.value)} value={amount} min="0" max="20" className={styles.formInputSmall}/>
            <label htmlFor="select">Select size:</label>
            <Select changeValue={changeSize} options={['small', 'medium', 'large']} name='Choose size:' onChange={e => handleAmountChange(e.target.value)} value={cartData.size} />
            <p>Total price: {price} EUR </p>
            {error && (<p className={styles.errorMessage}>Choose product amount</p>)}
            <Button type="submit" className={styles.button}>Add to cart</Button>
          </form>
        </div>
        <div className={styles.galleryImages}>
          <div className={styles.galleryImageLeft}>
            <img alt={product.name} src={product.img[0] }/>
          </div>
          <div className={styles.galleryImageRight}>
            <img alt={product.name} src={product.img[1]}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

Item.propTypes = {
  img: PropTypes.array,
  sizes: PropTypes.array,
};

export default Item;