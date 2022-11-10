import React from 'react';
import { StyledRadio } from './Radio.styles';
import type { RadioProps } from './types';

export const Radio = (props: RadioProps) => {
  return <StyledRadio {...props} />;
};
