import styled from 'styled-components';
import { css } from 'styled-components';
import { DividerSize } from './types';
import { Theme } from '../shared/theme.types';

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
  height: ${({ $size }) => ({ small: '1px', medium: '2px', large: '4px' }[$size])};
`;

const VerticalDividerStyled = styled.div<Props>`
  ${DividerStyled}

  width: ${({ $size }) => ({ small: '1px', medium: '2px', large: '4px' }[$size])};
  height: 100%;
`;

export { HorizontalDividerStyled, VerticalDividerStyled };
