import styled, { keyframes } from 'styled-components';
import { getColorFromTheme, pxToRem } from '../shared/mixins';
import { SpinnerColor, SpinnerSize } from './types';

import { NUMBER_OF_PILLS, DIMENSIONS } from './constants';
import type { ColorsTypes, Theme } from '../shared/theme.types';

const degrees = 360 / NUMBER_OF_PILLS;

const changeColor = ({
  $color,
  $spinnerColor,
  theme,
}: {
  $color: ColorsTypes;
  $spinnerColor: ColorsTypes;
  theme: Theme;
}) => keyframes`
  0% {
    background-color: ${getColorFromTheme(theme, $spinnerColor)};
  }
  12% {
    background-color: ${getColorFromTheme(theme, $color)};    
  }
  100% {
    background-color: ${getColorFromTheme(theme, $spinnerColor)};
  }
`;

interface SpinnerStyledProps {
  $size: SpinnerSize;
}

export const SpinnerStyled = styled.figure<SpinnerStyledProps>`
  margin: 0;
  position: relative;
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

export const PillStyled = styled.div<{ $nth: number; $color: SpinnerColor; $spinnerColor: SpinnerColor }>`
  background-color: ${({ $color, theme }) => getColorFromTheme(theme, $color)};

  height: 25%;
  width: 100%;

  border-radius: 50%/20%;
  position: absolute;

  animation: ${({ $color, $spinnerColor, theme }) => changeColor({ theme, $color, $spinnerColor })} 1s step-end infinite;

  animation-delay: ${({ $nth }) => (1 / NUMBER_OF_PILLS) * $nth}s;
`;