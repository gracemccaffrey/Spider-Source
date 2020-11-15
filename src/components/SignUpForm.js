import React from "react";
import './LoginForm.css';
import {Button} from './Button';


function SignUp() {
  return (
    <div id="login" className="login-container">
      <h1 className="login-prompt">Create a <span className="fancy">SPDR</span> account</h1>
      <form>
        <input
          className="sign-input"
          name="email"
          type="email"
          placeholder="Enter Email "
        /> <br />
        <input
          className="sign-input"
          name="username"
          type="username"
          placeholder="Enter Username "
        /> <br />
        <input
          className="sign-input"
          name="password"
          type="password"
          placeholder="Enter Password"
        /> <br />
        <input
          className="sign-input"
          name="passwordConf"
          type="password"
          placeholder="Confirm Password"
        /> <br />
        <div className='signButton'>
        <Button className = 'signButton' buttonStyle="btn--outline" buttonSize="btn--medium" loc='/accountPage'>
          CREATE
        </Button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;