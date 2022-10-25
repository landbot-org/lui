import { BaseSpacingProps } from '../BaseSpacing';

type FlexAlignType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
type FlexDirectionType = 'row' | 'column';
type FlexJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';
type DisplayType =
  | 'block'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'none';

export interface BoxProps extends BaseSpacingProps {
  alignItems?: FlexAlignType;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  children: JSX.Element | string;
  className?: string;
  display?: DisplayType;
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  justifyContent?: FlexJustifyType;
}
