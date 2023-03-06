import { ColorsTypes } from '../shared/theme.types';

export type SizeTypes = 'small' | 'medium' | 'large';

export type VariantTypes = 'filled' | 'outlined';

export type TagProps = {
  label: string;
  textColor?: ColorsTypes;
  backgroundColor?: ColorsTypes;
  borderColor?: ColorsTypes;
  iconColor?: ColorsTypes;
  onClickEndIcon?: () => void;
  variant?: VariantTypes;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  size?: SizeTypes;
};
