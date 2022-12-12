import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ColorsTypes } from '../shared/theme.types';

type Size = '0.5x' | '1x' | '1.25x' | '1.5x' | '2x' | '2.5x' | '3x' | '4x' | '5x';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  size: Size;
}

export interface FAIconProps extends Omit<FontAwesomeIconProps, 'size'> {
  color: ColorsTypes;
  icon: IconDefinition;
  size: Size;
}
