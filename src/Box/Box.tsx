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
      justifyContent,
      radius = 0,
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
      $display={display}
      $elevation={elevation}
      $flexBasis={flexBasis}
      $flexDirection={flexDirection}
      $flexGrow={flexGrow}
      $flexShrink={flexShrink}
      $flexWrap={flexWrap}
      $gap={gap}
      $justifyContent={justifyContent}
      $radius={radius}
      {...other}
      ref={ref}
    >
      {children}
    </BoxStyled>
  )
);

Box.displayName = 'Box';
