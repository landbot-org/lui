import { css } from 'styled-components';
import { Size } from '../icon/Icon.types';
import { TypographyVariants } from '../typography/Typography.types';
import { TabSizeTypes } from './Tabs.types';

export const getTabSizeStyles = (size: TabSizeTypes) => {
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

export const getTypographyVariantBySize = (size: TabSizeTypes): TypographyVariants => {
  return {
    small: 'text12' as TypographyVariants,
    medium: 'text16' as TypographyVariants,
    large: 'subtitle2' as TypographyVariants,
  }[size];
};

export const getButtonIconSizeStyles = (size: TabSizeTypes): Size => {
  return {
    small: '0.5x' as Size,
    medium: '1x' as Size,
    large: '1x' as Size,
  }[size];
};

export const getButtonSizeStyles = (size: TabSizeTypes) => {
  return {
    small: css`
      padding: 0.5rem 0.25rem;
    `,
    medium: css`
      padding: 1rem 0.5rem;
    `,
    large: css`
      padding: 1.5rem 1rem;
    `,
  }[size];
};
