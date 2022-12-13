import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Size } from './types';
import { DIMENSIONS } from './constants';
import { pxToRem } from '../shared/mixins';

export const StyledFAIcon = styled(FontAwesomeIcon)<{ $size: Size }>`
  font-size: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
  height: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
  width: ${({ $size }) => pxToRem(DIMENSIONS[$size])}rem;
`;
