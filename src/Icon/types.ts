import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ColorsTypes } from '../shared/theme.types';

export type Size = '0.5x' | '1x' | '1.25x' | '1.5x' | '2x' | '2.5x' | '3x' | '4x' | '5x';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: ColorsTypes | 'inherit';
  icon: JSX.Element;
  size?: Size;
}

export interface FAIconProps extends Omit<FontAwesomeIconProps, 'size'> {
  icon: IconDefinition;
  size?: Size;
}
