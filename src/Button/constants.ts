import { theme } from '../shared/theme';
import { TypographyVariants } from '../Typography/types';
import { SpinnerSize } from '../Spinner/types';
import { ColorTypes, SizeTypes } from './types';

export const SIZES_MAPPING: Record<SizeTypes, string> = {
  small: '24px',
  medium: '32px',
  large: '40px',
};

export const CONTAINED_HOVER_BACKGROUND_MAPPING: Record<ColorTypes, string> = {
  'pink.main': theme.palette.pink[300],
  'blue.main': theme.palette.blue[300],
  'purple.main': theme.palette.purple[300],
};

export const DEFAULT_HOVER_BACKGROUND_MAPPING: Record<ColorTypes, string> = {
  'pink.main': theme.palette.pink[100],
  'blue.main': theme.palette.blue[100],
  'purple.main': theme.palette.purple[100],
};

export const ACTIVE_MAPPING: Record<ColorTypes, string> = {
  'pink.main': theme.palette.pink[600],
  'blue.main': theme.palette.blue[600],
  'purple.main': theme.palette.purple[600],
};

export const TYPOGRAPHY_VARIANT_MAPPING: Record<SizeTypes, TypographyVariants> = {
  small: 'text12',
  medium: 'text14',
  large: 'text16',
};

export const SPINNER_VARIANT_MAPPING: Record<SizeTypes, SpinnerSize> = {
  small: 'XS',
  medium: 'S',
  large: 'S',
};
