import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getPositionTooltip } from './getPositionTooltip';
import { StyledContent, StyledWrapper, StyledWrapperChildren } from './Tooltip.styles';
import { PLACEMENT, TooltipProps } from './types';

export const Tooltip = ({
  children,
  content,
  placement = PLACEMENT.TOP,
  color = 'blue',
  isOpen = false,
}: TooltipProps) => {
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [tooltipElement, setTooltipElement] = useState<HTMLElement | null>(null);
  const [isShown, setIsShown] = useState(isOpen);

  const handleMouseEnter = () => {
    const newPosition = getPositionTooltip(placement, target, tooltipElement);
    if (newPosition) {
      setPosition(newPosition);
      setIsShown(true);
    }
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  useEffect(() => {
    const newPosition = getPositionTooltip(placement, target, tooltipElement);
    if (newPosition) {
      setPosition(newPosition);
    }
  }, [placement]);

  useEffect(() => {
    let observer: ResizeObserver;
    if (document.scrollingElement) {
      observer = new ResizeObserver(() => {
        const newPosition = getPositionTooltip(placement, target, tooltipElement);
        if (newPosition) {
          setPosition(newPosition);
        }
      });

      observer.observe(document.scrollingElement);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const newPosition = getPositionTooltip(placement, target, tooltipElement);
    if (newPosition) {
      setPosition(newPosition);
    }
    setIsShown(isOpen);
  }, [isOpen]);

  return (
    <StyledWrapper>
      <StyledWrapperChildren
        ref={(refTarget) => setTarget(refTarget)}
        onMouseEnter={isOpen ? undefined : handleMouseEnter}
        onMouseLeave={isOpen ? undefined : handleMouseLeave}
      >
        {children}
      </StyledWrapperChildren>
      {createPortal(
        <StyledContent
          py={1}
          px={2}
          radius={2}
          ref={(refTooltip) => setTooltipElement(refTooltip)}
          $placement={placement}
          $isShown={isShown}
          $color={color}
          backgroundColor={color === 'blue' ? 'blue.800' : 'white.main'}
          style={{ left: `${position.left}px`, top: `${position.top}px` }}
        >
          {content}
        </StyledContent>,
        document.body
      )}
    </StyledWrapper>
  );
};
