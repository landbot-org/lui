import React from 'react';
import { BoxProps } from './types';
import { BoxStyled } from './Box.styles';

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      alignItems,
      as = 'div',
      backgroundColor,
      border,
      borderColor,
      bottom,
      children,
      className,
      display = 'block',
      elevation = 0,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      gap,
      height,
      hoverElevation,
      justifyContent,
      left,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      overflow,
      overflowX,
      overflowY,
      position,
      radius = 0,
      right,
      top,
      width,
      ...other
    },
    ref
  ) => (
    <BoxStyled
      as={as}
      className={className}
      $alignItems={alignItems}
      $backgroundColor={backgroundColor}
      $border={border}
      $borderColor={borderColor}
      $bottom={bottom}
      $display={display}
      $elevation={elevation}
      $flexBasis={flexBasis}
      $flexDirection={flexDirection}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flexWrap={flexWrap}
      $gap={gap}
      $height={height}
      $hoverElevation={hoverElevation}
      $justifyContent={justifyContent}
      $left={left}
      $maxHeight={maxHeight}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      $minWidth={minWidth}
      $overflow={overflow}
      $overflowX={overflowX}
      $overflowY={overflowY}
      $position={position}
      $radius={radius}
      $right={right}
      $top={top}
      $width={width}
      {...other}
      ref={ref}
    >
      {children}
    </BoxStyled>
  )
);

Box.displayName = 'Box';
