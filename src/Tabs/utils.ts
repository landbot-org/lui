import { css } from 'styled-components';
import { SizeTypes } from './types';

export const getTabSizeStyles = (size: SizeTypes) => {
  return {
    small: css`
      padding: 0.5rem 1rem;
    `,
    medium: css`
      padding: 0.5rem 1rem;
    `,
    large: css`
      padding: 0.5rem 1.5rem;
    `,
  }[size];
};

export const getTypographySizeStyles = (size: SizeTypes) => {
  return {
    small: 'text12',
    medium: 'text16',
    large: 'subtitle2',
  }[size];
};

export const getButtonIconSizeStyles = (size: SizeTypes) => {
  return {
    small: '0.5x',
    medium: '1x',
    large: '1x',
  }[size];
};

export const getButtonSizeStyles = (size: SizeTypes) => {
  return {
    small: css`
      padding: 0.5rem 0.25rem;
    `,
    medium: css`
      padding: 1rem 0.5rem;
    `,
    large: css`
      padding: 0.5rem 1rem;
    `,
  }[size];
};
