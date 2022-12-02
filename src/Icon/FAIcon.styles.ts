import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FAIconProps } from './types';
import { DIMENSIONS } from './constants';

export const StyledFAIcon = styled(FontAwesomeIcon)<{ $size: FAIconProps['size'] }>`
  font-size: ${({ $size }) => DIMENSIONS[$size]}px;
  height: ${({ $size }) => DIMENSIONS[$size]}px;
  width: ${({ $size }) => DIMENSIONS[$size]}px;
`;
