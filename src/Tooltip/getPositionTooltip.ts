import { PLACEMENT } from './types';

export const getPositionTooltip = (
  placement: PLACEMENT,
  targetElement: HTMLElement | null,
  tooltipElement: HTMLElement | null
): { top: number; left: number } | null => {
  if (!targetElement || !tooltipElement) {
    return null;
  }
  const { x, y, width, height } = targetElement.getBoundingClientRect();
  const { offsetWidth } = tooltipElement;

  const hozizontalMiddlePixes = x + width / 2 - offsetWidth / 2;
  const topPixels = y + window.scrollY;
  const bottomPixels = topPixels + height;
  const verticalMiddlePixels = y + window.scrollY + height / 2;

  if (placement === PLACEMENT.BOTTOM) {
    return {
      left: hozizontalMiddlePixes,
      top: bottomPixels,
    };
  }
  if (placement === PLACEMENT.RIGHT) {
    return {
      left: x + width,
      top: verticalMiddlePixels,
    };
  }
  if (placement === PLACEMENT.LEFT) {
    return {
      left: x,
      top: verticalMiddlePixels,
    };
  }
  if (placement === PLACEMENT['TOP-RIGHT']) {
    return {
      left: hozizontalMiddlePixes,
      top: topPixels,
    };
  }
  if (placement === PLACEMENT['TOP-LEFT']) {
    return {
      left: hozizontalMiddlePixes,
      top: topPixels,
    };
  }
  if (placement === PLACEMENT['BOTTOM-LEFT']) {
    return {
      left: hozizontalMiddlePixes,
      top: bottomPixels,
    };
  }
  if (placement === PLACEMENT['BOTTOM-RIGHT']) {
    return {
      left: hozizontalMiddlePixes,
      top: bottomPixels,
    };
  }

  // Default is top placement
  return {
    left: hozizontalMiddlePixes,
    top: topPixels,
  };
};
