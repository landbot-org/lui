import { FloatingArrow, FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import React, { HTMLProps, useMemo } from 'react';

import { theme } from '../shared/theme';
import { StyledPopoverCloseWrapper, StyledPopoverContent } from './Popover.styles';
import { PopoverClose } from './PopoverClose';
import { usePopoverContext } from './PopoverContext';

export const PopoverContent = (props: HTMLProps<HTMLDivElement>) => {
  const { context: floatingContext, ...context } = usePopoverContext();
  const FloatingWrapper = useMemo(() => (context.usePortal ? FloatingPortal : React.Fragment), [context.usePortal]);

  if (!floatingContext.open) return null;

  return (
    <FloatingWrapper>
      <FloatingFocusManager context={floatingContext}>
        <StyledPopoverContent
          $color={context.color}
          border={1}
          radius={2}
          elevation={2}
          ref={context.refs.setFloating}
          style={context.floatingStyles}
          {...context.getFloatingProps(props)}
        >
          {context.hasCloseButton && (
            <StyledPopoverCloseWrapper p={1}>
              <PopoverClose />
            </StyledPopoverCloseWrapper>
          )}
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
    </FloatingWrapper>
  );
};
