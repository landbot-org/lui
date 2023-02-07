import styled, { keyframes } from 'styled-components';
import { getColorFromTheme, pxToRem } from '../shared/mixins';
import { SpinnerColor, SpinnerSize } from './types';

import { NUMBER_OF_PILLS, DIMENSIONS } from './constants';
import type { ColorsTypes, Theme } from '../shared/theme.types';

const degrees = 360 / NUMBER_OF_PILLS;

const changeColor = ({ $color, theme }: { $color: ColorsTypes; theme: Theme }) => keyframes`
  0% {
    background-color: ${getColorFromTheme(theme, 'neutral.300')};
  }
  12% {
    background-color: ${getColorFromTheme(theme, $color)};    
  }
  100% {
    background-color: ${getColorFromTheme(theme, 'neutral.300')};
  }
`;

const changeColorDark = ({ $color, theme }: { $color: ColorsTypes; theme: Theme }) => keyframes`
  0% {
    background-color: ${getColorFromTheme(theme, $color)};
  }
  12% {
    background-color: ${getColorFromTheme(theme, 'neutral.300')};    
  }
  100% {
    background-color: ${getColorFromTheme(theme, $color)};
  }
`;

interface SpinnerStyledProps {
  $size: SpinnerSize;
}

export const SpinnerStyled = styled.figure<SpinnerStyledProps>`
  margin: 0;
  position: relative;
  width: ${({ $size }) => pxToRem(DIMENSIONS[$size ? $size : 'M'])}rem;
  height: ${({ $size }) => pxToRem(DIMENSIONS[$size ? $size : 'M'])}rem;
`;

export const PillWrapperStyled = styled.div<{ $nth: number }>`
  height: 100%;
  width: 9.375%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(${({ $nth }) => $nth * degrees}deg);
`;

export const PillStyled = styled.div<{ $nth: number; $color: SpinnerColor }>`
  background-color: ${({ $color, theme }) =>
    $color ? getColorFromTheme(theme, $color) : getColorFromTheme(theme, 'neutral.300')};

  height: 25%;
  width: 100%;

  border-radius: 50%/20%;
  position: absolute;

  animation: ${({ $color, theme }) => ($color ? changeColor({ theme, $color }) : changeColorDark({ theme, $color }))} 1s
    step-end infinite;

  animation-delay: ${({ $nth }) => (1 / NUMBER_OF_PILLS) * $nth}s;
`;
