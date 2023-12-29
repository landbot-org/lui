import styled from 'styled-components';

import { pxToRem } from '../shared/mixins';

export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${pxToRem(4)}rem;
`;
