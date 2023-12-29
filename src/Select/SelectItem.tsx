import React, { useId } from 'react';

import { BoxProps } from '../Box/types';
import { Typography } from '../Typography';
import { StyledOption } from './Select.styles';

interface ItemProps {
  children: React.ReactNode;
  active: boolean;
}

export const SelectItem = React.forwardRef<BoxProps, ItemProps & BoxProps>(({ children, active, ...rest }, ref) => {
  const id = useId();

  return (
    <StyledOption
      p={1}
      radius={1}
      backgroundColor={active ? 'blue.100' : undefined}
      ref={ref}
      role="option"
      id={id}
      aria-selected={active}
      {...rest}
      style={{
        ...rest.style,
      }}
    >
      <Typography variant="text14">{children}</Typography>
    </StyledOption>
  );
});

SelectItem.displayName = 'SelectItem';
