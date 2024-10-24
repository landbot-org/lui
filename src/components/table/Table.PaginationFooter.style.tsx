import styled from 'styled-components';
import { Box } from '../box';
import { Typography } from '../typography';

export const StyledLabel = styled(Typography).attrs({
  fontWeight: 400,
  variant: 'text14',
})``;

export const StyledBoxSelectorContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
})``;
