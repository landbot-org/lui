import React, { HTMLProps } from 'react';
import { styled } from 'styled-components';
import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { PopoverContentProps } from '../popover';
import { usePopoverContext } from '../popover/PopoverContext';

export const StyledFloatingContent = styled.div<{ $width?: number }>`
  width: ${({ $width }) => $width ?? 200}px;
  padding: 8px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: #6361f0;
`;

export const FloatingContent = (props: HTMLProps<HTMLDivElement> & PopoverContentProps) => {
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
