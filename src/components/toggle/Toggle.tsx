import { ToggleStyled } from './Toggle.styles';
import { ToggleProps } from './Toggle.types';

export const Toggle = ({ size = 'medium', ...rest }: ToggleProps) => (
  <ToggleStyled $size={size}>
    <input type="checkbox" {...rest} />
    <span></span>
  </ToggleStyled>
);
