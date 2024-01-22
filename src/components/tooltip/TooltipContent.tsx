import React, { HTMLProps } from 'react';

import { FloatingArrow, FloatingFocusManager, FloatingPortal } from '@floating-ui/react';

import { PopoverContentProps } from '../popover';
import { usePopoverContext } from '../popover/PopoverContext';
import { theme } from '../shared/theme';

import { StyledTooltipContent } from './Tooltip.styles';

export const TooltipContent = (props: HTMLProps<HTMLDivElement> & PopoverContentProps) => {
  const { context: floatingContext, ...context } = usePopoverContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal id={props.id} root={props.root}>
      <FloatingFocusManager context={floatingContext}>
        <StyledTooltipContent
          $color={context.color}
          border={1}
          radius={2}
          elevation={2}
          ref={context.refs.setFloating}
          style={context.floatingStyles}
          onClick={() => {
            if (context.closeOnClickInside) {
              context.setOpen(false);
            }
          }}
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
        </StyledTooltipContent>
      </FloatingFocusManager>
    </FloatingPortal>
  );
};
