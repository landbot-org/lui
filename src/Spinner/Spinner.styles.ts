import { keyframes, styled } from 'styled-components';

import { getColorFromTheme, pxToRem } from '../shared/mixins';
import { DIMENSIONS, NUMBER_OF_PILLS, SPECIAL_OPACITY, SPIN_TIME } from './constants';
import { SpinnerColor, SpinnerSize } from './types';

const degrees = 360 / NUMBER_OF_PILLS;

const changeColor = keyframes`
  0% {
    opacity: ${SPECIAL_OPACITY};
  }
  ${100 / NUMBER_OF_PILLS + '%'} {
    opacity: 1;
  }
  100% {
    opacity: ${SPECIAL_OPACITY};
  }
`;

interface SpinnerStyledProps {
  $size: SpinnerSize;
  $color?: SpinnerColor;
}

export const SpinnerStyled = styled.figure<SpinnerStyledProps>`
  margin: 0;
  position: relative;
  color: ${({ $color, theme }) => ($color ? getColorFromTheme(theme, $color) : 'inherit')};
  width: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
  height: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
`;

export const PillWrapperStyled = styled.div<{ $nth: number }>`
  height: 100%;
  width: 9.375%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(${({ $nth }) => $nth * degrees}deg);
`;

export const PillStyled = styled.div<{ $nth: number }>`
  background-color: currentColor;
  height: 25%;
  width: 100%;

  border-radius: 50%/20%;
  position: absolute;

  animation: ${changeColor} ${SPIN_TIME}s step-end infinite;

  animation-delay: ${({ $nth }) => (1 / NUMBER_OF_PILLS) * $nth * SPIN_TIME}s;
`;
