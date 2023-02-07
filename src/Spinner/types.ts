export type SpinnerSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
export type SpinnerColor = 'main' | 'secondary';

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
}
