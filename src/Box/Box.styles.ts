import styled from 'styled-components';
import BaseSpacing from '../BaseSpacing';

import { BoxProps } from './types';

export const BoxStyled = styled(BaseSpacing)<BoxProps>`
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ wrap }) => wrap};
`;
