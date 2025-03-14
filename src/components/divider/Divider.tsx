import { HorizontalDividerStyled, VerticalDividerStyled } from './Divider.styles';
import { DividerProps } from './Divider.types';

export const Divider = ({
  orientation = 'horizontal',
  size = 'small',
  color = 'neutral.300',
  ...rest
}: DividerProps) =>
  orientation === 'vertical' ? (
    <VerticalDividerStyled role="separator" aria-orientation="vertical" $color={color} $size={size} {...rest} />
  ) : (
    <HorizontalDividerStyled $color={color} $size={size} {...rest} />
  );
