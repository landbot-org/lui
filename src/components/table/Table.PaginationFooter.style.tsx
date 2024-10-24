import styled from 'styled-components';
import { Box } from '../box';
import { Typography } from '../typography';

export const StyledLabel = styled(Typography).attrs({
  variant: 'text14',
  fontWeight: 400,
})``;

export const StyledBoxSelectorContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
})``;
