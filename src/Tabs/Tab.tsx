import React, { forwardRef } from 'react';
import { BorderBottom, StyledTab, StyledTypography } from './Tabs.styles';
import { TabProps } from './types';
import { getTypographySizeStyles } from './utils';

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ active, direction, label, disabled, onClick, size }, ref) => (
    <StyledTab ref={ref} disabled={disabled} onClick={onClick} $active={active} $size={size}>
      <StyledTypography color="blue.500" variant={getTypographySizeStyles(size)} $active={active} $disabled={disabled}>
        {label}
      </StyledTypography>
      {active && <BorderBottom $direction={direction} $active={active} />}
    </StyledTab>
  )
);

Tab.displayName = 'Tab';
