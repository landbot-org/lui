import React, { useRef, useState } from 'react';
import {
  arrow,
  FloatingArrow,
  offset,
  useFloating,
  useHover,
  useInteractions,
  flip,
  useRole,
  autoUpdate,
  useClick,
  useDismiss,
} from '@floating-ui/react';
import { TooltipProps } from './types';
import { StyledContent, StyledWrapperChildren } from './Tooltip.styles';
import { theme } from '../shared/theme';

const ARROW_HEIGHT = 7;
const GAP = 2;

export const Tooltip = ({
  content,
  color = 'blue',
  children,
  placement = 'bottom',
  interaction = 'hover',
}: TooltipProps) => {
  const arrowRef = useRef(null);
  const [isShown, setIsShown] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isShown,
    onOpenChange: setIsShown,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
  });
  const role = useRole(context, { role: 'tooltip' });
  const hover = useHover(context, { enabled: interaction === 'hover' });
  const click = useClick(context, { enabled: interaction === 'click' });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, role, dismiss]);

  return (
    <>
      <StyledWrapperChildren ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </StyledWrapperChildren>
      {isShown && (
        <StyledContent
          py={1}
          px={2}
          $color={color}
          ref={refs.setFloating}
          style={floatingStyles}
          elevation={2}
          {...getFloatingProps()}
        >
          {content}
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill={color === 'blue' ? theme.palette.blue[800] : theme.palette.white.main}
            stroke={color === 'blue' ? theme.palette.blue[800] : theme.palette.neutral[300]}
            strokeWidth={1}
            tipRadius={1}
          />
        </StyledContent>
      )}
    </>
  );
};
