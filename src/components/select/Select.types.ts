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
  renderItem?: (item: SelectItemProps) => JSX.Element;
  closeOnClick?: boolean;
  mode?: 'single' | 'multiple';
  styles?: {
    input?: CSSProperties;
    optionsContainer?: CSSProperties;
    insideContainer?: CSSProperties;
  };
} & TextSelectProps;

type SingleModeSelectProps = {
  mode?: 'single';
  selectedValues?: never;
  valueText?: never;
};

type MultipleModeSelectProps = {
  mode?: 'multiple';
  selectedValues?: string[];
  valueText?: string;
};

type EnhancedSelectProps = (SingleModeSelectProps & BaseSelectProps) | (MultipleModeSelectProps & BaseSelectProps);

export type SelectProps =
  | (EnhancedSelectProps & {
      infiniteMode?: false;
      onIntersection?: never;
      hasMore?: never;
    })
  | (EnhancedSelectProps & {
      infiniteMode?: true;
      onIntersection?: () => void;
      hasMore?: boolean;
    });
