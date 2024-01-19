import { css } from 'styled-components';

import { Size } from '../Iconz/types';
import { TypographyVariants } from '../Typographyz/types';
import { SizeTypes, TabsItem } from './types';

export const getNextActiveTab = (tabs: TabsItem[], activeTab: number) =>
  tabs.slice(activeTab + 1).findIndex((tab) => !tab?.disabled) + activeTab + 1;

export const getPreviousActiveTab = (tabs: TabsItem[], activeTab: number) => {
  const previousTabs = tabs.slice(0, activeTab).reverse();
  const previousActiveTab = previousTabs.findIndex((tab) => !tab.disabled);
  return previousActiveTab === -1 ? activeTab : previousTabs.length - 1 - previousActiveTab;
};

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

export const getTypographyVariantBySize = (size: SizeTypes): TypographyVariants => {
  return {
    small: 'text12' as TypographyVariants,
    medium: 'text16' as TypographyVariants,
    large: 'subtitle2' as TypographyVariants,
  }[size];
};

export const getButtonIconSizeStyles = (size: SizeTypes): Size => {
  return {
    small: '0.5x' as Size,
    medium: '1x' as Size,
    large: '1x' as Size,
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
      padding: 1.5rem 1rem;
    `,
  }[size];
};
