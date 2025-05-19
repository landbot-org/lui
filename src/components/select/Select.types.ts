import { CSSProperties, ComponentProps } from 'react';
import { TextField } from '../text-field';

export interface SelectItemProps {
  label: string;
  value: string;
}

type TextSelectProps = Pick<
  ComponentProps<typeof TextField>,
  | 'endAdornment'
  | 'startAdornment'
  | 'placeholder'
  | 'description'
  | 'error'
  | 'helperText'
  | 'label'
  | 'variant'
  | 'styles'
>;

type BaseSelectProps = {
  className?: string;
  items: SelectItemProps[];
  onChange: (value: string) => void;
  value: string;
  noResults?: string;
  disabled?: boolean;
  ariaLabel?: string;
  styles?: {
    input?: CSSProperties;
    optionsContainer?: CSSProperties;
    insideContainer?: CSSProperties;
  };
} & TextSelectProps;

export type SelectProps =
  | (BaseSelectProps & {
      infiniteMode?: false;
      onIntersection?: never;
      hasMore?: never;
    })
  | (BaseSelectProps & {
      infiniteMode?: true;
      onIntersection?: () => void;
      hasMore?: boolean;
    });
