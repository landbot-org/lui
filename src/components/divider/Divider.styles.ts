import { css, styled } from 'styled-components';

import { getColorFromTheme, pxToRem } from '../../shared/mixins';
import { theme } from '../../shared/theme';
import { ColorsTypes } from '../../shared/theme.types';
import { DIMENSIONS } from './Divider.constants';
import { DividerSize } from './Divider.types';

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
