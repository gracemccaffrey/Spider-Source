import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { Link as Linked } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  if(props.onHome){
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to="top" spy={true} smooth={true} offset={-80} className='navbar-logo' onClick={closeMobileMenu}>
              SPDR <i class="fas fa-spider"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="example" spy={true} smooth={true} offset={-80} className='nav-links' onClick={closeMobileMenu}>
                  What We Do
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to="about" spy={true} smooth={true} offset={-80}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Who We Are
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to="login" spy={true} smooth={true} offset={-80}
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="top" spy={true} smooth={true} offset={-80}
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' loc='/signup'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  } else{
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Linked to="/" className='navbar-logo' onClick={closeMobileMenu}>
              SPDR <i class="fas fa-spider"></i>
            </Linked>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Linked to="/" className='nav-links' onClick={closeMobileMenu}>
                  What We Do
                </Linked>
              </li>
              <li className='nav-item'>
                <Linked
                  to="/"
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Who We Are
                </Linked>
              </li>
              <li className='nav-item'>
                <Linked
                  to="/"
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Linked>
              </li>

              <li>
                <Linked
                  to="/"
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Linked>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--primary' loc='/signup'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;