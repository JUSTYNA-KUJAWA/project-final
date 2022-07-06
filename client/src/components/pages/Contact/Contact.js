import React from 'react';
import HeroProduct from '../../common/HeroProduct/HeroProduct';
import Container from '../../common/Container/Container';
import ContactForm from './ContactForm/ContactForm';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.root}>
      <HeroProduct />
      <Container>  
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;