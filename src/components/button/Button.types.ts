import React from 'react';

export type ButtonVariants = 'contained' | 'outlined' | 'text';
export type ButtonColorTypes = 'pink.main' | 'blue.main' | 'purple.main' | 'white.main';
export type ButtonSizeTypes = 'small' | 'medium' | 'large';
export type ButtonTextAlignTypes = 'left' | 'center' | 'right';

type ButtonPropsBase = {
  children?: React.ReactNode;
  color?: ButtonColorTypes;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  isLoading?: boolean;
  size?: ButtonSizeTypes;
  variant?: ButtonVariants;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  textAlign?: ButtonTextAlignTypes;
  ellipsize?: boolean;
};

export type ButtonProps = ButtonPropsBase & (JSX.IntrinsicElements['a'] | JSX.IntrinsicElements['button']);
