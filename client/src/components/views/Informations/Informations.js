import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Informations.module.scss';

const Informations = () => {

  return (
    <div className={styles.root}>
      <div className={styles.links}>
        <h4>Information</h4>
        <ul>
          <li><NavLink to="/">About me</NavLink></li>
          <li><NavLink to="/">Policy</NavLink></li>
          <li><NavLink to="/">Conditions</NavLink></li>
        </ul>
      </div>
      <div className={styles.links}>
        <h4>My account</h4>
        <ul>
          <li><NavLink to="/">Login</NavLink></li>
          <li><NavLink to="/">My cart</NavLink></li>
          <li><NavLink to="/">Wishlist</NavLink></li>
        </ul>
      </div>
      <div className={styles.links}>
        <h4>Orders</h4>
        <ul>
          <li><NavLink to="/">Payment Options</NavLink></li>
          <li><NavLink to="/">Shipping and delivery</NavLink></li>
          <li><NavLink to="/">Returns</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Informations;