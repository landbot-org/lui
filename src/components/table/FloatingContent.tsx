import React, { HTMLProps } from 'react';
import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { PopoverContentProps } from '../popover';
import { usePopoverContext } from '../popover/PopoverContext';
import { StyledFloatingContent } from './Table.styles';

type FloatingContentProps = {
  floatingWidth?: number;
};

export const FloatingContent = (props: HTMLProps<HTMLDivElement> & PopoverContentProps & FloatingContentProps) => {
  const { context: floatingContext, ...context } = usePopoverContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal id={props.id} root={props.root}>
      <FloatingFocusManager context={floatingContext}>
        <StyledFloatingContent
          $width={props.floatingWidth}
          ref={context.refs.setFloating}
          style={context.floatingStyles}
          {...context.getFloatingProps(props)}
        >
          {props.children}
        </StyledFloatingContent>
      </FloatingFocusManager>
    </FloatingPortal>
  );
};
