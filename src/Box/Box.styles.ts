import styled from 'styled-components';
import BaseSpacing from '../BaseSpacing';

import { BoxProps } from './types';

export const BoxStyled = styled(BaseSpacing)<BoxProps>`
  display: ${({ display }) => display || 'block'};
`;
