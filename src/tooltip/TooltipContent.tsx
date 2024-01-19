import React, { HTMLProps } from 'react';

import { FloatingArrow, FloatingFocusManager, FloatingPortal } from '@floating-ui/react';

import { StyledPopoverContent } from '../popover/Popover.styles';
import { usePopoverContext } from '../popover/PopoverContext';
import { theme } from '../shared/theme';

export const TooltipContent = (props: HTMLProps<HTMLDivElement>) => {
  const { context: floatingContext, ...context } = usePopoverContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <StyledPopoverContent
          $color={context.color}
          py={1}
          px={2}
          border={1}
          radius={2}
          elevation={2}
          ref={context.refs.setFloating}
          style={context.floatingStyles}
          {...context.getFloatingProps(props)}
        >
          {props.children}
          {context.hasArrow && (
            <FloatingArrow
              ref={context.arrowRef}
              context={floatingContext}
              fill={context.color === 'blue' ? theme.palette.blue[800] : theme.palette.white.main}
              stroke={context.color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300]}
              strokeWidth={1}
              tipRadius={1}
            />
          )}
        </StyledPopoverContent>
      </FloatingFocusManager>
    </FloatingPortal>
  );
};
