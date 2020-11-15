import React from "react";
import './LoginForm.css';
import {Button} from './Button';
import { Link } from 'react-router-dom';


function LoginForm() {
  return (
    <div id="login" className="login-container">
      <h1 className="login-prompt">Login to your <span className="fancy">SPDR</span> account</h1>
      <form>
        <input
          className="login-input"
          name="email"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="login-input"
          name="password"
          type="password"
          placeholder="Your Password"
        />
        <Button className = 'lButton' buttonStyle="btn--outline" buttonSize="btn--medium" loc='/accountPage'>
          LOGIN
        </Button>
      </form>
      <Link to="/signup" className='login-info'>
        Don't have an account? Click here to make one.
      </Link>
    </div>
  );
}
export default LoginForm;