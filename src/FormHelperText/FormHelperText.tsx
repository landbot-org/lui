import { styled } from 'styled-components';

import { Typography } from '../Typography';
import { pxToRem } from '../shared/mixins';

export const FormHelperText = styled(Typography)`
  margin-top: ${pxToRem(4)}rem;
`;
