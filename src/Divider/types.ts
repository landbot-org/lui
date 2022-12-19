export type DividerSize = 'small' | 'medium' | 'large';
export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  size?: DividerSize;
  orientation?: DividerOrientation;
}
