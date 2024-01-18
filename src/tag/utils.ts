import { TypographyVariants } from '../typography/Typography.types';
import { SizeTypes } from './Tag.types';

export const getTagTypographyVariant = (size: SizeTypes) =>
  ({
    small: 'text10' as TypographyVariants,
    medium: 'text12' as TypographyVariants,
    large: 'text14' as TypographyVariants,
  })[size];
