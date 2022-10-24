import { BaseSpacingProps } from '../BaseSpacing';

export interface BoxProps extends BaseSpacingProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  children: JSX.Element | string;
  className?: string;
  display: 'block' | 'flex';
}
