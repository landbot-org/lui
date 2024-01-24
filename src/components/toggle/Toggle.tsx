import { ToggleProps } from './Toggle.types';

import { ToggleStyled } from './Toggle.styles';

export const Toggle = ({ size = 'medium', ...rest }: ToggleProps) => (
  <ToggleStyled $size={size}>
    <input type="checkbox" {...rest} />
    <span></span>
  </ToggleStyled>
);
