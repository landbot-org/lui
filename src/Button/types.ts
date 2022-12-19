import React from 'react';

export type ButtonVariants = 'contained' | 'outlined' | 'text';
export type ColorTypes = 'pink.main' | 'blue.main' | 'purple.main';
export type SizeTypes = 'small' | 'medium' | 'large';

type ButtonPropsBase = {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  color?: ColorTypes;
  size?: SizeTypes;
  variant?: ButtonVariants;
};

export type ButtonProps = ButtonPropsBase & (JSX.IntrinsicElements['a'] | JSX.IntrinsicElements['button']);
