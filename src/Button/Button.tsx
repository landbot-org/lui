import React from 'react';

const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => {
  return <div onClick={onClick}>{label}</div>;
};

export default Button;
