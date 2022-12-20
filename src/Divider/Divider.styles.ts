import styled from 'styled-components';
import { css } from 'styled-components';
import { DividerSize } from './types';
import { Theme } from '../shared/theme.types';
import { DIMENSIONS } from './constants';
interface Props {
  $size: DividerSize;
}

const DividerStyled = css`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.neutral[300]};
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
