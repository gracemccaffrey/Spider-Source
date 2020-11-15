import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id='top' className='hero-container'>
      <h1>Devise. Design. Deploy.</h1>
      <p>create an automated prgram on your own</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          loc="login" scroll={true}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;