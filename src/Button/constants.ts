import { theme } from '../shared/theme';
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
