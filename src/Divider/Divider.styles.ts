import styled from 'styled-components';
import { css } from 'styled-components';
import { DividerSize } from './types';
import { theme } from '../shared/theme';
import { getColorFromTheme } from '../shared/mixins';
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
  height: ${({ $size }) => DIMENSIONS[$size]};
`;

const VerticalDividerStyled = styled.div<Props>`
  ${DividerStyled}

  width: ${({ $size }) => DIMENSIONS[$size]};
  height: 100%;
`;

export { HorizontalDividerStyled, VerticalDividerStyled };
