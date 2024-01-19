import React from 'react';

export type ButtonVariants = 'contained' | 'outlined' | 'text';
export type ColorTypes = 'pink.main' | 'blue.main' | 'purple.main' | 'white.main';
export type SizeTypes = 'small' | 'medium' | 'large';
export type TextAlignTypes = 'left' | 'center' | 'right';

type ButtonPropsBase = {
  children?: React.ReactNode;
  color?: ColorTypes;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  isLoading?: boolean;
  size?: SizeTypes;
  variant?: ButtonVariants;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  textAlign?: TextAlignTypes;
  ellipsize?: boolean;
};

export type ButtonProps = ButtonPropsBase & (JSX.IntrinsicElements['a'] | JSX.IntrinsicElements['button']);