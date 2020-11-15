import React from 'react';
import './Footer.css';
import { Button } from './Button';
function Footer(){
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the SPDR newsletter to stay updated!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outlineST' buttonSize='btn--small'>Subscribe</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <div className="social-logo">SPDR<i class='fas fa-spider' /></div>
          </div>
          <small class='website-rights'>SPDR © 2020</small>
          <div class='social-icons'>
            <a class='social-icon-link facebook' href='https://www.facebook.com/' target='_blank' rel="noreferrer"><i class='fab fa-facebook-f' /></a>
            <a class='social-icon-link instagram' href='https://www.instagram.com/' target='_blank' rel="noreferrer"><i class='fab fa-instagram' /></a>
            <a class='social-icon-link youtube' href='https://www.youtube.com/' target='_blank' rel="noreferrer"><i class='fab fa-youtube' /></a>
            <a class='social-icon-link twitter' href='https://www.twitter.com/' target='_blank' rel="noreferrer"><i class='fab fa-twitter' /></a>
            <a class='social-icon-link linkedIn' href='https://www.linkedin.com/' target='_blank' rel="noreferrer"><i class='fab fa-linkedin' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;