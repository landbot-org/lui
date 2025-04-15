import React, { Fragment, HTMLProps, useMemo } from 'react';
import { FloatingArrow, FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { theme } from '../../shared/theme';
import { StyledPopoverCloseWrapper, StyledPopoverContent } from './Popover.styles';
import { PopoverContentProps } from './Popover.types';
import { PopoverClose } from './PopoverClose';
import { usePopoverContext } from './PopoverContext';

export const PopoverContent = (props: HTMLProps<HTMLDivElement> & PopoverContentProps) => {
  const { context: floatingContext, ...context } = usePopoverContext();
  const FloatingWrapper = useMemo(() => (context.usePortal ? FloatingPortal : Fragment), [context.usePortal]);

  if (!floatingContext.open) return null;

  return (
    <FloatingWrapper id={props.id} root={props.root}>
      <FloatingFocusManager context={floatingContext}>
        <StyledPopoverContent
          $color={context.color}
          border={props.border}
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
