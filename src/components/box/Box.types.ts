import { ElementType, HTMLAttributes, ReactNode } from 'react';
import { ColorsTypes } from '../../shared/theme.types';
import { BaseSpacingProps, StyledBaseSpacingProps } from '../base-spacing';

export type FlexAlignType = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type FlexDirectionType = 'row' | 'column';
export type FlexJustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
export type DisplayType = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex' | 'grid' | 'none';
export type ElevationType = 0 | 1 | 2 | 3 | 4;
export type RadiusType = 0 | 1 | 2 | 3 | 4 | 5;
export type BorderType = 0 | 1 | 2;
export type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export interface BoxProps extends BaseSpacingProps, HTMLAttributes<HTMLDivElement> {
  alignItems?: FlexAlignType;
  as?: ElementType | keyof JSX.IntrinsicElements;
  backgroundColor?: ColorsTypes;
  border?: BorderType;
  borderColor?: ColorsTypes;
  children?: ReactNode;
  className?: string;
  display?: DisplayType;
  elevation?: ElevationType;
  flexBasis?: string;
  flexDirection?: FlexDirectionType;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexWrapType;
  gap?: number;
  hoverElevation?: ElevationType;
  justifyContent?: FlexJustifyType;
  position?: PositionType;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  radius?: RadiusType;
}

export interface StyledBoxProps extends StyledBaseSpacingProps, HTMLAttributes<HTMLDivElement> {
  $alignItems: BoxProps['alignItems'];
  $backgroundColor: BoxProps['backgroundColor'];
  $border: BoxProps['border'];
  $borderColor: BoxProps['borderColor'];
  $display: BoxProps['display'];
  $elevation: BoxProps['elevation'];
  $flexBasis: BoxProps['flexBasis'];
  $flexDirection: BoxProps['flexDirection'];
  $flexGrow: BoxProps['flexGrow'];
  $flexShrink: BoxProps['flexShrink'];
  $flexWrap: BoxProps['flexWrap'];
  $gap: BoxProps['gap'];
  $hoverElevation: BoxProps['hoverElevation'];
  $justifyContent: BoxProps['justifyContent'];
  $position: BoxProps['position'];
  $top: BoxProps['top'];
  $right: BoxProps['right'];
  $bottom: BoxProps['bottom'];
  $left: BoxProps['left'];
  $radius: BoxProps['radius'];
}
