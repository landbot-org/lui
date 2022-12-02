import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ColorsTypes } from '../shared/theme.types';

export interface IconProps {
  icon: any;
  size: '1x' | '1.25x' | '1.5x' | '2x' | '2.5x' | '3x' | '4x' | '5x';
}

export interface FAIconProps extends Omit<FontAwesomeIconProps, 'size'> {
  color: ColorsTypes;
  icon: IconDefinition;
  size: '1x' | '1.25x' | '1.5x' | '2x' | '2.5x' | '3x' | '4x' | '5x';
}
