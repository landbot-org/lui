import styled from 'styled-components';
import { RadioProps } from './types';
import { getBackgroundColorFromState, getBorderColorFromState, getColorFromState } from './utils';

export const StyledRadio = styled.input.attrs<RadioProps>({ type: 'radio' })<RadioProps>`
  appearance: none;
  border-radius: 50%;
  border: 1px solid ${getBorderColorFromState};
  cursor: pointer;
  flex: none;
  height: 16px;
  width: 16px;
  margin: 8px;
  background-color: ${getBackgroundColorFromState};

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin: 4px;
    background-color: ${getColorFromState};
  }

  :focus {
    box-shadow: 0px 0px 4px rgba(156, 163, 175, 0.5);
  }
`;
