import React, { ReactNode, forwardRef, useId } from 'react';
import { BoxProps } from '../box/Box.types';
import { Typography } from '../typography';
import { StyledOption } from './Select.styles';

interface ItemProps {
  children: ReactNode;
  active: boolean;
}

export const SelectItem = forwardRef<BoxProps, ItemProps & BoxProps>(({ children, active, ...rest }, ref) => {
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
