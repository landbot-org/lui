import styled, { css } from 'styled-components';
import { DividerSize } from './types';
import { theme } from '../shared/theme';
import { getColorFromTheme, pxToRem } from '../shared/mixins';
import { DIMENSIONS } from './constants';
import { ColorsTypes } from '../shared/theme.types';

interface Props {
  $size: DividerSize;
  $color: ColorsTypes;
}

const DividerStyled = css<Props>`
  background-color: ${({ $color }) => getColorFromTheme(theme, $color)};
  border: none;
  margin: 0px;
  padding: 0px;
`;

const HorizontalDividerStyled = styled.hr<Props>`
  ${DividerStyled}

  width: auto;
  height: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
`;

const VerticalDividerStyled = styled.div<Props>`
  ${DividerStyled}

  width: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
  height: 100%;
`;

export { HorizontalDividerStyled, VerticalDividerStyled };
