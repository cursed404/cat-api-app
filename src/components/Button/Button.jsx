import React from 'react';
import './Button.scss';

const Button = ({ onClick, children, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
