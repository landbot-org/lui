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

export interface BoxProps extends BaseSpacingProps {
  alignItems?: FlexAlignType;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  children: JSX.Element | string;
  className?: string;
  display?: 'block' | 'flex';
  flexDirection?: FlexDirectionType;
  justifyContent?: FlexJustifyType;
  wrap?: FlexWrapType;
}
