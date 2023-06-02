import React, { useEffect, useRef, useState } from 'react';
import { arrow, FloatingArrow, offset, useFloating, useHover, useInteractions } from '@floating-ui/react';
import { TooltipProps } from './types';
import { StyledContent, StyledWrapperChildren } from './Tooltip.styles';
import { theme } from '../shared/theme';

const ARROW_HEIGHT = 7;
const GAP = 2;

export const Tooltip = ({ content, color, children, placement = 'bottom', isOpen }: TooltipProps) => {
  const arrowRef = useRef(null);
  const [isShown, setIsShown] = useState(isOpen);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsShown,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  useEffect(() => {
    setIsShown(isOpen);
  }, [isOpen]);

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <StyledWrapperChildren ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </StyledWrapperChildren>
      {isShown && (
        <>
          <StyledContent
            py={1}
            px={2}
            $color={color}
            ref={refs.setFloating}
            style={floatingStyles}
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
        </>
      )}
    </>
  );
};
