import React from 'react';

export type ButtonVariants = 'contained' | 'outlined' | 'text';
export type ColorTypes = 'pink.main' | 'blue.main' | 'purple.main';
export type SizeTypes = 'small' | 'medium' | 'large';

type ButtonPropsBase = {
  children?: React.ReactNode;
  color?: ColorTypes;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  size?: SizeTypes;
  variant?: ButtonVariants;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};

export type ButtonProps = ButtonPropsBase & (JSX.IntrinsicElements['a'] | JSX.IntrinsicElements['button']);
