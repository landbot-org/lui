import { theme } from '../../shared/theme';
import { SpinnerSize } from '../spinner/Spinner.types';
import { FontWeightVariants, TypographyVariants } from '../typography/Typography.types';
import { ButtonColorTypes, ButtonSizeTypes, ButtonVariants } from './Button.types';

export const SIZES_MAPPING: Record<ButtonSizeTypes, string> = {
  small: '24px',
  medium: '32px',
  large: '40px',
};

export const CONTAINED_HOVER_BACKGROUND_MAPPING: Record<ButtonColorTypes, string> = {
  'pink.main': theme.palette.pink[300],
  'blue.main': theme.palette.blue[300],
  'purple.main': theme.palette.purple[300],
  'white.main': theme.palette.neutral[300],
  'error.main': theme.palette.error.light,
};

export const DEFAULT_HOVER_BACKGROUND_MAPPING: Record<ButtonColorTypes, string> = {
  'pink.main': theme.palette.pink[100],
  'blue.main': theme.palette.blue[100],
  'purple.main': theme.palette.purple[100],
  'white.main': theme.palette.neutral[300],
  'error.main': theme.palette.error.light,
};

export const ACTIVE_MAPPING: Record<ButtonColorTypes, string> = {
  'pink.main': theme.palette.pink[600],
  'blue.main': theme.palette.blue[600],
  'purple.main': theme.palette.purple[600],
  'white.main': theme.palette.neutral[300],
  'error.main': theme.palette.error.light,
};

export const TYPOGRAPHY_VARIANT_MAPPING: Record<ButtonSizeTypes, TypographyVariants> = {
  small: 'text12',
  medium: 'text14',
  large: 'text16',
};

export const TYPOGRAPHY_VARIANT_WEIGHT: Record<ButtonVariants, FontWeightVariants> = {
  contained: 700,
  outlined: 700,
  text: 700,
  'menu-item': 400,
};

export const SPINNER_VARIANT_MAPPING: Record<ButtonSizeTypes, SpinnerSize> = {
  small: 'XS',
  medium: 'S',
  large: 'S',
};
