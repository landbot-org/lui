import { ColorsTypes } from '../shared/theme.types';

export type SpinnerSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
export type SpinnerColor = ColorsTypes;

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  spinnerColor?: SpinnerColor;
}
