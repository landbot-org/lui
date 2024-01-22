import { ColorsTypes } from '../../shared/theme.types';

export type DividerSize = 'small' | 'medium' | 'large';
export type DividerOrientation = 'horizontal' | 'vertical';
export interface DividerProps {
  color?: ColorsTypes;
  size?: DividerSize;
  orientation?: DividerOrientation;
}
