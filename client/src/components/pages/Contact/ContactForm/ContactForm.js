import React from 'react';
import Container from '../../../common/Container/Container';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.root}>
          <h3>adress:</h3>
          <p>50150 Sourdeval</p> 
          <h3>mail:</h3> 
          <p>mariana.rivas.maal@gmail.com</p>
          <h3>phone:</h3>
          <p>07 87 62 55 43</p>
        </div>  
        <form className={styles.form}>
          <div className={styles.contact}>
            <label htmlFor="name">Your Name:</label>
            <input className={styles.input} type="text" id="name" required />
          </div>
          <div className={styles.contact}>
            <label htmlFor="email">Email:</label>
            <input className={styles.input} type="email" id="email" required />
          </div>
          <div className={styles.contact}>
            <label htmlFor="message">Message:</label>
            <textarea className={styles.input} id="message" required />
          </div>
          <button className={styles.button} type="submit">Send Message</button>
        </form>
      </Container> 
    </div>
  );
};



export default ContactForm;