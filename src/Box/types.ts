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
  display?: DisplayType;
  elevation?: ElevationType;
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flexGap?: number;
  justifyContent?: FlexJustifyType;
  radius?: RadiusType;
}

export interface StyledBoxProps extends BoxProps {
  $alignItems: BoxProps['alignItems'];
  $backgroundColor: BoxProps['backgroundColor'];
  $border: BoxProps['border'];
  $borderColor: BoxProps['borderColor'];
  $display: BoxProps['display'];
  $elevation: BoxProps['elevation'];
  $flexDirection: BoxProps['flexDirection'];
  $flexWrap: BoxProps['flexWrap'];
  $flexGap: BoxProps['flexGap'];
  $justifyContent: BoxProps['justifyContent'];
  $radius: BoxProps['radius'];
}
