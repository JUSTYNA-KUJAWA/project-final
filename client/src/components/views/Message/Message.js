import React from 'react';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';
import { NavLink, Link } from 'react-router-dom';


const Message = () => {

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <img alt="mariana" src="images/mariana/mariana.png"/>
      </div>
      <div className={styles.socialMedia}>
        <p>Photographe / Plasticienne</p>
        <p>Knowledge and understanding of two/three quite different cultures.</p>
        <p>Find common ground between them and bring them closer.</p>
        <p>I can take the positives of each of these cultures to my advantage.</p>
        <p>American-style communication and sales.</p> 
        <p>French conceptualization and depth and Latin joy.</p>
        <h4>Follow me on social media</h4>
        <NavLink to="/"><img alt="logo" src="/images/home/logo.png" /></NavLink>
        <ul>
          <li>
            <Link to="//www.instagram.com/marianarivasmaal/">
              <FontAwesomeIcon icon={faInstagram}  />
            </Link></li>
          <li>
            <Link to="//twitter.com/marsirivas">
              <FontAwesomeIcon icon= {faTwitter} /></Link></li>
          <li>
            <Link to="//www.facebook.com/marsi.rivas">
              <FontAwesomeIcon icon={faFacebook} /></Link></li>
          <li>
            <Link to="//www.tiktok.com/@marianarivasmaal?is_from_webapp=1&sender_device=pc">
              <FontAwesomeIcon icon={faTiktok} /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Message;