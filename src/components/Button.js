import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { Link as Linked} from 'react-scroll';

const STYLES = ["btn-primary", "btn--outline", "btn--outlineST"];

const SIZES = ["btn--medium", "btn--large", "btn--small"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize, loc, scroll,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if(scroll){
    return (
      <Linked to={loc} spy={true} smooth={true} offset={-80} className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Linked>
    );
} else{
  return (
    <Link to={loc} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
  }
};
