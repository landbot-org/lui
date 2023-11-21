import { BaseSpacingProps } from '../BaseSpacing';
import { ColorsTypes } from '../shared/theme.types';

export type FlexAlignType = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type FlexDirectionType = 'row' | 'column';
export type FlexJustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
export type DisplayType = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex' | 'grid' | 'none';
export type ElevationType = 0 | 1 | 2 | 3 | 4;
export type RadiusType = 0 | 1 | 2 | 3 | 4 | 5;
export type BorderType = 0 | 1 | 2;
export type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type OverflowType = 'visible' | 'hidden' | 'scroll' | 'auto';

export interface BoxProps extends BaseSpacingProps, React.HTMLAttributes<HTMLDivElement> {
  alignItems?: FlexAlignType;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  backgroundColor?: ColorsTypes;
  border?: BorderType;
  borderColor?: ColorsTypes;
  bottom?: number;
  children?: React.ReactNode;
  className?: string;
  display?: DisplayType;
  elevation?: ElevationType;
  flexBasis?: number | string;
  flexDirection?: FlexDirectionType;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexWrapType;
  gap?: number | string;
  height?: number | string;
  hoverElevation?: ElevationType;
  justifyContent?: FlexJustifyType;
  left?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: OverflowType;
  overflowX?: OverflowType;
  overflowY?: OverflowType;
  position?: PositionType;
  /**
   * 0: 0px | 1: 2px | 2: 4px | 3: 8px | 4: 16px | 5: 24px
   */
  radius?: RadiusType;
  right?: number;
  top?: number | string;
  width?: number | string;
}

export interface StyledBoxProps extends BoxProps {
  $alignItems: BoxProps['alignItems'];
  $backgroundColor: BoxProps['backgroundColor'];
  $border: BoxProps['border'];
  $borderColor: BoxProps['borderColor'];
  $bottom: BoxProps['bottom'];
  $display: BoxProps['display'];
  $elevation: BoxProps['elevation'];
  $flexBasis: BoxProps['flexBasis'];
  $flexDirection: BoxProps['flexDirection'];
  $flexGrow: BoxProps['flexGrow'];
  $flexShrink: BoxProps['flexShrink'];
  $flexWrap: BoxProps['flexWrap'];
  $gap: BoxProps['gap'];
  $height: BoxProps['height'];
  $hoverElevation: BoxProps['hoverElevation'];
  $justifyContent: BoxProps['justifyContent'];
  $left: BoxProps['left'];
  $maxHeight: BoxProps['maxHeight'];
  $maxWidth: BoxProps['maxWidth'];
  $minHeight: BoxProps['minHeight'];
  $minWidth: BoxProps['minWidth'];
  $overflow?: BoxProps['overflow'];
  $overflowX?: BoxProps['overflowX'];
  $overflowY?: BoxProps['overflowY'];
  $position: BoxProps['position'];
  $radius: BoxProps['radius'];
  $right: BoxProps['right'];
  $top: BoxProps['top'];
  $width: BoxProps['width'];
}
