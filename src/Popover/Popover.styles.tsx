import styled from 'styled-components';
import { Box } from '../Box';
import { Button } from '../Button';
import { pxToRem } from '../shared/mixins';

export const StyledPopoverContent = styled(Box)`
  background-color: ${({ theme }) => theme.palette.white.main};
  border: ${pxToRem(1)}rem solid ${({ theme }) => theme.palette.neutral[300]};
  border-radius: ${pxToRem(4)}rem;
  padding: ${pxToRem(16)}rem;
`;

export const StyledCloseButton = styled(Button)`
  padding: 0px;
  height: ${pxToRem(16)}rem;
  width: ${pxToRem(16)}rem; ;
`;
