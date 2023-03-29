import styled from 'styled-components';
import { pxToRem } from '../shared/mixins';
import { Typography } from '../Typography';

export const FormHelperText = styled(Typography)`
  margin-top: ${pxToRem(4)}rem;
`;
