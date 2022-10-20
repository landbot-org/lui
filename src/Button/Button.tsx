import React from 'react';

export interface ButtonPropTypes {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonPropTypes) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
