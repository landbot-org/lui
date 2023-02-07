import styled, { keyframes } from 'styled-components';
import { getColorFromTheme, pxToRem } from '../shared/mixins';
import { SpinnerColor, SpinnerSize } from './types';

import { NUMBER_OF_PILLS, DIMENSIONS } from './constants';
import { theme } from '../shared/theme';

const degrees = 360 / NUMBER_OF_PILLS;

const backgroundColorLigth = getColorFromTheme(theme, 'neutral.300');
const backgroundColorDark = getColorFromTheme(theme, 'blue.main');

// const getMainColor = (theme: string): string => {
//   return theme === 'ligth' ? backgroundColorLigth : backgroundColorDark;
// };

// const getSecondary = (theme: string) => {
//   return theme === 'ligth' ? backgroundColorDark : backgroundColorLigth;
// };

// console.log({ backgroundColorLigth, backgroundColorDark });

const changeColor = keyframes`
  0% {
    background-color: ${backgroundColorLigth};
  }
  12% {
    background-color: ${backgroundColorDark};    
  }
  100% {
    background-color: ${backgroundColorLigth};
  }
`;

const changeColorDark = keyframes`
  0% {
    background-color: ${backgroundColorDark};
  }
  12% {
    background-color: ${backgroundColorLigth};    
  }
  100% {
    background-color: ${backgroundColorDark};
  }
`;

interface Props {
  $size: SpinnerSize;
}

export const SpinnerStyled = styled.figure<Props>`
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
  background-color: ${({ $color }) => ($color === 'main' ? backgroundColorDark : backgroundColorLigth)};

  height: 25%;
  width: 100%;

  border-radius: 50%/20%;
  position: absolute;

  animation: ${({ $color }) => ($color === 'main' ? changeColor : changeColorDark)} 1s step-end infinite;

  animation-delay: ${({ $nth }) => (1 / NUMBER_OF_PILLS) * $nth}s;
`;
