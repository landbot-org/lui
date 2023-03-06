import { TypographyVariants } from '../Typography/types';
import { SizeTypes } from './types';
import { Size } from '../Icon/types';

export const getTagTypographyVariant = (size: SizeTypes) =>
  ({
    small: 'text10' as TypographyVariants,
    medium: 'text12' as TypographyVariants,
    large: 'text14' as TypographyVariants,
  }[size]);

export const getTagIconSize = (size: SizeTypes): Size =>
  ({
    small: '0.5x' as Size,
    medium: '0.5x' as Size,
    large: '1x' as Size,
  }[size]);
