import { BaseSpacingProps } from '../BaseSpacing';
import { ColorsTypes } from '../shared/theme.types';

export type FlexAlignType = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type FlexDirectionType = 'row' | 'column';
export type FlexJustifyType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
export type DisplayType = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex' | 'none';
export type ElevationType = 0 | 1 | 2 | 3 | 4;
export type RadiusType = 0 | 1 | 2 | 3 | 4 | 5;
export type BorderType = 0 | 1 | 2;

export interface BoxProps extends BaseSpacingProps, React.HTMLAttributes<HTMLDivElement> {
  alignItems?: FlexAlignType;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  backgroundColor?: ColorsTypes;
  border?: BorderType;
  borderColor?: ColorsTypes;
  children?: React.ReactNode;
  className?: string;
  color?: ColorsTypes;
  display?: DisplayType;
  elevation?: ElevationType;
  flexBasis?: string;
  flexDirection?: FlexDirectionType;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: FlexWrapType;
  gap?: number;
  justifyContent?: FlexJustifyType;
  radius?: RadiusType;
}

export interface StyledBoxProps extends BoxProps {
  $alignItems: BoxProps['alignItems'];
  $backgroundColor: BoxProps['backgroundColor'];
  $border: BoxProps['border'];
  $borderColor: BoxProps['borderColor'];
  $color: BoxProps['color'];
  $display: BoxProps['display'];
  $elevation: BoxProps['elevation'];
  $flexBasis: BoxProps['flexBasis'];
  $flexDirection: BoxProps['flexDirection'];
  $flexGrow: BoxProps['flexGrow'];
  $flexShrink: BoxProps['flexShrink'];
  $flexWrap: BoxProps['flexWrap'];
  $gap: BoxProps['gap'];
  $justifyContent: BoxProps['justifyContent'];
  $radius: BoxProps['radius'];
}
