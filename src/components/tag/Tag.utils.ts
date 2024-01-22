import { TypographyVariants } from '../typography/Typography.types';
import { TagSizeTypes } from './Tag.types';

export const getTagTypographyVariant = (size: TagSizeTypes) =>
  ({
    small: 'text10' as TypographyVariants,
    medium: 'text12' as TypographyVariants,
    large: 'text14' as TypographyVariants,
  })[size];
