type Size = 'small' | 'medium' | 'large';
type Orientation = 'horizontal' | 'vertical';

export interface DividerProps {
  size?: Size;
  orientation?: Orientation;
}
