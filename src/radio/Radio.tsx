import React from 'react';

import { RadioStyled } from './Radio.styles';
import type { RadioProps } from './Radio.types';

export const Radio = (props: RadioProps) => {
  return <RadioStyled {...props} type="radio" />;
};
