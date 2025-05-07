import { forwardRef } from 'react';
import { BoxStyled } from './Box.styles';
import { BoxProps } from './Box.types';

export const Box = forwardRef<HTMLElement, BoxProps>(
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
      hoverElevation,
      justifyContent,
      radius = 0,
      position,
      top,
      left,
      right,
      bottom,
      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      p,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      ...other
    },
    ref,
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
      $hoverElevation={hoverElevation}
      $justifyContent={justifyContent}
      $position={position}
      $radius={radius}
      $top={top}
      $left={left}
      $right={right}
      $bottom={bottom}
      $m={m}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
      $mx={mx}
      $my={my}
      $p={p}
      $pt={pt}
      $pr={pr}
      $pb={pb}
      $pl={pl}
      $px={px}
      $py={py}
      {...other}
      ref={ref}
    >
      {children}
    </BoxStyled>
  ),
);

Box.displayName = 'Box';
