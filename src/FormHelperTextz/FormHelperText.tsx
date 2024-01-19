import { styled } from 'styled-components';

import { Typography } from '../Typographyz';
import { pxToRem } from '../shared/mixins';

export const FormHelperText = styled(Typography)`
  margin-top: ${pxToRem(4)}rem;
`;
