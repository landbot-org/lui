import { theme } from '../shared/theme';
import { SpinnerSize } from '../spinner/Spinner.types';
import { TypographyVariants } from '../typography/Typography.types';
import { ColorTypes, SizeTypes } from './Button.types';

export const SIZES_MAPPING: Record<SizeTypes, string> = {
  small: '24px',
  medium: '32px',
  large: '40px',
};

export const CONTAINED_HOVER_BACKGROUND_MAPPING: Record<ColorTypes, string> = {
  'pink.main': theme.palette.pink[300],
  'blue.main': theme.palette.blue[300],
  'purple.main': theme.palette.purple[300],
  'white.main': theme.palette.neutral[300],
};

export const DEFAULT_HOVER_BACKGROUND_MAPPING: Record<ColorTypes, string> = {
  'pink.main': theme.palette.pink[100],
  'blue.main': theme.palette.blue[100],
  'purple.main': theme.palette.purple[100],
  'white.main': theme.palette.neutral[300],
};

export const ACTIVE_MAPPING: Record<ColorTypes, string> = {
  'pink.main': theme.palette.pink[600],
  'blue.main': theme.palette.blue[600],
  'purple.main': theme.palette.purple[600],
  'white.main': theme.palette.neutral[300],
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
