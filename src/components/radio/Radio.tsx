import type { RadioProps } from './Radio.types';

import { RadioStyled } from './Radio.styles';

export const Radio = (props: RadioProps) => {
  return <RadioStyled {...props} type="radio" />;
};
