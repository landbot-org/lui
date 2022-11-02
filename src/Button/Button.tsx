import React from 'react';

export interface ButtonPropTypes {
  label: string;
  onClick?: () => void;
}

/**
- Use a button for actions.
- The label should always be present.
**/
export const Button = ({ label, onClick }: ButtonPropTypes) => {
  return <button onClick={onClick}>{label}</button>;
};
