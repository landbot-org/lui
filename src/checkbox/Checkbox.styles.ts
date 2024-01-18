import { styled } from 'styled-components';

import { CheckboxProps } from './Checkbox.types';
import { getBackgroundColorFromState, getBorderColorFromState, getColorFromState } from './utils';

interface CheckboxStyledProps extends CheckboxProps {
  $indeterminate?: boolean;
}

export const CheckboxStyled = styled.input<CheckboxStyledProps>`
  appearance: none;
  border-radius: 2px;
  border: 1px solid ${getBorderColorFromState};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  height: 16px;
  width: 16px;
  margin: 8px;
  outline: none;

  background: url('data:image/svg+xml;utf8,<svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path fill="${getColorFromState}" fill-rule="evenodd" clip-rule="evenodd" d="M9.01878 0.62537C9.07344 0.568771 9.13883 0.523626 9.21113 0.492569C9.28343 0.461512 9.36119 0.445164 9.43987 0.44448C9.51856 0.443797 9.59659 0.45879 9.66942 0.488586C9.74225 0.518382 9.80841 0.562384 9.86405 0.618024C9.91969 0.673664 9.96369 0.739829 9.99349 0.812656C10.0233 0.885483 10.0383 0.963516 10.0376 1.0422C10.0369 1.12088 10.0206 1.19864 9.98951 1.27094C9.95845 1.34324 9.9133 1.40863 9.8567 1.4633L4.52337 6.79663C4.41224 6.90772 4.26154 6.97013 4.10441 6.97013C3.94727 6.97013 3.79657 6.90772 3.68545 6.79663L0.72189 3.83307C0.613944 3.72131 0.554214 3.57162 0.555564 3.41624C0.556915 3.26087 0.619237 3.11224 0.729109 3.00237C0.83898 2.89249 0.98761 2.83017 1.14299 2.82882C1.29836 2.82747 1.44805 2.8872 1.55982 2.99515L4.10441 5.53974L9.01878 0.62537Z" /></svg>')
    ${getBackgroundColorFromState} no-repeat center;

  :focus {
    box-shadow: 0px 0px 4px rgba(156, 163, 175, 0.5);
  }
  :focus:checked {
    box-shadow: 0px 0px 4px rgba(99, 97, 240, 0.7);
  }

  :indeterminate {
    background: url('data:image/svg+xml;utf8,<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>')
      ${getBackgroundColorFromState} no-repeat center;
  }
`;
