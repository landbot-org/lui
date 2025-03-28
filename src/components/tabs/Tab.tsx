import React, { forwardRef } from 'react';
import { BorderBottom, StyledTab, StyledTypography } from './Tabs.styles';
import { TabProps } from './Tabs.types';
import { getTypographyVariantBySize } from './Tabs.utils';

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ active, direction, label, disabled, onClick, size }, ref) => (
    <StyledTab
      aria-selected={Boolean(active)}
      role="tab"
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      $active={active}
      $size={size}
    >
      <StyledTypography
        aria-disabled="true"
        color="blue.500"
        variant={getTypographyVariantBySize(size)}
        $active={Boolean(active)}
        $disabled={Boolean(disabled)}
      >
        {label}
      </StyledTypography>
      {active && <BorderBottom $direction={direction} $active={active} />}
    </StyledTab>
  ),
);

Tab.displayName = 'Tab';
