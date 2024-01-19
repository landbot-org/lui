import React from 'react';

import type { RadioProps } from './types';

import { RadioStyled } from './Radio.styles';

export const Radio = (props: RadioProps) => {
  return <RadioStyled {...props} type="radio" />;
};
